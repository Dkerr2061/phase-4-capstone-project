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
    <div className="flex justify-center items-center my-5">
      <div>{reviewComponent}</div>
    </div>
  );
}

export default ReviewList;
