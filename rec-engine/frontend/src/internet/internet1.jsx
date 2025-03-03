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
  const [internet1Q1, setInternet1Q1] = useState([]);
  const [internet1Q2, setInternet1Q2] = useState([]);
  const [internet1Q3, setInternet1Q3] = useState([]);
  const [internet1Q4, setInternet1Q4] = useState([]);
  const [internet1Q5, setInternet1Q5] = useState([]);
  

  // Handle Checkbox Selection
  const handleCheckboxChange = (setOption) => (event) => {
    const { value, checked } = event.target;
    setOption((prev) =>
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
      <div className="grid-container" style={{ display: "grid", gridTemplateColumns: "0.75fr 0.75fr"}}>
              {/* Left Column */}
              <div className="grid-item">
                <CheckboxGroup
                  label="What internet companies have you already considered?"
                  options={["AT&T", "Spectrum", "Comcast", "Zayo", "Earthlink", "Crown Castle", "Cox", "Lumen", "Geolinks", "Other:"]}
                  selectedOptions={internet1Q1}
                  onChange={handleCheckboxChange(setInternet1Q1)}
                  columns={2}
                />
                <CheckboxGroup
                  label="What internet provider are you already using?"
                  options={["AT&T", "Spectrum", "Comcast", "Zayo", "Earthlink", "Crown Castle", "Cox", "Lumen", "Geolinks", "Other:"]}
                  selectedOptions={internet1Q2}
                  onChange={handleCheckboxChange(setInternet1Q2)}
                  columns={2}
                />
                <CheckboxGroup
                  label="Will you need routers or managed circuits/switches?"
                  options={["Yes", "No", "Unsure"]}
                  selectedOptions={internet1Q3}
                  onChange={handleCheckboxChange(setInternet1Q3)}
                />
              </div>

              {/* Right Column */}
              <div className="grid-item">
                <CheckboxGroup
                  label="What type of network solutions do you currently use?"
                  options={["Cellular", "Satellite", "Dark Fiber", "COAX", "Fixed Wireless", "VPN", "Dedicated Fiber", "SDWAN", "Shared Fiber", "MPLS", "Other:"]}
                  selectedOptions={internet1Q4}
                  onChange={handleCheckboxChange(setInternet1Q4)}
                  columns={2}
                />
                <CheckboxGroup
                  label="What internet provider are you already using?"
                  options={["AT&T", "Spectrum", "Comcast", "Zayo", "Earthlink", "Crown Castle", "Cox", "Lumen", "Geolinks", "Other:"]}
                  selectedOptions={internet1Q5}
                  onChange={handleCheckboxChange(setInternet1Q5)}
                  columns={2}
                />
              </div>
            </div>
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
