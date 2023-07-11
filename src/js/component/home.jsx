import React from "react";

//include images into your bundle
import Navigation from "./navbar.jsx";
import Jumbotron from "./jumbotron.jsx";
import Cards from "./cards.jsx";
import Footer from "./footer.jsx";

//create your first component

const Home = () => {
  return (
    <div className="text-center">
      <Navigation />
      <Jumbotron />
      <Cards />
      <Footer />
    </div>
  );
};

export default Home;
