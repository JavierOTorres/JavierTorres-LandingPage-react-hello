import React from "react";

import imgDefault from "../../img/rigo-baby.jpg";
//create your first component

const ModelCard = (props) => {
  return (
    <div className="col-sm-6 col-md-4 col-lg-3 d-flex justify-content-center">
      <div className="card" style={{ width: "19rem", height: "30rem" }}>
        <img src={imgDefault} className="card-img-top" alt="..."></img>
        <div className="card-body">
          <h5 className="card-title my-2">{props.tittle}</h5>
          <p className="card-text my-3">{props.text}</p>
          <a href="#" className="btn btn-primary mt-5">
            Find Out More!
          </a>
        </div>
      </div>
    </div>
  );
};

const Cards = () => {
  return (
    <div className="container">
      <div className="row d-flex flex-wrap justify-content-center gy-3 my-3">
        <ModelCard
          tittle="My 1st Card"
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque est elit, ullamcorper at cursus luctus, suscipit ut ex."
        />
        <ModelCard
          tittle="My 2nd Card"
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque est elit, ullamcorper at cursus luctus, suscipit ut ex."
        />
        <ModelCard
          tittle="My 3rd Card"
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque est elit, ullamcorper at cursus luctus, suscipit ut ex."
        />
        <ModelCard
          tittle="My 4th Card"
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque est elit, ullamcorper at cursus luctus, suscipit ut ex."
        />
      </div>
    </div>
  );
};

export default Cards;
