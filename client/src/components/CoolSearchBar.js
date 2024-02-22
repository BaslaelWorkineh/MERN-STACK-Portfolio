import React, { useState, useContext } from 'react';
import { ThemeContext } from '../components/ThemeContext';
import './CoolSearchBar.css'
import searchIcon from '../pages/Gifs/search.svg'
const categories = [
    "ALL",
    "AI",
    "MERN STACK",
    "App Development",
    "PHOTON NETWORKING",
    "Graphics Design",
    "3D Modeling",
    "Game Development",
    "FOREX",
    "Blockchain",
    "Machine Learning",
    "Data Science",
    "Web Development",
    "Mobile Development",
    "Cloud Computing",
    "Cybersecurity",
    "Software Engineering",
    "DevOps",
    "Embedded Systems",
    "Virtual Reality"
];

const CoolSearchBar = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('All');
    const [showDropdown, setShowDropdown] = useState(false);

    const handleSearchChange = (event) => {
        setSearchTerm(event.target.value);
    };

    const handleCategoryChange = (category) => {
        setSelectedCategory(category);
        setShowDropdown(false);
    };

    const filteredCategories = categories.filter(category => {
        return category.toLowerCase().includes(searchTerm.toLowerCase()) && (category === selectedCategory);
    });

    const { theme } = useContext(ThemeContext);
    return (
        <div className='search-bar-container' style={{ background: theme === 'Light' ? 'white' : '#333' }}>
            <div className="onlysearch" >
            <button className="searchbtn" >Search</button>
                <input
                    type="text"
                    placeholder="Search..."
                    value={searchTerm}
                    onChange={handleSearchChange} style={{ background: theme === 'Light' ? 'white' : '#333', color: theme === 'Light' ? '#333' : 'white' }}
                />
                {/* The div below should be closed properly */}
                <div></div>
            </div>
            <div className='categorySection'>
                <div className="dropdown">
                    <button className="dropbtn" onClick={() => setShowDropdown(!showDropdown)} >Category</button>
                    {showDropdown &&
                        <div className="dropdown-content">
                            {categories.map(category => (
                                <button key={category} onClick={() => handleCategoryChange(category)}>{category}</button>
                            ))}
                        </div>
                    }
                </div>
                <div>
                    <ul className='dropdownSet' style={{ background: theme === 'Light' ? 'white' : '#333', color: theme === 'Light' ? '#333' : 'white' }}>
                        {filteredCategories.map(category => (
                            <li key={category}>{category}</li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>

    );
};

export default CoolSearchBar;
