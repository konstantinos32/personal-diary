import { useEffect, useState } from "react";
import { useEntries } from "../context/EntriesContext";
import {
  removeEntry,
  updateEntry,
} from "../Storage/storage";

const ViewEntryModal = () => {
  const {
    entry,
    entries,
    setEntries,
    showEntryModal,
    setShowEntryModal,
  } = useEntries();

  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");
  const [imageURL, setImageURL] = useState("");
  const [content, setContent] = useState("");

  const [error, setError] = useState("");

  useEffect(() => {
    if (entry) {
      setTitle(entry.title);
      setDate(entry.date);
      setImageURL(entry.imageURL);
      setContent(entry.content);
    }
  }, [entry]);

  if (!showEntryModal || !entry) {
    return null;
  }

  const handleClose = () => {
    setShowEntryModal(false);
    setError("");
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    setError("");

    if (
      !title.trim() ||
      !date ||
      !imageURL.trim() ||
      !content.trim()
    ) {
      setError("Please fill in all fields.");
      return;
    }

    const dateAlreadyExists = entries.some(
      (existingEntry) =>
        existingEntry.id !== entry.id &&
        existingEntry.date === date,
    );

    if (dateAlreadyExists) {
      setError(
        "An entry already exists for this date. Please choose another date.",
      );
      return;
    }

    const updatedEntry = {
      ...entry,
      title: title.trim(),
      date,
      imageURL: imageURL.trim(),
      content: content.trim(),
    };

    const updatedEntries = updateEntry(
      entries,
      updatedEntry,
    );

    setEntries(updatedEntries);

    setShowEntryModal(false);
  };

  const handleDelete = () => {
    const shouldDelete = window.confirm(
      "Are you sure you want to delete this entry?",
    );

    if (!shouldDelete) {
      return;
    }

    const updatedEntries = removeEntry(
      entries,
      entry,
    );

    setEntries(updatedEntries);

    setShowEntryModal(false);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">
      <div className="max-h-[90vh] w-full max-w-2xl overflow-y-auto rounded-2xl bg-white p-6 shadow-xl">
        
        {/* Header */}

        <div className="mb-6 flex items-center justify-between">
          <h2 className="text-2xl font-bold text-slate-900">
            Edit Entry
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

        {/* Form */}

        <form
          onSubmit={handleSubmit}
          className="space-y-4"
        >
          {/* Title */}

          <div>
            <label
              htmlFor="edit-title"
              className="mb-1 block font-semibold text-slate-700"
            >
              Title
            </label>

            <input
              id="edit-title"
              type="text"
              value={title}
              onChange={(event) =>
                setTitle(event.target.value)
              }
              className="w-full rounded-lg border border-slate-300 px-3 py-2 outline-none focus:border-slate-600"
            />
          </div>

          {/* Date */}

          <div>
            <label
              htmlFor="edit-date"
              className="mb-1 block font-semibold text-slate-700"
            >
              Date
            </label>

            <input
              id="edit-date"
              type="date"
              value={date}
              onChange={(event) =>
                setDate(event.target.value)
              }
              className="w-full rounded-lg border border-slate-300 px-3 py-2 outline-none focus:border-slate-600"
            />
          </div>

          {/* Image URL */}

          <div>
            <label
              htmlFor="edit-imageURL"
              className="mb-1 block font-semibold text-slate-700"
            >
              Image URL
            </label>

            <input
              id="edit-imageURL"
              type="url"
              value={imageURL}
              onChange={(event) =>
                setImageURL(event.target.value)
              }
              className="w-full rounded-lg border border-slate-300 px-3 py-2 outline-none focus:border-slate-600"
            />
          </div>

          {/* Content */}

          <div>
            <label
              htmlFor="edit-content"
              className="mb-1 block font-semibold text-slate-700"
            >
              Content
            </label>

            <textarea
              id="edit-content"
              value={content}
              onChange={(event) =>
                setContent(event.target.value)
              }
              rows="8"
              className="w-full rounded-lg border border-slate-300 px-3 py-2 outline-none focus:border-slate-600"
            />
          </div>

          {/* Buttons */}

          <div className="flex items-center justify-between pt-2">
            
            <button
              type="button"
              onClick={handleDelete}
              className="rounded-lg bg-red-600 px-4 py-2 font-semibold text-white hover:bg-red-700"
            >
              Delete Entry
            </button>

            <div className="flex gap-3">
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
                Save Changes
              </button>
            </div>

          </div>
        </form>
      </div>
    </div>
  );
};

export default ViewEntryModal;