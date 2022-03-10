import * as React from 'react';

import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';

export default function TimeSlider() {
  return (
      <Slider defaultValue={80} aria-label="Default"
            sx={{
                height: 11,
                color: "#1274BA",
                '& .MuiSlider-thumb': {
                    color: 'white',
                    height: 22,
                    width: 22,
                }
        }}/>
  );
}