import React, { useEffect, useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import NavBar from "./NavBar";

function App() {
  const [artists, setArtists] = useState([]);
  const [albums, setAlbums] = useState([]);

  const navigate = useNavigate();

  // Aritst data and functions
  useEffect(() => {
    fetch("/artists")
      .then((res) => res.json())
      .then((artistData) => setArtists(artistData));
  }, []);

  function addArtist(newArtist) {
    fetch("/artists", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newArtist),
    }).then((res) => {
      if (res.ok) {
        res.json().then((newArtistData) => {
          setArtists([...artists, newArtistData]);
          navigate("/");
        });
      } else if (res.status === 400) {
        res.json().then((errorData) => alert(`Error: ${errorData}`));
      } else {
        res.json().then(() => alert("Error: Something went wrong."));
      }
    });
  }

  function deleteArtist(id) {
    fetch(`/artists/${id}`, {
      method: "DELETE",
    }).then((res) => {
      if (res.ok) {
        setArtists((artists) =>
          artists.filter((artist) => {
            return artist.id !== id;
          })
        );
      } else if (res.status === 404) {
        res.json().then((errorData) => alert(`Error: ${errorData}`));
      }
    });
  }

  // Album data and functions

  useEffect(() => {
    fetch("/albums")
      .then((res) => res.json())
      .then((albumData) => setAlbums(albumData));
  }, []);
  // Ask Why this is stuck in an infinite loop whenever you pass albums in the dependancy array. It started happening when I added the update function

  function addAlbum(newAlbum) {
    fetch("/albums", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newAlbum),
    }).then((res) => {
      if (res.ok) {
        res.json().then((newAlbumData) => {
          setAlbums([...albums, newAlbumData]);
        });
      } else if (res.status === 400) {
        res.json().then((errorData) => alert(`Error: ${errorData}`));
      } else {
        res.json().then(() => alert("Error: Something went wrong."));
      }
    });
  }

  function updateAlbum(id, albumDataToUpdate) {
    fetch(`/albums/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(albumDataToUpdate),
    }).then((res) => {
      if (res.ok) {
        res.json().then((updatedAlbumData) => {
          setAlbums((albums) =>
            albums.map((album) => {
              if (album.id === updatedAlbumData.id) {
                return updatedAlbumData;
              } else {
                return album;
              }
            })
          );
        });
      } else if (res.status === 400 || res.status === 404) {
        res.json().then((errorData) => {
          alert(`Error: ${errorData.error}`);
        });
      } else {
        res.json().then(() => {
          alert("Error: Something went wrong.");
        });
      }
    });
  }

  function deleteAlbum(id) {
    fetch(`/albums/${id}`, {
      method: "DELETE",
    }).then((res) => {
      if (res.ok) {
        setAlbums((albums) =>
          albums.filter((album) => {
            return album.id !== id;
          })
        );
      } else if (res.status === 404) {
        res.json().then((errorData) => alert(`Error: ${errorData}`));
      }
    });
  }

  return (
    <div>
      <NavBar />
      <Outlet
        context={{
          artists: artists,
          addArtist: addArtist,
          deleteArtist: deleteArtist,
          addAlbum: addAlbum,
          albums: albums,
          deleteAlbum: deleteAlbum,
          updateAlbum: updateAlbum,
        }}
      />
    </div>
  );
}

export default App;
