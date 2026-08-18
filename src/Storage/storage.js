const STORAGE_KEY = 'entries';

export const getEntries = () => {
  const storedEntries = localStorage.getItem(STORAGE_KEY);

  if (!storedEntries) {
    return [];
  }

  return JSON.parse(storedEntries);
};

export const storeEntries = (entries) => {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(entries));
};

export const removeEntry = (entries, entryToRemove) => {
  const filteredEntries = entries.filter(
    (entry) => entry !== entryToRemove
  );

  storeEntries(filteredEntries);

  return filteredEntries;
};

export const updateEntry = (entries, entryToUpdate) => {
  const updatedEntries = entries.map((entry) =>
    entry.id === entryToUpdate.id ? entryToUpdate : entry
  );

  storeEntries(updatedEntries);

  return updatedEntries;
};