import Layout from "../layout/Layout";

export default function ProductPage() {
  return (
    <Layout>
      <section>
        <div
          className="bg-pattern-02"
          style={{
            background:
              "url(images/products-page.png) center center/cover no-repeat",
          }}
        >
          <div className="container">
            <div className="page-banner-head">
              <h1> Products</h1>
              <div className="d-flex justify-content-center">
                <ul>
                  <li>
                    {" "}
                    <a href="/"> Home </a>{" "}
                  </li>
                  <li>/</li>
                  <li> Products </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="pro-items m-t-80 m-b-80">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-7">
              <div className="product-text">
                <div
                  className="wow fadeInUp"
                  data-wow-delay="300ms"
                  data-wow-duration="1500ms"
                >
                  <h1>
                    Our <span> Products</span>
                  </h1>
                  <p>
                    Our Stainless Steel Water Tanks are competitive to meet the
                    needs of our customers. The unique specifications of our
                    products guarantee durability and efficient performance.
                  </p>
                </div>

                <div
                  className="list-block wow fadeInUp"
                  data-wow-delay="300ms"
                  data-wow-duration="1500ms"
                >
                  <div className="links-list">
                    <img src="images/p1.png" />
                  </div>
                  <div className="links-list-points">
                    <h5>Best Food Grade Stainless Steel</h5>
                    <p>
                      Enatti Stainless Steel Water Tanks are made of AISI 304
                      Food Grade Steel. It is plastic-free, non-toxic and
                      rust-free, and it is considered an absolute product for
                      food handling and food processing industries.{" "}
                    </p>
                  </div>
                </div>

                <div
                  className="list-block wow fadeInUp"
                  data-wow-delay="300ms"
                  data-wow-duration="1500ms"
                >
                  <div className="links-list">
                    <img src="images/p2.png" />
                  </div>
                  <div className="links-list-points">
                    <h5>Easy maintenance and cleaning facility</h5>
                    <p>
                      The raw materials we use are environment-friendly and
                      reusable. The structure of each of the Water Tanks is
                      designed carefully to drain out water completely during
                      the cleaning time.{" "}
                    </p>
                  </div>
                </div>

                <div
                  className="list-block wow fadeInUp"
                  data-wow-delay="300ms"
                  data-wow-duration="1500ms"
                >
                  <div className="links-list">
                    <img src="images/p3.png" />
                  </div>
                  <div className="links-list-points">
                    <h5>Retains Freshness even after continuous usage </h5>
                    <p>
                      Our UV protected Stainless Steel Tanks are chemical and
                      water reaction free. It eliminates the possibility of
                      growth of algae and the formation of slime. Whatever be
                      the weather we assure the best performance even during
                      scorching summer.{" "}
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="col-md-5 thumb2 bg-cover wow fadeInUp"
              data-wow-delay="600ms"
              data-wow-duration="1500ms"
              style={{
                backgroundImage: "url(images/product.png)",
                backgroundSize: "cover",
              }}
            ></div>
          </div>
        </div>
      </section>

      <section className="m-b-100 wow fadeInUp">
        <div className="container">
          <div className="row">
            <div className="col-md-3 pad-5">
              <div className="pro-box">
                <div className="pro-box-block">
                  <div className="pro-box-list">
                    <img src="images/pb1.png" />
                  </div>
                  <div className="pro-box-points">
                    <h6>UV Protecttion </h6>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-3 pad-5">
              <div className="pro-box">
                <div className="pro-box-block">
                  <div className="pro-box-list">
                    <img src="images/pb2.png" />
                  </div>
                  <div className="pro-box-points">
                    <h6>Durability </h6>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-3 pad-5">
              <div className="pro-box">
                <div className="pro-box-block">
                  <div className="pro-box-list">
                    <img src="images/pb3.png" />
                  </div>
                  <div className="pro-box-points">
                    <h6> Hygiene </h6>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-3 pad-5">
              <div className="pro-box">
                <div className="pro-box-block">
                  <div className="pro-box-list">
                    <img src="images/pb4.png" />
                  </div>
                  <div className="pro-box-points">
                    <h6> Weather Resistant </h6>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="m-b-100">
        <div className="container">
          <div className="head-sec text-center m-b-60">
            <h2 style={{ fontWeight: "500", textTransform: "none" }}>
              Grab Exclusive Deals On Call
            </h2>
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <div
                className="pro-deal-cover wow fadeInUp"
                data-wow-delay="0ms"
                data-wow-duration="1500ms"
              >
                <div className="pro-deal">
                  <img src="images/pro-deal.png" alt="" />
                  <div className="box-content">
                    <h4 className="pro-title">Entatti Water Tank 450 Litre</h4>
                    <p className="pro-description">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Sed mattis augue in odio suscipit, at.
                    </p>
                    <a className="read-more" href="#">
                      Book Now
                    </a>
                  </div>
                </div>
                <div className="pro-deal-box">
                  <h5>Entatti Water Tank 450 Litre</h5>
                  <div className="pro-deal-float">
                    <p className="pro-deal-p1">
                      Capacity : <span>450L</span>
                    </p>
                    <p className="pro-deal-p2">
                      Price : <span>15000/-</span>
                    </p>
                  </div>
                </div>
                <a href="#">
                  <div className="pro-deal-btn">Book Now</div>
                </a>
              </div>
            </div>
            <div className="col-md-4">
              <div
                className="pro-deal-cover wow fadeInUp"
                data-wow-delay="300ms"
                data-wow-duration="1500ms"
              >
                <div className="pro-deal">
                  <img src="images/pro-deal.png" alt="" />
                  <div className="box-content">
                    <h4 className="pro-title">Entatti Water Tank 750 Litre</h4>
                    <p className="pro-description">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Sed mattis augue in odio suscipit, at.
                    </p>
                    <a className="read-more" href="#">
                      Book Now
                    </a>
                  </div>
                </div>
                <div className="pro-deal-box">
                  <h5>Entatti Water Tank 750 Litre</h5>
                  <div className="pro-deal-float">
                    <p className="pro-deal-p1">
                      Capacity : <span>750L</span>
                    </p>
                    <p className="pro-deal-p2">
                      Price : <span>15000/-</span>
                    </p>
                  </div>
                </div>
                <a href="#">
                  <div className="pro-deal-btn">Book Now</div>
                </a>
              </div>
            </div>
            <div className="col-md-4">
              <div
                className="pro-deal-cover wow fadeInUp"
                data-wow-delay="600ms"
                data-wow-duration="1500ms"
              >
                <div className="pro-deal">
                  <img src="images/pro-deal.png" alt="" />
                  <div className="box-content">
                    <h4 className="pro-title">Entatti Water Tank 1000 Litre</h4>
                    <p className="pro-description">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Sed mattis augue in odio suscipit, at.
                    </p>
                    <a className="read-more" href="#">
                      Book Now
                    </a>
                  </div>
                </div>
                <div className="pro-deal-box">
                  <h5>Entatti Water Tank 1000 Litre</h5>
                  <div className="pro-deal-float">
                    <p className="pro-deal-p1">
                      Capacity : <span>1000L</span>
                    </p>
                    <p className="pro-deal-p2">
                      Price : <span>15000/-</span>
                    </p>
                  </div>
                </div>
                <a href="#">
                  <div className="pro-deal-btn">Book Now</div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
