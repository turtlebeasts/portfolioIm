import React from 'react'
import Skills from '../Skills/Skills'
import "./resume.css"

const skills = [
  {
    language: "HTML",
    proficiency: 100
  },
  {
    language: "CSS",
    proficiency: 60
  },
  {
    language: "JavaScript",
    proficiency: 90
  },
  {
    language: "NodeJS",
    proficiency: 80
  },
  {
    language: "ReactJS",
    proficiency: 85
  },
  {
    language: "PHP",
    proficiency: 100
  },
  {
    language: "C",
    proficiency: 70
  },
  {
    language: "C++",
    proficiency: 50
  },
]

export default function Resume() {
  return (
    <div className='resume'>
      <div className="card">
        <small style={{color: "red"}}>Resume download comming soon!</small>
        <h1>My resume</h1>
        {
          skills.map(item=><Skills title={item.language} prof={item.proficiency}/>)
        }
      </div>
    </div>
  )
}
