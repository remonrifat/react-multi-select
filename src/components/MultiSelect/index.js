import React, { useState } from "react";
import Select from "react-select";
import makeAnimated from "react-select/animated";
import "./style.css";

const animatedComponents = makeAnimated();

const options = [
  { value: "ocean", label: "ocean" },
  { value: "blue", label: "blue" },
  { value: "forest", label: "forest" },
  { value: "purple", label: "purple" },
  { value: "red", label: "red" },
  { value: "orange", label: "orange" },
  { value: "green", label: "green" },
  { value: "slate", label: "slate" },
];

export const MultiSelect = () => {
  const [selectedOptions, setSelectedOptions] = useState([]);

  const handleSelect = () => {
    console.log(selectedOptions);
  };

  return (
    <>
      <Select
        defaultValue={[options[0], options[2]]}
        components={animatedComponents}
        isMulti
        options={options}
        onChange={(item) => setSelectedOptions(item)}
        className="select "
        isClearable={true}
        isSearchable={true}
        isDisabled={false}
        isLoading={false}
        isRtl={false}
        closeMenuOnSelect={false}
      />
    </>
  );
};
