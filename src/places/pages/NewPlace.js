import React from "react";

import Input from "../../shared/components/FormElements/Input";
import { VALIDATOR_REQUIRE } from "../../shared/components/util/validators";

import "./NewPlace.css";

const NewPlace = () => {
  return (
    <form className="place-form">
      <Input
        label="Title"
        element="input"
        type="text"
        validators={[VALIDATOR_REQUIRE]}
        errorText="Please enter a valid title"
      ></Input>
    </form>
  );
};

export default NewPlace;
