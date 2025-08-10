import { Container } from "react-bootstrap";
import "../layouts/TermsPage.css";

function TermsPage() {
  return (
    <Container>
      <div className="terms-wrapper my-4">
        <div className="terms-content">
          <p className="terms-intro">
            Welcome! Please take a moment to review our terms and conditions.
            Your use of our services means you agree to these rules. Please read
            carefully to understand your rights and responsibilities.
          </p>

          <h5 className="terms-header">Terms & Conditions</h5>
          <hr />

          <article className="terms-article">
            <h6>Agreement</h6>
            <p>
              By using our website, you confirm that you accept these terms and
              conditions in full. If you do not agree to these terms, please do
              not use our services.
            </p>
            <p>
              We reserve the right to update or change our terms at any time
              without prior notice. It is your responsibility to check these
              terms regularly for any updates.
            </p>
          </article>

          <article className="terms-article">
            <h6>User Conduct</h6>
            <p>
              Users must act responsibly and not misuse our platform or
              services. Any violation of these rules may result in suspension or
              termination of access.
            </p>
            <ul>
              <li>
                No illegal activities, including fraud, harassment, or
                infringement of others’ rights.
              </li>
              <li>
                Respect other users and avoid offensive or abusive language.
              </li>
              <li>
                Do not disrupt the normal operation of our services or servers.
              </li>
              <li>
                Avoid posting or sharing harmful, offensive, or misleading
                content.
              </li>
            </ul>
          </article>

          <article className="terms-article">
            <h6>Intellectual Property</h6>
            <p>
              All content on this website, including text, graphics, logos,
              images, and software, is the property of our company or its
              content suppliers and is protected by copyright laws.
            </p>
            <p>
              You may not reproduce, distribute, or create derivative works from
              our content without prior written permission.
            </p>
          </article>

          <article className="terms-article">
            <h6>Limitation of Liability</h6>
            <p>
              We strive to provide accurate and reliable information, but we do
              not guarantee the completeness or accuracy of the content.
            </p>
            <p>
              Our company is not liable for any damages arising from the use or
              inability to use our services.
            </p>
          </article>

          <article className="terms-article">
            <h6>Changes to Terms</h6>
            <p>
              We reserve the right to modify these terms at any time. Updates
              will be posted on this page, and continued use of our services
              constitutes acceptance of the new terms.
            </p>
          </article>

          <article className="terms-article">
            <h6>Contact Us</h6>
            <p>
              If you have any questions about these terms, please contact our
              support team at{" "}
              <a href="mailto:support@example.com">support@example.com</a>.
            </p>
          </article>
        </div>
      </div>
    </Container>
  );
}

export default TermsPage;
