import React from "react";
import App from "./components/App";
import "./index.css";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ErrorPage from "./components/ErrorPage";
import ArtistList from "./components/ArtistList";
import AddArtist from "./pages/AddArtist";
import ArtistsDetails from "./pages/ArtistsDetails";
import AddAlbum from "./pages/AddAlbum";
import AlbumList from "./components/AlbumList";
import UpdateAlbum from "./pages/UpdateAlbum";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <ArtistList />,
      },
      {
        path: "/add_artist",
        element: <AddArtist />,
      },
      {
        path: "/artists/:id",
        element: <ArtistsDetails />,
      },
      {
        path: "/albums",
        element: <AlbumList />,
      },
      {
        path: "/add_album",
        element: <AddAlbum />,
      },
      {
        path: "/albums/:id",
        element: <UpdateAlbum />,
      },
    ],
  },
]);

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<RouterProvider router={router} />);
