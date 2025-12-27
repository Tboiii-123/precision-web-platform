import React from 'react';

function Contact() {
  return (
    <div className="contact-page">
      {/* 1. MINIMALIST HEADER */}
      <section className="bg-white py-5">
        <div className="container text-center pt-5">
          <h1 className="display-4 fw-bold">Let's Start a Conversation</h1>
          <p className="lead text-muted mx-auto" style={{ maxWidth: '700px' }}>
            Have a question about our services? Our team is ready to help you 
            scale your next big idea.
          </p>
        </div>
      </section>

      {/* 2. MAIN CONTACT SECTION */}
      <section className="container py-5 mb-5">
        <div className="row g-5">
          
          {/* LEFT SIDE: Contact Info */}
          <div className="col-lg-5">
            <div className="bg-primary text-white p-5 rounded-4 shadow-lg h-100">
              <h3 className="fw-bold mb-4">Contact Information</h3>
              <p className="opacity-75 mb-5">Fill out the form and our team will get back to you within 24 hours.</p>
              
              <div className="d-flex align-items-center mb-4">
                <i className="bi bi-telephone-fill fs-4 me-3"></i>
                <span>+1 (555) 000-1234</span>
              </div>
              
              <div className="d-flex align-items-center mb-4">
                <i className="bi bi-envelope-at-fill fs-4 me-3"></i>
                <span>hello@yourbrand.com</span>
              </div>
              
              <div className="d-flex align-items-center mb-5">
                <i className="bi bi-geo-alt-fill fs-4 me-3"></i>
                <span>123 Tech Plaza, Silicon Valley, CA</span>
              </div>

              {/* Social Icons */}
              <div className="d-flex gap-3 mt-auto">
                <a href="#" className="text-white fs-4"><i className="bi bi-facebook"></i></a>
                <a href="#" className="text-white fs-4"><i className="bi bi-twitter-x"></i></a>
                <a href="#" className="text-white fs-4"><i className="bi bi-linkedin"></i></a>
              </div>
            </div>
          </div>

          {/* RIGHT SIDE: Contact Form */}
          <div className="col-lg-7">
            <div className="card border-0 shadow-sm p-4 p-md-5 rounded-4">
              <form>
                <div className="row g-3">
                  <div className="col-md-6">
                    <label className="form-label fw-semibold">First Name</label>
                    <input type="text" className="form-control form-control-lg bg-light border-0" placeholder="Jane" />
                  </div>
                  <div className="col-md-6">
                    <label className="form-label fw-semibold">Last Name</label>
                    <input type="text" className="form-control form-control-lg bg-light border-0" placeholder="Doe" />
                  </div>
                  <div className="col-12 mt-3">
                    <label className="form-label fw-semibold">Email Address</label>
                    <input type="email" className="form-control form-control-lg bg-light border-0" placeholder="jane@example.com" />
                  </div>
                  <div className="col-12 mt-3">
                    <label className="form-label fw-semibold">Subject</label>
                    <select className="form-select form-select-lg bg-light border-0">
                      <option>General Inquiry</option>
                      <option>Project Proposal</option>
                      <option>Developer Support</option>
                    </select>
                  </div>
                  <div className="col-12 mt-3">
                    <label className="form-label fw-semibold">Message</label>
                    <textarea className="form-control form-control-lg bg-light border-0" rows="4" placeholder="How can we help?"></textarea>
                  </div>
                  <div className="col-12 mt-4">
                    <button type="submit" className="btn btn-primary btn-lg w-100 fw-bold shadow">Send Message</button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* 3. FULL WIDTH MAP PLACEHOLDER */}
      <section className="container-fluid p-0 mt-5">
        <div className="bg-light text-center py-5 border-top">
          <i className="bi bi-map text-muted" style={{ fontSize: '3rem' }}></i>
          <p className="text-muted mt-2">Interactive Google Map Integration Placeholder</p>
        </div>
      </section>
    </div>
  );
}

export default Contact;