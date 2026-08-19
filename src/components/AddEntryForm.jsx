import { useState } from "react";
import { useEntries } from "../context/EntriesContext";
import { getEntries, storeEntries } from "../Storage/storage";

const AddEntryForm = () => {
  const {
    entries,
    setEntries,
    setShowAddEntryForm,
    error,
    setError,
  } = useEntries();

  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");
  const [imageURL, setImageURL] = useState("");
  const [content, setContent] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    setError("");

    // Check that all fields have been filled in
    if (!title.trim() || !date || !imageURL.trim() || !content.trim()) {
      setError("Please fill in all fields.");
      return;
    }

    // Get the entries currently stored in localStorage
    const existingEntries = getEntries();

    // Check if an entry already exists for the selected date
    const dateAlreadyExists = existingEntries.some(
      (entry) => entry.date === date,
    );

    if (dateAlreadyExists) {
      setError(
        "An entry already exists for this date. Please come back another day.",
      );
      return;
    }

    // Create the new diary entry
    const newEntry = {
      id: crypto.randomUUID(),
      title: title.trim(),
      date,
      imageURL: imageURL.trim(),
      content: content.trim(),
    };

    // Add the new entry to the existing entries
    const updatedEntries = [...entries, newEntry];

    // Update React state
    setEntries(updatedEntries);

    // Update localStorage
    storeEntries(updatedEntries);

    // Reset the form
    setTitle("");
    setDate("");
    setImageURL("");
    setContent("");

    // Close the modal
    setShowAddEntryForm(false);
  };

  const handleClose = () => {
    setShowAddEntryForm(false);
    setError("");
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">
      <div className="w-full max-w-lg rounded-2xl bg-white p-6 shadow-xl">
        {/* Modal header */}
        <div className="mb-6 flex items-center justify-between">
          <h2 className="text-2xl font-bold text-slate-900">
            Add Entry
          </h2>

          <button
            type="button"
            onClick={handleClose}
            className="text-2xl text-slate-500 hover:text-slate-900"
            aria-label="Close"
          >
            ×
          </button>
        </div>

        {/* Error message */}
        {error && (
          <div className="mb-4 rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
            {error}
          </div>
        )}

        {/* Entry form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Title */}
          <div>
            <label
              htmlFor="title"
              className="mb-1 block font-semibold text-slate-700"
            >
              Title
            </label>

            <input
              id="title"
              type="text"
              value={title}
              onChange={(event) => setTitle(event.target.value)}
              className="w-full rounded-lg border border-slate-300 px-3 py-2 outline-none focus:border-slate-600"
              placeholder="Entry title"
            />
          </div>

          {/* Date */}
          <div>
            <label
              htmlFor="date"
              className="mb-1 block font-semibold text-slate-700"
            >
              Date
            </label>

            <input
              id="date"
              type="date"
              value={date}
              onChange={(event) => setDate(event.target.value)}
              className="w-full rounded-lg border border-slate-300 px-3 py-2 outline-none focus:border-slate-600"
            />
          </div>

          {/* Image URL */}
          <div>
            <label
              htmlFor="imageURL"
              className="mb-1 block font-semibold text-slate-700"
            >
              Image URL
            </label>

            <input
              id="imageURL"
              type="url"
              value={imageURL}
              onChange={(event) => setImageURL(event.target.value)}
              className="w-full rounded-lg border border-slate-300 px-3 py-2 outline-none focus:border-slate-600"
              placeholder="https://example.com/image.jpg"
            />
          </div>

          {/* Content */}
          <div>
            <label
              htmlFor="content"
              className="mb-1 block font-semibold text-slate-700"
            >
              Content
            </label>

            <textarea
              id="content"
              value={content}
              onChange={(event) => setContent(event.target.value)}
              rows="5"
              className="w-full rounded-lg border border-slate-300 px-3 py-2 outline-none focus:border-slate-600"
              placeholder="Write about your day..."
            />
          </div>

          {/* Buttons */}
          <div className="flex justify-end gap-3 pt-2">
            <button
              type="button"
              onClick={handleClose}
              className="rounded-lg border border-slate-300 px-4 py-2 font-semibold text-slate-700 hover:bg-slate-100"
            >
              Cancel
            </button>

            <button
              type="submit"
              className="rounded-lg bg-slate-900 px-4 py-2 font-semibold text-white hover:bg-slate-700"
            >
              Save Entry
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddEntryForm;