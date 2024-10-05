// import { StrictMode } from 'react'
// import { createRoot } from 'react-dom/client'
// import App from './App.jsx'
// import './index.css'

// createRoot(document.getElementById('root')).render(
//   <StrictMode>
//     <App />
//   </StrictMode>,
// )

import React from "react";
import { render } from 'react-dom';
import { ChakraProvider } from "@chakra-ui/react";



function App() {
  return (
    <ChakraProvider>
      
    </ChakraProvider>
  )
}

const rootElement = document.getElementById("root")
render(<App />, rootElement)