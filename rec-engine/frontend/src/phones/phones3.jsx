import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { GreyTop, ProgressBar, Button, CheckboxGroup, PageHeader, PageFooter } from "../global/global-components.jsx";

const Phones3 = () => {
  const [progress, setProgress] = useState(75);
  const [selectedOptions, setSelectedOptions] = useState([]);
  const navigate = useNavigate();

  const handleCheckboxChange = (event) => {
    const { value, checked } = event.target;
    setSelectedOptions((prev) =>
      checked ? [...prev, value] : prev.filter((item) => item !== value)
    );
  };

  // Handle Navigation Conditionally
  const handleNext = () => {
    const storedOptions = JSON.parse(localStorage.getItem("selectedOptions")) || [];

    if (storedOptions.includes("Internet")) {
      navigate("/internet"); // Go to Internet1 if selected
    } if (storedOptions.includes("Cybersecurity")) {
      navigate("/cyber1"); // Go to Cyber1 if selected
    } if (storedOptions.includes("Backup & Disaster Recovery")) {
      navigate("/backup1"); // Go to backup1 if selected
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
        selectedOptions={selectedOptions}
        onChange={handleCheckboxChange}
      />
      {/* Fixed CheckboxGroup with state */}
      <CheckboxGroup
        label="Are Power over Ethernet (PoE) switches being used?"
        options={["Yes", "No", "Unsure"]}
        selectedOptions={selectedOptions}
        onChange={handleCheckboxChange}
      />
      {/* Fixed CheckboxGroup with state */}
      <CheckboxGroup
        label="What features are you looking for (select all that apply)?"
        options={["Mobile app", "Desktop app", "Chat capabilites", "Presence indicators", "Video chat", "Screen sharing", "Other:"]}
        selectedOptions={selectedOptions}
        onChange={handleCheckboxChange}
      />
      {/* Fixed CheckboxGroup with state */}
      <CheckboxGroup
        label="Do you use a fax machine?"
        options={["Yes", "No"]}
        selectedOptions={selectedOptions}
        onChange={handleCheckboxChange}
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
