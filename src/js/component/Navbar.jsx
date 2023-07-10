import React from "react";

export const Navbar = () => {
  return (
    <>
      <nav class="navbar navbar-expand-lg bg-body-Secondary">
        <div class="container">
          <a class="navbar-brand" href="#">
            Start Bootstrap
          </a>
          <a class="nav-link active" aria-current="page" href="#">
            Home
          </a>

          <a class="nav-link" href="#">
            About
          </a>

          <a class="nav-link" href="#">
            Services
          </a>

          <a class="nav-link disabled">Contact</a>
        </div>
      </nav>
    </>
  );
};
