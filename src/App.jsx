import EntryBtn from "./components/EntryBtn";
import AddEntryForm from "./components/AddEntryForm";
import HomepageList from "./components/HomepageList";
import ViewEntryModal from "./components/ViewEntryModal";
import { useEntries } from "./context/EntriesContext";

const App = () => {
  const { showAddEntryForm, showEntryModal } = useEntries();

  return (
    <div className="min-h-screen bg-slate-100">
      <header className="border-b bg-white shadow-sm">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
          <div>
            <h1 className="text-3xl font-bold text-slate-900">
              Personal Diary
            </h1>

            <p className="mt-1 text-sm text-slate-500">
              Your memories, one day at a time.
            </p>
          </div>

          <EntryBtn />
        </div>
      </header>

      <main className="mx-auto max-w-6xl px-6 py-10">
        <HomepageList />
      </main>

      {showAddEntryForm && <AddEntryForm />}

      {showEntryModal && <ViewEntryModal />}
    </div>
  );
};

export default App;