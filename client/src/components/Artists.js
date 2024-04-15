function Artists({ artist, deleteArtist }) {
  function handleDelete() {
    deleteArtist(artist.id);
  }

  return (
    <div className="card w-1/3 glass shadow-xl rounded-lg m-4">
      <figure className="px-10 pt-10">
        <img
          src={artist.image}
          alt={artist.name}
          className="rounded-xl w-52 h-52"
        />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title">{artist.name}</h2>
        <div className="card-actions">
          <button className="btn btn-primary">Artist Info</button>
          <button className="btn btn-primary" onClick={handleDelete}>
            Delete Artist
          </button>
        </div>
      </div>
    </div>
  );
}

export default Artists;
