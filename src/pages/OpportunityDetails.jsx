import { useParams } from "react-router-dom";

function OpportunityDetails() {
  const { id } = useParams();

  return (
    <section className="opportunity-details-page">
      <h1>Opportunity Details</h1>

      <p>
        You are viewing opportunity number: <strong>{id}</strong>
      </p>

      <div className="opportunity-details">
        <h2>Private Mathematics Tutor</h2>

        <p>
          Help a secondary school student improve their mathematics skills.
        </p>

        <p>
          <strong>Subject:</strong> Mathematics
        </p>

        <p>
          <strong>Location:</strong> Addis Ababa
        </p>

        <p>
          <strong>Type:</strong> Private Tutoring
        </p>

        <p>
          <strong>Payment:</strong> ETB 500 per session
        </p>

        <p>
          <strong>Requirements:</strong> Mathematics teaching experience.
        </p>

        <button>Apply Now</button>
      </div>
    </section>
  );
}

export default OpportunityDetails;