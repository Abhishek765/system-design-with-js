import React from "react";
import withLoader from "./withLoader";

const DogImages = (props) => {
  return props.data.message.map((dog, index) => (
    <img src={dog} alt="Dog" key={index} />
  ));
};

export default withLoader({
  Element: DogImages,
  url: "https://dog.ceo/api/breed/labrador/images/random/6",
});
