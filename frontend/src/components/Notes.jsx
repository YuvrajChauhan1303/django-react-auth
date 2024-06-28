import React from "react";
import { formatDate } from "../formatters";

const Notes = ({ note, onDelete }) => {
  return (
    <div className="bg-white border-gray-500 border-2 rounded-lg p-6 mb-4">
      <h1 className="text-xl font-semibold ">{note.title}</h1>
      <p className="text-gray-700 mt-2">{note.content}</p>
      <p className="text-gray-500 mt-4">
        {formatDate(new Date(note.created_at), "DD/MM/YYYY")}
      </p>
      <button
        className="mt-4 bg-red-500 active:scale-95 text-white px-4 py-2 rounded-md shadow-sm hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
        onClick={() => onDelete(note.id)}
      >
        Delete
      </button>
    </div>
  );
};

export default Notes;
