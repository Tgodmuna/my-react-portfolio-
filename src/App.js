import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import UpdatedCenterSection from "./Components/UpdatedCenterSection";
import ContactMe from "./Components/UpdatedContact";
import UpdatedHomepage from "./Components/UpdatedHomepage";
import UpdatedProjects from "./Components/UpdatedProjects";
import UpdatedMyservices from "./Components/UpdatedMyservices";
import UpdatedHeader from "./Components/UpdatedHeader";
import UpdatedAboutme from "./Components/UpdatedAboutme";
export const UserData = React.createContext();

function App() {
  const [state, setstate] = useState({
    Bio: {
      Fname: " ThankGod ",
      Sname: "Munachimso",
      Surn_Name: "Agu",
      location: "Enugu,Nigeria",
    },
    others: {
      Job: "front-end Developer( reactJs)",
      Image: `./pic1.jpg`,
      Copywrites: new Date().getFullYear(),
    },
    academic: {
      University: "Enugu state university of science and technology",
      Degree: "BSc in Computer science",
      Grd_yr: "2018 - 2022",
      Grade: "second class upper",
    },
    social: {
      Facebook: "https://www.facebook.com/TGod.munachimso",
      whatsApp: "+2348137808640",
      twitter: "https://twitter.com/i_am_tgodmuna",
      Github: "https://github.com/Tgodmuna",
      linkedIn: "https://www.linkedin.com/in/thankgod-munachimso-1b456515a/",
    },
    contactInfo: {
      Email: "AguthankGod@gmail.com",
      phoneNumber: { home: "+2348137808640", mobile: "+2349064757539" },
      address: "17 Ebila idaw river",
    },
  });
  const { Facebook, twitter, Github, linkedIn, whatsApp } = state.social;
  const { Email, phoneNumber, address } = state.contactInfo;
  const { University, Degree, Grade, Grd_yr } = state.academic;
  const { Image, Copywrites, Job } = state.others;

  return (
    <UserData.Provider
      value={{
        F: Facebook,
        T: twitter,
        E: Email,
        L: linkedIn,
        G: Github,
        W: whatsApp,
        Uni: University,
        degree: Degree,
        grade: Grade,
        gradYr: Grd_yr,
        phoneNumber: phoneNumber,
        profilePic: Image,
        job: Job,
        address: address,
        copywrite: Copywrites,
      }}>
      <div className='App'>
        <UpdatedHeader />
        <Routes>
          <Route path='/' element={<UpdatedHomepage />} />
          <Route exact path='/contactMe' element={<ContactMe />} />
          <Route exact path='/About' element={<UpdatedAboutme />} />
          <Route exact path='/center' component={<UpdatedCenterSection />} />
          <Route path='projects' element={<UpdatedProjects />} />
          <Route path='services' element={<UpdatedMyservices />} />
        </Routes>
      </div>
    </UserData.Provider>
  );
}

export default App;
