import { useState } from "react";
import api from "../api";
import { useNavigate } from "react-router-dom";
import { ACCESS_TOKEN, REFRESH_TOKEN } from "../constants";

function Form({ route, method }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    setLoading(true);

    e.preventDefault();

    try {
      const res = await api.post(route, {
        username,
        password,
      });

      if (method === "login") {
        localStorage.setItem(ACCESS_TOKEN, res.data.access);
        localStorage.setItem(REFRESH_TOKEN, res.data.refresh);
        navigate("/");
      } else {
        navigate("/login");
      }
    } catch (e) {
      alert(e.message || e);
    } finally {
      setLoading(false);
    }
  };

  const title = method === "login" ? "Login" : "Register";

  return (
    <form
      onSubmit={handleSubmit}
      className="gap-10  flex flex-col items-center justify-center mx-4 my-auto p-4 rounded-lg  shadow-xl shadow-gray-600 max-w-[40rem] min-w-[30rem]"
    >
      <h1 className="text-2xl font-semibold">{title}</h1>
      <input
        type="text"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        placeholder="Username"
        className="w-[90%] p-2 mx-2 my-0 border-2 border-black rounded-md"
      />
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="********"
        className="w-[90%] p-2 mx-2 my-0 border-2 rounded-md border-black"
      />
      <button
        className="hover:cursor-pointer w-[75%] p-2 mx-4 my-0 bg-[#007bff] active:scale-95 hover:bg-[#007bffb2] text-white border-none rounded-xl"
        type="submit"
      >
        {title}
      </button>
      <a
        href={method === "login" ? "/register" : "/login"}
        className="hover:underline text-blue-500"
      >
        {method === "login"
          ? "Don't Have an Account?"
          : "Already Have an Account?"}
      </a>
    </form>
  );
}

export default Form;
