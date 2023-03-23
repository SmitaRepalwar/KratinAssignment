import './index.css'

const monthlyCheckup = [
  {text: 'Diabetes', value: 120, id: 1},
  {text: 'Blood Pressure', value: 140, id: 2},
]

const MonthlyCheckup = () => (
  <div className="card-con1">
    <h1 className="heading">Monthly Checkup</h1>
    <ul>
      {monthlyCheckup.map(eachItem => (
        <li key={eachItem.id} className="text">
          <p>
            {eachItem.text} : {eachItem.value}
          </p>
        </li>
      ))}
    </ul>
  </div>
)

export default MonthlyCheckup
