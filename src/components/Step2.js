import React from "react";
import { Step2Wrapper } from "./styles";

const Step2 = props => (
  <Step2Wrapper>
  
    <div
      style={{
        backgroundColor: props.optionSelected === "eye" && "lightgrey"
      }}
      className="box"
    >
      <h2>Option 👁‍🗨</h2>
      <p>lorem impsum dor olor eset</p>
      <button onClick={() => props.action("eye")}>
        {/* Control select and deselect of button / change select button text */}
        {props.optionSelected === "eye" ? "Selected" : "I PICK THIS!"}
      </button>
    </div>
    <div
      style={{
        backgroundColor: props.optionSelected === "statue" && "lightgrey"
      }}
      className="box"
    >
      <h2>Option 🗿</h2>
      <p>lorem impsum dor olor eset</p>
      <button onClick={() => props.action("statue")}>
        {/* Control select and deselect of button / change select button text */}
        {props.optionSelected === "statue" ? "Selected" : "I PICK THIS!"}
      </button>
    </div>
    <div
      style={{
        backgroundColor: props.optionSelected === "vampire" && "lightgrey"
      }}
      className="box"
    >
      <h2>Option 🧛‍</h2>
      <p>lorem impsum dor olor eset</p>
      <button onClick={() => props.action("vampire")}>
        {/* Control select and deselect of button / change select button text */}
        {props.optionSelected === "vampire" ? "Selected" : "I PICK THIS!"}
      </button>
    </div>
    <div
      style={{
        backgroundColor: props.optionSelected === "family" && "lightgrey"
      }}
      className="box"
    >
      <h2>Option 👩‍👩‍👧‍👧</h2>
      <p>lorem impsum dor olor eset</p>
      <button onClick={() => props.action("family")}>
        {/* Control select and deselect of button / change select button text */}
        {props.optionSelected === "family" ? "Selected" : "I PICK THIS!"}
      </button>
    </div>
  </Step2Wrapper>
);

export default Step2;
