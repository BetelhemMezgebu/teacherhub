
import { Link, useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    localStorage.setItem("teacherhub_logged_in", "true");

    navigate("/dashboard");
  };

  return (
    <section className="auth-page">

      {/* LEFT SIDE — LOGIN */}
      <div className="auth-container">

        <div className="auth-brand">
          <div className="auth-brand-icon">T</div>

          <div>
            <strong>TeacherHub</strong>
            <span>Ethiopia 🇪🇹</span>
          </div>
        </div>

        <div className="auth-heading">
          <span>WELCOME BACK</span>

          <h1>
            Welcome back,
            <br />
            Teacher 👋
          </h1>

          <p>
            Sign in to manage your finances and discover
            new teaching opportunities.
          </p>
        </div>

        <form className="auth-form" onSubmit={handleLogin}>

          <div className="form-group">
            <label htmlFor="email">
              Email Address
            </label>

            <input
              type="email"
              id="email"
              placeholder="teacher@example.com"
            />
          </div>

          <div className="form-group">

            <div className="password-label">
              <label htmlFor="password">
                Password
              </label>

              <a href="#">
                Forgot password?
              </a>
            </div>

            <input
              type="password"
              id="password"
              placeholder="Enter your password"
            />

          </div>

          <label className="remember-me">
            <input type="checkbox" />
            <span>Remember me</span>
          </label>

          <button
            type="submit"
            className="auth-button"
          >
            Login to TeacherHub
            <span>→</span>
          </button>

        </form>

        <div className="auth-divider">
          <span>or continue with</span>
        </div>

        <button className="google-button">
          <span>G</span>
          Continue with Google
        </button>

        <p className="auth-switch">
          Don't have an account?{" "}
          <Link to="/register">
            Create an account
          </Link>
        </p>

      </div>

      {/* RIGHT SIDE */}
      <div className="auth-side">

        <div className="auth-side-content">

          <span className="auth-side-badge">
            🇪🇹 BUILT FOR ETHIOPIAN TEACHERS
          </span>

          <h2>
            Your teaching career.
            <br />
            <span>Your financial future.</span>
          </h2>

          <p>
            TeacherHub brings financial management and
            teaching opportunities together in one simple
            platform designed for educators.
          </p>

          <div className="auth-features">

            <div>
              <span>✓</span>
              <p>Track your income and expenses</p>
            </div>

            <div>
              <span>✓</span>
              <p>Set and monitor savings goals</p>
            </div>

            <div>
              <span>✓</span>
              <p>Discover teaching opportunities</p>
            </div>

          </div>

          <div className="auth-stat-card">

            <div>
              <strong>ETB 25,000</strong>
              <span>Monthly income</span>
            </div>

            <div>
              <strong>72%</strong>
              <span>Savings goal</span>
            </div>

          </div>

        </div>

      </div>

    </section>
  );
}

export default Login;
