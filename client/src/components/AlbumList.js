import { useOutletContext } from "react-router-dom";
import Album from "../components/Album";

function AlbumList() {
  const { albums, deleteAlbum } = useOutletContext();
  // console.log(albums);

  const albumComponent = albums.map((album) => {
    return <Album key={album.id} album={album} deleteAlbum={deleteAlbum} />;
  });

  return (
    <table className="table-auto w-full overflow-x-auto">
      <thead>
        <tr>
          <th className="border px-4 py-2">Album ID</th>
          <th className="border px-4 py-2">Name</th>
          <th className="border px-4 py-2">Release Year</th>
          <th className="border px-4 py-2">Favorite Song</th>
        </tr>
      </thead>
      <tbody>{albumComponent}</tbody>
    </table>
  );
}

export default AlbumList;
