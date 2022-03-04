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
