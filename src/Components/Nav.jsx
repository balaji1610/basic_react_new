import React from "react";
import { Link } from "react-router-dom";
function Nav() {
  return (
    <div>
      <nav class="nav">
        <a class="nav-link active" aria-current="page">
          {" "}
          <Link to="/">
            <button type="button" class="btn btn-outline-primary">
              Home
            </button>
          </Link>
        </a>
        <a class="nav-link">
          {" "}
          <Link to="/FetchiAPi">
            {" "}
            <button type="button" class="btn btn-outline-primary">
              FetchiAPi
            </button>
          </Link>
        </a>
        <a class="nav-link">
          <Link to="/FetchiAPi2">
            {" "}
            <button type="button" class="btn btn-outline-primary">
              FetchiAPi23
            </button>
          </Link>{" "}
        </a>

        <a class="nav-link ">
          <Link to="/Form">
            {" "}
            <button type="button" class="btn btn-outline-primary">
              Form
            </button>
          </Link>
        </a>
        <a class="nav-link ">
          <Link to="/FunctionComponent">
            {" "}
            <button type="button" class="btn btn-outline-primary">
              FunctionComponent
            </button>
          </Link>
        </a>
        <a class="nav-link ">
          <Link to="/State">
            {" "}
            <button type="button" class="btn btn-outline-primary">
              States
            </button>
          </Link>
        </a>
        <a class="nav-link ">
          <Link to="/Hooks">
            {" "}
            <button type="button" class="btn btn-outline-primary">
              Hooks
            </button>
          </Link>
        </a>
        <a class="nav-link ">
          <Link to="/PropsChildren">
            {" "}
            <button type="button" class="btn btn-outline-primary">
              PropsChildren
            </button>
          </Link>
        </a>

        <a class="nav-link ">
          <Link to="/PropsChildren">
            {" "}
            <button type="button" class="btn btn-outline-primary">
              PropsChildren
            </button>
          </Link>
        </a>
        <a class="nav-link ">
          <Link to="/Competitiveprogramming">
            {" "}
            <button type="button" class="btn btn-outline-primary">
              Competitive Programming
            </button>
          </Link>
        </a>
        <a class="nav-link">
          <Link to="/kindOfTopices">
            {" "}
            <button type="button" class="btn btn-outline-primary">
              Kind Of Topices
            </button>
          </Link>{" "}
        </a>
        <a class="nav-link">
          <Link to="/firebase">
            {" "}
            <button type="button" class="btn btn-outline-primary">
              POC FIREBASE
            </button>
          </Link>{" "}
        </a>
        <div class="dropdown">
          <a
            class="btn btn-secondary dropdown-toggle"
            href="#"
            role="button"
            id="dropdownMenuLink"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            Dropdown link
          </a>

          <ul class="dropdown-menu" aria-labelledby="dropdownMenuLink">
            <li>
              <a class="dropdown-item" href="#">
                Action
              </a>
            </li>
            <li>
              <a class="dropdown-item" href="#">
                Another action
              </a>
            </li>
            <li>
              <a class="dropdown-item" href="#">
                Something else here
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default Nav;
