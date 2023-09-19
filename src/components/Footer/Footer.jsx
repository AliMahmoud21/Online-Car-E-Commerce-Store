import React from 'react'

const Footer = () => {
  return (
    <footer className='footer section'>
      <div className="footerContainer">
        <div className="footerMenuDiv grid">
          <div className="singleGrid">
            <span className="footerTitle">About</span>
            <ul className="footerUl grid">
              <li className="footerLi">How it works</li>
              <li className="footerLi">Careers</li>
              <li className="footerLi">Affliates</li>
              <li className="footerLi">Media</li>
            </ul>
          </div>
          <div className="singleGrid">
            <span className="footerTitle">Become Seller</span>
            <ul className="footerUl grid">
              <li className="footerLi">Add Vehicles</li>
              <li className="footerLi">Resource Center</li>
              <li className="footerLi">Bonds</li>
              <li className="footerLi">Release Dates</li>
            </ul>
          </div>
          <div className="singleGrid">
            <span className="footerTitle">Community</span>
            <ul className="footerUl grid">
              <li className="footerLi">Recommendations</li>
              <li className="footerLi">Gift Cards</li>
              <li className="footerLi">Top Ups</li>
              <li className="footerLi">Selling</li>
            </ul>
          </div>
          <div className="singleGrid">
            <span className="footerTitle">Booking Support</span>
            <ul className="footerUl grid">
              <li className="footerLi">Help Center</li>
              <li className="footerLi">Garages</li>
              <li className="footerLi">Trust & Safety</li>
            </ul>
          </div>
        </div>

        <div className="lowerSection grid">
          <p>&copy; 2023 All right reserved</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer;