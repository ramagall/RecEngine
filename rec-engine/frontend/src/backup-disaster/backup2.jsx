import React, { useState } from "react";
import { GreyTop, ProgressBar, Button, CheckboxGroup, QuestionWithInput, PageHeader, PageFooter } from "../global/global-components";
import { useNavigate } from "react-router-dom";
import './backup.css';

const Backup2 = () => {
  const navigate = useNavigate();
  const [progress] = useState(75);
  const [selectedCompliance, setSelectedCompliance] = useState([]);
  const [backupFrequency, setBackupFrequency] = useState([]);
  const [failoverOption, setFailoverOption] = useState([]);
  const [nonWindowsLinux, setNonWindowsLinux] = useState([]);

  const handleComplianceChange = (event) => {
    const { value, checked } = event.target;
    setSelectedCompliance(checked
      ? [...selectedCompliance, value]
      : selectedCompliance.filter((item) => item !== value)
    );
  };

  const handleNext = () => {
    navigate("/thanku");
  };

  return (
    <div className="form-container">
      <GreyTop />
      <ProgressBar progress={progress} />
      <PageHeader title="Backup & Disaster Recovery Continued" />

      <div className="form-section">
        <CheckboxGroup
          label="How often would you like to backup your data?"
          options={["Daily", "Weekly", "Monthly", "Semiannually", "Annually"]}
          selectedOptions={backupFrequency}
          onChange={(e) => setBackupFrequency([e.target.value])}
        />

        <CheckboxGroup
          label="Do you have any compliance or security requirements?"
          options={["CCPA", "FDCC", "FEDRAMP", "FINRA", "ITAR", "NERC", "FISMA", "GDPR", "HIPPA", "NIST", "None"]}
          selectedOptions={selectedCompliance}
          onChange={handleComplianceChange}
        />

        <div className="input-group">
          <label>Other:</label>
          <input type="text" name="otherCompliance" />
        </div>
      </div>

      <div className="form-section">
        <CheckboxGroup
          label="At the time of a failure, do you need to be able to failover your entire infrastructure or just part of it?"
          options={["All", "Part"]}
          selectedOptions={failoverOption}
          onChange={(e) => setFailoverOption([e.target.value])}
        />
      </div>

      <div className="form-section">
        <QuestionWithInput label="How much data are you backing up? (Terabytes)" name="dataAmount" />
        <QuestionWithInput label="How many servers are you backing up?" name="totalServers" />
        <QuestionWithInput label="How many servers are physical?" name="physicalServers" />
        <QuestionWithInput label="How many servers are virtual?" name="virtualServers" />
      </div>

      <div className="form-section">
        <CheckboxGroup
          label="Are there any non-Windows or Linux devices that need to be included in this backup strategy?"
          options={["Yes", "No"]}
          selectedOptions={nonWindowsLinux}
          onChange={(e) => setNonWindowsLinux([e.target.value])}
        />
      </div>

      <div className="button-container">
        <Button label="Next Section" onClick={handleNext} />
      </div>

      <PageFooter />
    </div>
  );
};

export default Backup2;
