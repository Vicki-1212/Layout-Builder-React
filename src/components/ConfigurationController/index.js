import './index.css'
import ConfigurationContext from '../../context/ConfigurationContext'

const ConfigurationController = () => {
  return (
    <ConfigurationContext.Consumer>
      {value => {
        const {
          showContent,
          showLeftNavbar,
          showRightNavbar,
          onToggleShowContent,
          onToggleShowLeftNavbar,
          onToggleShowRightNavbar,
        } = value

        const onChangeContent = () => {
          onToggleShowContent()
        }

        const onChangeLeftNavbar = () => {
          onToggleShowLeftNavbar()
        }

        const onChangeRightNavbar = () => {
          onToggleShowRightNavbar()
        }

        return (
          <div className="top-container">
            <h1 className="top-heading">Layout</h1>
            <div className="checkbox-container">
              <input
                type="checkbox"
                id="checkbox1"
                className="input-checkbox"
                onClick={onChangeContent}
                checked={showContent}
              />
              <label htmlFor="checkbox1" className="label">
                Content
              </label>
            </div>
            <div className="checkbox-container">
              <input
                type="checkbox"
                id="checkbox2"
                className="input-checkbox"
                onClick={onChangeLeftNavbar}
                checked={showLeftNavbar}
              />
              <label htmlFor="checkbox2" className="label">
                Left Navbar
              </label>
            </div>
            <div className="checkbox-container">
              <input
                type="checkbox"
                id="checkbox3"
                className="input-checkbox"
                onClick={onChangeRightNavbar}
                checked={showRightNavbar}
              />
              <label htmlFor="checkbox3" className="label">
                Right Navbar
              </label>
            </div>
          </div>
        )
      }}
    </ConfigurationContext.Consumer>
  )
}

export default ConfigurationController
