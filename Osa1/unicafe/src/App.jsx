import { useState } from 'react'

const StatisticLine = ({text, value}) => {
  return(
    <tr>
      <td>{text}</td>
      <td>{value}</td>
    </tr>
  )
}

const Statistics = (props) => {
  if (props.all === 0){
    return(
      <div>
        <p>No feedback given</p>
      </div>
    )
  }

  return(
    <div>
      <table>
        <tbody>
          <StatisticLine text="Good:" value={props.good}/>
          <StatisticLine text="Neutral:" value={props.neutral}/>
          <StatisticLine text="Bad:" value={props.bad}/>
          <StatisticLine text="All:" value={props.all}/>
          <StatisticLine text="Average:" value={props.avarage}/>
          <StatisticLine text="Positive:" value={`${props.positive} %`}/>
        </tbody>
      </table>
    </div>
  )
}

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  
  const all = good+neutral+bad
  const avarage = (good-bad)/all
  const positive = (good/all)*100

  return (
    <div>
      <h2>give feedback</h2>
      <button onClick={() => setGood(good + 1)}>good</button>
      <button onClick={() => setNeutral(neutral + 1)}>neutral</button>
      <button onClick={() => setBad(bad + 1)}>bad</button>

      <h2>statistics</h2>


      <Statistics
      good={good}
      neutral={neutral}
      bad={bad}
      all={all}
      avarage={avarage}
      positive={positive}/>
      
    </div>
  )
}

export default App