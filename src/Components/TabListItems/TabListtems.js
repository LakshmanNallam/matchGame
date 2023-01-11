import './index.css'

const TabListItems = props => {
  const {eachItem, tabClicked, currentTab} = props
  const {tabId, displayText} = eachItem

  const tabClickedCall = () => {
    tabClicked(tabId)
  }

  return (
    <li>
      <button
        className={currentTab === tabId ? `btn btn-Selectd` : `btn`}
        type="button"
        onClick={tabClickedCall}
      >
        <h1>{displayText}</h1>
      </button>
    </li>
  )
}

export default TabListItems
