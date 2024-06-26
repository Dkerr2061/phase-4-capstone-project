import { useState } from "react";
import { useOutletContext, useNavigate } from "react-router-dom";
import { Slide, Zoom } from "react-awesome-reveal";

function AddArtist() {
  const { addArtist } = useOutletContext();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    image: "",
  });

  function updateFormData(event) {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  }

  function handleSubmit(event) {
    event.preventDefault();

    addArtist(formData);

    setFormData({
      name: "",
      image: "",
    });
    navigate("/");
  }

  return (
    <div className="text-center">
      <Zoom delay={200}>
        <h2 className="text-teal-300 text-5xl mb-4">Add Artist</h2>
      </Zoom>
      <Slide cascade delay={500}>
        <form onSubmit={handleSubmit} className="flex flex-col items-center">
          <input
            className="input input-bordered input-info w-full max-w-xs mb-4"
            type="text"
            name="name"
            placeholder="Artist name"
            onChange={updateFormData}
            value={formData.name}
            required
          />

          <input
            className="input input-bordered input-info w-full max-w-xs mb-4"
            type="text"
            name="image"
            placeholder="Artist image URL"
            onChange={updateFormData}
            value={formData.image}
            required
          />

          <Zoom delay={700}>
            <button
              type="submit"
              className="btn btn-outline btn-info hover:animate-pulse"
            >
              Add Artist
            </button>
          </Zoom>
        </form>
      </Slide>
    </div>
  );
}

export default AddArtist;
