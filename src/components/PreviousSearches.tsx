import { useEffect, useState } from "react";
import { FaSearch } from "react-icons/fa";

const LOCAL_STORAGE_KEY = "previousSearches";

type SearchProps = {
  onSearchResults: (searchTerm: string) => void;
};

export default function PreviousSearches({ onSearchResults }: SearchProps) {
  const [searchInput, setSearchInput] = useState("");
  const [searches, setSearches] = useState<{ id: string; value: string }[]>([]);

  useEffect(() => {
    const stored = localStorage.getItem(LOCAL_STORAGE_KEY);
    if (stored) {
      try {
        const parsed = JSON.parse(stored);
        if (Array.isArray(parsed)) {
          setSearches(parsed);
        }
      } catch (err) {
        console.error("Failed to parse saved searches:", err);
      }
    }
  }, []);

  const handleSearch = () => {
    if (!searchInput.trim()) return;
    // Save the search term
    const newItem = { id: Date.now().toString(), value: searchInput };
    const updated = [newItem, ...searches].slice(0, 5);
    setSearches(updated);
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(updated));

    // Notify parent to filter recipes based on searchInput
    onSearchResults(searchInput);

    setSearchInput("");
  };
  const handleOldSearch = (value: string) => {
    onSearchResults(value);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };
  return (
    <div className="previous-searches section">
      <h2>Previous Searches</h2>
      <div className="previous-searches-container">
        {searches.map((search, index) => (
          <button
            key={search.id}
            style={{ animationDelay: index * 0.1 + "s" }}
            className="search-item"
            onClick={() => handleOldSearch(search.value)}
          >
            {search.value}
          </button>
        ))}
      </div>
      <div className="search-box">
        <input
          type="text"
          placeholder="Search ..."
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
          onKeyDown={handleKeyDown}
        />
        <button className="btn" onClick={handleSearch}>
          <FaSearch />
        </button>
      </div>
    </div>
  );
}
