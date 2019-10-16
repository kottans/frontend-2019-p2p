import React from "react";
import "../FilterBar/FilterBar.css";
import Select from "../CardContainer/Select";
const FilterBar = props => {
  const generateUrl = e => {
    e.preventDefault();
    const { elements } = e.target;
    const value = Array.from(elements).reduce((acc, elem) => {
      if (elem.name && elem.value !== "All" && elem.value !== "") {
        return { ...acc, [elem.name]: elem.value };
      }
      return acc;
    }, {});
    const urlPart = Object.keys(value)
      .map(key => `${key}=${value[key]}`)
      .toString()
      .replace(/,/g, "&");
    props.transition(`https://rickandmortyapi.com/api/character/?${urlPart}`);
  };
  const generateSelect = () => {
    const selectTypes = ["gender", "status", "species"];
    return selectTypes.map(type => {
      return <Select key={type} id={type} />;
    });
  };
  return (
    <div className="filterContainer">
      <form onSubmit={generateUrl}>
        <label>
          <div className="search-container">
            <h1 className="search-header">Search</h1>
            <div>
              <input name="name" className="search" />
            </div>
          </div>
        </label>

        <div className="select-wrapper">
          <label>
            <h2 className="search-header">Filters</h2>
            <div className="select-container">{generateSelect()}</div>
          </label>
          <label>
            <input type="submit" className="submit-button" />
          </label>
        </div>
      </form>
    </div>
  );
};

export default FilterBar;
