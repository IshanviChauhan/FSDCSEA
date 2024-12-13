// import React from "react";
// import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./Login";
import Registration from "./Registration";
import MainLayout from "./MainLayout";
// import StudentState from "./StudentState";
// import ImageManipulation from "./ImageManipulation";

function App() {
  // const[regData,setRegData] = useState();

  return (
    // <div style={{display:"flex"}}> 
      // {/* <ImageManipulation/> */}
    
    // <div style={{display:"flex", flexDirection:"column", marginLeft:"40px", gap:"40px"}}>
    //   <div>{JSON.stringify(regData)}</div>
    //   <Login loginData={regData}/>
    //   <h3>Registration Form</h3>
    //   <Registration registrationData={setRegData}/>
    // </div>

    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainLayout />}>
          <Route path="/login" element={<Login />}/>
          <Route path="/registration" element={<Registration />}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
