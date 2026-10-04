import { Link } from "react-router-dom";

function Opportunities() {
  return (
    <section className="opportunities-page">
      {/* Header */}
      <div className="opportunities-header">
        <div>
          <span className="opportunities-label">
            EARN MORE
          </span>

          <h1>Teaching Opportunities</h1>

          <p>
            Discover flexible teaching opportunities and create
            additional income using your skills.
          </p>
        </div>

        <div className="opportunities-count">
          <strong>12+</strong>
          <span>Opportunities</span>
        </div>
      </div>

      {/* Search & Filters */}
      <div className="opportunity-filters">
        <div className="search-box">
          <span>⌕</span>

          <input
            type="text"
            placeholder="Search opportunities..."
          />
        </div>

        <select defaultValue="">
          <option value="" disabled>
            All Subjects
          </option>

          <option value="mathematics">Mathematics</option>
          <option value="english">English</option>
          <option value="physics">Physics</option>
          <option value="chemistry">Chemistry</option>
          <option value="biology">Biology</option>
        </select>

        <select defaultValue="">
          <option value="" disabled>
            All Locations
          </option>

          <option value="addis-ababa">Addis Ababa</option>
          <option value="hawassa">Hawassa</option>
          <option value="bahir-dar">Bahir Dar</option>
          <option value="dire-dawa">Dire Dawa</option>
        </select>
      </div>

      {/* Opportunity Cards */}
      <div className="opportunity-list">

        {/* Opportunity 1 */}
        <article className="opportunity-card">
          <div className="opportunity-card-top">
            <span className="opportunity-subject">
              Mathematics
            </span>

            <span className="opportunity-type">
              Part-time
            </span>
          </div>

          <h2>Private Mathematics Tutor</h2>

          <p>
            Help a secondary school student improve their
            mathematics skills and examination performance.
          </p>

          <div className="opportunity-meta">
            <span>📍 Addis Ababa</span>
            <span>🕐 Flexible</span>
          </div>

          <div className="opportunity-card-footer">
            <div>
              <small>PAYMENT</small>
              <strong>ETB 500 / session</strong>
            </div>

            <Link
              to="/opportunities/1"
              className="view-opportunity-button"
            >
              View Details →
            </Link>
          </div>
        </article>

        {/* Opportunity 2 */}
        <article className="opportunity-card">
          <div className="opportunity-card-top">
            <span className="opportunity-subject">
              English
            </span>

            <span className="opportunity-type">
              Weekend
            </span>
          </div>

          <h2>Weekend English Teacher</h2>

          <p>
            Teach English to students during weekend classes
            and help them build stronger communication skills.
          </p>

          <div className="opportunity-meta">
            <span>📍 Hawassa</span>
            <span>🕐 Weekends</span>
          </div>

          <div className="opportunity-card-footer">
            <div>
              <small>PAYMENT</small>
              <strong>ETB 3,000 / month</strong>
            </div>

            <Link
              to="/opportunities/2"
              className="view-opportunity-button"
            >
              View Details →
            </Link>
          </div>
        </article>

        {/* Opportunity 3 */}
        <article className="opportunity-card">
          <div className="opportunity-card-top">
            <span className="opportunity-subject">
              Physics
            </span>

            <span className="opportunity-type">
              Online
            </span>
          </div>

          <h2>Online Physics Tutor</h2>

          <p>
            Provide online physics lessons for high school
            students preparing for examinations.
          </p>

          <div className="opportunity-meta">
            <span>🌐 Online</span>
            <span>🕐 Flexible</span>
          </div>

          <div className="opportunity-card-footer">
            <div>
              <small>PAYMENT</small>
              <strong>ETB 700 / session</strong>
            </div>

            <Link
              to="/opportunities/3"
              className="view-opportunity-button"
            >
              View Details →
            </Link>
          </div>
        </article>

        {/* Opportunity 4 */}
        <article className="opportunity-card">
          <div className="opportunity-card-top">
            <span className="opportunity-subject">
              Chemistry
            </span>

            <span className="opportunity-type">
              Part-time
            </span>
          </div>

          <h2>Chemistry Exam Preparation</h2>

          <p>
            Support grade 12 students with chemistry exam
            preparation and practice sessions.
          </p>

          <div className="opportunity-meta">
            <span>📍 Bahir Dar</span>
            <span>🕐 Evenings</span>
          </div>

          <div className="opportunity-card-footer">
            <div>
              <small>PAYMENT</small>
              <strong>ETB 4,000 / month</strong>
            </div>

            <Link
              to="/opportunities/4"
              className="view-opportunity-button"
            >
              View Details →
            </Link>
          </div>
        </article>

      </div>
    </section>
  );
}

export default Opportunities;