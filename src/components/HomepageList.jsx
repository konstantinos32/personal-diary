import EntryCard from "./EntryCard";
import { useEntries } from "../context/EntriesContext";

const HomepageList = () => {
  const {
    entries,
    loading,
    setEntry,
    setShowEntryModal,
  } = useEntries();

  const sortedEntries = [...entries].sort(
    (a, b) => new Date(b.date) - new Date(a.date),
  );

  const handleEntryClick = (selectedEntry) => {
    setEntry(selectedEntry);
    setShowEntryModal(true);
  };

  if (loading) {
    return (
      <div className="flex justify-center py-12">
        <p className="text-slate-600">
          Loading entries...
        </p>
      </div>
    );
  }

  if (sortedEntries.length === 0) {
    return (
      <div className="py-12 text-center">
        <p className="text-lg text-slate-500">
          You don't have any diary entries yet.
        </p>

        <p className="mt-2 text-slate-400">
          Click "Add Entry" to create your first entry.
        </p>
      </div>
    );
  }

  return (
    <ul className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
      {sortedEntries.map((entry) => (
        <EntryCard
          key={entry.id}
          title={entry.title}
          date={entry.date}
          imageURL={entry.imageURL}
          content={entry.content}
          onClick={() => handleEntryClick(entry)}
        />
      ))}
    </ul>
  );
};

export default HomepageList;