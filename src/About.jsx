import React from 'react';

function About() {
  return (
    <div className="about-page">
      {/* 1. SOFT HERO SECTION */}
      <section className="py-5 bg-light border-bottom">
        <div className="container py-5">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <h6 className="text-primary fw-bold text-uppercase">Our Story</h6>
              <h1 className="display-4 fw-bold mb-4">We are on a mission to humanize the digital world.</h1>
              <p className="lead text-muted">
                Started in a small garage in 2020, we’ve grown into a global team of 
                innovators, designers, and engineers dedicated to building better experiences.
              </p>
            </div>
            <div className="col-lg-6">
              <img 
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=600&q=80" 
                alt="Team working" 
                className="img-fluid rounded-4 shadow"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 2. VALUES SECTION (The "Broad" part) */}
      <section className="container py-5 my-5">
        <div className="row g-4 text-center">
          <div className="col-md-4">
            <div className="p-4 border rounded-4 bg-white shadow-sm h-100">
              <div className="bg-primary text-white rounded-circle d-inline-flex align-items-center justify-content-center mb-3" style={{width: '60px', height: '60px'}}>
                <i className="bi bi-eye fs-3"></i>
              </div>
              <h4 className="fw-bold">Our Vision</h4>
              <p className="text-muted small">To be the most customer-centric tech company on the planet where people can find anything they want to build.</p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="p-4 border rounded-4 bg-white shadow-sm h-100">
              <div className="bg-success text-white rounded-circle d-inline-flex align-items-center justify-content-center mb-3" style={{width: '60px', height: '60px'}}>
                <i className="bi bi-heart fs-3"></i>
              </div>
              <h4 className="fw-bold">Our Culture</h4>
              <p className="text-muted small">We believe in radical transparency, inclusive design, and the power of collaborative problem solving.</p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="p-4 border rounded-4 bg-white shadow-sm h-100">
              <div className="bg-info text-white rounded-circle d-inline-flex align-items-center justify-content-center mb-3" style={{width: '60px', height: '60px'}}>
                <i className="bi bi-lightning-charge fs-3"></i>
              </div>
              <h4 className="fw-bold">Our Speed</h4>
              <p className="text-muted small">We move fast and break things—but we fix them even faster to ensure our clients stay ahead of the curve.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. TEAM PREVIEW */}
      <section className="bg-dark text-white py-5">
        <div className="container py-4">
          <div className="text-center mb-5">
            <h2 className="fw-bold">Meet the Leadership</h2>
            <p className="opacity-75">The experts behind our award-winning projects.</p>
          </div>
          <div className="row g-4">
            {[1, 2, 3, 4].map((member) => (
              <div className="col-md-3 text-center" key={member}>
                <div className="mb-3">
                  <img 
                    src={`https://i.pravatar.cc/150?img=${member + 10}`} 
                    alt="Team member" 
                    className="rounded-circle border border-4 border-primary shadow"
                    style={{width: '120px'}}
                  />
                </div>
                <h5 className="mb-0">Member Name</h5>
                <small className="text-info">Co-Founder / CEO</small>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. JOIN US CTA */}
      <section className="container py-5 text-center my-5">
        <div className="p-5 bg-primary text-white rounded-5 shadow-lg">
          <h2 className="display-5 fw-bold">Want to join the team?</h2>
          <p className="lead mb-4">We're always looking for talented developers and designers.</p>
          <button className="btn btn-light btn-lg px-5 fw-bold text-primary">View Careers</button>
        </div>
      </section>
    </div>
  );
}

export default About;