import React, { Component } from "react";
import { AppProvider } from "./AppContext";
import Header from "./Header";
import CenterSection from "./CenterSection";
import Footer from "./Footer";
import ContactMe from "./ContactMe";
import Aboutme from "./Aboutme";
import Myservices from "./Myservices";
import Projects from "./Projects";
class Homepage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      Fname: " ThankGod ",
      Sname: "Munachimso",
      Surn_Name: "Agu",
      location: "Enugu,Nigeria",
      Job: "front-end Developer( reactJs)",
      Image: `./pic1.jpg`,
      academic: {
        University: "Enugu state university of science and technology",
        Degree: "BSc in Computer science",
        Grd_yr: "2018 - 2022",
        Grade: "second class upper",
      },
      Copywrites: new Date().getFullYear(),
      Facebook: "https://www.facebook.com/TGod.munachimso",
      whatsApp: "+2348137808640",
      twitter: "https://twitter.com/i_am_tgodmuna",
      Github: "https://github.com/Tgodmuna",
      linkedIn: "https://www.linkedin.com/in/thankgod-munachimso-1b456515a/",
      Email: "AguthankGod@gmail.com",
      phoneNumber: { home: "+2348137808640", mobile: "+2349064757539" },
      address: "17 Ebila idaw river",
      showContactMe: false,
      show_aboutMe: false,
      show_services: false,
      show_projects: false,
      show_active: false,
    };
  }

  handleContactMe = () => {
    return this.setState({
      showContactMe: true,
      show_aboutMe: false,
      show_services: false,
      show_projects: false,
    });
  };
  handle_aboutMe = () => {
    return this.setState({
      show_aboutMe: true,
      showContactMe: false,
      show_services: false,
      show_projects: false,
    });
  };
  handle_services = () => {
    return this.setState({
      show_services: true,
      showContactMe: false,
      show_aboutMe: false,
      show_projects: false,
    });
  };
  handle_projects = () => {
    return this.setState({
      showContactMe: false,
      show_aboutMe: false,
      show_services: false,
      show_projects: true,
    });
  };

  render() {
    console.log("about is ", this.state.show_aboutMe);
    console.log("project is ", this.state.show_projects);
    console.log("contactme is", this.state.show_projects);
    console.log("myservice is", this.state.show_services);
    let content;
    if (this.state.showContactMe) {
      content = (
        <>
          <ContactMe />
          <Footer />
        </>
      );
    } else if (this.state.show_aboutMe) {
      content = (
        <>
          <Aboutme />
          <Footer />
        </>
      );
    } else if (this.state.show_services) {
      content = (
        <>
          <Myservices />
          <Footer />
        </>
      );
    } else if (this.state.show_projects) {
      content = (
        <>
          <Projects />
          <Footer />
        </>
      );
    } else {
      content = (
        <>
          <CenterSection />
          <Footer Copywrites={this.state.Copywrites} />
        </>
      );
    }

    return (
      <AppProvider
        value={{
          facebook: this.state.Facebook,
          twitter: this.state.twitter,
          Email: this.state.Email,
          linkedIn: this.state.linkedIn,
          Github: this.state.Github,
          whatsApp: this.state.whatsApp,
          school: this.state.academic,
          phoneNumber: this.state.phoneNumber,
          profilePic: this.state.Image,
          job: this.state.Job
        }}>
        <Header
          handleContactMeClick={this.handleContactMe}
          handle_aboutMe_click={this.handle_aboutMe}
          handle_services_click={this.handle_services}
          handle_projects_click={this.handle_projects}
          showContactMe={this.state.showContactMe}
          show_aboutMe={this.state.show_aboutMe}
          show_services={this.state.show_services}
          show_projects={this.state.show_projects}
        />

        {content}
      </AppProvider>
    );
  }
}

export default Homepage;
