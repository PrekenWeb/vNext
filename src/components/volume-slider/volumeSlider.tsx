import * as React from 'react';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Slider from '@mui/material/Slider';
import { VolumeUp } from '@mui/icons-material';

export default function VolumeSlider() {
  const [value, setValue] = React.useState<number>(30);

  const handleChange = (event: Event, newValue: number | number[]) => {
    setValue(newValue as number);
  };

  return (
    <Box sx={{ width: 200 }}>
      <Stack spacing={0} direction="row" sx={{ mb: 1 }} alignItems="center">
        <VolumeUp sx={{
                height: 14,
                color: "#1274BA",
                '& .MuiSlider-thumb': {
                    color: 'white',
                    height: 25,
                    width: 25,
                }
        }} />
        <Slider aria-label="Volume" value={value} onChange={handleChange}
            sx={{
                height: 5,
                color: "#1274BA",
                '& .MuiSlider-thumb': {
                    color: 'white',
                    height: 18,
                    width: 18,
                }
             }}/>
      </Stack>
    </Box>
  );
}