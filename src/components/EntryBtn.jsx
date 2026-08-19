import { useEntries } from '../context/EntriesContext';

const EntryBtn = () => {
  const { setShowAddEntryForm } = useEntries();

  const handleAddEntry = () => {
    setShowAddEntryForm(true);
  };

  return (
    <button
      type="button"
      onClick={handleAddEntry}
      className="rounded-lg bg-slate-900 px-5 py-3 font-semibold text-white transition hover:bg-slate-700"
    >
      Add Entry
    </button>
  );
};

export default EntryBtn;