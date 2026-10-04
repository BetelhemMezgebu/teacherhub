import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="home-page">

      {/* ================= HERO ================= */}
      <section className="hero-section">

        <div className="hero-content">

          <span className="hero-badge">
            🇪🇹 BUILT FOR ETHIOPIAN TEACHERS
          </span>

          <h1>
            Your Income.
            <br />
            <span>Your Opportunities.</span>
          </h1>

          <p>
            TeacherHub helps Ethiopian teachers take control of their
            finances, build savings, and discover new ways to earn
            from their skills.
          </p>

          <div className="hero-buttons">

            <Link
              to="/register"
              className="primary-button"
            >
              Get Started
              <span>→</span>
            </Link>

            <Link
              to="/opportunities"
              className="secondary-button"
            >
              Explore Opportunities
            </Link>

          </div>

          <div className="hero-trust">
            <span>✓</span>
            Designed for Ethiopian teachers
            <span>•</span>
            Ethiopian Birr
            <span>•</span>
            Simple & practical
          </div>

        </div>


        {/* ================= DASHBOARD PREVIEW ================= */}

        <div className="hero-card">

          <div className="hero-card-header">

            <div>
              <span className="preview-label">
                TEACHERHUB
              </span>

              <strong>
                Financial Overview
              </strong>
            </div>

            <span className="online-dot">
              ●
            </span>

          </div>


          {/* Balance */}

          <div className="balance-card">

            <p>Total Balance</p>

            <h2>
              ETB 18,500
            </h2>

            <span>
              ↑ 12.5% this month
            </span>

          </div>


          {/* Income / Expense */}

          <div className="mini-cards">

            <div className="mini-card income-mini">

              <span>
                Monthly Income
              </span>

              <strong>
                ETB 25,000
              </strong>

              <small>
                ↑ 8.2%
              </small>

            </div>


            <div className="mini-card expense-mini">

              <span>
                Monthly Expenses
              </span>

              <strong>
                ETB 6,500
              </strong>

              <small>
                ↓ 3.1%
              </small>

            </div>

          </div>


          {/* Savings */}

          <div className="progress-card">

            <div>

              <div>
                <span>
                  Savings Goal
                </span>

                <strong>
                  Vacation
                </strong>
              </div>

              <strong>
                72%
              </strong>

            </div>

            <div className="progress-bar">
              <div></div>
            </div>

            <small>
              ETB 36,000 of ETB 50,000
            </small>

          </div>


          {/* Recent activity */}

          <div className="preview-activity">

            <div>
              <span className="activity-icon">
                💼
              </span>

              <div>
                <strong>
                  Monthly Salary
                </strong>

                <small>
                  Income
                </small>
              </div>

              <b>
                +25,000
              </b>
            </div>


            <div>
              <span className="activity-icon">
                🛒
              </span>

              <div>
                <strong>
                  Groceries
                </strong>

                <small>
                  Expense
                </small>
              </div>

              <b>
                -2,000
              </b>
            </div>

          </div>

        </div>

      </section>


      {/* ================= FEATURES ================= */}

      <section className="features-section">

        <div className="section-heading">

          <span>
            EVERYTHING IN ONE PLACE
          </span>

          <h2>
            Built around the real needs of teachers
          </h2>

          <p>
            From managing your monthly income to finding additional
            teaching opportunities, TeacherHub brings everything
            together in one simple platform.
          </p>

        </div>


        <div className="feature-grid">

          <article className="feature-card">

            <div className="feature-icon">
              💰
            </div>

            <span className="feature-number">
              01
            </span>

            <h3>
              Manage Your Money
            </h3>

            <p>
              Track salary, expenses, balance and savings goals
              using Ethiopian Birr.
            </p>

            <Link to="/money">
              Manage your money →
            </Link>

          </article>


          <article className="feature-card">

            <div className="feature-icon">
              🎯
            </div>

            <span className="feature-number">
              02
            </span>

            <h3>
              Build Your Savings
            </h3>

            <p>
              Set financial goals and monitor your progress toward
              the things that matter to you.
            </p>

            <Link to="/money">
              View savings →
            </Link>

          </article>


          <article className="feature-card">

            <div className="feature-icon">
              💼
            </div>

            <span className="feature-number">
              03
            </span>

            <h3>
              Earn More
            </h3>

            <p>
              Discover tutoring, weekend, online and other
              education-related opportunities.
            </p>

            <Link to="/opportunities">
              Explore opportunities →
            </Link>

          </article>

        </div>

      </section>


      {/* ================= HOW IT WORKS ================= */}

      <section className="how-section">

        <div className="section-heading">

          <span>
            HOW TEACHERHUB WORKS
          </span>

          <h2>
            Take control in three steps
          </h2>

        </div>


        <div className="steps-grid">

          <div className="step">

            <div className="step-number">
              01
            </div>

            <div>
              <h3>
                Create your profile
              </h3>

              <p>
                Tell us about yourself, your teaching subject
                and your location.
              </p>
            </div>

          </div>


          <div className="step">

            <div className="step-number">
              02
            </div>

            <div>
              <h3>
                Manage your finances
              </h3>

              <p>
                Record income and expenses and set meaningful
                savings goals.
              </p>
            </div>

          </div>


          <div className="step">

            <div className="step-number">
              03
            </div>

            <div>
              <h3>
                Discover new income
              </h3>

              <p>
                Find opportunities that match your teaching
                skills and availability.
              </p>
            </div>

          </div>

        </div>

      </section>


      {/* ================= CTA ================= */}

      <section className="cta-section">

        <div>

          <span>
            START YOUR TEACHERHUB JOURNEY
          </span>

          <h2>
            Your skills can create more opportunities.
          </h2>

          <p>
            Manage your money. Build your savings. Find new ways
            to earn.
          </p>

        </div>


        <Link
          to="/register"
          className="cta-button"
        >
          Create Free Account →
        </Link>

      </section>

    </div>
  );
}

export default Home;