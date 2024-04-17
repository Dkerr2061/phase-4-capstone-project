import { useState } from "react";
import { useOutletContext, useNavigate } from "react-router-dom";
import { Slide, Zoom } from "react-awesome-reveal";

function AddReview() {
  const [newReview, setNewReview] = useState({
    artist_id: "",
    album_id: "",
    rating: "",
    text: "",
  });
  const { addReviews } = useOutletContext();
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    const artistId = parseInt(newReview.artist_id);
    const albumId = parseInt(newReview.album_id);
    const newRating = parseInt(newReview.rating);

    addReviews({
      ...newReview,
      artist_id: artistId,
      album_id: albumId,
      rating: newRating,
    });

    setNewReview({
      artist_id: "",
      album_id: "",
      rating: "",
      text: "",
    });

    navigate("/reviews");
  }

  function updateFormData(e) {
    setNewReview({
      ...newReview,
      [e.target.name]: e.target.value,
    });
  }

  return (
    <div className="text-center">
      <Zoom delay={200}>
        <h2 className="text-teal-300 text-5xl mb-4">Add Review</h2>
      </Zoom>
      <Slide cascade delay={500}>
        <form onSubmit={handleSubmit} className="flex flex-col items-center">
          <input
            className="input input-bordered input-info w-full max-w-xs mb-4"
            type="text"
            name="artist_id"
            placeholder="Artist ID"
            onChange={updateFormData}
            value={newReview.artist_id}
            required
          />
          <input
            className="input input-bordered input-info w-full max-w-xs mb-4"
            type="text"
            name="album_id"
            placeholder="Album ID"
            onChange={updateFormData}
            value={newReview.album_id}
            required
          />
          <input
            className="input input-bordered input-info w-full max-w-xs mb-4"
            type="text"
            name="rating"
            placeholder="Rating"
            onChange={updateFormData}
            value={newReview.rating}
            required
          />
          <input
            className="input input-bordered input-info w-full max-w-xs mb-4"
            type="text"
            name="text"
            placeholder="Review Text"
            onChange={updateFormData}
            value={newReview.text}
            required
          />
          <Zoom delay={700}>
            <button
              type="submit"
              className="btn btn-outline btn-info hover:animate-pulse"
            >
              Add Review
            </button>
          </Zoom>
        </form>
      </Slide>
    </div>
  );
}

export default AddReview;
