import {Component} from 'react'
import './index.css'

const healthCare = [
  {text: 'how long you walk today?', id: 1, update: ''},
  {text: 'how you are feeling today?', id: 2, update: ''},
  {text: 'how was your day today?', id: 3, update: ''},
  {text: 'did you take todays medicine?', id: 4, update: ''},
]

class HealthCare extends Component {
  state = {healthList: healthCare}

  onChangeInput = event => {
    this.setState(prevState => ({
      healthList: prevState.healthList.map(eachItem => {
        if (this.id === eachItem.id) {
          return {...eachItem, update: event.target.value}
        }
        return eachItem
      }),
    }))
  }

  render() {
    const {healthList} = this.state
    return (
      <div className="card-con2">
        <h1 className="heading">Health Care</h1>
        <ul>
          {healthList.map(eachItem => (
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
export default HealthCare
