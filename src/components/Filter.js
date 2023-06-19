import React from "react";

function Filter({ onSetGreased, onSetSortValue }) {

    function handleFilter(e) {
        onSetGreased(e.target.value)
    }

    function handleSort(e) {
        onSetSortValue(e.target.value)
    }

    return (
        <div className="filterWrapper">
            <label htmlFor="greased">Filter: </label>
            <select name="greased" onChange={handleFilter}>
                <option value='all'>All</option>
                <option value='greased'>Greased</option>
                <option value='ungreased'>Ungreased</option>
            </select>

            <label htmlFor="sort">Sort by: </label>
            <select name="greased" onChange={handleSort}> 
                <option value='none'>None</option>
                <option value='name'>Name</option>
                <option value='weight'>Weight</option>
            </select>
        </div>
    )
} 

export default Filter