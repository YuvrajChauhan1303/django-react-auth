import { useState, useEffect } from "react";
import api from "../api";
import Notes from "../components/Notes";
import Navbar from "../components/Navbar";

function Home() {
  const [notes, setNotes] = useState([]);
  const [content, setContent] = useState("");
  const [title, setTitle] = useState("");

  const getNotes = async () => {
    try {
      const res = await api.get("/api/notes/");
      setNotes(res.data);
    } catch (e) {
      alert(e);
    }
  };

  const deleteNote = async (id) => {
    try {
      const res = await api.delete(`/api/notes/delete/${id}/`);
      if (res.status === 204) {
        alert("Note was Deleted Successfully!!");
      } else {
        alert("Failed to Delete Note! Please try again.");
      }
      getNotes();
    } catch (error) {
      alert(error);
    }
  };

  const createNote = async (e) => {
    e.preventDefault();
    try {
      const res = await api.post("/api/notes/", { content, title });
      if (res.status === 201) {
        alert("Note Created!");
      } else {
        alert("Failed to Create Note");
      }
      getNotes();
    } catch (error) {
      alert(error);
    }
  };

  useEffect(() => {
    getNotes();
  }, []);

  return (
    <div className="min-h-screen bg-blue-50 flex flex-col items-center">
      <div className="min-w-full pb-8">
        <Navbar />
      </div>
      <div className="w-full max-w-2xl bg-white shadow-lg rounded-lg p-6 mb-10">
        <h2 className="text-2xl font-semibold mb-4">Notes</h2>
        {notes.map((note) => (
          <Notes note={note} onDelete={deleteNote} key={note.id} />
        ))}
      </div>
      <div className="w-full max-w-2xl bg-white shadow-lg rounded-lg p-6">
        <h2 className="text-2xl font-semibold mb-4">Create Note</h2>
        <form onSubmit={createNote}>
          <label
            htmlFor="title"
            className="block text-sm font-medium text-gray-700"
          >
            Title:
          </label>
          <input
            type="text"
            id="title"
            name="title"
            required
            onChange={(e) => setTitle(e.target.value)}
            value={title}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
          />
          <label
            htmlFor="content"
            className="block text-sm font-medium text-gray-700 mt-4"
          >
            Content:
          </label>
          <textarea
            name="content"
            id="content"
            required
            value={content}
            onChange={(e) => setContent(e.target.value)}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
          ></textarea>
          <input
            type="submit"
            value="Submit"
            className="mt-4 bg-blue-600 text-white px-4 py-2 rounded-md shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          />
        </form>
      </div>
    </div>
  );
}

export default Home;
