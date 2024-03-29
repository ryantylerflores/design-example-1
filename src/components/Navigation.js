import React from 'react';

const Navigation = () => {
  return (
    <div>
      <input type="checkbox" className="navigation__checkbox" id="navi-toggle" />
      <label htmlFor="navi-toggle" className="navigation__button"><span className="navigation__icon"></span></label>

      <div className="navigation__background">&nbsp;</div>
      <nav className="navigation__nav">
        <ul className="navigation__list">
          <li className="navigation__item"><a href="#" className="navigation__link"><span>01</span>About natours</a></li>
          <li className="navigation__item"><a href="#" className="navigation__link"><span>02</span>Your benefits</a></li>
          <li className="navigation__item"><a href="#" className="navigation__link"><span>03</span>Popular tours</a></li>
          <li className="navigation__item"><a href="#" className="navigation__link"><span>04</span>Stories</a></li>
          <li className="navigation__item"><a href="#" className="navigation__link"><span>05</span>Book now</a></li>
        </ul>
      </nav>
    </div>
  )
}

export default Navigation;