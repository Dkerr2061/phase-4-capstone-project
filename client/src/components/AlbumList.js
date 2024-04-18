import { useOutletContext } from "react-router-dom";
import { Zoom } from "react-awesome-reveal";
import Album from "../components/Album";

function AlbumList() {
  const { albums, deleteAlbum } = useOutletContext();

  const albumComponent = albums.map((album) => {
    return <Album key={album.id} album={album} deleteAlbum={deleteAlbum} />;
  });

  return (
    <Zoom cascade delay={500}>
      <table className="table-auto w-full overflow-x-auto">
        <thead>
          <tr>
            <th className="border px-4 py-2 bg-gradient-to-r from-violet-500 to-fuchsia-500">
              Album ID
            </th>
            <th className="border px-4 py-2 bg-gradient-to-r from-violet-500 to-fuchsia-500">
              Artist Name
            </th>
            <th className="border px-4 py-2 bg-gradient-to-r from-violet-500 to-fuchsia-500">
              Name
            </th>
            <th className="border px-4 py-2 bg-gradient-to-r from-violet-500 to-fuchsia-500">
              Release Year
            </th>
            <th className="border px-4 py-2 bg-gradient-to-r from-violet-500 to-fuchsia-500">
              Favorite Song
            </th>
          </tr>
        </thead>
        <tbody>{albumComponent}</tbody>
      </table>
    </Zoom>
  );
}

export default AlbumList;
