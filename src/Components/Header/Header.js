import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Context/UserContext";

const Header = () => {
  const { user, logOut } = useContext(AuthContext);
  console.log(user);

  const handleSignOut = () => {
    logOut()
      .then(() => {})
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div>
      <div className="navbar bg-primary text-primary-content">
        <Link to="/" className="btn btn-ghost normal-case text-xl">
          Awesome Auth
        </Link>
        <Link className="btn btn-ghost normal-case text-xl" to="/">
          Home
        </Link>
        <Link className="btn btn-ghost normal-case text-xl" to="/login">
          Login
        </Link>
        <Link className="btn btn-ghost normal-case text-xl" to="/register">
          Register
        </Link>
        <Link className="btn btn-ghost normal-case text-xl" to="/order">
          Orders
        </Link>
        {user?.email && <p> Welcome , {user.email}</p>}

        {user?.email ? (
          <button
            onClick={handleSignOut}
            className="mx-14 btn btn-outline btn-warning"
          >
            Sign Out
          </button>
        ) : (
          <Link to="/login">
            <button className="mx-14 btn btn-outline btn-warning">Login</button>
          </Link>
        )}
      </div>
    </div>
  );
};

export default Header;
