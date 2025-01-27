import { useState, useEffect } from 'react';
import { Switch, FormControlLabel } from '@mui/material';

function DarkModeToggle() {
    const [darkMode, setDarkMode] = useState(false);

    // Apply the theme class to the body
    useEffect(() => {
        if (darkMode) {
            document.body.classList.add('dark-mode');
        } else {
            document.body.classList.remove('dark-mode');
        }
    }, [darkMode]);

    return (
        <div className='dark-mode-toggle'>
        <FormControlLabel
            control={
                <Switch
                    checked={darkMode}
                    onChange={(e) => setDarkMode(e.target.checked)}
                    sx={{
                        '& .MuiSwitch-switchBase.Mui-checked': {
                            color: '#fff824', // Yellow thumb when toggled
                        },
                        '& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track': {
                            backgroundColor: '#fff824', // Yellow track when toggled
                        },
                    }}
                />
            }
            label={darkMode ? 'Dark Mode' : 'Light Mode'}
            sx={{
                color: darkMode ? '#FFFFFF' : '#000000', // Text color changes based on the darkMode state
                transition: 'color 0.3s ease', // Smooth transition for text color
            }}
        />
        </div>
    );
}

export default DarkModeToggle;
