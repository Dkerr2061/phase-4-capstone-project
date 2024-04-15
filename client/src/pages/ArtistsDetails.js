import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

function ArtistsDetails() {
  const [artists, setArtists] = useState(null);
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    fetch(`/artists/${id}`)
      .then((res) => res.json())
      .then((artistData) => setArtists(artistData));
  }, [id]);

  // function navigateToAddAlbum() {
  //   navigate("/add_album");
  // }

  return (
    <div>
      <div className="flex justify-center items-center">
        {artists ? (
          <>
            <div className="card w-96 glass shadow-xl">
              <figure className="px-10 pt-10">
                <img
                  src={artists.image}
                  alt={artists.name}
                  className="rounded-xl"
                />
              </figure>
              <div className="card-body items-center text-center">
                <h2 className="card-title">{artists.name}</h2>
                <div className="card-actions">
                  <button className="btn btn-primary">Add Review</button>
                </div>
              </div>
            </div>
          </>
        ) : null}
      </div>
    </div>
  );
}

export default ArtistsDetails;
