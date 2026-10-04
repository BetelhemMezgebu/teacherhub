import { Link } from "react-router-dom";

function Register() {
  return (
    <section className="auth-page register-page">
      <div className="auth-container">
        <div className="auth-brand">
          <div className="auth-brand-icon">T</div>

          <div>
            <strong>TeacherHub</strong>
            <span>Ethiopia 🇪🇹</span>
          </div>
        </div>

        <div className="auth-heading">
          <span>JOIN TEACHERHUB</span>
          <h1>Create your account</h1>
          <p>
            Start managing your money and growing your teaching career.
          </p>
        </div>

        <form className="auth-form">
          <div className="form-group">
            <label htmlFor="name">Full Name</label>
            <input
              type="text"
              id="name"
              placeholder="Enter your full name"
            />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email Address</label>
            <input
              type="email"
              id="email"
              placeholder="teacher@example.com"
            />
          </div>

          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              placeholder="Create a password"
            />
          </div>

          <div className="form-group">
            <label htmlFor="subject">Teaching Subject</label>
            <input
              type="text"
              id="subject"
              placeholder="e.g. Mathematics"
            />
          </div>

          <div className="form-group">
            <label htmlFor="location">Location</label>
            <input
              type="text"
              id="location"
              placeholder="e.g. Addis Ababa"
            />
          </div>

          <button type="submit" className="auth-button">
            Create Account →
          </button>
        </form>

        <p className="auth-switch">
          Already have an account?{" "}
          <Link to="/login">Login here</Link>
        </p>
      </div>

      <div className="auth-side">
        <div className="auth-side-content">
          <span className="auth-side-badge">
            🇪🇹 BUILT FOR ETHIOPIAN TEACHERS
          </span>

          <h2>
            Manage your money.
            <br />
            <span>Grow your career.</span>
          </h2>

          <p>
            Create your TeacherHub account and bring your financial
            management and teaching opportunities together in one place.
          </p>

          <div className="auth-features">
            <div>
              <span>✓</span>
              <p>Track your income and expenses</p>
            </div>

            <div>
              <span>✓</span>
              <p>Build and monitor savings goals</p>
            </div>

            <div>
              <span>✓</span>
              <p>Find teaching opportunities</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Register;