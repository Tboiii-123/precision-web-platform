import React from 'react';

function Marketing() {
  return (
    <div className="marketing-page overflow-hidden">
      {/* 1. PREMIUM HERO SECTION (Matches Home Page Style) */}
      <section className="position-relative text-white py-5 d-flex align-items-center" style={{ 
        background: 'radial-gradient(circle at top left, #1e3a8a, #000)',
        minHeight: '50vh'
      }}>
        <div className="container position-relative" style={{zIndex: 1}}>
          <div className="row justify-content-center text-center">
            <div className="col-lg-8">
              <h1 className="display-2 fw-bold mb-3">
                Precision <span className="text-transparent bg-clip-text" style={{
                   backgroundImage: 'linear-gradient(90deg, #0dcaf0, #0d6efd)',
                   WebkitBackgroundClip: 'text',
                   WebkitTextFillColor: 'transparent'
                }}>Marketing.</span>
              </h1>
              <p className="lead fs-4 opacity-75">
                We scale brands through data-driven strategies and creative storytelling that actually converts.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 2. DETAILED STRATEGY (Using Premium Cards) */}
      <div className="container py-5" style={{marginTop: '-60px'}}>
        <div className="row g-4">
          
          {/* SEO Detailed Card */}
          <div className="col-lg-4 col-md-6">
            <div className="card h-100 border-0 shadow-lg p-4 rounded-4 hover-lift bg-white">
              <div className="bg-primary bg-opacity-10 rounded-3 p-3 d-inline-block mb-4" style={{width: 'fit-content'}}>
                <i className="bi bi-search fs-1 text-primary"></i>
              </div>
              <h4 className="fw-bold">SEO Optimization</h4>
              <p className="text-muted">
                Don't just exist—be discovered. Our SEO experts dive deep into technical audits and keyword intent to ensure you dominate search results.
              </p>
              <hr className="my-4 opacity-25" />
              <ul className="list-unstyled small">
                <li className="mb-2"><i className="bi bi-check2-circle text-primary me-2"></i>Keyword Research</li>
                <li className="mb-2"><i className="bi bi-check2-circle text-primary me-2"></i>On-Page Technical SEO</li>
                <li className="mb-2"><i className="bi bi-check2-circle text-primary me-2"></i>Content Strategy</li>
              </ul>
            </div>
          </div>

          {/* Social Media Detailed Card */}
          <div className="col-lg-4 col-md-6">
            <div className="card h-100 border-0 shadow-lg p-4 rounded-4 hover-lift bg-white">
              <div className="bg-success bg-opacity-10 rounded-3 p-3 d-inline-block mb-4" style={{width: 'fit-content'}}>
                <i className="bi bi-share fs-1 text-success"></i>
              </div>
              <h4 className="fw-bold">Social Media</h4>
              <p className="text-muted">
                Engage with your audience where they live. We build community and brand loyalty through consistent, high-value content.
              </p>
              <hr className="my-4 opacity-25" />
              <ul className="list-unstyled small">
                <li className="mb-2"><i className="bi bi-check2-circle text-success me-2"></i>Community Engagement</li>
                <li className="mb-2"><i className="bi bi-check2-circle text-success me-2"></i>Paid Ad Campaigns</li>
                <li className="mb-2"><i className="bi bi-check2-circle text-success me-2"></i>Influencer Partnerships</li>
              </ul>
            </div>
          </div>

          {/* Analytics Card */}
          <div className="col-lg-4 col-md-12">
            <div className="card h-100 border-0 shadow-lg p-4 rounded-4 hover-lift bg-white">
              <div className="bg-warning bg-opacity-10 rounded-3 p-3 d-inline-block mb-4" style={{width: 'fit-content'}}>
                <i className="bi bi-graph-up-arrow fs-1 text-warning"></i>
              </div>
              <h4 className="fw-bold">Data Analytics</h4>
              <p className="text-muted">
                We track every click. Our performance reports show exactly where your budget is going and how many leads are converting.
              </p>
              <hr className="my-4 opacity-25" />
              <ul className="list-unstyled small">
                <li className="mb-2"><i className="bi bi-check2-circle text-warning me-2"></i>ROI Tracking</li>
                <li className="mb-2"><i className="bi bi-check2-circle text-warning me-2"></i>A/B Testing</li>
                <li className="mb-2"><i className="bi bi-check2-circle text-warning me-2"></i>Monthly Insights</li>
              </ul>
            </div>
          </div>

        </div>
      </div>

      {/* 3. PREMIUM CALL TO ACTION */}
      <section className="container my-5 py-5">
        <div className="p-5 rounded-5 bg-dark text-white text-center shadow-2xl position-relative overflow-hidden" 
             style={{ backgroundImage: 'linear-gradient(45deg, #000 0%, #1e3a8a 100%)' }}>
          <div className="position-relative" style={{zIndex: 1}}>
            <h2 className="display-5 fw-bold mb-3">Ready to grow your business?</h2>
            <p className="lead opacity-75 mb-4">Join 500+ companies already using our marketing engine.</p>
            <button className="btn btn-info btn-lg px-5 py-3 fw-bold hover-up shadow">Work With Us Now</button>
          </div>
          {/* Subtle decoration */}
          <div className="position-absolute top-50 start-50 translate-middle opacity-25" style={{zIndex: 0}}>
             <i className="bi bi-currency-exchange text-white" style={{fontSize: '20rem'}}></i>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Marketing;