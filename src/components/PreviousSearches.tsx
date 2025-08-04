import { useEffect, useState } from "react";
import { FaSearch } from "react-icons/fa";

const LOCAL_STORAGE_KEY = "previousSearches";

export default function PreviousSearches(){
    const [searchInput, setSearchInput] = useState("")
    const [searches, setSearches] = useState<{ id: string; value: string }[]>([])
    
    useEffect(() => {
        const stored = localStorage.getItem(LOCAL_STORAGE_KEY)
        if (stored) {
            try {
                const parsed = JSON.parse(stored)
                if (Array.isArray(parsed)) {
                    setSearches(parsed)
                }
            } catch (err) {
                console.error("Failed to parse saved searches:", err)
            }
        }
    }, [])
    
    const handleSearch = () => {
        if (!searchInput.trim()) return
        const newItem = {id: Date.now().toString(), value: searchInput}
        const updated = [newItem, ...searches].slice(0, 10)
        setSearches(updated)
        localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(updated))
        setSearchInput("")
    }
    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === "Enter") {
            handleSearch()
        }
    }
    return (
        <div className="previous-searches section">
            <h2>Previous Searches</h2>
            <div className="previous-searches-container">
                { searches.map((search, index) => (
                    <div key={search.id} style={{animationDelay: index * .1 + "s"}} className="search-item">
                        {search.value}
                    </div>
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
                    <FaSearch/>
                </button>
            </div>
        </div>
    )
}