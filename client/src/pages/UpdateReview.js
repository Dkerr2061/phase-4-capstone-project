import { useState, useEffect } from "react";
import { useParams, useOutletContext, useNavigate } from "react-router-dom";

function UpdateReview() {
  const [review, setReview] = useState(null);
  const [updatedReviewData, setUpdatedReviewData] = useState({
    artist_id: "",
    album_id: "",
    rating: "",
    text: "",
  });
  const { id } = useParams();
  const navigate = useNavigate();
  const { updateReview } = useOutletContext();

  useEffect(() => {
    fetch(`/reviews/${id}`).then((res) => {
      if (res.ok) {
        res.json().then((reviewData) => {
          setReview(reviewData);
          setUpdatedReviewData({
            artist_id: reviewData.artist_id,
            album_id: reviewData.album_id,
            rating: reviewData.rating,
            text: reviewData.text,
          });
        });
      } else if (res.status === 404) {
        res.json().then((errorData) => alert(`Error: ${errorData.error}`));
      } else {
        res.json().then(() => alert("Error: Something went wrong."));
      }
    });
  }, [id]);

  function handleSubmit(event) {
    event.preventDefault();
    const artistID = parseInt(updatedReviewData.artist_id);
    const albumID = parseInt(updatedReviewData.album_id);
    const newRating = parseInt(updatedReviewData.rating);
    updateReview(review.id, {
      ...updatedReviewData,
      artist_id: artistID,
      album_id: albumID,
      rating: newRating,
    });
    setReview({ ...review, ...updatedReviewData });
    navigate("/reviews");
  }

  function handleOnChange(event) {
    setUpdatedReviewData({
      ...updatedReviewData,
      [event.target.name]: event.target.value,
    });
  }

  return (
    <div className="text-center">
      <h2 className="text-teal-300 text-5xl mb-4">Update Review</h2>
      <form onSubmit={handleSubmit} className="flex flex-col items-center">
        <input
          className="input input-bordered input-info w-full max-w-xs mb-4"
          type="text"
          name="artist_id"
          placeholder="Artist id"
          onChange={handleOnChange}
          value={updatedReviewData.artist_id}
          required
        />
        <input
          className="input input-bordered input-info w-full max-w-xs mb-4"
          type="text"
          name="album_id"
          placeholder="Album id"
          onChange={handleOnChange}
          value={updatedReviewData.album_id}
          required
        />
        <input
          className="input input-bordered input-info w-full max-w-xs mb-4"
          type="text"
          name="rating"
          placeholder="Rating"
          onChange={handleOnChange}
          value={updatedReviewData.rating}
          required
        />
        <input
          className="input input-bordered input-info w-full max-w-xs mb-4"
          type="text"
          name="text"
          placeholder="Review Text"
          onChange={handleOnChange}
          value={updatedReviewData.text}
          required
        />
        <button type="submit" className="btn btn-outline btn-info">
          Update Review
        </button>
      </form>
    </div>
  );
}

export default UpdateReview;
