import React, { useState } from "react";
import { GreyTop, ProgressBar, Button, CheckboxGroup, Textbox, PageHeader, PageFooter,QuestionWithInput ,QuestionWithoutInput, SubQuestion } from "../global/global-components.jsx";
import { useNavigate } from "react-router-dom";
import "./cybersecurity.css"

const Cybersecurity2 = () => {
  const [progress, setProgress] = useState(25);
  
  // Separate states for each input
  const navigate = useNavigate();

  // Separate states for textboxes
  const [changeReason, setChangeReason] = useState("");
  const [currentSystemLikes, setCurrentSystemLikes] = useState("");

  const [selectedOptions, setSelectedOptions] = useState([]);

  const [cyber2Q1, setCyber2Q1] = useState([]);

  const handleCheckboxChange = (setOption) => (event) => {
    const { value, checked } = event.target;
    setOption((prev) =>
      checked ? [...prev, value] : prev.filter((item) => item !== value)
    );
  };

  const handleNext = () => {
    navigate("/cybersecurity3");
  };

  return (
    <div className="form-container">
        <GreyTop></GreyTop>
        <ProgressBar progress={progress} />
        <PageHeader title="Cybersecurity Continued" />

        <CheckboxGroup
            label="What is your current email platform and license type/tier?"
            options={["Microsoft", "Google", "Other"]} 
            selectedOptions={cyber2Q1}
            onChange={handleCheckboxChange(setCyber2Q1)}
        />

        <SubQuestion
            label="Type and teir:"
            name="numAndroidPhones"
        />

        <QuestionWithInput
            label="Number of active users on email:"
        /> 

        <QuestionWithInput
            label="Number of inactive accounts on email:"
        />

        <QuestionWithoutInput
                    label="How many network devices (and their manufactuer)"
                />
        
                <SubQuestion
                    label="# of routers:"
                    name="numMacLaptops"
                />
        
                <SubQuestion
                    label="brand:"
                    name="numPCLaptops"
                />
        
                <div className="spacer"/>
                
                <SubQuestion
                        label="# of switches:"
                        name="numMacServers"
                />
        
                <SubQuestion
                    label="brand:"
                    name="numPCServers"
                />
        
                <div className="spacer"/>
        
                <SubQuestion
                    label="# of firewalls:"
                    name="numApplePhones"
                />
        
                <SubQuestion
                    label="brand:"
                    name="numAndroidPhones"
                />
        
                <div className="spacer"/>

                <SubQuestion
                    label="# of access points:"
                    name="numApplePhones"
                />
        
                <SubQuestion
                    label="brand:"
                    name="numAndroidPhones"
                />
        
                <div className="spacer"/>   

        <Button label="Next Page" 
            onClick={() => {
            handleNext(); 
            setProgress(progress + 25); // Update progress
            }} 
        />
    </div>
  );
};

export default Cybersecurity2;