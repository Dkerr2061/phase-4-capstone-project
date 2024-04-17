import { useOutletContext } from "react-router-dom";
import Reviews from "./Reviews";

function ReviewList() {
  const { reviews, deleteReview } = useOutletContext();

  const reviewComponent = reviews.map((review) => {
    return (
      <Reviews key={review.id} review={review} deleteReview={deleteReview} />
    );
  });

  return (
    <div className="flex flex-wrap justify-center items-center bg-gradient-to-r from-cyan-500 to-blue-500">
      <div>{reviewComponent}</div>
    </div>
  );
}

export default ReviewList;
