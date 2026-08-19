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
    <div className="rounded-2xl bg-white px-6 py-16 text-center shadow-sm">
      <h2 className="text-2xl font-bold text-slate-900">
        No diary entries yet
      </h2>

      <p className="mt-3 text-slate-500">
        Start documenting your day by creating your first
        diary entry.
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