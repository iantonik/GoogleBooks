import React from "react";

function Input(props) {
  return (
    <div className="input-group input-group-lg">
      <input className="form-control form-control-lg" type="text" {...props} />
    </div>
  );
}

export default Input;
