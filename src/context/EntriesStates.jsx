import { useState } from 'react';
import { EntriesContext } from './EntriesContext';

const EntriesStates = ({ children }) => {
  const [entries, setEntries] = useState([]);

  const [entry, setEntry] = useState({
    title: '',
    date: '',
    imageURL: '',
    content: '',
  });

  const [showAddEntryForm, setShowAddEntryForm] = useState(false);

  const [showEntryModal, setShowEntryModal] = useState(false);

  const [loading, setLoading] = useState(false);

  const [error, setError] = useState('');

  return (
    <EntriesContext.Provider
      value={{
        entries,
        setEntries,
        entry,
        setEntry,
        showAddEntryForm,
        setShowAddEntryForm,
        showEntryModal,
        setShowEntryModal,
        loading,
        setLoading,
        error,
        setError,
      }}
    >
      {children}
    </EntriesContext.Provider>
  );
};

export default EntriesStates;