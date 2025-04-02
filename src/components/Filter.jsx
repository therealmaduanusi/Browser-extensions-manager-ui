import React from "react";
import "../styles/Filter.css";

function Filter({ mode, onAllList, onActiveList, onInActiveList, filterMode }) {
  return (
    <div className="filterListWrapper">
      <h3 className={`${mode ? "h3-light" : "h3-dark"}`}>Extensions List</h3>
      <div className="filterList">
        <button
          onClick={() => onAllList()}
          className={`${mode ? "filter-light" : "filter-dark"} filter ${filterMode === "all" ? "all" : ''}`}
        >
          All
        </button>
        <button
          onClick={() => onActiveList()}
          className={`${mode ? "filter-light" : "filter-dark"} filter ${filterMode === "active" ? "active" : ''}`}
        >
          Active
        </button>
        <button
          onClick={() => onInActiveList()}
          className={`${mode ? "filter-light" : "filter-dark"} filter ${filterMode === "inActive" ? "inActive" : ''}`}
        >
          Inactive
        </button>
      </div>
    </div>
  );
}

export default Filter;
