import React, { useState } from "react";
import { GreyTop, ProgressBar, Button, CheckboxGroup, Textbox, PageHeader, PageFooter, QuestionWithInput } from "../global/global-components.jsx";
import { useNavigate } from "react-router-dom";

const Phones = () => {
  const [progress, setProgress] = useState(25);
  
  // Separate states for each input
  const navigate = useNavigate();
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

  const handleCheckboxChange = (event) => {
    const { value, checked } = event.target;
    setSelectedOptions((prev) =>
      checked ? [...prev, value] : prev.filter((item) => item !== value)
    );
  };

  const handleNext = () => {
    navigate("/phones2");
  };

  return (
    <div className="form-container">
      <GreyTop></GreyTop>
      <ProgressBar progress={progress} />
      <PageHeader title="Let's Talk Phones" />

      <QuestionWithInput
        label="Number of employees requiring phone licensing:"
        name="phoneLicenses"
        value={phoneLicenses}
        onChange={(e) => setPhoneLicenses(e.target.value)}
        placeholder=" "
      />
      <QuestionWithInput
        label="How many active users?"
        name="activeUsers"
        value={activeUsers}
        onChange={(e) => setActiveUsers(e.target.value)}
        placeholder=" "
      />
      <QuestionWithInput
        label="How many courtesy phones? (for public use)"
        name="courtesyPhones"
        value={courtesyPhones}
        onChange={(e) => setCourtesyPhones(e.target.value)}
        placeholder=" "
      />
      <QuestionWithInput
        label="Number of employees requiring a physical device:"
        name="physicalDevices"
        value={physicalDevices}
        onChange={(e) => setPhysicalDevices(e.target.value)}
        placeholder=" "
      />
      <QuestionWithInput
        label="How many phone numbers does the organization have?"
        name="orgPhoneNumbers"
        value={orgPhoneNumbers}
        onChange={(e) => setOrgPhoneNumbers(e.target.value)}
        placeholder=" "
      />
      <QuestionWithInput
        label="How many toll-free numbers?"
        name="tollFreeNumbers"
        value={tollFreeNumbers}
        onChange={(e) => setTollFreeNumbers(e.target.value)}
        placeholder=" "
      />

      {/* Textbox Inputs */}
      <Textbox
        label="Why are you considering a change from your current system?"
        name="changeReason"
        value={changeReason}
        onChange={(e) => setChangeReason(e.target.value)}
        placeholder="Type here..."
      />
      <Textbox
        label="What do you like about your current system?"
        name="currentSystemLikes"
        value={currentSystemLikes}
        onChange={(e) => setCurrentSystemLikes(e.target.value)}
        placeholder="Type here..."
      />

      {/* Checkbox */}
      <CheckboxGroup
        label="Do you require advanced reporting or analytics?"
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

export default Phones;
