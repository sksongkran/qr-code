import { Box, createTheme, ThemeProvider } from '@mui/material';
import { blue } from '@mui/material/colors';
import React from 'react'
import Cardqr from './components/Cardqr';


type Props = {}

export default function App({}: Props) {
  return (
    <Box>
    <Cardqr/>
    </Box>
   
  )
}