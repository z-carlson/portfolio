import React, { useState } from "react";
import { Link } from "gatsby";
import Layout from "../components/layout";
import styles from "./contact.module.css"

function Contact(props) {
  const [name, setName] = useState("")
  const [org, setOrg] = useState("")
  const [email, setEmail] = useState("")
  const [subject, setSubject] = useState("Job Opportunity")
  const [message, setMessage] = useState("")
  

  const handleSubmit = (evt) => {
    evt.preventDefault();
    console.log("name: " + name);
    console.log("org: " + org);
    console.log("email: " + email);
    console.log("subject: " + subject);
    console.log("message: " + message);    
  } 

  return (
    <Layout>
      <h1>CONTACT</h1>
      <form 
        className={styles.contactForm} 
        onSubmit={handleSubmit}
        method="post"
        action="https://formspree.io/email@domain.tld"
        >
        <label className={styles.textLabel} htmlFor="name">Name</label>
        <input
          type="text"
          id="name"
          className={styles.neuomorphism}
          value={name}
          onChange={e => setName(e.target.value)}
          required
        />
        <label className={styles.textLabel} htmlFor="org">Organization (Optional)</label>
        <input
          type="text"
          id="org"
          className={styles.neuomorphism}
          value={org}
          onChange={e => setOrg(e.target.value)}
        />
        <label className={styles.textLabel} htmlFor="email">Your Email Address</label>
        <input
          type="email"
          name="_replyto"
          id="email"
          className={styles.neuomorphism}
          value={email}
          onChange={e => setEmail(e.target.value)}
          required
        />      
        <label className={styles.textLabel} htmlFor="subject">Subject</label>
        <input
          type="text"
          id="subject"
          className={styles.neuomorphism}
          value={subject}
          placeholder="Job Opportunity"
          onChange={e => setSubject(e.target.value)}
        />
        <label className={styles.textLabel} htmlFor="message">Message</label>
        <textarea
          id="message"
          name="message"
          className={styles.neuomorphism}
          value={message}
          required
          onChange={e => setMessage(e.target.value)}
          rows="5"
          cols="33">            
        </textarea>

        <input id={styles.submit} type="submit" value="Submit" />
      </form>
    </Layout>
  )
}

export default Contact;