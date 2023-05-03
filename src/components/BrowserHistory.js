import './BrowserHistory.css'

const BrowserHistory = props => {
  const {history, deleteHistory, searchResultsLength} = props
  const {timeAccessed, logoUrl, title, domainUrl, id} = history

  console.log(searchResultsLength)

  const onDeleteHistory = () => {
    deleteHistory(id)
  }

  if (searchResultsLength === 0) {
    return (
      <li>
        <center>There is no history to show </center>
      </li>
    )
  }

  return (
    <li>
      <div className="container">
        <div className="history-item">
          <div>
            <p className="time">{timeAccessed}</p>
          </div>
          <div className="link-button-container">
            <div className="link-container">
              <img className="logo" alt="domain logo" src={logoUrl} />
              <p className="text">{title}</p>
              <p className="link-text">{domainUrl}</p>
            </div>
          </div>
        </div>
        <div>
          <button
            data-testId={id}
            onClick={onDeleteHistory}
            className="button"
            type="button"
          >
            <img
              alt="delete"
              src="https://assets.ccbp.in/frontend/react-js/delete-img.png "
            />
          </button>
        </div>
      </div>
    </li>
  )
}

export default BrowserHistory
