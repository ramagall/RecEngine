import React, { useState } from "react";
import { ProgressBar, Button, CheckboxGroup, Textbox, PageHeader, PageFooter, QuestionWithInput} from "./global/global-components";

const FormPage = () => {
  const [progress, setProgress] = useState(25);
  const [selectedOptions, setSelectedOptions] = useState([]);
  const [textResponse, setTextResponse] = useState("");
  const [serverCount, setServerCount] = useState(""); 

  const handleCheckboxChange = (event) => {
    const { value, checked } = event.target;
    setSelectedOptions((prev) =>
      checked ? [...prev, value] : prev.filter((item) => item !== value)
    );
  };

  return (
    <div className="form-container">
      <ProgressBar progress={progress} />
      <PageHeader title="General Technology" />

      <CheckboxGroup
        label="What IT solutions are you looking for us to help you with? (Select all that apply)"
        options={["Phones", "Internet", "Cybersecurity", "Backup & Disaster Recovery", "Cameras & Access Control"]}
        selectedOptions={selectedOptions}
        onChange={handleCheckboxChange}
      />

      <Textbox
        label="Describe your organization’s technological needs and any planned IT projects."
        name="techNeeds"
        value={textResponse}
        onChange={(e) => setTextResponse(e.target.value)}
        placeholder="Type here..."
      />

      <QuestionWithInput
        label="How many servers are you backing up