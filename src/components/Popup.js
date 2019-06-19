import React from 'react';

const Popup = () => {
  return(
    <div className="popup" id="popup">
      <div className="popup__content">
        <div className="popup__left">
          <img src="img/nat-8.jpg" alt="Tour phoot" className="popup__img" />
          <img src="img/nat-9.jpg" alt="Tour photo" className="popup__img" />
        </div>
        <div className="popup__right">
          <a href="#section-tours" className="popup__close">&times;</a>
          <h2 className="heading-secondary u-margin-bottom-small">
            Start booking now
          </h2>
          <h3 className="heading-tertiary u-margin-bottom-small">Important &ndash; Please read these terms before booking</h3>
          <p className="popup__text">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusantium modi nemo dolorum dolor ducimus quia blanditiis vel perspiciatis? Eum omnis beatae nobis inventore dignissimos officia iure repellat magnam tempora delectus!
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repudiandae tenetur placeat deleniti fuga, pariatur sequi corporis fugiat error earum voluptatum sed nostrum debitis autem qui. Deserunt laudantium officiis exercitationem ratione?
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sapiente rerum dolor deleniti. Deleniti praesentium totam quas laborum reprehenderit eaque ad odit eum dolorum recusandae, ducimus ipsam nemo nisi repellendus fugiat.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit dicta obcaecati illo deserunt, cupiditate veritatis ducimus culpa labore voluptas harum doloremque, dolore ab eveniet saepe quia sit asperiores doloribus praesentium.
          </p>
          <a href="#" className="btn btn--green">Book now</a>
        </div>
      </div>
    </div>
  )
}

export default Popup;