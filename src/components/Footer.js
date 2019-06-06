import React from 'react';

const Footer = props => {
  return (
    <footer className='footer'>
      <div className="footer__logo-box u-margin-bottom-big">
        <img src={props.logo} alt="Full logo" className="footer__logo" />
      </div>
      <div className="row">
        <div className="col-1-of-2">
          <div className="footer__navigation">
            <ul className="footer__list">
              <li className="footer__item"><a href="#" className="footer__link">Company</a></li>
              <li className="footer__item"><a href="#" className="footer__link">Contact us</a></li>
              <li className="footer__item"><a href="#" className="footer__link">Careers</a></li>
              <li className="footer__item"><a href="#" className="footer__link">Privacy policy</a></li>
              <li className="footer__item"><a href="#" className="footer__link">Terms</a></li>
            </ul>
          </div>
        </div>
        <div className="col-1-of-2">
          <p className="footer__copyright">
            Built by <a href="#" className="footer__link">Ryan Flores</a> for his online course <a href="#" className="footer__link">Advanced CSS and Sass</a>. Copyright &copy; by Ryan Flores. You are 100% allowed to use this webpage for both personal and commercial use, but NOT to claim it as your own design.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer;