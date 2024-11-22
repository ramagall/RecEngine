import React from 'react';
import './LandingPage.css'; // Ensure styles are consistent with the uploaded files

const GeneralTechnologies = () => {
    return (
        <div className="landingPageHeader">
            <h1 className="tagLine">General Technologies</h1>
            <p className="landingPageSubtitle">
                What technologies are you interested in? Mark all that apply.
            </p>
            <div className="textFields">
                <div className="textFieldHelper">
                    <label>
                        <input type="checkbox" name="computers" /> Computers
                    </label>
                    <label>
                        <input type="checkbox" name="networking" /> Networking
                    </label>
                    <label>
                        <input type="checkbox" name="software" /> Software Development
                    </label>
                    <label>
                        <input type="checkbox" name="ai" /> Artificial Intelligence
                    </label>
                    <label>
                        <input type="checkbox" name="iot" /> Internet of Things (IoT)
                    </label>
                </div>
                <textarea
                    className="textField"
                    placeholder="In a couple of sentences, describe your interests and any specific needs in these areas."
                />
            </div>
            <div className="landingButtonBox">
                <button className="landingButton">Next Section</button>
            </div>
        </div>
    );
};

export default GeneralTechnologies;
