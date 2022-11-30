import React from "react";

import classes from "./home.module.css";

/*
  This comopnent is a presentational only.  No business logic.  All methods passed in as props
  Ie. the onChange method
  This component can now be tested easily, and re-used where ever you need it.
*/

interface Props {
  text: string;
  onChange: any;
}
export const Home = ({ text, onChange }: Props) => {
  return (
    <div className="container">
      <div className={classes.input}>
        <input type="text" onChange={onChange} />
      </div>
      <hr />
      <div className={classes.textAreaContainer}>
        <textarea className={classes.textarea} value={text} />
      </div>
    </div>
  );
};
