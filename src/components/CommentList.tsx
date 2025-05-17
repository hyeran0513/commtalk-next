import { Comment } from "@/types/comment";
import CommentItem from "./CommentItem";
import { useComment } from "@/hooks/useComment";

interface CommentListProps {
  postId: string;
}

const CommentList = ({ postId }: CommentListProps) => {
  const { data: comments, isLoading, error } = useComment(postId);

  if (isLoading) return <div>로딩 중..</div>;
  if (error) return <div>에러 {error.message}</div>;

  return (
    <div>
      {comments?.map((comment: Comment) => (
        <CommentItem key={comment.commentId} comment={comment} />
      ))}
    </div>
  );
};

export default CommentList;
