import { useNavigate } from "react-router-dom";

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
    <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      <a>
        <img className="rounded-t-lg" src={artist.image} alt={artist.name} />
      </a>
      <div className="p-5">
        <a>
          <h5 className="mb-2 text-4xl font-bold tracking-tight text-gray-900 dark:text-white">
            {album.name} by: {artist.name}
          </h5>
        </a>
        <a>
          <h6 className="mb-2 text-xl italic tracking-tight text-gray-900 dark:text-white">
            Rating: {rating} | Aritst ID: {artist_id} | Album ID: {album_id}
          </h6>
        </a>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
          {text}
        </p>
        <div className="flex space-x-3 justify-center">
          <button className="btn btn-primary" onClick={navigateToEdit}>
            Edit Review
          </button>
          <button className="btn btn-primary" onClick={handleDelete}>
            Delete Review
          </button>
        </div>
      </div>
    </div>
  );
}

export default Reviews;
