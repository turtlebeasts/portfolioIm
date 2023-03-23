import React, { useContext } from 'react'
import "./contact.css"
import themeContext from '../../context/themecontext'

export default function Contact() {
  const {color} = useContext(themeContext)
  return (
    <div className='contact'>
      <div className="card">
        <h1>Get in touch</h1>
        <p>This mailing system will be available once I find a free way of sending emails.</p>
        <input 
        type="text" placeholder='yourEmail@email.com'
        style={{borderBottomColor: color}}
        />
        <textarea 
        cols="30" 
        rows="5" 
        placeholder='Your message here...'
        style={{borderColor: color}}
        ></textarea>
        <button style={{backgroundColor: color}}>SEND</button>
      </div>
    </div>
  )
}
