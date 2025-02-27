import React, { useState } from "react";
import { GreyTop, ProgressBar, Button, CheckboxGroup, Textbox, PageHeader, PageFooter,QuestionWithInput ,QuestionWithoutInput, SubQuestion } from "../global/global-components.jsx";
import { useNavigate } from "react-router-dom";
import "./cybersecurity.css"

const Cybersecurity3 = () => {
  const [progress, setProgress] = useState(25);
  
  // Separate states for each input
  const navigate = useNavigate();

  // Separate states for textboxes
  const [changeReason, setChangeReason] = useState("");
  const [currentSystemLikes, setCurrentSystemLikes] = useState("");

  const [selectedOptions, setSelectedOptions] = useState([]);

  const handleCheckboxChange = (setOption) => (event) => { 
    const { value, checked } = event.target;
    setOption((prev) =>
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
        <PageHeader title="Cybersecurity Continued" />

        <Textbox
            label="List some of the most common cloud apps or services your organization uses:"
        />

        <Textbox
            label="What other apps are critical to your organization? Briefly explain how they are set up."
        />

        <Textbox
            label="What cybersecurity solutions are you already considering?"
        />

        <Textbox
            label="When does your current contact expire with you cybersecurity vendor? List date and vendor(s)."
        />

        <Textbox
            label="In a couple of sentences, what is your biggest security concern today or in the future?"
        />

        <QuestionWithInput
            label="How many locations do you have?"
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

export default Cybersecurity3;