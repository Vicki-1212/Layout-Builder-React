import './index.css'
import ConfigurationContext from '../../context/ConfigurationContext'

const Body = () => {
  return (
    <ConfigurationContext.Consumer>
      {value => {
        const {showContent, showLeftNavbar, showRightNavbar} = value

        return (
          <div className="body-container">
            {showLeftNavbar && (
              <div className="left-navbar-container">
                <h1 className="left-navbar-heading">Left Navbar Menu</h1>
                <ul className="left-nav-bar-list-container">
                  <li className="left-nav-bar-list-items">Item 1</li>
                  <li className="left-nav-bar-list-items">Item 2</li>
                  <li className="left-nav-bar-list-items">Item 3</li>
                  <li className="left-nav-bar-list-items">Item 4</li>
                </ul>
              </div>
            )}

            {showContent && (
              <div className="content-container">
                <h1 className="content-heading">Content</h1>
                <p className="content-description">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolor mangna aliqua.
                  Ut enim ad minim veniam.
                </p>
              </div>
            )}

            {showRightNavbar && (
              <div className="right-navbar-container">
                <h1 className="right-navbar-heading">Right Navbar</h1>
                <div className="ad-container">
                  <p className="ad-description">Ad 1</p>
                </div>
                <div className="ad-container">
                  <p className="ad-description">Ad 2</p>
                </div>
              </div>
            )}
          </div>
        )
      }}
    </ConfigurationContext.Consumer>
  )
}

export default Body
