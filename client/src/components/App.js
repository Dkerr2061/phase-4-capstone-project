import React, { useEffect, useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import NavBar from "./NavBar";

function App() {
  const [artists, setArtists] = useState([]);
  const [albums, setAlbums] = useState([]);
  const [reviews, setReviews] = useState([]);
  const [searchText, setSearchText] = useState("");

  const navigate = useNavigate();

  // Search Feature for NavBar
  const filteredArtists = artists.filter((artist) => {
    if (searchText === "") {
      return true;
    } else {
      return artist.name.toLowerCase().includes(searchText.toLowerCase());
    }
  });

  function onSearchText(event) {
    setSearchText(event.target.value);
  }

  // Aritst Data and Functions:
  useEffect(() => {
    fetch("/artists")
      .then((res) => res.json())
      .then((artistData) => setArtists(artistData));
  }, []);

  // Learn this syntax, this is the proper way of doing a post request. Research this and implement it in your new project.

  // async function addArtist(newArtist) {

  //   try {
  //     const response = await fetch("/artists", {
  //       method: "POST",
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //       body: JSON.stringify(newArtist),
  //     })
  //     const json = await response.json();
  //     console.log(json);
  //   } catch (err) {
  //     console.log(err)
  //   } finally {
  // do this no matter what happens
  //   }
  // }

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
  // End of Artist Data and Functions...

  // Album Data and Functions:

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
  // End of Album Data and Functions...

  // Reviews Data and Functions:

  useEffect(() => {
    fetch("/reviews")
      .then((res) => res.json())
      .then((reviewsData) => setReviews(reviewsData));
  }, []);

  function addReviews(newReviewData) {
    fetch("/reviews", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newReviewData),
    }).then((res) => {
      if (res.ok) {
        res.json().then((reviewData) => setReviews([...reviews, reviewData]));
      } else if (res.status === 400 || res.status === 404) {
        res.json().then((errorData) => {
          alert(`Error: ${errorData.error}`);
        });
      }
    });
  }

  function updateReview(id, reviewDataToUpdate) {
    fetch(`/reviews/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(reviewDataToUpdate),
    }).then((res) => {
      if (res.ok) {
        res.json().then((updatedReviewData) => {
          setReviews((reviews) =>
            reviews.map((review) => {
              if (review.id === updatedReviewData.id) {
                return updatedReviewData;
              } else {
                return review;
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

  function deleteReview(id) {
    fetch(`/reviews/${id}`, {
      method: "DELETE",
    }).then((res) => {
      if (res.ok) {
        setReviews((reviews) =>
          reviews.filter((review) => {
            return review.id !== id;
          })
        );
      } else if (res.status === 400 || res.status === 404) {
        res.json().then((errorData) => {
          alert(`Error: ${errorData.error}`);
        });
      }
    });
  }

  // End of Review Data and Functions...

  return (
    <div>
      <NavBar onSearchText={onSearchText} searchText={searchText} />
      <Outlet
        context={{
          artists: filteredArtists,
          addArtist: addArtist,
          deleteArtist,
          addAlbum,
          albums: albums,
          deleteAlbum: deleteAlbum,
          updateAlbum: updateAlbum,
          reviews: reviews,
          addReviews: addReviews,
          deleteReview: deleteReview,
          updateReview: updateReview,
        }}
      />
    </div>
  );
}

export default App;
