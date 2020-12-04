import Layout from "../layout/Layout";
import ContactData from "./data/ContactData";

export default function ContactPage() {
  return (
    <Layout>
      <section>
        <div
          className="bg-pattern-02"
          style={{
            background:
              "url(images/contact-page.png) center center/cover no-repeat",
          }}
        >
          <div className="container">
            <div className="page-banner-head">
              <h1> Contact Us</h1>
              <div className="d-flex justify-content-center">
                <ul>
                  <li>
                    {" "}
                    <a href="/"> Home </a>{" "}
                  </li>
                  <li>/</li>
                  <li> Contact Us </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="container">
          <div className="row">
            <div className="col-lg-7 col-md-7">
              <div className="contact-page">
                <h2
                  className="wow fadeInUp"
                  data-wow-delay="0ms"
                  data-wow-duration="1500ms"
                >
                  Enatti Mercantil Concepts Pvt. Ltd.
                </h2>
                <div
                  className="contact-block wow fadeInUp"
                  data-wow-delay="300ms"
                  data-wow-duration="1500ms"
                >
                  <div className="contact-image">
                    <img src={ContactData.addressImage} />
                  </div>
                  <div className="contact-list">
                    <h5>{ContactData.address}</h5>
                  </div>
                </div>
                <div
                  className="contact-block wow fadeInUp"
                  data-wow-delay="600ms"
                  data-wow-duration="1500ms"
                >
                  <div className="contact-image">
                    <img src="images/c2.png" />
                  </div>
                  <div className="contact-list">
                    <h5>info@enatti.com sales@enatti.com</h5>
                  </div>
                </div>
                <div
                  className="contact-block wow fadeInUp"
                  data-wow-delay="900ms"
                  data-wow-duration="1500ms"
                >
                  <div className="contact-image">
                    <img src="images/c3.png" />
                  </div>
                  <div className="contact-list">
                    <h5> +91 8848 18 90 71</h5>
                  </div>
                </div>
                <div
                  className="contact-block wow fadeInUp"
                  data-wow-delay="1200ms"
                  data-wow-duration="1500ms"
                >
                  <div className="contact-image">
                    <img src="images/c4.png" />
                  </div>
                  <div className="contact-list">
                    <h5> 0484-262626 </h5>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="col-md-5 col-lg-5 wow fadeInDown"
              data-wow-delay="600ms"
              data-wow-duration="1500ms"
            >
              <div className="contact-bg">
                <h2>Enquire Now</h2>
                <div className="">
                  <form action="/action_page.php">
                    <label className="contact-label" htmlFor="fname">
                      {" "}
                      Name{" "}
                    </label>
                    <input
                      type="text"
                      id="fname"
                      name="firstname"
                      placeholder="Enter Name"
                      className="contact-form"
                    />

                    <label className="contact-label" htmlFor="fname">
                      {" "}
                      Email{" "}
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      placeholder="Enter Email"
                      className="contact-form"
                    />

                    <label className="contact-label" htmlFor="fname">
                      {" "}
                      Mobile No{" "}
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      placeholder="Enter Mobile"
                      className="contact-form"
                    />

                    <label className="contact-label" htmlFor="fname">
                      {" "}
                      Message{" "}
                    </label>
                    <textarea
                      id="subject"
                      name="subject"
                      placeholder="Enter Message"
                      className="contact-form"
                      style={{ height: "200px" }}
                    ></textarea>
                    <input
                      type="submit"
                      className="form-submit"
                      value="Submit"
                    />
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d250436.58636260143!2d75.67072522593746!3d11.256138714660189!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba65938563d4747%3A0x32150641ca32ecab!2sKozhikode%2C%20Kerala!5e0!3m2!1sen!2sin!4v1602076815733!5m2!1sen!2sin"
        width="100%"
        height="550"
        frameBorder="0"
        style={{ border: "0" }}
        allowfullscreen=""
        aria-hidden="false"
        tabindex="0"
      ></iframe>
    </Layout>
  );
}
