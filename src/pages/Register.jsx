function Register() {
  return (
    <section className="auth-page">
      <h1>Create Your TeacherHub Account</h1>

      <p>Join TeacherHub Ethiopia and start managing your career.</p>

      <form>
        <div>
          <label htmlFor="name">Full Name</label>
          <input
            type="text"
            id="name"
            placeholder="Enter your full name"
          />
        </div>

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
            placeholder="Create a password"
          />
        </div>

        <div>
          <label htmlFor="subject">Teaching Subject</label>
          <input
            type="text"
            id="subject"
            placeholder="e.g. Mathematics"
          />
        </div>

        <div>
          <label htmlFor="location">Location</label>
          <input
            type="text"
            id="location"
            placeholder="e.g. Addis Ababa"
          />
        </div>

        <button type="submit">Create Account</button>
      </form>
    </section>
  );
}

export default Register;