import React, { useState } from "react";
import { GreyTop, ProgressBar, Button, CheckboxGroup, PageHeader, PageFooter } from "../global/global-components.jsx";
import { useNavigate } from "react-router-dom";

const Phones2 = () => {
  const [progress, setProgress] = useState(50);
  const navigate = useNavigate(); 
  const [selectedOptions, setSelectedOptions] = useState([]);
  const [otherText, setOtherText] = useState("");

  const handleCheckboxChange = (event) => {
    const { value, checked } = event.target;
    setSelectedOptions((prev) =>
      checked ? [...prev, value] : prev.filter((item) => item !== value)
    );
  };

  const handleNext = () => {
    navigate("/phones3");
  };

  const handleOtherChange = (event) => {
    setOtherText(event.target.value);
  };

  return (
    <div className="form-container">
      <GreyTop />
      <ProgressBar progress={progress} />
      <PageHeader title="Phones Continued" />
      
      <div className="grid-container" style={{ display: "grid", gridTemplateColumns: "0.75fr 0.75fr"}}>
        {/* Left Column */}
        <div className="grid-item">
          <CheckboxGroup
            label="What phone system do you have today?"
            options={["Avaya", "Cisco", "Mitel", "Nextiva", "Dialpad", "GoTo", "Teams", "Zoom", "RingCentral", "8x8", "Ooma", "Vonage", "3CX", "Microsoft", "Other:"]}
            selectedOptions={selectedOptions}
            onChange={handleCheckboxChange}
            otherValue={otherText}
            onOtherChange={handleOtherChange}
            columns={2} 
          />
          <CheckboxGroup
            label="Are there any solutions you are already considering?"
            options={["Avaya", "Cisco", "Mitel", "Nextiva", "Dialpad", "GoTo", "Teams", "Other:"]}
            selectedOptions={selectedOptions}
            onChange={handleCheckboxChange}
          />
        </div>
        
        {/* Right Column */}
        <div className="grid-item">
          <CheckboxGroup
            label="What services would you like your system to integrate with?"
            options={["Hubspot", "Google", "Salesforce", "Microsoft", "Zoho", "Other:"]} 
            selectedOptions={selectedOptions}
            onChange={handleCheckboxChange}
          />
          <CheckboxGroup
            label="Do you need call recording?"
            options={["Yes", "No"]} 
            selectedOptions={selectedOptions}
            onChange={handleCheckboxChange}
          />
        </div>
      </div>
      
      <Button 
        label="Next Page" 
        onClick={() => {
          handleNext();
          setProgress(progress + 25); // Update progress
        }} 
      />
      <PageFooter />
    </div>
  );
};

export default Phones2;
