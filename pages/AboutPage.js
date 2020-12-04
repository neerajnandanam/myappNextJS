import Layout from "../layout/Layout";

export default function AboutPage() {
  return (
    <Layout>
      <section>
        <div
          className="bg-pattern-02"
          style={{
            background:
              "linear-gradient(100deg, #ffffff61 19%, #ffffff61 100%),url(images/about-page.png) center center/cover no-repeat",
          }}
        >
          <div className="container">
            <div className="page-banner-head">
              <h1> About Us</h1>
              <div className="d-flex justify-content-center">
                <ul>
                  <li>
                    {" "}
                    <a href="/"> Home </a>{" "}
                  </li>
                  <li>/</li>
                  <li> About US </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="about-area cell-items m-t-80 m-b-80">
        <div className="container-fluid">
          <div className="row">
            <div
              className="col-md-6 wow fadeInUp"
              data-wow-delay="300ms"
              data-wow-duration="1500ms"
            >
              <div className="text-about">
                <h1>
                  Our <span> Story</span>
                </h1>
                <p>
                  Enatti Stainless Steel Water Tanks are meticulously
                  constructed using 304 food-grade steel that helps to store the
                  water in its natural form. Our extended services are centred
                  at Pottamel and Karanthur in Calicut. We offer high-quality,
                  non-toxic, and rust-free products that are easy to maintain
                  even in severe weather.
                </p>
                <p>
                  Our eco-friendly Stainless Steel Water Tanks are ideal for
                  storing water and edible oil like coconut oil, palm oil, etc.
                  We offer cost-effective UV protected products which are
                  durable and reaction-free. The compliance and quality of our
                  products are tested by the professionals to ensure the
                  marketing stability of the product.{" "}
                </p>
              </div>
            </div>
            <div
              className="col-md-6 thumb bg-cover wow fadeInUp"
              style={{
                backgroundImage: "url(images/about-pic.png)",
                backgroundSize: "cover",
              }}
              data-wow-delay="600ms"
              data-wow-duration="1500ms"
            ></div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
