import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

function ArtistsDetails() {
  const [artists, setArtists] = useState(null);
  const { id } = useParams();
  const navigate = useNavigate();

  function navigateToWriteReviews() {
    navigate("/add_review");
  }

  useEffect(() => {
    fetch(`/artists/${id}`)
      .then((res) => res.json())
      .then((artistData) => setArtists(artistData));
  }, [id]);

  return (
    <div className="flex justify-center items-center mt-6">
      {artists ? (
        <>
          <div className="card w-96 shadow-xl bg-gradient-to-r from-violet-500 to-fuchsia-500">
            <figure className="px-10 pt-10">
              <img
                src={artists.image}
                alt={artists.name}
                className="rounded-xl"
              />
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title">{artists.name}</h2>
              <h3> Artist Id: {artists.id}</h3>
              <div className="card-actions">
                <button
                  className="btn btn-primary hover:animate-pulse"
                  onClick={navigateToWriteReviews}
                >
                  Add Review
                </button>
              </div>
            </div>
          </div>
        </>
      ) : null}
    </div>
  );
}

export default ArtistsDetails;
