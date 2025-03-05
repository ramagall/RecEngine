import React, { useState } from "react";
import { GreyTop, ProgressBar, Button, CheckboxGroup, PageHeader, PageFooter } from "../global/global-components";
import { useNavigate } from "react-router-dom";
/*import "./backup.css";*/

const Backup2 = () => {
  const navigate = useNavigate();
  const [progress] = useState(75);
  const [backupFrequency, setBackupFrequency] = useState([]);
  const [failoverOption, setFailoverOption] = useState([]);
  const [selectedCompliance, setSelectedCompliance] = useState([]);
  const [nonWindowsLinux, setNonWindowsLinux] = useState([]);
  const [otherText, setOtherText] = useState("");

  const handleCheckboxChange = (setOption) => (event) => {
    const { value, checked } = event.target;
    setOption((prev) => (checked ? [...prev, value] : prev.filter((item) => item !== value)));
  };

  const handleNext = () => {
    navigate("/thanku");
  };

  const handleOtherChange = (event) => {
    setOtherText(event.target.value);
  };

  return (
    <div className="form-container">
      <GreyTop />
      <ProgressBar progress={progress} />
      <PageHeader title="Backup & Disaster Recovery Continued" />

      <div className="grid-container" style={{ display: "grid", gridTemplateColumns: "0.75fr 0.75fr" }}>
        {/* Left Column */}
        <div className="grid-item">
          <CheckboxGroup
            label="How often would you like to backup your data?"
            options={["Daily", "Weekly", "Monthly", "Semiannually", "Annually"]}
            selectedOptions={backupFrequency}
            onChange={handleCheckboxChange(setBackupFrequency)}
          />

          <CheckboxGroup
            label="At the time of a failure, do you need to be able to failover your entire infrastructure or just part of it?"
            options={["All", "Part"]}
            selectedOptions={failoverOption}
            onChange={handleCheckboxChange(setFailoverOption)}
          />
        </div>

        {/* Right Column */}
        <div className="grid-item">
          <CheckboxGroup
            label="Do you have any compliance or security requirements?"
            options={["CCPA", "FDCC", "FEDRAMP", "FINRA", "ITAR", "NERC", "FISMA", "GDPR", "HIPPA", "NIST", "None"]}
            selectedOptions={selectedCompliance}
            onChange={handleCheckboxChange(setSelectedCompliance)}
          />
          <div className="input-group">
            <label>Other:</label>
            <input type="text" value={otherText} onChange={handleOtherChange} />
          </div>
        </div>
      </div>

      <div className="grid-container" style={{ display: "grid", gridTemplateColumns: "1fr 1fr" }}>
        <div className="grid-item">
          <label>How much data are you backing up? (Terabytes)</label>
          <input type="text" name="dataAmount" />
        </div>
        <div className="grid-item">
          <label>How many servers are you backing up?</label>
          <input type="text" name="totalServers" />
        </div>
        <div className="grid-item">
          <label>How many servers are physical?</label>
          <input type="text" name="physicalServers" />
        </div>
        <div className="grid-item">
          <label>How many servers are virtual?</label>
          <input type="text" name="virtualServers" />
        </div>
      </div>

      <CheckboxGroup
        label="Are there any non-Windows or Linux devices that need to be included in this backup strategy?"
        options={["Yes", "No"]}
        selectedOptions={nonWindowsLinux}
        onChange={handleCheckboxChange(setNonWindowsLinux)}
      />

      <div className="button-container">
        <Button label="Next Section" onClick={handleNext} />
      </div>

      <PageFooter />
    </div>
  );
};

export default Backup2;
