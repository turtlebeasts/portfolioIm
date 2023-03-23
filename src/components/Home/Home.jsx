import React, { useContext } from 'react'
import themeContext from '../../context/themecontext'
import "./home.css"

export default function Home() {
  const {color} = useContext(themeContext)
  return (
    <div className='home'>
      <div className="card">
        <img 
        src="https://avatars.githubusercontent.com/u/52573759?v=4" alt="turtleshells" 
        className='avatar'
        />
        <h1 style={{color: color}}>Turtlebeasts</h1>
        <p>Web developer/programmer</p>
        <p>(<small>And I'm not a template user</small>)</p>
      </div>
    </div>
  )
}
