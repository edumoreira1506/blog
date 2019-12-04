import React from 'react'
import HabilitiesSession from '../components/HabilitiesSession'
import './About.scss'

const languages = [
  {
    name: 'JavaScript',
    percent: 95,
    color: '#f7df1e'
  },
  {
    name: 'PHP',
    percent: 80,
    color: '#556694'
  },
  {
    name: 'Java',
    percent: 65,
    color: '#749bb8'
  },
  {
    name: 'Ruby',
    percent: 40,
    color: '#eb5745'
  }
]

const frameworks = [
  {
    name: 'React',
    percent: 80,
    color: '#53c1de'
  },
  {
    name: 'Rails',
    percent: 50,
    color: '#a33236'
  }
]

const others = [
  {
    name: 'Phosothop (UI/UX)',
    percent: 80,
    color: '#0e4888'
  }
]

const About = () =>
  <div className="About">
    <div className="About__stack">
      <h3>Minha <b>stack:</b></h3>
    </div>
    <div className="About__stacks">
      <HabilitiesSession
        title="Linguagens"
        data={languages}
      />
      <HabilitiesSession
        title="Frameworks"
        data={frameworks}
      />
      <HabilitiesSession
        title="Outros"
        data={others}
      />
    </div>
  </div>

export default About
