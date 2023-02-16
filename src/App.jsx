import React, { useState } from "react";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";

function App() {
  let [count, setCount] = useState(0);
  function inc() {
    setCount((count = count + 1));
  }
  function dec() {
    if (count > 0) {
      setCount((count = count - 1));
    } else {
      alert("reached limit 0");
    }
  }
  return (
    <div className="main">
      <h2>
        React Counter App <br /> React Project #2
      </h2>
      <h1>{count}</h1>
      <div className="btns">
        <Tooltip title="Add" arrow>
          <Button onClick={inc} variant="outlined">
            <AddCircleOutlineIcon />
          </Button>
        </Tooltip>
        <Tooltip title="Delete" arrow>
          <Button onClick={dec} variant="outlined" color="error">
            <RemoveCircleOutlineIcon />
          </Button>
        </Tooltip>
      </div>
      <a href="https://github.com/irfanshadikrishad" target="_blank">
        github
      </a>
    </div>
  );
}

export default App;
