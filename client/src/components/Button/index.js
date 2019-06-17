import React from "react";

function Button({ type = "default", className, children, onClick }) {
  return (
    <button onClick={onClick} className={["btn mt-2 mb-2", `btn-${type}`, className ].join(" ")}>
      {children}
    </button>
  );
}

export default Button;
