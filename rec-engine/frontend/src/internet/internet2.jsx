import React, { useState } from "react";
import { GreyTop, ProgressBar, Button, CheckboxGroup, Textbox, PageHeader, PageFooter, QuestionWithInput } from "../global/global-components.jsx";
import { useNavigate } from "react-router-dom";

const Internet2 = () => {
  const [progress, setProgress] = useState(50);
  const navigate = useNavigate(); 
  
  // Separate states for each input
  const [phoneLicenses, setPhoneLicenses] = useState("");
  const [activeUsers, setActiveUsers] = useState("");
  const [courtesyPhones, setCourtesyPhones] = useState("");
  const [physicalDevices, setPhysicalDevices] = useState("");
  const [orgPhoneNumbers, setOrgPhoneNumbers] = useState("");
  const [tollFreeNumbers, setTollFreeNumbers] = useState("");

  // Separate states for textboxes
  const [changeReason, setChangeReason] = useState("");
  const [currentSystemLikes, setCurrentSystemLikes] = useState("");
  const [selectedOptions, setSelectedOptions] = useState([]);
  const [otherText, setOtherText] = useState("");

  const [internet2Q1, setInternet2Q1] = useState([]);
  const [internet2Q2, setInternet2Q2] = useState([]);
  const [internet2Q3, setInternet2Q3] = useState([]);
  const [internet2Q4, setInternet2Q4] = useState([]);
  const [internet2Q5, setInternet2Q5] = useState([]);
  const [internet2Q6, setInternet2Q6] = useState([]);
  const [internet2Q7, setInternet2Q7] = useState([]);
  const [internet2Q8, setInternet2Q8] = useState([]);

  const handleCheckboxChange = (setOption) => (event) => {
    const { value, checked } = event.target;
    setOption((prev) =>
      checked ? [...prev, value] : prev.filter((item) => item !== value)
    );
  };

  const handleNext = () => {
    navigate("/internet3");
  };

  const handleOtherChange = (event) => {
    setOtherText(event.target.value);
  };

  return (
    <div className="form-container">
      <GreyTop></GreyTop>
      <ProgressBar progress={progress} />
      <PageHeader title="Internet Continued" />
      <div className="grid-container" style={{ display: "grid", gridTemplateColumns: "0.05fr 1fr"}}>
        <div className="grid-item">
          <CheckboxGroup
            label="Do you have data centers? If so, how many?"
            options={["Yes", "No"]}
            selectedOptions={internet2Q1}
            onChange={handleCheckboxChange(setInternet2Q1)}
          />
          <CheckboxGroup
            label="Do you currently have firewalls?"
            options={["Yes", "No"]}
            selectedOptions={internet2Q2}
            onChange={handleCheckboxChange(setInternet2Q2)}
          />
          <CheckboxGroup
            label="Do you need to review firewall options?"
            options={["Yes", "No"]}
            selectedOptions={internet2Q3}
            onChange={handleCheckboxChange(setInternet2Q3)}
          />
          <CheckboxGroup
            label="Do you have more than one location?"
            options={["Yes", "No"]}
            selectedOptions={internet2Q4}
            onChange={handleCheckboxChange(setInternet2Q4)}
          />
          <CheckboxGroup
            label="If any, which voice services do you offer?"
            options={["Analog Lines", "POTS", "PRI", "SIP", "Other:", "Not Applicable"]}
            selectedOptions={internet2Q5}
            onChange={handleCheckboxChange(setInternet2Q5)}
            columns={2}
          />
        </div>
        <div className="grid-item">
          <CheckboxGroup
            label="What types of applications are you planning to run on the network?"
            options={["CRM", "Voice", "Encrypted Data", "SAP", "Email", "Large Graphics/Videos", "ERP", "File Sharing", "Office Documents"]}
            selectedOptions={internet2Q6}
            onChange={handleCheckboxChange(setInternet2Q6)}
            columns={2}
          />
          <CheckboxGroup
            label="Is backup connection required?"
            options={["Yes", "No", "Unsure"]}
            selectedOptions={internet2Q7}
            onChange={handleCheckboxChange(setInternet2Q7)}
          />
          <CheckboxGroup
            label="Are static IPs required? If yes, how many?"
            options={["Yes:", "No", "Unsure"]}
            selectedOptions={internet2Q8}
            onChange={handleCheckboxChange(setInternet2Q8)}
          />
        </div>
      </div>
      
      <Button label="Next Page" 
              onClick={() => {
                handleNext();
                setProgress(progress + 25); // Update progress
              }} />
      <PageFooter />
    </div>
  );
};

export default Internet2;