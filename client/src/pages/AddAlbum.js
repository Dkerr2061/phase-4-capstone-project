import { useState } from "react";
import { useOutletContext, useNavigate } from "react-router-dom";

function AddAlbum() {
  const [albumFormData, setAlbumFormData] = useState({
    name: "",
    year: "",
    song: "",
  });

  const { addAlbum } = useOutletContext();
  const navigate = useNavigate();

  function handleSubmit(event) {
    event.preventDefault();
    const releaseYear = parseInt(albumFormData.year);

    addAlbum({ ...albumFormData, year: releaseYear });

    setAlbumFormData({
      name: "",
      year: "",
      song: "",
    });
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
      <h2 className="text-teal-300 text-5xl mb-4">Add Album</h2>
      <form onSubmit={handleSubmit} className="flex flex-col items-center">
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
        <button type="submit" className="btn btn-outline btn-info">
          Add Album
        </button>
      </form>
    </div>
  );
}

export default AddAlbum;
