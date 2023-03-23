import DailyDiet from './component/DailyDiet'
import HealthCare from './component/HealthCare'
import MonthlyCheckup from './component/MonthlyCheckup'
import './App.css'

const App = () => {
  const date = new Date()

  const time = date.getHours()

  const getTime = () => {
    switch (time) {
      case time >= 6 && time < 12:
        return 'Good Morning'
      case time >= 12 && time < 15:
        return 'Good Afternoon'
      case time >= 15 && time < 20:
        return 'Good Evening'
      default:
        return null
    }
  }

  return (
    <div className="bg-con">
      <h1>Hi Sunita! {getTime()}</h1>
      <div className="box-con">
        <DailyDiet />
        <HealthCare />
        <MonthlyCheckup />
      </div>
    </div>
  )
}

export default App
