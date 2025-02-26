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

  const handleCheckboxChange = (event) => {
    const { value, checked } = event.target;
    setSelectedOptions((prev) =>
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
        selectedOptions={selectedOptions}
        onChange={handleCheckboxChange}
        otherValue={otherText}
        onOtherChange={handleOtherChange}
        columns={2} 
      />
      {/* Checkbox */}
      <CheckboxGroup
        label="What services would you like your system to integrate with?"
        options={["Hubspot", "Google", "Salseforce", "Microsoft", "Zoho", "Other:"]} 
        selectedOptions={selectedOptions}
        onChange={handleCheckboxChange}
      />
      {/* Checkbox */}
      <CheckboxGroup
        label="Are there any solutions you are already considering?"
        options={["Avaya", "Cisco", "Mitel", "Nextiva", "Dialpad", "GoTo", "Teams", "Other:"]}
        selectedOptions={selectedOptions}
        onChange={handleCheckboxChange}
      />
      {/* Checkbox */}
      <CheckboxGroup
        label="Do you need call recording?"
        options={["Yes", "No"]} 
        selectedOptions={selectedOptions}
        onChange={handleCheckboxChange}
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