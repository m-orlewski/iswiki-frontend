import React from 'react';
// add when push on heroku
// import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { AuthProvider } from './context/AuthProvider';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
// delete when push on heroku
import { createRoot } from "react-dom/client";
// delete when push on heroku
const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

// delete when push on heroku
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthProvider>
        <Routes>
          <Route path="/*" element={<App />} />
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  </React.StrictMode>
);

// add when push on heroku
// ReactDOM.render(
//   <React.StrictMode>
//     <BrowserRouter>
//       <AuthProvider>
//         <Routes>
//           <Route path="/*" element={<App />} />
//         </Routes>
//       </AuthProvider>
//     </BrowserRouter>
//   </React.StrictMode>,
//   document.getElementById('root')
// );