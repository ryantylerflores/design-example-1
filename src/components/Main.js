import React from 'react'
import Card from './Card';
import Form from './Form';

const Body = () => {
  let tourInfo = [
    {
      title: 'the sea explore',
      details: ['3 day tour', 'Up to 30 people', '2 tour guides', 'Sleep in cozy hotels', 'Difficulty: easy'],
      price: '$297'
    },
    {
      title: 'the forest hiker',
      details: ['7 day tour', 'Up to 40 people', '6 tour guides', 'Sleep in provided tents', 'Difficulty: medium'],
      price: '$497'
    },
    {
      title: 'the snow adventurer',
      details: ['5 day tour', 'Up to 15 people', '3 tour guides', 'Sleep in provided tents', 'Difficulty: hard'],
      price: '$897'
    }
  ]

  return (
    <main>
      <section className='section-about'>
        <div className="u-center-text u-margin-bottom-big">
          <h2 className='heading-secondary'>
            Exciting tours for adventurous people
          </h2>
        </div>

        <div className="row">
          <div className="col-1-of-2">
            <h3 className="heading-tertiary u-margin-bottom-small">You're going to fall in love with nature</h3>
            <p className="paragraph">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Beatae dignissimos mollitia asperiores veritatis laudantium animi dolore, accusamus repellendus ipsum, sed molestias!
            </p>

            <h3 className="heading-tertiary u-margin-bottom-small">Live adventurous like you never have before</h3>
            <p className="paragraph">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Beatae dignissimos mollitia asperiores veritatis laudantium animi dolore, accusamus repellendus.
            </p>

            <a href="#" className="btn-text">Learn More &rarr;</a>
          </div>
          <div className="col-1-of-2">
            <div className="composition">
              <img src="img/nat-1-large.jpg" alt="Photo 1" className="composition__photo composition__photo--p1"/>
              <img src="img/nat-2-large.jpg" alt="Photo 2" className="composition__photo composition__photo--p2"/>
              <img src="img/nat-3-large.jpg" alt="Photo 3" className="composition__photo composition__photo--p3"/>
            </div>
          </div>
        </div>
      </section>

      <section className='section-features'>
        <div className="row">
          <div className="col-1-of-4">
            <div className="feature-box">
              <i className='feature-box__icon icon-basic-world'></i>
              <h3 className="heading-tertiary u-margin-bottom-small">Explore the world</h3>
              <p className="feature-box__text">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Beatae dignissimos mollitia asperiores veritatis
              </p>
            </div>
          </div>

          <div className="col-1-of-4">
            <div className="feature-box">
              <i className='feature-box__icon icon-basic-compass'></i>
              <h3 className="heading-tertiary u-margin-bottom-small">Meet nature</h3>
              <p className="feature-box__text">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Beatae dignissimos mollitia asperiores veritatis
              </p>
            </div>
          </div>

          <div className="col-1-of-4">
            <div className="feature-box">
              <i className='feature-box__icon icon-basic-map'></i>
              <h3 className="heading-tertiary u-margin-bottom-small">Find your way</h3>
              <p className="feature-box__text">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Beatae dignissimos mollitia asperiores veritatis
              </p>
            </div>
          </div>

          <div className="col-1-of-4">
            <div className="feature-box">
              <i className='feature-box__icon icon-basic-heart'></i>
              <h3 className="heading-tertiary u-margin-bottom-small">Live a healthier life</h3>
              <p className="feature-box__text">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Beatae dignissimos mollitia asperiores veritatis
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section-tours" id="section-tours">
        <div className="u-center-text u-margin-bottom-big">
          <h2 className="heading-secondary">
            Most popular tours
          </h2>
        </div>

        <div className="row">
          { tourInfo.map((tour,index) => {
            return <Card 
                    key={index}
                    number={index + 1}
                    title={tour.title}
                    details={tour.details}
                    price={tour.price}
                  />
          })}
        </div>

        <div className="u-center-text u-margin-top-huge">
          <a href="#" className="btn btn--green">Discover all tours</a>
        </div>
      </section>

      <section className="section-stories">
        <div className="bg-video">
          <video className="bg-video__content" autoplay='autoplay' muted loop>
            <source src='/img/video.mp4' type='video/mp4' />
            <source src='/img/video.webm' type='video/webm' />
            Your browser is not supported!
          </video>
        </div>

        <div className="u-center-text u-margin-bottom-big">
          <h2 className="heading-secondary">
            We make people genuinely happy
          </h2>
        </div>

        <div className="row">
          <div className="story">
            <figure className="story__shape">
              <img src="img/nat-8.jpg" alt="Person on tour" className="story__img" />
              <figcaption className="story__caption">Mary Smith</figcaption>
            </figure>
            <div className="story__text">
              <h3 className="heading-tertiary u-margin-bottom-small">I had the best week ever with my family</h3>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, ipsum sapiente aspernatur libero repellat quis consequatur ducimus quam nisi exercitationem omnis earum qui. Aperiam, ipsum sapiente aspernatur libero repellat quis consequatur ducimus quam nisi exercitationem omnis earum qui.</p>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="story">
            <figure className="story__shape">
              <img src="img/nat-9.jpg" alt="Person on tour" className="story__img" />
              <figcaption className="story__caption">Jack Wilson</figcaption>
            </figure>
            <div className="story__text">
              <h3 className="heading-tertiary u-margin-bottom-small">Wow! My life is completely different now</h3>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, ipsum sapiente aspernatur libero repellat quis consequatur ducimus quam nisi exercitationem omnis earum qui. Aperiam, ipsum sapiente aspernatur libero repellat quis consequatur ducimus quam nisi exercitationem omnis earum qui.</p>
            </div>
          </div>
        </div>

        <div className="u-center-text u-margin-top-huge">
          <a href="#" className="btn-text">Read all stories &rarr;</a>
        </div>
      </section>

      <section className="section-book">
        <div className="row">
          <Form />
        </div>
      </section>
    </main>
    // <section className='grid-test'>
    //   <div className="row">
    //     <div className="col-1-of-2">
    //       Col 1 of 2
    //     </div>
    //     <div className="col-1-of-2">
    //       Col 1 of 2
    //     </div>
    //   </div>

    //   <div className="row">
    //     <div className="col-1-of-3">
    //       Col 1 of 3
    //     </div>
    //     <div className="col-1-of-3">
    //       Col 1 of 3
    //     </div>
    //     <div className="col-1-of-3">
    //       Col 1 of 3
    //     </div>
    //   </div>

    //   <div className="row">
    //     <div className="col-1-of-3">
    //       Col 1 of 3
    //     </div>
    //     <div className="col-2-of-3">
    //       Col 2 of 3
    //     </div>
    //   </div>

    //   <div className="row">
    //     <div className="col-1-of-4">
    //       Col 1 of 4
    //     </div>
    //     <div className="col-1-of-4">
    //       Col 1 of 4
    //     </div>
    //     <div className="col-1-of-4">
    //       Col 1 of 4
    //     </div>
    //     <div className="col-1-of-4">
    //       Col 1 of 4
    //     </div>
    //   </div>

    //   <div className="row">
    //     <div className="col-1-of-4">
    //       Col 1 of 4
    //     </div>
    //     <div className="col-1-of-4">
    //       Col 1 of 4
    //     </div>
    //     <div className="col-2-of-4">
    //       Col 2 of 4
    //     </div>
    //   </div>

    //   <div className="row">
    //     <div className="col-1-of-4">
    //       Col 1 of 4
    //     </div>
    //     <div className="col-3-of-4">
    //       Col 3 of 4
    //     </div>
    //   </div>
    // </section>
  )
}

export default Body;