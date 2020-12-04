import Layout from "../layout/Layout"

export default function GalleryPage () {
  return (
    <Layout>
      <section>
        <div
          className="bg-pattern-02"
          style={{background: "url(images/gallery-page.png) center center/cover no-repeat"}}
        >
          <div className="container">
            <div className="page-banner-head">
              <h1> Gallery</h1>
              <div className="d-flex justify-content-center">
                <ul>
                  <li>
                    {" "}
                    <a href="/"> Home </a>{" "}
                  </li>
                  <li>/</li>
                  <li> Gallery </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="m-t-100">
        <div className="container">
          <div className="gallery-page">
            <h1>
              Our <span> gallery</span>
            </h1>
          </div>
        </div>
      </section>

      <section className="m-b-100">
        <div className="container gallery_cons gallery-container">
          <div className="tz-gallery">
            <div className="row">
              <div
                className="col-sm-12 col-md-4 wow fadeInUp"
                data-wow-delay="0ms"
                data-wow-duration="1500ms"
              >
                <a className="lightbox" href="images/g1.png">
                  <img src="images/g1.png" />
                </a>
              </div>
              <div
                className="col-sm-6 col-md-4 wow fadeInUp"
                data-wow-delay="300ms"
                data-wow-duration="1500ms"
              >
                <a className="lightbox" href="images/g2.png">
                  <img src="images/g2.png" />
                </a>
              </div>
              <div
                className="col-sm-6 col-md-4 wow fadeInUp"
                data-wow-delay="600ms"
                data-wow-duration="1500ms"
              >
                <a className="lightbox" href="images/g1.png">
                  <img src="images/g1.png" />
                </a>
              </div>
              <div
                className="col-sm-12 col-md-4 wow fadeInUp"
                data-wow-delay="0ms"
                data-wow-duration="1500ms"
              >
                <a className="lightbox" href="images/g3.png">
                  <img src="images/g3.png" />
                </a>
              </div>
              <div
                className="col-sm-6 col-md-4 wow fadeInUp"
                data-wow-delay="300ms"
                data-wow-duration="1500ms"
              >
                <a className="lightbox" href="images/g4.png">
                  <img src="images/g4.png" />
                </a>
              </div>
              <div
                className="col-sm-6 col-md-4 wow fadeInUp"
                data-wow-delay="600ms"
                data-wow-duration="1500ms"
              >
                <a className="lightbox" href="images/g2.png">
                  <img src="images/g2.png" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
};
