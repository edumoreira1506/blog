import React from 'react'
import Chart from '../Chart'
import './HabilitiesSession.scss'

const HabilitiesSession = ({
  title,
  data
}) =>
  <div className="HabilitiesSession">
    <h3 className="HabilitiesSession__title">
      { title }
    </h3>
    {
      data.map(item =>
        <div
          className="HabilitiesSession__chart"
          key={item.color}
        >
          <Chart
            color={item.color}
            percentage={item.percent}
            label={item.name}
            key={item.name}
          />
        </div> 
      )
    }
  </div>

export default HabilitiesSession
