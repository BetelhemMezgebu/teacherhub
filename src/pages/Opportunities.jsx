function Opportunities() {
  return (
    <section className="opportunities-page">
      <h1>Teaching Opportunities</h1>

      <p>
        Find additional teaching and education-related opportunities.
      </p>

      <div className="opportunity-filters">
        <input
          type="text"
          placeholder="Search opportunities..."
        />

        <select defaultValue="">
          <option value="" disabled>
            Select subject
          </option>
          <option value="mathematics">Mathematics</option>
          <option value="english">English</option>
          <option value="physics">Physics</option>
          <option value="chemistry">Chemistry</option>
          <option value="biology">Biology</option>
        </select>

        <select defaultValue="">
          <option value="" disabled>
            Select location
          </option>
          <option value="addis-ababa">Addis Ababa</option>
          <option value="hawassa">Hawassa</option>
          <option value="bahir-dar">Bahir Dar</option>
          <option value="dire-dawa">Dire Dawa</option>
        </select>
      </div>

      <div className="opportunity-list">
        <article className="opportunity-card">
          <h2>Private Mathematics Tutor</h2>
          <p>Help a secondary school student with mathematics.</p>
          <p><strong>Subject:</strong> Mathematics</p>
          <p><strong>Location:</strong> Addis Ababa</p>
          <p><strong>Payment:</strong> ETB 500 per session</p>
        </article>

        <article className="opportunity-card">
          <h2>Weekend English Teacher</h2>
          <p>Teach English to students during weekend classes.</p>
          <p><strong>Subject:</strong> English</p>
          <p><strong>Location:</strong> Hawassa</p>
          <p><strong>Payment:</strong> ETB 3,000 per month</p>
        </article>
      </div>
    </section>
  );
}

export default Opportunities;