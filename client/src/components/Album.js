import { useNavigate } from "react-router-dom";

function Album({ album, deleteAlbum }) {
  const { id, artist_name, name, year, song } = album;
  const navigate = useNavigate();

  function navigateToUpdateAlbum() {
    navigate(`/albums/${id}`);
  }

  function handleDeleteAlbum() {
    deleteAlbum(id);
  }

  return (
    <tr>
      <th className="border px-4 py-2 text-cyan-400">{id}</th>
      <th className="border px-4 py-2 text-yellow-400">{artist_name}</th>
      <td className="border px-4 py-2 text-yellow-400">{name}</td>
      <td className="border px-4 py-2 text-yellow-400">{year}</td>
      <td className="border px-4 py-2 text-yellow-400">{song}</td>
      <td>
        <button
          type="submit"
          className="btn btn-outline btn-info hover:animate-pulse"
          onClick={navigateToUpdateAlbum}
        >
          Update Album
        </button>
      </td>
      <td>
        <button
          type="submit"
          className="btn btn-outline btn-info hover:animate-pulse"
          onClick={handleDeleteAlbum}
        >
          Delete Album
        </button>
      </td>
    </tr>
  );
}

export default Album;
