import './index.css'

const History = props => {
  const {historyDetails, onDeleteHistory} = props
  const {timeAccessed, id, logoUrl, title, domainUrl} = historyDetails

  const onDelete = () => {
    onDeleteHistory(id)
  }
  return (
    <li>
      <div className="list-history-container">
        <p>{timeAccessed}</p>
        <div className="list-history-container2">
          <img src={logoUrl} alt="domain logo" className="image" />
          <p>{title}</p>
          <p> {domainUrl}</p>
        </div>
        <button type="button" data-testid="delete" onClick={onDelete}>
          <img
            src="https://assets.ccbp.in/frontend/react-js/delete-img.png "
            alt="delete"
          />
        </button>
      </div>
    </li>
  )
}

export default History
