import {Component} from 'react'
import History from '../HistoryItem'
import './index.css'

class HistoryPage extends Component {
  state = {searchInput: ''}

  onInputChange = event => {
    this.setState({searchInput: event.target.value})
  }

  onDeleteHistory = id => {}

  render() {
    const {historyDetails} = this.props
    const {searchInput} = this.state

    const searchList = historyDetails.filter(each =>
      each.title.toLowerCase().includes(searchInput),
    )
    return (
      <div className="bg-container">
        <div className="top-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/history-website-logo-img.png"
            alt="app logo"
          />
          <div className="input-container">
            <img
              className="search-element"
              src="https://assets.ccbp.in/frontend/react-js/search-img.png"
              alt="search"
            />
            <input
              type="search"
              className="input-element"
              placeholder="Search history"
              value={searchInput}
              onChange={this.onInputChange}
            />
          </div>
        </div>
        <ul className="list-container">
          {searchList.map(eachHistory => (
            <History
              historyDetails={eachHistory}
              key={eachHistory.id}
              onDeleteHistory={this.onDeleteHistory}
            />
          ))}
        </ul>
      </div>
    )
  }
}

export default HistoryPage
