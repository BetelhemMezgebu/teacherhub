function Dashboard() {
  return (
    <section className="dashboard-page">
      <h1>Teacher Dashboard</h1>

      <p>Welcome to your TeacherHub financial dashboard.</p>

      <div className="dashboard-cards">
        <div className="dashboard-card">
          <h3>Monthly Income</h3>
          <p>ETB 0</p>
        </div>

        <div className="dashboard-card">
          <h3>Monthly Expenses</h3>
          <p>ETB 0</p>
        </div>

        <div className="dashboard-card">
          <h3>Balance</h3>
          <p>ETB 0</p>
        </div>

        <div className="dashboard-card">
          <h3>Savings</h3>
          <p>ETB 0</p>
        </div>
      </div>

      <div className="dashboard-section">
        <h2>Recent Transactions</h2>
        <p>No transactions yet.</p>
      </div>

      <div className="dashboard-section">
        <h2>Recommended Opportunities</h2>
        <p>No recommendations yet.</p>
      </div>
    </section>
  );
}

export default Dashboard;