import { Comment } from "@/types/comment";
import { BiSolidLike } from "react-icons/bi";

interface CommentItemProps {
  comment: Comment;
}

const CommentItem = ({ comment }: CommentItemProps) => {
  const { content, writer, updatedAt, likeCount, anonymousYN, children } =
    comment;

  return (
    <div className="p-4 border-t border-gray-200">
      <div className="flex items-center justify-between mb-2">
        <span className="font-semibold text-sm">
          {anonymousYN ? "익명" : writer.nickname}
        </span>
        <span className="text-xs text-gray-500">{updatedAt}</span>
      </div>

      <p className="text-gray-800 break-words leading-relaxed mb-2">
        {content}
      </p>

      <div className="flex itemsc-center gap-[10px] text-xs text-gray-500">
        <BiSolidLike /> 좋아요 {likeCount}개
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
