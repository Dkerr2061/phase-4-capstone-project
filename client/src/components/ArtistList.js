import { useOutletContext } from "react-router-dom";
import Artists from "./Artists";

function ArtistList() {
  const { artists, deleteArtist } = useOutletContext();

  const artistsComponents = artists.map((artist) => {
    return (
      <Artists key={artist.id} artist={artist} deleteArtist={deleteArtist} />
    );
  });

  return (
    <div className="flex flex-wrap justify-center bg-gradient-to-r from-cyan-500 to-blue-500">
      {artistsComponents}
    </div>
  );
}

export default ArtistList;
