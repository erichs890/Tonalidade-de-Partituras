
import React, { useState, useEffect, useRef } from 'react';
import { searchMusicData } from '../data/musicData';

const Search = ({ onSelect }) => {
    const [query, setQuery] = useState('');
    const [suggestions, setSuggestions] = useState([]);
    const [showSuggestions, setShowSuggestions] = useState(false);
    const wrapperRef = useRef(null);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
                setShowSuggestions(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [wrapperRef]);

    const handleChange = (e) => {
        const val = e.target.value;
        setQuery(val);
        if (val.length > 0) {
            setSuggestions(searchMusicData(val));
            setShowSuggestions(true);
        } else {
            setSuggestions([]);
            setShowSuggestions(false);
        }
    };

    const handleSelect = (item) => {
        setQuery(`${item.major}, ${item.minor}`);
        setShowSuggestions(false);
        onSelect(item);
    };

    return (
        <div className="search-container" ref={wrapperRef}>
            <div className="input-wrapper">
                <svg className="search-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="11" cy="11" r="8"></circle>
                    <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                </svg>
                <input
                    type="text"
                    placeholder="Pesquise o tom (ex: Sol Maior, Mi menor)"
                    value={query}
                    onChange={handleChange}
                    className="search-input"
                />
                {query && (
                    <button className="clear-button" onClick={() => { setQuery(''); setSuggestions([]); }}>
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <line x1="18" y1="6" x2="6" y2="18"></line>
                            <line x1="6" y1="6" x2="18" y2="18"></line>
                        </svg>
                    </button>
                )}
            </div>

            {showSuggestions && suggestions.length > 0 && (
                <div className="suggestions-list fade-in">
                    {suggestions.map((item) => (
                        <div
                            key={item.id}
                            className="suggestion-item"
                            onClick={() => handleSelect(item)}
                        >
                            <span className="suggestion-major">{item.major}</span>
                            <span className="suggestion-minor">{item.minor}</span>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default Search;
