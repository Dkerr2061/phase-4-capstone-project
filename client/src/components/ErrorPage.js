import { useNavigate } from "react-router-dom";

function ErrorPage() {
  const navigate = useNavigate();

  function handleError() {
    navigate("/");
  }
  return (
    <div className="m-12 items-center justify-center text-center text-6xl">
      <h1>Oops, something went wrong.</h1>
      <button onClick={handleError} className="btn glass">
        Click here to return to the Home page.
      </button>
    </div>
  );
}

export default ErrorPage;
