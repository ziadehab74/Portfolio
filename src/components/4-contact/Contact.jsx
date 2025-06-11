import React from 'react'
import './contact.css'
export default function Contact() {
  return (
    <section className="contact-us">
      <h1 className="title">
        <span className='icon-envelope'></span> Contact us
      </h1>
      <p className="sub-title">
        Contact us for more information and Get notified when I publish
        something new.
      </p>
      <div className="flex">
        <form action="" >
          <div className='flex'>
          <label htmlFor="email">Email Address:</label>
          <input required type="email" id='email' name='email' />
          </div>
          <div className="flex" style={{ marginTop: "24px" }}>
            <label htmlFor="message">Your message:</label>
            <textarea required name="message" id="message"></textarea>
            
          </div>
          <button className='submit'>submit</button>
        </form>

      </div>
    </section>
  )
}
