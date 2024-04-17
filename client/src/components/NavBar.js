import { NavLink, useLocation } from "react-router-dom";

function NavBar({ onSearchText, searchText }) {
  const location = useLocation();

  return (
    <div className="navbar bg-gradient-to-r from-sky-500 to-indigo-500">
      <div className="navbar-start">
        <div className="dropdown">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost btn-circle hover:animate-bounce"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h7"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <NavLink to="/">Home Page</NavLink>
            </li>
            <li>
              <NavLink to="/albums">View Albums</NavLink>
            </li>
            <li>
              <NavLink to="/add_artist">Add Artist</NavLink>
            </li>
            <li>
              <NavLink to="/add_album">Add Album</NavLink>
            </li>
            <li>
              <NavLink to="/reviews">View Reviews</NavLink>
            </li>
          </ul>
        </div>
      </div>
      <div className="navbar-center">
        <button className="btn btn-ghost text-4xl hover:animate-pulse">
          <NavLink to="/">🎧 Looney Tunes 🎧</NavLink>
        </button>
      </div>
      <div className="navbar-end">
        {location.pathname === "/" && (
          <div className="form-control">
            <input
              type="text"
              placeholder="Search"
              className="input input-bordered w-24 md:w-auto"
              onChange={onSearchText}
              value={searchText}
            />
          </div>
        )}
      </div>
    </div>
  );
}

export default NavBar;
