function Dashboard() {
  return (
    <section className="dashboard-page">

      {/* HEADER */}
      <div className="dashboard-header">
        <div>
          <span className="dashboard-label">
            TEACHER DASHBOARD
          </span>

          <h1>
            Good morning, Teacher 👋
          </h1>

          <p>
            Here's your financial overview and recommended
            teaching opportunities.
          </p>
        </div>

        <button className="dashboard-action">
          + Add Transaction
        </button>
      </div>


      {/* FINANCIAL SUMMARY */}
      <div className="dashboard-cards">

        <div className="dashboard-card income-card">
          <div className="card-top">
            <span>Monthly Income</span>
            <div className="card-icon">↑</div>
          </div>

          <h2>ETB 25,000</h2>

          <p className="positive">
            ↑ 8.2% from last month
          </p>
        </div>


        <div className="dashboard-card expense-card">
          <div className="card-top">
            <span>Monthly Expenses</span>
            <div className="card-icon">↓</div>
          </div>

          <h2>ETB 8,500</h2>

          <p className="negative">
            ↓ 3.1% from last month
          </p>
        </div>


        <div className="dashboard-card balance-card-dashboard">
          <div className="card-top">
            <span>Current Balance</span>
            <div className="card-icon">◆</div>
          </div>

          <h2>ETB 16,500</h2>

          <p className="positive">
            Available balance
          </p>
        </div>


        <div className="dashboard-card savings-card">
          <div className="card-top">
            <span>Savings Progress</span>
            <div className="card-icon">★</div>
          </div>

          <h2>72%</h2>

          <div className="dashboard-progress">
            <div></div>
          </div>

          <p>
            ETB 36,000 of ETB 50,000
          </p>
        </div>

      </div>


      {/* MAIN GRID */}
      <div className="dashboard-main-grid">

        {/* TRANSACTIONS */}
        <div className="dashboard-panel">

          <div className="panel-header">

            <div>
              <span className="panel-label">
                ACTIVITY
              </span>

              <h2>
                Recent Transactions
              </h2>
            </div>

            <button className="text-button">
              View All →
            </button>

          </div>


          <div className="transaction-list">

            <div className="transaction-item">

              <div className="transaction-icon income">
                💼
              </div>

              <div className="transaction-info">
                <strong>
                  Monthly Salary
                </strong>

                <span>
                  September 20, 2026
                </span>
              </div>

              <strong className="transaction-amount income-text">
                +ETB 25,000
              </strong>

            </div>


            <div className="transaction-item">

              <div className="transaction-icon expense">
                🛒
              </div>

              <div className="transaction-info">
                <strong>
                  Groceries
                </strong>

                <span>
                  September 19, 2026
                </span>
              </div>

              <strong className="transaction-amount">
                -ETB 2,000
              </strong>

            </div>


            <div className="transaction-item">

              <div className="transaction-icon expense">
                🚌
              </div>

              <div className="transaction-info">
                <strong>
                  Transportation
                </strong>

                <span>
                  September 18, 2026
                </span>
              </div>

              <strong className="transaction-amount">
                -ETB 1,200
              </strong>

            </div>


            <div className="transaction-item">

              <div className="transaction-icon savings">
                🎯
              </div>

              <div className="transaction-info">
                <strong>
                  Vacation Savings
                </strong>

                <span>
                  September 17, 2026
                </span>
              </div>

              <strong className="transaction-amount savings-text">
                -ETB 2,500
              </strong>

            </div>

          </div>

        </div>


        {/* SAVINGS GOAL */}
        <div className="dashboard-panel savings-goal-panel">

          <div className="panel-header">

            <div>
              <span className="panel-label">
                YOUR GOAL
              </span>

              <h2>
                Vacation Savings
              </h2>
            </div>

            <span className="goal-icon">
              🎯
            </span>

          </div>


          <div className="goal-amount">

            <strong>
              ETB 36,000
            </strong>

            <span>
              of ETB 50,000
            </span>

          </div>


          <div className="large-progress">
            <div></div>
          </div>


          <div className="goal-details">

            <span>
              72% completed
            </span>

            <span>
              ETB 14,000 left
            </span>

          </div>


          <p className="goal-message">
            You're making great progress toward your
            savings goal! 🎉
          </p>

        </div>

      </div>


      {/* RECOMMENDED OPPORTUNITIES */}
      <div className="dashboard-panel opportunities-panel">

        <div className="panel-header">

          <div>
            <span className="panel-label">
              RECOMMENDED FOR YOU
            </span>

            <h2>
              Teaching Opportunities
            </h2>
          </div>

          <button className="text-button">
            Explore All →
          </button>

        </div>


        <div className="dashboard-opportunity-grid">


          {/* OPPORTUNITY 1 */}
          <div className="dashboard-opportunity">

            <div className="opportunity-top">

              <span className="opportunity-badge">
                Mathematics
              </span>

              <span className="opportunity-type">
                Part-time
              </span>

            </div>

            <h3>
              Private Mathematics Tutor
            </h3>

            <p>
              Help a secondary school student improve
              their mathematics skills.
            </p>

            <div className="opportunity-footer">

              <span>
                📍 Addis Ababa
              </span>

              <strong>
                ETB 500/session
              </strong>

            </div>

          </div>


          {/* OPPORTUNITY 2 */}
          <div className="dashboard-opportunity">

            <div className="opportunity-top">

              <span className="opportunity-badge">
                English
              </span>

              <span className="opportunity-type">
                Weekend
              </span>

            </div>

            <h3>
              Weekend English Teacher
            </h3>

            <p>
              Teach English to students during weekend
              classes.
            </p>

            <div className="opportunity-footer">

              <span>
                📍 Hawassa
              </span>

              <strong>
                ETB 3,000/month
              </strong>

            </div>

          </div>


        </div>

      </div>

    </section>
  );
}

export default Dashboard;