import React, { useState } from "react";
import { GreyTop, ProgressBar, Button, CheckboxGroup, Textbox, PageHeader, PageFooter,QuestionWithInput ,QuestionWithoutInput, SubQuestion } from "../global/global-components.jsx";
import { useNavigate } from "react-router-dom";
import "./cybersecurity.css"

const Cybersecurity4 = () => {
  const [progress, setProgress] = useState(25);
  
  // Separate states for each input
  const navigate = useNavigate();

  // Separate states for textboxes
  const [changeReason, setChangeReason] = useState("");
  const [currentSystemLikes, setCurrentSystemLikes] = useState("");

  const [selectedOptions, setSelectedOptions] = useState([]);

  const handleCheckboxChange = (event) => {
    const { value, checked } = event.target;
    setSelectedOptions((prev) =>
      checked ? [...prev, value] : prev.filter((item) => item !== value)
    );
  };

  const handleNext = () => {
    if (storedOptions.includes("Backup & Disaster Recovery")) {
      navigate("/backup"); // Go to Cyber1 if selected
    } 
    else {
      navigate("/thanku");
    }
  };

  return (
    <div className="form-container">
        <GreyTop></GreyTop>
        <ProgressBar progress={progress} />
        <PageHeader title="Cybersecurity" />

        <CheckboxGroup
            label="Do you store, or potentially store any confidential data?"
            options={["Yes", "No", "Unsure"]} 
            selectedOptions={selectedOptions}
            onChange={handleCheckboxChange}
        />
        <CheckboxGroup
            label="Do you have adequate training and skill sets to monitor and manage your network against malicious activities 24/7?"
            options={["Yes", "No"]} 
            selectedOptions={selectedOptions}
            onChange={handleCheckboxChange}
        />
        
        <CheckboxGroup
            columns={2}
            label="Do you have compliance or security requirements?"
            options={["CCPA", "FISMA", "GDPR", "FDCC", "FEDRAMP", "HIPPA", "FINRA", "NIST", "ITAR", "None", "NERC", "Other:"]} 
            selectedOptions={selectedOptions}
            onChange={handleCheckboxChange}
        />
        <CheckboxGroup
            label="Is anyone watching your system at 2 A.M.?"
            options={["Yes", "No"]} 
            selectedOptions={selectedOptions}
            onChange={handleCheckboxChange}
        />

        <Button label="Next Page" 
                    onClick={() => {
                    handleNext(); 
                    setProgress(progress + 25); // Update progress
                    }} 
        />
    </div>
  );
};

export default Cybersecurity4;