export default function Footer() {
  return (
    <div>
      <section className="bg-footer">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-md-4">
              <div className="footer-start">
                <img src="images/logo-footer.png" />
                <p>
                  Non-toxic and rust free Stainless Water Tanks with UV
                  protection and plastic - free raw materials.
                </p>
              </div>
            </div>
            <div className="col-lg-2 col-md-2">
              <div className="footer-start">
                <h5>Quick Links</h5>
                <ul>
                  <a href="/">
                    <li>Home</li>
                  </a>
                  <a href="/AboutPage">
                    <li>About us</li>
                  </a>
                  <a href="/ProductPage">
                    <li>Products</li>
                  </a>
                  <a href="/GalleryPage">
                    <li>Gallery</li>
                  </a>
                  <a href="/ContactPage">
                    <li>Contact us</li>
                  </a>
                </ul>
              </div>
            </div>
            <div className="col-lg-4 col-md-4">
              <div className="footer-start">
                <h5>Contact Info</h5>
                <p>
                  Enatti Mercantile Concepts Pvt,Ltd. Calicut - 673 571, Kerala
                </p>
                <p>+91 8848 18 9071</p>
                <p>info@enatti.com</p>
              </div>
            </div>
            <div className="col-lg-2 col-md-2">
              <div className="footer-start">
                <h5>Social Media</h5>
                <div className="footer-icons">
                  <a href="#">
                    <i className="fa fa-facebook"></i>
                  </a>
                  <a href="#">
                    <i className="fa fa-twitter"></i>
                  </a>
                  <a href="#">
                    <i className="fa fa-instagram"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="footer-line"></div>
          <p className="copyright-p">
            Copyright &#169; 2020.All rights reserved.
          </p>
        </div>
      </section>

      <div className="container-fluid">
        <div className="icon-bar-2">
          <div className="row">
            <div className="col-6 nopad">
              <button
                className="call-butn"
                style={{ backgroundColor: "#097bff" }}
              >
                {" "}
                Call <i className="fa fa-phone"></i>
              </button>
            </div>
            <div className="col-6 nopad">
              <button
                className="call-butn"
                style={{ backgroundColor: "#032348" }}
              >
                {" "}
                Message <i className="fa fa-envelope-o"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
