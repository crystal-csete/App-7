/** @format */

import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  solid,
  regular,
  brands,
} from "@fortawesome/fontawesome-svg-core/import.macro";

const Landing = () => {
  return (
    <div className='landing-page'>
      <h2 className='landing-title'>This is the Landing Page.</h2>

      <div className='questions-container'>
        <div className='questions'>
          <ul>
            <li>
              Are you here?{" "}
              <FontAwesomeIcon icon={solid("person-circle-question")} />{" "}
            </li>
            <li>
              Is it over there?{" "}
              <FontAwesomeIcon icon={solid("location-crosshairs")} />{" "}
            </li>
            <li>
              What is next? <FontAwesomeIcon icon={solid("shoe-prints")} />{" "}
            </li>
            <li>
              Are you done? <FontAwesomeIcon icon={solid("clipboard-check")} />{" "}
            </li>
          </ul>
        </div>
        <div className='question-rightside'>
          <h3>dkjflskj</h3>
        </div>
      </div>
      <div className='detective-icon'>
        <FontAwesomeIcon icon={solid("user-secret")} />
      </div>
      <div className='text-div'>
        <h2 className='text-div-title'>Let's think about that...</h2>
        <p>
          What does that all mean to you? Hmmm. Well, things, probably. Lot's of
          things. Lol.
        </p>
      </div>
    </div>
  );
};

export default Landing;
