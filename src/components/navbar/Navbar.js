import "./navbar.css";

const Navbar = () => {
  return (
    <>
      <nav className="nav__container">
        <ul className="nav__lists">
          <li>
            <div className="nav__backgroundImg"></div>
          </li>

          <li>
            <div>Todos</div>
          </li>
          <li>
            <>Notes</>
          </li>
          <li>
            <div>Signup</div>
          </li>
          <li>
            <div>Login</div>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
