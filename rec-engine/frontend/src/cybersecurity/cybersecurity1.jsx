import React, { useState } from "react";
import { GreyTop, ProgressBar, Button, CheckboxGroup, Textbox, PageHeader, PageFooter, QuestionWithoutInput, SubQuestion } from "../global/global-components.jsx";
import { useNavigate } from "react-router-dom";
import "./cybersecurity.css"

const Cybersecurity = () => {
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
    navigate("/");
  };

  return (
    <div className="form-container">
        <GreyTop></GreyTop>
        <ProgressBar progress={progress} />
        <PageHeader title="Cybersecurity" />

        <Textbox
            label="In a couple of sentences, what do you feel your organization needs the most help with cybersecurity?"
            name="helpDescription"
            value={changeReason}
            onChange={(e) => setChangeReason(e.target.value)}
            placeholder="Type here..."
        />

        <QuestionWithoutInput
            label="How many endpoints?"
        />

        <SubQuestion
            label="# of Mac OS Laptops:"
            name="numMacLaptops"
        />

        <SubQuestion
            label="# of PC Laptops:"
            name="numPCLaptops"
        />

        <div className="spacer"/>
        
        <SubQuestion
                label="# of Mac servers/virtual machines:"
                name="numMacServers"
        />

        <SubQuestion
            label="# of PC servers/virtual machines:"
            name="numPCServers"
        />

        <div className="spacer"/>

        <SubQuestion
            label="# of Apple phones/tablets:"
            name="numApplePhones"
        />

        <SubQuestion
            label="# of Android phones/tablets:"
            name="numAndroidPhones"
        />

        <div className="spacer"/>

        <CheckboxGroup
            label="Has there been a recent event that prompted this discussion of security? If yes, explain"
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

      <PageFooter />
    </div>
  );
};

export default Cybersecurity;