import { useState, useEffect } from "react";
import { useOutletContext, useNavigate } from "react-router-dom";

function AddAlbum() {
  const [albumFormData, setAlbumFormData] = useState({
    name: "",
    year: 0,
    song: "",
  });

  return <h1>New Albums go here</h1>;
}

export default AddAlbum;
