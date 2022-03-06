/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';

function HomePage() {
  return (
    /*
    BEM -> Bolck Element Modifier
    here  
    1. header is a Bolck
    2. header__logo-box so __logo-box is an element
    3. heading-primary--main so --main is a modifier
    */
    <div>
      <div className='header'>
        <div className='header__logo-box'>
          <img
            src='../assets/logo-white.png'
            alt='Logo'
            className='header__logo'
          />
        </div>
        <div className='header__text-box'>
          <h1 className='heading-primary'>
            <span className='heading-primary--main'>E-commerce</span>
            <span className='heading-primary--sub'>is where life happens</span>
          </h1>

          <a href='#' className='btn btn--white btn--animated'>
            Find our product
          </a>
        </div>
      </div>
      <main>
        <section className='section-about'>
          <div className='u-center-text u-margin-bottom-big'>
            <h2 className='heading-secondary'>
              Exciting tours for adventurous people
            </h2>
          </div>
          <div className='row'>
            <div className='col-1-of-2'>
              <h3 className='heading-tertiary u-margin-bottom-small'>
                You're going to fall in love with nature
              </h3>
              <p className='paragraph'>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iste
                culpa eaque minus consequatur reprehenderit perferendis pariatur
                eveniet minima earum quo suscipit commodi laudantium, distinctio
                est illum repellat. Distinctio, asperiores repudiandae.
              </p>
              <h3 className='heading-tertiary u-margin-bottom-small'>
                Live adventures like you never have before
              </h3>
              <p className='paragraph'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor
                nam, laboriosam, deserunt cumque reiciendis libero fugit eum
                magni.
              </p>
              <a href='#' className='btn-text'>
                Learn more &rarr;
              </a>
            </div>
            <div className='col-1-of-2'>
              {/* 
              to get 3 img at one tab from emment
              .composition>(img.composition__photo.composition__photo--p1)*3 
              */}
              <div className='composition'>
                <img
                  src='../assets/nat-1-large.jpg'
                  alt='Ph 1'
                  className='composition__photo composition__photo--p1'
                />
                <img
                  src='../assets/nat-2-large.jpg'
                  alt='Ph 2'
                  className='composition__photo composition__photo--p2'
                />
                <img
                  src='../assets/nat-3-large.jpg'
                  alt='Ph 3'
                  className='composition__photo composition__photo--p3'
                />
              </div>
            </div>
          </div>
        </section>
        <section className='section-features'>
          <div className='row'>
            <div className='col-1-of-4'>
              <div className='feature-box'>
                <i className='feature-box__icon icon-basic-world'></i>
                <h3 className='heading-tertiary u-margin-bottom-small'>
                  Explore the world
                </h3>
                <p className='feature-box__text'>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor
                  nam. Dolor nam. Dolor nam.
                </p>
              </div>
            </div>
            <div className='col-1-of-4'>
              <div className='feature-box'>
                <i className='feature-box__icon icon-basic-compass'></i>
                <h3 className='heading-tertiary u-margin-bottom-small'>
                  Meet nature
                </h3>
                <p className='feature-box__text'>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor
                  nam. olor nam. Dolor nam.
                </p>
              </div>
            </div>
            <div className='col-1-of-4'>
              <div className='feature-box'>
                <i className='feature-box__icon icon-basic-map'></i>
                <h3 className='heading-tertiary u-margin-bottom-small'>
                  Find your way
                </h3>
                <p className='feature-box__text'>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor
                  nam. Dolor nam. Dolor nam.
                </p>
              </div>
            </div>
            <div className='col-1-of-4'>
              <div className='feature-box'>
                <i className='feature-box__icon icon-basic-heart'></i>
                <h3 className='heading-tertiary u-margin-bottom-small'>
                  Live a healthier life
                </h3>
                <p className='feature-box__text'>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor
                  nam. Dolor nam. Dolor nam.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className='section-tours'>
          <div className='u-center-text u-margin-bottom-big'>
            <h2 className='heading-secondary'>MOst popular tours</h2>
          </div>
          <div className='row'>
            <div className='col-1-of-3'>
              <div className='card'>
                <div className='card__side card__side--front'>
                  <div className='card__picture card__picture--1'>&nbsp;</div>
                  <h4 className='card__heading'>
                    <span className='card__heading-span card__heading-span--1'>
                      The sea explorer
                    </span>
                  </h4>
                  <div className='card__details'>
                    <ul>
                      <li>3 day tours</li>
                      <li>up to 30 people</li>
                      <li>2 tour guides</li>
                      <li>sleep in cozy hotels</li>
                      <li>difficulty: easy</li>
                    </ul>
                  </div>
                </div>
                <div className='card__side card__side--back card__side--back-1'>
                  {/*cta = call to action*/}
                  <div className='card__cta'>
                    <div className='card__price-box'>
                      <p className='card__price-only'>Only</p>
                      <p className='card__price-value'>$297</p>
                    </div>
                    <a href='#' className='btn btn--white'>
                      Book now!
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className='col-1-of-3'>
              <div className='card'>
                <div className='card__side card__side--front'>
                  <div className='card__picture card__picture--2'>&nbsp;</div>
                  <h4 className='card__heading'>
                    <span className='card__heading-span card__heading-span--2'>
                      the forest hiker
                    </span>
                  </h4>
                  <div className='card__details'>
                    <ul>
                      <li>7 day tours</li>
                      <li>up to 40 people</li>
                      <li>6 tour guides</li>
                      <li>sleep in provided tents</li>
                      <li>difficulty: medium</li>
                    </ul>
                  </div>
                </div>
                <div className='card__side card__side--back card__side--back-2'>
                  {/*cta = call to action*/}
                  <div className='card__cta'>
                    <div className='card__price-box'>
                      <p className='card__price-only'>Only</p>
                      <p className='card__price-value'>$497</p>
                    </div>
                    <a href='#' className='btn btn--white'>
                      Book now!
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className='col-1-of-3'>
              <div className='card'>
                <div className='card__side card__side--front'>
                  <div className='card__picture card__picture--3'>&nbsp;</div>
                  <h4 className='card__heading'>
                    <span className='card__heading-span card__heading-span--3'>
                      the show adventurer
                    </span>
                  </h4>
                  <div className='card__details'>
                    <ul>
                      <li>5 day tours</li>
                      <li>up to 15 people</li>
                      <li>3 tour guides</li>
                      <li>sleep in cozy hotels</li>
                      <li>difficulty: hard</li>
                    </ul>
                  </div>
                </div>
                <div className='card__side card__side--back card__side--back-3'>
                  {/*cta = call to action*/}
                  <div className='card__cta'>
                    <div className='card__price-box'>
                      <p className='card__price-only'>Only</p>
                      <p className='card__price-value'>$897</p>
                    </div>
                    <a href='#' className='btn btn--white'>
                      Book now!
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='u-center-text u-margin-top-huge'>
            <a href='#' className='btn btn--green'>
              Discover all tours
            </a>
          </div>
        </section>
        <section className='section-stories'>
          <div className='bg-video'>
            <video className='bg-video__content' autoPlay muted loop>
              <source src='../assets/video.mp4' type='video/mp4' />
              <source src='../assets/video.webm' type='video/webm' />
              Your browser is not supported!
            </video>
          </div>

          <div className='u-center-text u-margin-bottom-big'>
            <h2 className='heading-secondary'>
              We make people genuinely happy
            </h2>
          </div>
          <div className='row'>
            <div className='story'>
              <figure className='story__shape'>
                <img
                  src='../assets/nat-8.jpg'
                  alt='Person on a tour'
                  className='story__img'
                />
                <figcaption className='story__caption'>Mary Smith</figcaption>
              </figure>
              <div className='story__text'>
                <h3 className='heading-tertiary u-margin-bottom-small'>
                  i had the best week ever with my family
                </h3>
                <p className='feature-box__text'>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor
                  nam. Dolor nam. Dolor nam.Lorem ipsum dolor sit amet
                  consectetur adipisicing elit. Dolor nam. Dolor nam. Dolor
                  nam.Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Dolor nam. Dolor nam. Dolor nam.
                </p>
              </div>
            </div>
          </div>
          <div className='row'>
            <div className='story'>
              <figure className='story__shape'>
                <img
                  src='../assets/nat-9.jpg'
                  alt='Person on a tour'
                  className='story__img'
                />
                <figcaption className='story__caption'>Jack Wilson</figcaption>
              </figure>
              <div className='story__text'>
                <h3 className='heading-tertiary u-margin-bottom-small'>
                  wow! my life is completely different now
                </h3>
                <p className='feature-box__text'>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor
                  nam. Dolor nam. Dolor nam.Lorem ipsum dolor sit amet
                  consectetur adipisicing elit. Dolor nam. Dolor nam. Dolor
                  nam.Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Dolor nam. Dolor nam. Dolor nam.
                </p>
              </div>
            </div>
          </div>

          <div className='u-center-text u-margin-top-huge'>
            <a href='#' className='btn-text'>
              Read all stories&rarr;
            </a>
          </div>
        </section>

        <section className='section-book'>
          <div className='row'>
            <div className='book'>
              <div className='book__form'>
                <form action='#' className='form'>
                  <div className=' u-margin-bottom-medium'>
                    <h2 className='heading-secondary'>Start booking now</h2>
                  </div>
                  <div className='form__group'>
                    <input
                      type='text'
                      className='form__input'
                      placeholder='Full name'
                      id='name'
                      required
                    />
                    <label htmlFor='name' className='form__label'>
                      Full name
                    </label>
                  </div>
                  <div className='form__group'>
                    <input
                      type='email'
                      className='form__input'
                      placeholder='Email address'
                      id='email'
                      required
                    />
                    <label htmlFor='email' className='form__label'>
                      Email address
                    </label>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>
      {/* <section className='grid-test'>
        <div className='row'>
          <div className='col-1-of-2'>Col 1 of 2</div>
          <div className='col-1-of-2'>Col 1 of 2</div>
        </div>
        <div className='row'>
          <div className='col-1-of-3'>Col 1 of 3</div>
          <div className='col-1-of-3'>Col 1 of 3</div>
          <div className='col-1-of-3'>Col 1 of 3</div>
        </div>
        <div className='row'>
          <div className='col-1-of-3'> Col 1 of 3</div>
          <div className='col-2-of-3'>Col 2 of 3</div>
        </div>
        <div className='row'>
          <div className='col-1-of-4'>Col 1 of 4</div>
          <div className='col-1-of-4'>Col 1 of 4</div>
          <div className='col-1-of-4'>Col 1 of 4</div>
          <div className='col-1-of-4'>Col 1 of 4</div>
        </div>
        <div className='row'>
          <div className='col-1-of-4'>Col 1 of 4</div>
          <div className='col-1-of-4'>Col 1 of 4</div>
          <div className='col-2-of-4'>Col 2 of 4</div>
        </div>
        <div className='row'>
          <div className='col-1-of-4'>Col 1 of 4</div>
          <div className='col-3-of-4'>Col 3 of 4</div>
        </div>
      </section> */}
    </div>
  );
}

export default HomePage;
