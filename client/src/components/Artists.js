import { useNavigate } from "react-router-dom";
import { Zoom } from "react-awesome-reveal";

function Artists({ artist, deleteArtist }) {
  const { id } = artist;
  const navigate = useNavigate();

  function navigateToDetails() {
    navigate(`/artists/${id}`);
  }

  function handleDelete() {
    deleteArtist(artist.id);
  }

  return (
    <div className="card w-1/3 glass shadow-xl rounded-lg m-4">
      <Zoom>
        <figure className="px-10 pt-10">
          <img
            src={artist.image}
            alt={artist.name}
            className="rounded-xl w-52 h-52"
          />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">{artist.name}</h2>
          <Zoom delay={100}>
            <div className="card-actions">
              <button
                className="btn btn-primary hover:animate-pulse"
                onClick={navigateToDetails}
              >
                Artist Info
              </button>
              <button
                className="btn btn-primary hover:animate-ping"
                onClick={handleDelete}
              >
                Delete Artist
              </button>
            </div>
          </Zoom>
        </div>
      </Zoom>
    </div>
  );
}

export default Artists;
