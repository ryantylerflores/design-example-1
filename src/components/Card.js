import React from 'react';

const Card = props => {

  return(
    <div className="col-1-of-3">
      <div className="card">
        <div className="card__side card__side--front">
          <div className={`card__picture card__picture--${props.number}`}>
            &nbsp;
          </div>
          <h4 className="card__heading">
            <span className={`card__heading-span card__heading-span--${props.number}`}>
              {props.title}
            </span>
          </h4>
          <div className="card__details">
            <ul>
              { props.details.map((detail,index) => {
                return <li key={index}>{ detail }</li>
              })}
            </ul>
          </div>
        </div>
        <div className={`card__side card__side--back card__side--back-${props.number}`}>
          <div className="card__cta">
            <div className="card__price-box">
              <p className="card__price-only">Only</p>
              <p className="card__price-value">{props.price}</p>
            </div>
            <a href="#" className="btn btn--white">Book now!</a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Card;