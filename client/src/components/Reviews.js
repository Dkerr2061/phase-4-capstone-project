import { useNavigate } from "react-router-dom";
import { Zoom } from "react-awesome-reveal";

function Reviews({ review, deleteReview }) {
  const { id, artist, album, artist_id, album_id, rating, text } = review;
  const navigate = useNavigate();

  function navigateToEdit() {
    navigate(`/reviews/${id}`);
  }

  function handleDelete(id) {
    deleteReview(review.id);
  }

  return (
    <div className="card lg:card-side bg-base-100 shadow-xl m-4">
      <Zoom>
        <figure className="px-10 pt-10">
          <img
            src={artist.image}
            alt={artist.name}
            className="rounded-xl w-52 h-52 py-1.5"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">
            {album.name} by: {artist.name}
          </h2>
          <h6 className="mb-2 text-xl italic tracking-tight text-gray-900 dark:text-white">
            Rating: {rating} | Aritst ID: {artist_id} | Album ID: {album_id}
          </h6>
          <p>{text}</p>
          <Zoom delay={200}>
            <div className="card-actions justify-end">
              <button
                className="btn btn-primary hover:animate-pulse"
                onClick={navigateToEdit}
              >
                Edit Review
              </button>
              <button
                className="btn btn-primary hover:animate-ping"
                onClick={handleDelete}
              >
                Delete Review
              </button>
            </div>
          </Zoom>
        </div>
      </Zoom>
    </div>
  );
}

export default Reviews;
