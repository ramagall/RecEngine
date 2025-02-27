import React, { useState } from "react";
import { GreyTop, ProgressBar, Button, CheckboxGroup, Textbox, PageHeader, PageFooter, QuestionWithInput } from "../global/global-components";
import { useNavigate } from "react-router-dom";
import './backup.css';

const Backup = () => {
  const navigate = useNavigate();
  const [progress, setProgress] = useState(50);
  const [selectedOptions, setSelectedOptions] = useState([]);
  const [vendorResponse, setVendorResponse] = useState("");
  const [backupPlatform, setBackupPlatform] = useState("");
  
  const [backup1Q1, setbackup1Q1] = useState([]);
  const [backup1Q2, setbackup1Q2] = useState([]);
  const [backup1Q3, setbackup1Q3] = useState([]);

  const handleCheckboxChange = (event) => {
    const { value, checked } = event.target;
    const updatedOptions = checked
      ? [...selectedOptions, value]
      : selectedOptions.filter((item) => item !== value);
    
    setSelectedOptions(updatedOptions);
    localStorage.setItem("selectedOptions", JSON.stringify(updatedOptions));
  };

  const handleNext = () => {
    navigate("/backup2");
  };

  return (
    <div className="form-container">
      <GreyTop />
      <ProgressBar progress={progress} />
      <PageHeader title="Backup & Disaster Recovery" />

      <QuestionWithInput
        label="What vendors or solutions are you already considering?"
        name="vendor"
        value={vendorResponse}
        onChange={(e) => setVendorResponse(e.target.value)}
      />

      <CheckboxGroup
        label="Are you currently backing up your data? If yes, what platform are you using?"
        options={["Yes", "No"]}
        selectedOptions={selectedOptions}
        onChange={handleCheckboxChange}
      />
      {selectedOptions.includes("Yes") && (
        <QuestionWithInput
          label="Backup Platform:"
          name="backupPlatform"
          value={backupPlatform}
          onChange={(e) => setBackupPlatform(e.target.value)}
        />
      )}

      <CheckboxGroup
        label="Do you have a disaster recovery process?"
        options={["Yes", "No"]}
        selectedOptions={selectedOptions}
        onChange={handleCheckboxChange}
      />

      <CheckboxGroup
        label="How often do you want to test your disaster recovery plans?"
        options={["Daily", "Weekly", "Monthly", "Semiannually", "Annually"]}
        selectedOptions={selectedOptions}
        onChange={handleCheckboxChange}
      />

      <QuestionWithInput
        label="What vendors or solutions are you already considering?"
        name="vendor"
        value={vendorResponse}
        onChange={(e) => setVendorResponse(e.target.value)}
      />

      <Button label="Next Page" onClick={handleNext} />
      <PageFooter />
    </div>
  );
};

export default Backup;
