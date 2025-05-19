import { useDeleteComment, useLikeComment } from "@/hooks/useComment";
import { Comment } from "@/types/comment";
import { BiSolidLike, BiLike } from "react-icons/bi";

interface CommentItemProps {
  comment: Comment;
  postId: string;
}

const CommentItem = ({ comment, postId }: CommentItemProps) => {
  const {
    commentId,
    content,
    writer,
    updatedAt,
    likeCount,
    anonymousYN,
    children,
    likeYN,
  } = comment;
  const { mutate: deleteComment } = useDeleteComment(postId, commentId);
  const { mutate: likeComment } = useLikeComment(postId, commentId);

  return (
    <div className="p-4 border-t border-gray-200">
      <div className="flex items-center justify-between mb-2">
        <span className="font-semibold text-sm">
          {anonymousYN ? "익명" : writer.nickname}
        </span>

        <div className="flex gap-[14px]">
          <button className="text-[14px] cursor-pointer">수정</button>
          <button
            className="text-[14px] cursor-pointer"
            onClick={() => deleteComment()}
          >
            삭제
          </button>
        </div>
      </div>

      <p className="text-gray-800 break-words leading-relaxed mb-2">
        {content}
      </p>

      <div className="flex justify-between items-center">
        <button
          onClick={() => likeComment()}
          className="flex itemsc-center gap-[4px] text-xs text-gray-500 cursor-pointer"
        >
          {likeYN ? <BiSolidLike className="text-indigo-500" /> : <BiLike />}
          좋아요 {likeCount}개
        </button>

        <span className="text-xs text-gray-500">{updatedAt}</span>
      </div>

      {/* 답글 */}
      {children?.length > 0 && (
        <div className="ml-4 mt-4 border-l border-gray-300 pl-4">
          {children.map((child) => (
            <div key={child.commentId} className="mb-2">
              <div className="flex items-center justify-between mb-1">
                <span className="font-semibold text-sm">
                  {child.anonymousYN ? "익명" : child.writer.nickname}
                </span>

                <span className="text-xs text-gray-400">{child.updatedAt}</span>
              </div>

              <p className="text-gray-700 break-words mb-2">{child.content}</p>

              <div className="flex itemsc-center gap-[10px] text-xs text-gray-500">
                <BiSolidLike /> 좋아요 {likeCount}개
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default CommentItem;
