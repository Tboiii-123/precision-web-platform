import React from 'react';

function Home() {
  return (
    <div className="home-page overflow-hidden">
      {/* 1. PREMIUM HERO SECTION */}
      <section className="position-relative text-white py-5 d-flex align-items-center" style={{ 
        background: 'radial-gradient(circle at top right, #1e3a8a, #000)',
        minHeight: '85vh'
      }}>
        {/* Decorative background shapes */}
        <div className="position-absolute top-0 start-0 w-100 h-100 opacity-25" style={{zIndex: 0}}>
          <div className="position-absolute bg-info rounded-circle filter-blur" style={{width: '300px', height: '300px', top: '-100px', left: '-100px', filter: 'blur(80px)'}}></div>
        </div>

        <div className="container position-relative" style={{zIndex: 1}}>
          <div className="row align-items-center g-5">
            <div className="col-lg-7 text-center text-lg-start">
              <span className="badge rounded-pill bg-info text-dark mb-3 px-3 py-2 fw-bold text-uppercase tracking-wider">New Version 2.0 is live</span>
              <h1 className="display-1 fw-extrabold mb-3 tracking-tight">
                Build Your Future <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r" style={{
                   backgroundImage: 'linear-gradient(90deg, #0dcaf0, #0d6efd)',
                   WebkitBackgroundClip: 'text',
                   WebkitTextFillColor: 'transparent'
                }}>With Precision.</span>
              </h1>
              <p className="lead mb-5 opacity-75 fs-4">
                We empower teams to ship faster with world-class design systems and high-performance engineering.
              </p>
              <div className="d-flex flex-wrap justify-content-center justify-content-lg-start gap-3">
                <button className="btn btn-info btn-lg px-5 py-3 fw-bold shadow-lg hover-up">Get Started Free</button>
                <button className="btn btn-outline-light btn-lg px-5 py-3 hover-light">Watch Demo</button>
              </div>
            </div>
            
            <div className="col-lg-5 d-none d-lg-block">
              <div className="position-relative">
                {/* Floating Card Effect */}
                <div className="bg-white bg-opacity-10 p-5 rounded-4 border border-white border-opacity-25 backdrop-blur shadow-2xl text-center animate-float">
                   <i className="bi bi-rocket-takeoff text-info display-1 mb-4 shadow-icon"></i>
                   <div className="bg-dark bg-opacity-50 p-3 rounded-3 mt-4 text-start border border-secondary">
                      <div className="d-flex gap-2 mb-2">
                        <div className="bg-danger rounded-circle" style={{width: '8px', height: '8px'}}></div>
                        <div className="bg-warning rounded-circle" style={{width: '8px', height: '8px'}}></div>
                      </div>
                      <code className="text-info small">System.deploy("Success")</code>
                   </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. MODERN STATS (Glass Style) */}
      <section className="container py-5" style={{marginTop: '-50px'}}>
        <div className="row g-4 justify-content-center">
          {[
            {label: 'Active Users', val: '500k+'},
            {label: 'Total Revenue', val: '$12M'},
            {label: 'Uptime', val: '99.9%'},
            {label: 'Global Edge', val: '24/7'}
          ].map((stat, i) => (
            <div className="col-6 col-md-3" key={i}>
              <div className="bg-white shadow-lg rounded-4 p-4 text-center border-bottom border-4 border-info transition-hover">
                <h2 className="fw-bold mb-0">{stat.val}</h2>
                <small className="text-muted fw-bold text-uppercase">{stat.label}</small>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 3. FEATURES (Using clean, spacious grid) */}
      <section className="container py-5 my-5">
        <div className="row mb-5 justify-content-center">
          <div className="col-lg-6 text-center">
            <h6 className="text-primary fw-bold text-uppercase letter-spacing-2">The Platform</h6>
            <h2 className="display-5 fw-bold mt-2">Everything you need to scale</h2>
            <p className="text-muted fs-5">Ship better products without managing infrastructure.</p>
          </div>
        </div>
        
        <div className="row g-4">
          {[
            {icon: 'cpu', title: 'Edge Computing', color: 'primary'},
            {icon: 'shield-lock', title: 'Enterprise Security', color: 'success'},
            {icon: 'lightning-charge', title: 'Global CDN', color: 'warning'}
          ].map((item, i) => (
            <div className="col-md-4" key={i}>
              <div className="card h-100 border-0 shadow-sm p-4 rounded-4 hover-lift">
                <div className={`bg-${item.color} bg-opacity-10 rounded-3 p-3 d-inline-block mb-4`}>
                  <i className={`bi bi-${item.icon} fs-2 text-${item.color}`}></i>
                </div>
                <h4 className="fw-bold">{item.title}</h4>
                <p className="text-muted mb-0">Our proprietary engine handles the heavy lifting so your team can focus on the UI and customer experience.</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 4. PREMIUM TESTIMONIAL */}
      <section className="bg-dark text-white py-5 position-relative overflow-hidden">
        <div className="container py-5 text-center position-relative" style={{zIndex: 1}}>
          <i className="bi bi-quote display-1 text-info opacity-25"></i>
          <h2 className="display-6 fw-light italic mb-4">
            "The transition was seamless. We improved our site speed by 200% in just one week."
          </h2>
          <div className="d-flex align-items-center justify-content-center gap-3">
            <img src="https://i.pravatar.cc/60?img=33" className="rounded-circle border border-info" alt="User" />
            <div className="text-start">
              <p className="mb-0 fw-bold">Sarah Jenkins</p>
              <small className="text-info">CTO at TechFlow</small>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;