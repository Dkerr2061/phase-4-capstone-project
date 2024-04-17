import { useState, useEffect } from "react";
import { useParams, useOutletContext, useNavigate } from "react-router-dom";

function UpdateAlbum() {
  const [album, setAlbum] = useState(null);
  const [albumFormData, setAlbumFormData] = useState({
    artist_name: "",
    name: "",
    year: "",
    song: "",
  });
  const { id } = useParams();
  const { updateAlbum } = useOutletContext();
  const navigate = useNavigate();

  useEffect(() => {
    fetch(`/albums/${id}`).then((res) => {
      if (res.ok) {
        res.json().then((albumData) => {
          setAlbum(albumData);
          setAlbumFormData({
            artist_name: albumData.artist_name,
            name: albumData.name,
            year: albumData.year,
            song: albumData.song,
          });
        });
      } else if (res.status === 404) {
        res.json().then((errorData) => alert(`Error: ${errorData.error}`));
      } else {
        res.json().then(() => alert("Error: Something went wrong."));
      }
    });
  }, []);

  function handleSubmit(e) {
    e.preventDefault();
    updateAlbum(album.id, albumFormData);
    setAlbum({ ...album, ...albumFormData });
    navigate("/albums");
  }

  function updateFormData(event) {
    setAlbumFormData({
      ...albumFormData,
      [event.target.name]: event.target.value,
    });
  }

  return (
    <div className="text-center">
      <h2 className="text-teal-300 text-5xl mb-4">Update Album</h2>
      <form onSubmit={handleSubmit} className="flex flex-col items-center">
        <input
          className="input input-bordered input-info w-full max-w-xs mb-4"
          type="text"
          name="artist_name"
          placeholder="Artist name"
          onChange={updateFormData}
          value={albumFormData.artist_name}
          required
        />
        <input
          className="input input-bordered input-info w-full max-w-xs mb-4"
          type="text"
          name="name"
          placeholder="Album name"
          onChange={updateFormData}
          value={albumFormData.name}
          required
        />
        <input
          className="input input-bordered input-info w-full max-w-xs mb-4"
          type="text"
          name="year"
          placeholder="Album Release Year"
          onChange={updateFormData}
          value={albumFormData.year}
          required
        />
        <input
          className="input input-bordered input-info w-full max-w-xs mb-4"
          type="text"
          name="song"
          placeholder="Favorite Song"
          onChange={updateFormData}
          value={albumFormData.song}
          required
        />
        <button
          type="submit"
          className="btn btn-outline btn-info hover:animate-pulse"
        >
          Update Album
        </button>
      </form>
    </div>
  );
}

export default UpdateAlbum;
