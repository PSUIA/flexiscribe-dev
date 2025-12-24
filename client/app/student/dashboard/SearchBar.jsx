"use client";
import React, { useState, useRef, useEffect } from "react";
import { useRouter } from "next/navigation";
import { FaSearch, FaBook, FaGamepad, FaTimes } from "react-icons/fa";
import { mockSearchData } from "./mockData";

export default function SearchBar() {
  const [searchQuery, setSearchQuery] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [filteredResults, setFilteredResults] = useState([]);
  const searchRef = useRef(null);
  const router = useRouter();

  // Map types to icons
  const getIconForType = (type) => {
    return type === "reviewer" ? FaBook : FaGamepad;
  };

  // Add icons to search data
  const searchData = mockSearchData.map(item => ({
    ...item,
    icon: getIconForType(item.type)
  }));

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (searchRef.current && !searchRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // Filter results based on search query
  useEffect(() => {
    if (searchQuery.trim().length > 0) {
      const query = searchQuery.toLowerCase();
      const results = searchData.filter(
        (item) =>
          item.title.toLowerCase().includes(query) ||
          item.subject.toLowerCase().includes(query) ||
          item.type.toLowerCase().includes(query)
      );
      setFilteredResults(results);
      setIsOpen(true);
    } else {
      setFilteredResults([]);
      setIsOpen(false);
    }
  }, [searchQuery]);

  const handleInputChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleResultClick = (item) => {
    setSearchQuery("");
    setIsOpen(false);
    router.push(item.link);
  };

  const handleClearSearch = () => {
    setSearchQuery("");
    setIsOpen(false);
  };

  const groupedResults = {
    reviewers: filteredResults.filter((item) => item.type === "reviewer"),
    quizzes: filteredResults.filter((item) => item.type === "quiz"),
  };

  return (
    <div className="search-bar-container" ref={searchRef}>
      <div className="search-bar">
        <FaSearch className="search-icon" />
        <input
          type="text"
          placeholder="Search for reviewers, quizzes..."
          value={searchQuery}
          onChange={handleInputChange}
          onFocus={() => searchQuery && setIsOpen(true)}
        />
        {searchQuery && (
          <button className="clear-search-btn" onClick={handleClearSearch}>
            <FaTimes />
          </button>
        )}
      </div>

      {isOpen && filteredResults.length > 0 && (
        <div className="search-dropdown">
          {groupedResults.reviewers.length > 0 && (
            <div className="search-group">
              <div className="search-group-title">Reviewers</div>
              {groupedResults.reviewers.map((item) => {
                const IconComponent = item.icon;
                return (
                  <div
                    key={item.id}
                    className="search-result-item"
                    onClick={() => handleResultClick(item)}
                  >
                    <div className="search-result-icon">
                      <IconComponent />
                    </div>
                    <div className="search-result-content">
                      <div className="search-result-title">{item.title}</div>
                      <div className="search-result-subject">{item.subject}</div>
                    </div>
                  </div>
                );
              })}
            </div>
          )}

          {groupedResults.quizzes.length > 0 && (
            <div className="search-group">
              <div className="search-group-title">Quizzes</div>
              {groupedResults.quizzes.map((item) => {
                const IconComponent = item.icon;
                return (
                  <div
                    key={item.id}
                    className="search-result-item"
                    onClick={() => handleResultClick(item)}
                  >
                    <div className="search-result-icon">
                      <IconComponent />
                    </div>
                    <div className="search-result-content">
                      <div className="search-result-title">{item.title}</div>
                      <div className="search-result-subject">{item.subject}</div>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      )}

      {isOpen && searchQuery && filteredResults.length === 0 && (
        <div className="search-dropdown">
          <div className="no-search-results">
            <FaSearch className="empty-search-icon" />
            <p>No results found for "{searchQuery}"</p>
          </div>
        </div>
      )}
    </div>
  );
}
