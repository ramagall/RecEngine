import Box from '@mui/material/Box';
import { TextField } from '@mui/material';
import './LandingPage.css'

function LandingPageTextFields() {
    return(
        <>
        <div className="textFields">
            <Box className="textFields"
            component="form"
            sx={{ '& .MuiTextField-root': { m: 1, width: '50ch' } }}
            noValidate
            autoComplete="off"
            >
                <div>
                <TextField 
                size ='small' 
                id="first-name-field" 
                label="First Name" 
                variant="outlined" 
                />
                <TextField 
                    size ='small' 
                    id="last-name-field" 
                    label="Last Name" 
                    variant="outlined" 
                    />
                </div>
                <div>
                <TextField 
                    size ='small' 
                    id="phone-number-field" 
                    label="Phone Number" 
                    variant="outlined" 
                    />
                <TextField 
                    size ='small' 
                    id="email-field" 
                    label="Email" 
                    variant="outlined" 
                    />
                </div>
                <div>
                <TextField
                    size ='small' 
                    id="org-name-field" 
                    label="Organization Name" 
                    variant="outlined" 
                    />
                <TextField 
                    size ='small' 
                    id="address-field-one" 
                    label="Address Line 1" 
                    variant="outlined" 
                    />
                </div>
                <div>
                <TextField
                    size ='small' 
                    id="address-field-2" 
                    label="Address Line 2" 
                    variant="outlined" 
                    />
                <TextField 
                    size ='small' 
                    id="city-field" 
                    label="City" 
                    variant="outlined" 
                    />
                </div>
                <div>
                <TextField
                    size ='small' 
                    id="state-field" 
                    label="State" 
                    variant="outlined" 
                    />
                <TextField 
                    size ='small' 
                    id="zip-code-field" 
                    label="Zip Code" 
                    variant="outlined" 
                    />
                    </div>
            </Box>
            </div>
        </>
    );
}

export default LandingPageTextFields