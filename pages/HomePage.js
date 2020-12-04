import TestimonialData from "./data/TestimontalData";
import HomPageBannerData from "./data/HomePageBannerData";
import { Link } from "react-router-dom";

export default function HomePage() {
  return (
    <>
      <section className="car-mt-150">
        <div
          className="site-section testimonial-wrap custom-owl-carousel"
          id="testimonials-section"
        >
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-5 mr-auto">
                <div className="owl-carousel slide-one-item-alt-text">
                  {HomPageBannerData.map((eachItem) => (
                    <div className="slide-text">
                      <blockquote>
                        <h1>{eachItem.title}</h1>
                        <p>{eachItem.description}</p>

                        <a href="/AboutPage">
                          <button className="read-more">Read More</button>
                        </a>
                      </blockquote>
                    </div>
                  ))}
                </div>
              </div>
              <div className="col-lg-6 ml-auto">
                <div className="owl-carousel slide-one-item-alt">
                  {HomPageBannerData.map((eachItem) => (
                    <img
                      src={eachItem.image}
                      alt="Image"
                      className="img-fluid"
                    />
                  ))}
                </div>

                <div className="owl-custom-direction">
                  <a href="#" className="custom-prev">
                    <img src="images/icon-left.png" />
                  </a>
                  <a href="#" className="custom-next">
                    <img src="images/icon-right.png" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="bg-blue-banner">
        <img src="images/bg-blue.png" width="100%" />
      </div>
      <div className="bg-blue-banner-dot">
        <img src="images/dot.png" width="100%" />
      </div>

      <div className="clearfix"></div>

      <section className="m-t-150 m-b-100">
        <div className="container">
          <div className="row">
            <div
              className="col-lg-5 col-md-5 wow fadeInUp"
              data-wow-delay="300ms"
              data-wow-duration="1500ms"
            >
              <div className="about-sec">
                <img src="images/abt.png" width="100%" />
              </div>
            </div>
            <div
              className="col-lg-7 col-md-7 wow fadeInUp"
              data-wow-delay="600ms"
              data-wow-duration="1500ms"
            >
              <div className="about-sec-content">
                <h5>About Us</h5>
                <h2>Introducing Our Stainless Steel Water Tank</h2>
                <p>
                  Enatti Stainless Steel Water Tanks are long-lasting and
                  non-toxic, and we offer 10 years warranty. Our expert team is
                  involved in manufacturing high-quality water tanks with unique
                  specifications understanding the needs of our customers.
                </p>
                <a href="/AboutPage">
                  <button className="read-more">Read More</button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="m-b-100">
        <div className="container">
          <div className="row">
            <div
              className="col-lg-6 col-md-6 wow fadeInUp"
              data-wow-delay="300ms"
              data-wow-duration="1500ms"
            >
              <div className="about-sec-content">
                <h5>Our Products</h5>
                <h2 style={{ textTransform: "uppercase" }}>
                  Capacities We Offer
                </h2>
                <p>
                  Our unique specifications like zero maintenance, easy cleaning
                  and rust-free nature make us a highly competitive dealer of
                  Stainless Steel Water Tanks. Our Products are available in
                  450L, 500L and 1000L.{" "}
                </p>

                <div className="m-t-20">
                  <div className="tabset">
                    <input
                      type="radio"
                      name="tabset"
                      id="tab1"
                      aria-controls="marzen"
                      defaultChecked
                    />
                    <label htmlFor="tab1">450 L</label>

                    <input
                      type="radio"
                      name="tabset"
                      id="tab2"
                      aria-controls="rauchbier"
                    />
                    <label htmlFor="tab2">500 L</label>

                    <input
                      type="radio"
                      name="tabset"
                      id="tab3"
                      aria-controls="dunkles"
                    />
                    <label htmlFor="tab3">1000 L</label>

                    <div className="tab-panels">
                      <section id="marzen" className="tab-panel">
                        <h3>450 L ENTATTI WATER TANK</h3>
                        <a href="/ProductPage">
                          <button className="read-more m-r-20">
                            Know More
                          </button>
                        </a>
                        <a href="/ContactPage">
                          <button className="read-more2">Get a Quote</button>
                        </a>
                      </section>
                      <section id="rauchbier" className="tab-panel">
                        <h3>500 L ENTATTI WATER TANK</h3>
                        <a href="/ProductPage">
                          <button className="read-more m-r-20">
                            Know More
                          </button>
                        </a>
                        <a href="/ContactPage">
                          <button className="read-more2">Get a Quote</button>
                        </a>
                      </section>
                      <section id="dunkles" className="tab-panel">
                        <h3>1000 L ENTATTI WATER TANK</h3>
                        <a href="/ProductPage">
                          <button className="read-more m-r-20">
                            Know More
                          </button>
                        </a>
                        <a href="/ContactPage">
                          <button className="read-more2">Get a Quote</button>
                        </a>
                      </section>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div
              className="col-lg-6 col-md-6 wow fadeInUp"
              data-wow-delay="600ms"
              data-wow-duration="1500ms"
            >
              <div className="pdt-img">
                <img src="images/pdt.png" width="100%" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="m-b-100">
        <div className="container">
          <div className="head-sec text-center">
            <h5>Our Blog</h5>
            <h2>Our Latest Blogs</h2>
          </div>
        </div>
        <div className="container m-t-50">
          <div className="row">
            <div
              className="col-lg-4 col-md-4 m-t-30 wow fadeInUp"
              data-wow-delay="0ms"
              data-wow-duration="1500ms"
            >
              <div className="zoom-out-img">
                <img src="images/b1.png" />
              </div>
              <div className="blog-grid-bg">
                <h6>25/09/2020</h6>
                <h5>Say No To Plastic </h5>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod elit, sed do eiusmod elit, sed do eiusmod{" "}
                </p>
                <div className="btn-blog">
                  <button className="read-more3">Know More</button>
                </div>
              </div>
            </div>
            <div
              className="col-lg-4 col-md-4 m-t-30 wow fadeInUp"
              data-wow-delay="300ms"
              data-wow-duration="1500ms"
            >
              <div className="zoom-out-img">
                <img src="images/b2.png" />
              </div>
              <div className="blog-grid-bg">
                <h6>25/09/2020</h6>
                <h5>UV Protection Tanks </h5>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod elit, sed do eiusmod elit, sed do eiusmod{" "}
                </p>
                <div className="btn-blog">
                  <button className="read-more3">Know More</button>
                </div>
              </div>
            </div>
            <div
              className="col-lg-4 col-md-4 m-t-30 wow fadeInUp"
              data-wow-delay="600ms"
              data-wow-duration="1500ms"
            >
              <div className="zoom-out-img">
                <img src="images/b3.png" />
              </div>
              <div className="blog-grid-bg">
                <h6>25/09/2020</h6>
                <h5>Cleaning the Stainless Tanks </h5>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod elit, sed do eiusmod elit, sed do eiusmod{" "}
                </p>
                <div className="btn-blog">
                  <button className="read-more3">Know More</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="car-mt-150 m-b-100">
        <div
          className="site-section testimonial-wrap custom-owl-carousel"
          id="testimonials-section"
        >
          <div className="container">
            <div className="clients-head">
              <h5>Testimonial</h5>
              <h2>Hear from our clients</h2>
            </div>
            <div className="row align-items-center">
              <div className="col-lg-12 mr-auto">
                <div className="owl-carousel slide-one-item-alt-text2">
                  {TestimonialData.map((eachItem) => (
                    <div className="slide-text2">
                      <div className="testi-clients">
                        <img src={eachItem.image} />
                        <h6>{eachItem.name}</h6>
                        <p>{eachItem.description}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="owl-custom-direction2">
                  <a href="#" className="custom-prev">
                    <img src="images/icon2-left.png" />
                  </a>
                  <a href="#" className="custom-next">
                    <img src="images/icon2-right.png" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
