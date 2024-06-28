import { useState } from "react";
import api from "../api";
import { useNavigate } from "react-router-dom";
import { ACCESS_TOKEN, REFRESH_TOKEN } from "../constants";

function Form({ route, method }) {
  return (
    <div>
      <h1 className="text-red-300">Hello World!!</h1>
    </div>
  );
}

export default Form;
