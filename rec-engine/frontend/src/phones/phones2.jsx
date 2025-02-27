import React, { useState } from "react";
import { GreyTop, ProgressBar, Button, CheckboxGroup, Textbox, PageHeader, PageFooter, QuestionWithInput } from "../global/global-components.jsx";
import { useNavigate } from "react-router-dom";

const Phones2 = () => {
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

  const [phones2Q1, setPhones2Q1] = useState([]);
  const [phones2Q2, setPhones2Q2] = useState([]);
  const [phones2Q3, setPhones2Q3] = useState([]);
  const [phones2Q4, setPhones2Q4] = useState([]);

  const handleCheckboxChange = (setOption) => (event) => {
    const { value, checked } = event.target;
    setOption((prev) =>
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
      <GreyTop></GreyTop>
      <ProgressBar progress={progress} />
      <PageHeader title="Phones Continued" />
    
      {/* Checkbox */}
      <CheckboxGroup
        label="What phone system do you have today?"
        options={["Avaya", "Cisco", "Mitel", "Nextiva", "Dialpad", "GoTo", "Teams", "Zoom", "RingCentral", "8x8", "Ooma", "Vanage", "3CX", "Microsoft", "Other:"]}
        selectedOptions={phones2Q1}
        onChange={handleCheckboxChange(setPhones2Q1)}
        otherValue={otherText}
        onOtherChange={handleOtherChange}
        columns={2} 
      />
      {/* Checkbox */}
      <CheckboxGroup
        label="What services would you like your system to integrate with?"
        options={["Hubspot", "Google", "Salseforce", "Microsoft", "Zoho", "Other:"]} 
        selectedOptions={phones2Q2}
        onChange={handleCheckboxChange(setPhones2Q2)}
      />
      {/* Checkbox */}
      <CheckboxGroup
        label="Are there any solutions you are already considering?"
        options={["Avaya", "Cisco", "Mitel", "Nextiva", "Dialpad", "GoTo", "Teams", "Other:"]}
        selectedOptions={phones2Q3}
        onChange={handleCheckboxChange(setPhones2Q3)}
      />
      {/* Checkbox */}
      <CheckboxGroup
        label="Do you need call recording?"
        options={["Yes", "No"]} 
        selectedOptions={phones2Q4}
        onChange={handleCheckboxChange(setPhones2Q4)}
      />
      <Button label="Next Page" 
              onClick={() => {
                handleNext();
                setProgress(progress + 25); // Update progress
              }} />
      <PageFooter />
    </div>
  );
};

export default Phones2;