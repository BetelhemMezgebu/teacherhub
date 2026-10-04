
function Money() {
  return (
    <section className="money-page">
      {/* Header */}
      <div className="money-header">
        <div>
          <span className="money-label">FINANCIAL MANAGEMENT</span>

          <h1>Money Manager 💰</h1>

          <p>
            Take control of your income, expenses, and savings goals.
          </p>
        </div>

        <button className="money-action">
          + Add Transaction
        </button>
      </div>

      {/* Summary Cards */}
      <div className="money-summary">
        <div className="money-card">
          <div className="money-card-top">
            <span>Total Income</span>
            <div className="money-icon income-icon">↑</div>
          </div>

          <h2>ETB 25,000</h2>

          <p className="money-positive">
            +8.2% from last month
          </p>
        </div>

        <div className="money-card">
          <div className="money-card-top">
            <span>Total Expenses</span>
            <div className="money-icon expense-icon">↓</div>
          </div>

          <h2>ETB 8,500</h2>

          <p className="money-negative">
            -3.1% from last month
          </p>
        </div>

        <div className="money-card">
          <div className="money-card-top">
            <span>Available Balance</span>
            <div className="money-icon balance-icon">◆</div>
          </div>

          <h2>ETB 16,500</h2>

          <p className="money-positive">
            Current balance
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="money-main-grid">
        {/* Transactions */}
        <div className="money-panel">
          <div className="money-panel-header">
            <div>
              <span className="money-panel-label">TRANSACTION HISTORY</span>
              <h2>Recent Transactions</h2>
            </div>

            <select defaultValue="all">
              <option value="all">All</option>
              <option value="income">Income</option>
              <option value="expense">Expenses</option>
            </select>
          </div>

          <div className="money-transactions">
            <div className="money-transaction">
              <div className="money-transaction-icon income-bg">
                💼
              </div>

              <div className="money-transaction-info">
                <strong>Monthly Salary</strong>
                <span>September 20, 2026 • Salary</span>
              </div>

              <strong className="money-income">
                +ETB 25,000
              </strong>
            </div>

            <div className="money-transaction">
              <div className="money-transaction-icon expense-bg">
                🛒
              </div>

              <div className="money-transaction-info">
                <strong>Groceries</strong>
                <span>September 19, 2026 • Food</span>
              </div>

              <strong className="money-expense">
                -ETB 2,000
              </strong>
            </div>

            <div className="money-transaction">
              <div className="money-transaction-icon expense-bg">
                🚌
              </div>

              <div className="money-transaction-info">
                <strong>Transportation</strong>
                <span>September 18, 2026 • Transport</span>
              </div>

              <strong className="money-expense">
                -ETB 1,200
              </strong>
            </div>

            <div className="money-transaction">
              <div className="money-transaction-icon savings-bg">
                🎯
              </div>

              <div className="money-transaction-info">
                <strong>Vacation Savings</strong>
                <span>September 17, 2026 • Savings</span>
              </div>

              <strong className="money-saving">
                -ETB 2,500
              </strong>
            </div>

            <div className="money-transaction">
              <div className="money-transaction-icon expense-bg">
                📱
              </div>

              <div className="money-transaction-info">
                <strong>Internet & Phone</strong>
                <span>September 15, 2026 • Utilities</span>
              </div>

              <strong className="money-expense">
                -ETB 800
              </strong>
            </div>
          </div>
        </div>

        {/* Spending Overview */}
        <div className="money-panel spending-panel">
          <div className="money-panel-header">
            <div>
              <span className="money-panel-label">THIS MONTH</span>
              <h2>Spending Overview</h2>
            </div>
          </div>

          <div className="spending-total">
            <strong>ETB 8,500</strong>
            <span>Total spent</span>
          </div>

          <div className="spending-item">
            <div>
              <span>🍴 Food</span>
              <strong>ETB 2,800</strong>
            </div>

            <div className="spending-bar">
              <div style={{ width: "80%" }}></div>
            </div>
          </div>

          <div className="spending-item">
            <div>
              <span>🚌 Transport</span>
              <strong>ETB 1,700</strong>
            </div>

            <div className="spending-bar">
              <div style={{ width: "50%" }}></div>
            </div>
          </div>

          <div className="spending-item">
            <div>
              <span>🏠 Housing</span>
              <strong>ETB 2,000</strong>
            </div>

            <div className="spending-bar">
              <div style={{ width: "60%" }}></div>
            </div>
          </div>

          <div className="spending-item">
            <div>
              <span>📱 Utilities</span>
              <strong>ETB 800</strong>
            </div>

            <div className="spending-bar">
              <div style={{ width: "30%" }}></div>
            </div>
          </div>

          <div className="spending-item">
            <div>
              <span>📦 Other</span>
              <strong>ETB 1,200</strong>
            </div>

            <div className="spending-bar">
              <div style={{ width: "40%" }}></div>
            </div>
          </div>
        </div>
      </div>

      {/* Savings Goals */}
      <div className="money-panel savings-panel">
        <div className="money-panel-header">
          <div>
            <span className="money-panel-label">FINANCIAL GOALS</span>
            <h2>Savings Goals</h2>
          </div>

          <button className="small-money-button">
            + New Goal
          </button>
        </div>

        <div className="savings-grid">
          <div className="savings-goal">
            <div className="savings-goal-top">
              <div>
                <span className="goal-emoji">🏖️</span>
                <strong>Vacation</strong>
              </div>

              <span>72%</span>
            </div>

            <p>ETB 36,000 of ETB 50,000</p>

            <div className="savings-progress">
              <div style={{ width: "72%" }}></div>
            </div>

            <span className="goal-deadline">
              Deadline: December 2026
            </span>
          </div>

          <div className="savings-goal">
            <div className="savings-goal-top">
              <div>
                <span className="goal-emoji">💻</span>
                <strong>New Laptop</strong>
              </div>

              <span>45%</span>
            </div>

            <p>ETB 18,000 of ETB 40,000</p>

            <div className="savings-progress">
              <div style={{ width: "45%" }}></div>
            </div>

            <span className="goal-deadline">
              Deadline: March 2027
            </span>
          </div>

          <div className="savings-goal">
            <div className="savings-goal-top">
              <div>
                <span className="goal-emoji">🏠</span>
                <strong>Emergency Fund</strong>
              </div>

              <span>30%</span>
            </div>

            <p>ETB 6,000 of ETB 20,000</p>

            <div className="savings-progress">
              <div style={{ width: "30%" }}></div>
            </div>

            <span className="goal-deadline">
              Deadline: June 2027
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Money;
