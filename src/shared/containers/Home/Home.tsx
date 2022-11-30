import React, { useState } from "react";

import { Home } from "Components/Home";

/*
  This container wraps the home component and contains all business logic.
  It will pass all the props the home component needs.

  Now consider how this pattern can be used to group business logic with the presentational component.
  Containers can also have props, however it's best to access any data from the store inside the container
*/

const HomeContainer = function () {
  const [text, setText] = useState(""); //This could also have been something that came from Redux for example

  const onChange = (e: any) => {
    const { value } = e.target;
    setText(value);
  };

  return <Home text={text} onChange={onChange} />;
};

export { HomeContainer as Home };
