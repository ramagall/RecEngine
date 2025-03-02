import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { GreyTop, ProgressBar, Button, CheckboxGroup, PageHeader, PageFooter } from "../global/global-components.jsx";

const Phones3 = () => {
  const [progress, setProgress] = useState(75);
  const [selectedOptions, setSelectedOptions] = useState([]);

  const [phones3Q1, setPhones3Q1] = useState([]);
  const [phones3Q2, setPhones3Q2] = useState([]);
  const [phones3Q3, setPhones3Q3] = useState([]);
  const [phones3Q4, setPhones3Q4] = useState([]);

  const navigate = useNavigate();

  const handleCheckboxChange = (setOption) => (event) => {
    const { value, checked } = event.target;
    setOption((prev) =>
      checked ? [...prev, value] : prev.filter((item) => item !== value)
    );
  };

  // Handle Navigation Conditionally
  const handleNext = () => {
    const storedOptions = JSON.parse(localStorage.getItem("selectedOptions")) || [];
    if (storedOptions.includes("Backup & Disaster Recovery")) {
      navigate("/backup1"); // Go to backup1 if selected
    } if (storedOptions.includes("Cybersecurity")) {
      navigate("/cybersecurity"); // Go to Cyber1 if selected
    } if (storedOptions.includes("Internet")) {
      navigate("/internet"); // Go to Internet1 if selected
    } else {
      navigate("/thanku");
    }
  };

  return (
    <div className="form-container">
      <GreyTop />
      <ProgressBar progress={progress} />
      <PageHeader title="Phones Continued" />

      {/* Fixed CheckboxGroup with state */}
      <CheckboxGroup
        label="Do you currently have multiple Ethernet ports running to the phones?"
        options={["Yes", "No", "Unsure"]}
        selectedOptions={phones3Q1}
        onChange={handleCheckboxChange(setPhones3Q1)}
      />
      {/* Fixed CheckboxGroup with state */}
      <CheckboxGroup
        label="Are Power over Ethernet (PoE) switches being used?"
        options={["Yes", "No", "Unsure"]}
        selectedOptions={phones3Q2}
        onChange={handleCheckboxChange(setPhones3Q2)}
      />
      {/* Fixed CheckboxGroup with state */}
      <CheckboxGroup
        label="What features are you looking for (select all that apply)?"
        options={["Mobile app", "Desktop app", "Chat capabilites", "Presence indicators", "Video chat", "Screen sharing", "Other:"]}
        selectedOptions={phones3Q3}
        onChange={handleCheckboxChange(setPhones3Q3)}
      />
      {/* Fixed CheckboxGroup with state */}
      <CheckboxGroup
        label="Do you use a fax machine?"
        options={["Yes", "No"]}
        selectedOptions={phones3Q4}
        onChange={handleCheckboxChange(setPhones3Q4)}
      />

      <Button
        label="Next Section"
        onClick={() => {
          handleNext();
          setProgress((prev) => prev + 25);
        }}
      />

      <PageFooter />
    </div>
  );
};

export default Phones3;
