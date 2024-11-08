import Box from '@mui/material/Box';
import { TextField } from '@mui/material';
import './LandingPage.css'

function LandingPageTextFields() {
    return(
        <>
        <div className="textFields">
                <div className='textFieldHelper'>
                <TextField 
                size ='small' 
                id="first-name-field" 
                label="First Name" 
                variant="outlined" 
                className="textField"
                />
                <TextField 
                    size ='small' 
                    id="last-name-field" 
                    label="Last Name" 
                    variant="outlined" 
                    className="textField"
                    />
                </div>
                <div className='textFieldHelper'>
                <TextField 
                    size ='small' 
                    id="phone-number-field" 
                    label="Phone Number" 
                    variant="outlined" 
                    className="textField"
                    />
                <TextField 
                    size ='small' 
                    id="email-field" 
                    label="Email" 
                    variant="outlined"
                    className="textField"
                    />
                </div>
                <div className='textFieldHelper'>
                <TextField
                    size ='small' 
                    id="org-name-field" 
                    label="Organization Name" 
                    variant="outlined" 
                    className="textField"
                    />
                <TextField 
                    size ='small' 
                    id="address-field-one" 
                    label="Address Line 1" 
                    variant="outlined" 
                    className="textField"
                    />
                </div>
                <div className='textFieldHelper'>
                <TextField
                    size ='small' 
                    id="address-field-2" 
                    label="Address Line 2" 
                    variant="outlined" 
                    className="textField"
                    />
                <TextField 
                    size ='small' 
                    id="city-field" 
                    label="City" 
                    variant="outlined" 
                    className="textField"
                    />
                </div>
                <div className='textFieldHelper'>
                <TextField
                    size ='small' 
                    id="state-field" 
                    label="State" 
                    variant="outlined" 
                    className="textField"
                    />
                <TextField 
                    size ='small' 
                    id="zip-code-field" 
                    label="Zip Code" 
                    variant="outlined" 
                    className="textField"
                    />
                    </div>
            </div>
        </>
    );
}

export default LandingPageTextFields