function Money() {
  return (
    <section className="money-page">
      <h1>Money Manager</h1>

      <p>
        Track your income, expenses, budget, and savings in one place.
      </p>

      <div className="money-summary">
        <div className="money-card">
          <h3>Income</h3>
          <p>ETB 0</p>
        </div>

        <div className="money-card">
          <h3>Expenses</h3>
          <p>ETB 0</p>
        </div>

        <div className="money-card">
          <h3>Balance</h3>
          <p>ETB 0</p>
        </div>
      </div>

      <div className="money-section">
        <h2>Transactions</h2>
        <p>No transactions yet.</p>
      </div>

      <div className="money-section">
        <h2>Savings Goals</h2>
        <p>No savings goals yet.</p>
      </div>
    </section>
  );
}

export default Money;