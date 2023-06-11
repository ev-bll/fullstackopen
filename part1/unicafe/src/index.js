import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Header = (props) => {
  return (
    <h1>
      {props.header}
    </h1>
  )
}

const Button = (props) => {
  return (
    <button onClick={props.onClick}>{props.name}</button>
  )
}

const StatisticLine = (props) => {
  return (
    <tr>
      <td>{props.text}</td><td>{props.value}</td>
    </tr>
  )
}

const Statistics = (props) => {

  if (props.all === 0) {
    return (
      <>
      No feedback given
      </>
    )
  }

  return (
    <>
      <table>
        <tbody>
          <StatisticLine text='good' value={props.good}/>
          <StatisticLine text='neutral' value={props.neutral}/>
          <StatisticLine text='bad' value={props.bad}/>
          <StatisticLine text='all' value={props.all}/>
          <StatisticLine text='average' value={props.average}/>
          <StatisticLine text='positive' value={props.positive + ' %'}/>
        </tbody>
      </table>
    </>
  )
}

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [allClicks, setAll] = useState(0)
  const [average, setAverage] = useState(0)

  const handleSetGood = () => {
    setAll(allClicks + 1)
    setAverage(average + 1)
    setGood(good + 1)
  }
  const handleSetNeutral = () => {
    setAll(allClicks + 1)
    setNeutral(neutral + 1)
  }
  const handleSetBad = () => {
    setAll(allClicks + 1)
    setAverage(average - 1)
    setBad(bad + 1)
  }
  
  const header = {
    feedback: 'give feeedback',
    statistics: 'statistics'
  }

  return (
    <>
      <Header header={header.feedback}/>
      <Button onClick={handleSetGood} name ='good'/>
      <Button onClick={handleSetNeutral} name ='neutral'/>
      <Button onClick={handleSetBad} name ='bad'/>
      <Header header={header.statistics}/>
      <Statistics good={good} neutral={neutral} bad={bad} all={allClicks} average={average/allClicks} positive={(good*100)/allClicks}/>
    </>
  )
}

ReactDOM.render(<App />, 
  document.getElementById('root')
)