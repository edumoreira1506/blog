import React, { useState } from 'react'
import { Line } from 'rc-progress'
import './Chart.scss'

const Chart = ({
  color,
  percentage,
  label
}) => {
  const [percent, setPercent] = useState(0)

  setTimeout(() => {
    setPercent(percentage)
  }, 500)

  return (
    <div className="Chart">
      <label className="Chart__label">
        { label }
      </label>
      <Line percent={percent} strokeWidth="1" strokeColor={color} />
    </div>
  )
}

export default Chart
