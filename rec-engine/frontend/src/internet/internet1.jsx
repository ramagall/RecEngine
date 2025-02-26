import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { GreyTop, ProgressBar, Button, CheckboxGroup, PageHeader, PageFooter } from "../global/global-components.jsx";

const Internet = () => {
  const [progress, setProgress] = useState(75);
  const [selectedOptions, setSelectedOptions] = useState([]);
  const navigate = useNavigate();

  const [internetCompaniesConsidered, setInternetCompaniesConsidered] = useState([]);
  const [internetProviderUsiing, setInternetProviderUsing] = useState([]);
  const [internetRouters, setInternetRouters] = useState([]);


  // Handle Checkbox Selection
  const handleCheckboxChange = (setOptions) => (event) => {
    const { value, checked } = event.target;
    setOptions((prev) =>
      checked ? [...prev, value] : prev.filter((item) => item !== value)
    );
  };

  // Handle Navigation Conditionally
  const handleNext = () => {
    navigate("/internet2"); // Go to Internet2 if selected

  };

  return (
    <div className="form-container">
      <GreyTop />
      <ProgressBar progress={progress} />
      <PageHeader title="Internet" />

      {/* Fixed CheckboxGroup */}
      <CheckboxGroup
        label="What internet companies have you already considered?"
        options={["AT&T", "Spectrum", "Comcast", "Zayo", "Earthlink", "Crown Castle", "Cox", "Lumen", "Geolinks", "Other:"]}
        selectedOptions={internetCompaniesConsidered}
        onChange={handleCheckboxChange(setInternetCompaniesConsidered)}
        columns={2}
      />
      <CheckboxGroup
        label="What internet provider are you already using?"
        options={["AT&T", "Spectrum", "Comcast", "Zayo", "Earthlink", "Crown Castle", "Cox", "Lumen", "Geolinks", "Other:"]}
        selectedOptions={internetProviderUsiing}
        onChange={handleCheckboxChange(setInternetProviderUsing)}
        columns={2}
      />
      <CheckboxGroup
        label="Will you need routers or managed circuits/switches?"
        options={["Yes", "No", "Unsure"]}
        selectedOptions={internetRouters}
        onChange={handleCheckboxChange(setInternetRouters)}
      />
      {/* Button with proper navigation */}
      <Button
        label="Next Page"
        onClick={() => {
          handleNext();
          setProgress((prev) => prev + 25);
        }}
      />

      <PageFooter />
    </div>
  );
};

export default Internet;
