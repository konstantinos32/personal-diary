import EntryBtn from "./components/EntryBtn";
import AddEntryForm from "./components/AddEntryForm";
import HomepageList from "./components/HomepageList";
import ViewEntryModal from "./components/ViewEntryModal";
import { useEntries } from "./context/EntriesContext";

const App = () => {
  const { showAddEntryForm, showEntryModal } = useEntries();

  return (
    <div className="min-h-screen bg-slate-100">
      <header className="flex items-center justify-between border-b bg-white px-6 py-4 shadow-sm">
        <h1 className="text-2xl font-bold text-slate-900">
          Personal Diary
        </h1>

        <EntryBtn />
      </header>

      <main className="mx-auto max-w-6xl p-6">
        <HomepageList />
      </main>

      {showAddEntryForm && <AddEntryForm />}

      {showEntryModal && <ViewEntryModal />}
    </div>
  );
};

export default App;