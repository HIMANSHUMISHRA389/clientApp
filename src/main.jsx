import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { ChakraProvider, extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  breakpoints: {
    sm: "30em",
    md: "48em",
    lg: "62em",
    xl: "80em",
  },
  // Add any other theme customization here
});
ReactDOM.createRoot(document.getElementById('root')).render(
 <ChakraProvider theme={theme}>
   <App />
 </ChakraProvider>
 
  
)
