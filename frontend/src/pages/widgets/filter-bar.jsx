import React, { useState } from "react";
import Select from "react-select";

const FilterBar = ({ onFilterChange }) => {
  const [selectedFilter, setSelectedFilter] = useState("");
  const options = [
    { value: "connecte", label: "Connecté" },
    { value: "non-connecte", label: "Non connecté" },
    { value: "alpha-asc", label: "A - Z" },
    { value: "alpha-desc", label: "Z - A" },
    { value: "recent", label: "Récent" },
    { value: "oldest", label: "Ancien" },
  ];

  const customStyles = {
    control: (styles) => ({
      ...styles,
      backgroundColor: "white",
      borderColor: "#2563eb",
      boxShadow: "none",
      "&:hover": {
        borderColor: "#1e40af",
      },
    }),
    option: (styles, { isFocused, isSelected }) => ({
      ...styles,
      backgroundColor: isSelected
        ? "#2563eb"
        : isFocused
        ? "#bfdbfe"
        : undefined,
      color: isSelected ? "white" : "#2563eb",
      cursor: "pointer",
    }),
    multiValue: (styles) => ({
      ...styles,
      backgroundColor: "#bfdbfe",
    }),
    multiValueLabel: (styles) => ({
      ...styles,
      color: "#2563eb",
    }),
    multiValueRemove: (styles) => ({
      ...styles,
      color: "#2563eb",
      ":hover": {
        backgroundColor: "#2563eb",
        color: "white",
      },
    }),
  };

  const handleChange = (selectedOption) => {
    setSelectedFilter(selectedOption);
    onFilterChange(selectedOption);
  };

  return (
    <div className="filter-bar">
      <Select
        isMulti
        options={options}
        defaultValue={null}
        styles={customStyles}
        onChange={handleChange}
      />
    </div>
  );
};

export default FilterBar;
