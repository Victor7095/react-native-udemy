import React from "react";
import CentralText from "../components/CentralText";

export default (props) => {
  return (
    <CentralText backgroundColor="#EEEEFF" textColor="#00CCCC">
      Screen C: {props.route.params.num}
    </CentralText>
  );
};
