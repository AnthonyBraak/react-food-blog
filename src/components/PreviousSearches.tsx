import { FaSearch } from "react-icons/fa";

export default function PreviousSearches(){
    const searches = ['test', 'test2', 'test3']
    return (
        <div className="previous-searches section">
            <h2>Previous Searches</h2>
            <div className="previous-searches-container">
                { searches.map((search, index) => (<div key={index} style={{animationDelay: index * .1 + "s"}} className="search-item">
                    {search}
                </div>))}
            </div>
            <div className="search-box">
                <input type="text" placeholder="Search ..."/>
                <button className="btn"><FaSearch/></button>
            </div>
        </div>
    )
}