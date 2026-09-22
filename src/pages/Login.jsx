function Login() {
  return (
    <section className="auth-page">
      <h1>Login</h1>

      <p>Login to your TeacherHub Ethiopia account.</p>

      <form>
        <div>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            placeholder="Enter your email"
          />
        </div>

        <div>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            placeholder="Enter your password"
          />
        </div>

        <button type="submit">Login</button>
      </form>
    </section>
  );
}

export default Login;