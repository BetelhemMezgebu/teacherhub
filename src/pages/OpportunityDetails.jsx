import { Link, useParams } from "react-router-dom";

function OpportunityDetails() {
  const { id } = useParams();

  return (
    <section className="opportunity-details-page">
      {/* Back Button */}
      <Link to="/opportunities" className="back-link">
        ← Back to Opportunities
      </Link>

      {/* Header */}
      <div className="opportunity-details-header">
        <div>
          <span className="details-label">
            TEACHING OPPORTUNITY
          </span>

          <h1>Private Mathematics Tutor</h1>

          <p>
            Help a secondary school student improve their
            mathematics skills.
          </p>
        </div>

        <span className="opportunity-status">
          ● Available
        </span>
      </div>

      {/* Main Content */}
      <div className="opportunity-details-grid">

        {/* Left */}
        <div className="opportunity-details-main">

          <div className="details-card">
            <h2>About this opportunity</h2>

            <p>
              We are looking for a dedicated mathematics teacher
              to provide private tutoring to a secondary school
              student. The goal is to improve the student's
              understanding, confidence, and examination
              performance.
            </p>

            <h3>Requirements</h3>

            <ul className="requirements-list">
              <li>Mathematics teaching experience</li>
              <li>Strong communication skills</li>
              <li>Ability to explain concepts clearly</li>
              <li>Reliable and punctual</li>
            </ul>
          </div>

          <div className="details-card">
            <h2>Opportunity Information</h2>

            <div className="details-info-grid">

              <div>
                <span>Subject</span>
                <strong>Mathematics</strong>
              </div>

              <div>
                <span>Location</span>
                <strong>📍 Addis Ababa</strong>
              </div>

              <div>
                <span>Type</span>
                <strong>Private Tutoring</strong>
              </div>

              <div>
                <span>Schedule</span>
                <strong>Flexible</strong>
              </div>

              <div>
                <span>Payment</span>
                <strong>ETB 500 / session</strong>
              </div>

              <div>
                <span>Opportunity ID</span>
                <strong>#{id}</strong>
              </div>

            </div>
          </div>

        </div>

        {/* Right */}
        <aside className="opportunity-apply-card">

          <span className="apply-label">
            COMPENSATION
          </span>

          <h2>ETB 500</h2>

          <p>per tutoring session</p>

          <div className="apply-divider"></div>

          <div className="apply-detail">
            <span>📍 Location</span>
            <strong>Addis Ababa</strong>
          </div>

          <div className="apply-detail">
            <span>📚 Subject</span>
            <strong>Mathematics</strong>
          </div>

          <div className="apply-detail">
            <span>🕐 Schedule</span>
            <strong>Flexible</strong>
          </div>

          <button className="apply-button">
            Apply Now →
          </button>

          <button className="save-button">
            ♡ Save Opportunity
          </button>

          <p className="apply-note">
            You can review your application before submitting.
          </p>

        </aside>

      </div>
    </section>
  );
}

export default OpportunityDetails;