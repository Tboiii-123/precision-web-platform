import React from 'react';

function Developers() {
  return (
    <div className="developers-page bg-light">
      {/* 1. TECHNICAL HERO SECTION */}
      <section className="bg-dark text-white py-5">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-7">
              <h1 className="display-4 fw-bold code-font text-info">&lt;Built for Developers /&gt;</h1>
              <p className="lead text-secondary mt-3">
                Integrate our powerful API and SDKs in minutes. Comprehensive documentation, 
                robust CLI tools, and a community that has your back.
              </p>
              <div className="mt-4">
                <button className="btn btn-info me-3 px-4">Read Documentation</button>
                <button className="btn btn-outline-light px-4">Get API Key</button>
              </div>
            </div>
            {/* Mock Code Editor UI */}
            <div className="col-md-5 d-none d-md-block">
              <div className="card bg-black text-success p-3 shadow-lg border-secondary">
                <div className="d-flex gap-2 mb-2">
                  <div className="bg-danger rounded-circle" style={{width:'12px', height:'12px'}}></div>
                  <div className="bg-warning rounded-circle" style={{width:'12px', height:'12px'}}></div>
                  <div className="bg-success rounded-circle" style={{width:'12px', height:'12px'}}></div>
                </div>
                <code className="small">
                  <span className="text-primary">npm</span> install @our-framework/core <br/>
                  <span className="text-secondary">// Initialize the client</span><br/>
                  <span className="text-warning">const</span> client = <span className="text-warning">new</span> Client({'{'} <br/>
                  &nbsp;&nbsp;apiKey: <span className="text-info">'YOUR_KEY'</span> <br/>
                  {'}'});
                </code>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. TECH STACK / TOOLS SECTION */}
      <div className="container py-5">
        <div className="text-center mb-5">
          <h2 className="fw-bold">The Developer Ecosystem</h2>
          <p className="text-muted">Tools designed to make your workflow seamless.</p>
        </div>

        <div className="row g-4">
          {/* Tool 1 */}
          <div className="col-md-6 col-lg-3">
            <div className="card h-100 text-center border-0 shadow-sm p-4">
              <i className="bi bi-terminal fs-1 text-primary mb-3"></i>
              <h5 className="fw-bold">Powerful CLI</h5>
              <p className="small text-muted">Deploy and manage your infrastructure directly from your terminal.</p>
            </div>
          </div>
          {/* Tool 2 */}
          <div className="col-md-6 col-lg-3">
            <div className="card h-100 text-center border-0 shadow-sm p-4">
              <i className="bi bi-box-seam fs-1 text-primary mb-3"></i>
              <h5 className="fw-bold">SDKs</h5>
              <p className="small text-muted">Native libraries for React, Node.js, Python, and Go.</p>
            </div>
          </div>
          {/* Tool 3 */}
          <div className="col-md-6 col-lg-3">
            <div className="card h-100 text-center border-0 shadow-sm p-4">
              <i className="bi bi-webcam fs-1 text-primary mb-3"></i>
              <h5 className="fw-bold">Webhooks</h5>
              <p className="small text-muted">Real-time event notifications delivered straight to your server.</p>
            </div>
          </div>
          {/* Tool 4 */}
          <div className="col-md-6 col-lg-3">
            <div className="card h-100 text-center border-0 shadow-sm p-4">
              <i className="bi bi-shield-lock fs-1 text-primary mb-3"></i>
              <h5 className="fw-bold">Sandbox</h5>
              <p className="small text-muted">A safe environment to test your integrations before going live.</p>
            </div>
          </div>
        </div>
      </div>

      {/* 3. COMMUNITY SECTION */}
      <section className="bg-white py-5 border-top">
        <div className="container text-center">
          <h3 className="fw-bold mb-4">Join the Community</h3>
          <div className="d-flex justify-content-center gap-4">
            <div className="text-center">
              <h4 className="mb-0 fw-bold">15k+</h4>
              <small className="text-muted">GitHub Stars</small>
            </div>
            <div className="vr"></div>
            <div className="text-center">
              <h4 className="mb-0 fw-bold">40k+</h4>
              <small className="text-muted">Discord Members</small>
            </div>
            <div className="vr"></div>
            <div className="text-center">
              <h4 className="mb-0 fw-bold">200+</h4>
              <small className="text-muted">Contributors</small>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Developers;