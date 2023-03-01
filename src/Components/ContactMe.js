import React, { useState } from "react";
import styles from "./ContactMe.module.css";
import { AppConsumer } from "./AppContext";

const ContactMe = () => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleFormSubmit = (e) => {
    e.preventDefault();
    try {
      alert("submit successful");
    } catch (error) {
      alert(error);
    }
  };

  return (
    <AppConsumer>
      {(context) => {
        const { facebook, twitter, linkedIn, Github, Email, phoneNumber } = context;
        const {home,mobile}=phoneNumber
        return (
          <div className={styles.form_holder}>
            <div className={styles.form_header}>
              <h1>Get in Touch</h1>
            </div>

            <form onSubmit={handleFormSubmit}>
              <div className={styles["input-wrapper"]}>
                <input
                  type='text'
                  id='fullname'
                  placeholder='Full Name'
                  className={styles.FN}
                  name='fullname'
                  required
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                />
                <label htmlFor='fullname'>Full Name:</label>
              </div>

              <div className={styles["input-wrapper"]}>
                <input
                  type='email'
                  id='email'
                  name='email'
                  required
                  placeholder='Your Email Address'
                  className={styles.email}
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <label htmlFor='email'>Email:</label>
              </div>

              <div className={styles["input-wrapper"]}>
                <textarea
                  id='message'
                  name='message'
                  cols='30'
                  rows='10'
                  className={styles.message}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                />{" "}
                <label htmlFor='message'>Message:</label>
              </div>

              <button className={styles.btn} type='submit'>
                Submit
              </button>
            </form>

            <div className={styles.social}>
              <ul>
                <li>
                  <a href={facebook}>Facebook</a>{" "}
                </li>
                <li>
                  <a href={twitter}>Twitter</a>{" "}
                </li>
                <li>
                  <a href={linkedIn}>LinkedIn</a>
                </li>
                <li>
                  <a href={Github}>GitHub</a>
                </li>
                <li>
                  <a href={`mailto:${Email}`}>Email</a>
                </li>
                <li>
                  <a href={`tel:${home}`}>Phone1</a>
                </li>
                <li>
                  <a href={`tel:${mobile}`}>Phone2</a>
                </li>
              </ul>
            </div>
          </div>
        );
      }}
    </AppConsumer>
  );
};

export default ContactMe;
