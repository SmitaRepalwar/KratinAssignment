import {Component} from 'react'
import './index.css'

const dailyDiet = [
  {text: 'Had breakfast, What did you had in breakfast?', update: '', id: 1},
  {text: 'Had lunch, What did you had in your lunch?', update: '', id: 2},
  {text: 'Had dinner, What did you ate in your dinner', update: '', id: 3},
]

class DailyDiet extends Component {
  state = {dietList: dailyDiet}

  onChangeInput = event => {
    this.setState(prevState => ({
      dietList: prevState.dietList.map(eachItem => {
        if (this.id === eachItem.id) {
          return {...eachItem, update: event.target.value}
        }
        return eachItem
      }),
    }))
  }

  render() {
    const {dietList} = this.state
    return (
      <div className="card-con">
        <h1 className="heading">Daily Diet</h1>
        <ul>
          {dietList.map(eachItem => (
            <li key={eachItem.id} className="text">
              <p>{eachItem.text}</p>
              {eachItem.update === '' ? (
                <input
                  type="text"
                  onChange={this.onChangeInput}
                  className="input"
                />
              ) : (
                <p>{eachItem.update}</p>
              )}
            </li>
          ))}
        </ul>
      </div>
    )
  }
}
export default DailyDiet
