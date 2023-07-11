import React from "react";

const Jumbotron = () => {
  return (
    <div className="container px-5 pb-4 pt-3 mt-4 rounded-lg text-start m-auto bg-light lh-2">
      <h1 className="Display-5 fw-bold mb-0"> A WARM WELCOME!</h1>
      <p className="col-md-12 fs-4 p-2" style={{ marginBottom: 0 }}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque est
        elit, ullamcorper at cursus luctus, suscipit ut ex. Nulla bibendum
        malesuada porttitor. Cras dictum nisl sed dui ultrices, sed mattis metus
        suscipit. Nunc sit amet justo at erat venenatis vehicula consectetur at
        mi. Cras metus nisl, aliquet non pellentesque volutpat, accumsan ac
        libero. Ut semper facilisis eros at tincidunt. Donec efficitur porta ex
        posuere rutrum.
      </p>
      <button class="btn btn-primary btn-lg" type="button">
        Call to action!
      </button>
    </div>
  );
};
