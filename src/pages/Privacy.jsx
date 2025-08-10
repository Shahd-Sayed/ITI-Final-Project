import { Container } from "react-bootstrap";
import "../layouts/TermsPage.css";

function Privacy() {
  return (
    <>
      <Container>
        <div className="terms-wrapper my-4">
          <div className="terms-content">
            <p className="terms-intro">
              Your privacy is important to us. This policy explains how we
              collect, use, and protect your personal information.
            </p>

            <h5 className="terms-header">Privacy Policy</h5>
            <hr />

            <article className="terms-article">
              <h6>Information We Collect</h6>
              <p>
                We collect information that you provide directly to us, such as
                your name, email address, phone number, and payment details.
              </p>
              <p>
                We may also collect information automatically through your use
                of our website, such as IP address, browser type, and browsing
                behavior using cookies and similar technologies.
              </p>
            </article>

            <article className="terms-article">
              <h6>How We Use Your Information</h6>
              <p>
                Your information is used to provide and improve our services,
                process payments, communicate with you, and comply with legal
                obligations.
              </p>
              <p>We do not sell your personal information to third parties.</p>
            </article>

            <article className="terms-article">
              <h6>Data Security</h6>
              <p>
                We implement industry-standard security measures to protect your
                information from unauthorized access, disclosure, or alteration.
              </p>
              <p>
                However, no method of transmission over the internet is 100%
                secure, so we cannot guarantee absolute security.
              </p>
            </article>

            <article className="terms-article">
              <h6>Your Rights</h6>
              <p>
                You have the right to access, correct, or delete your personal
                data. You can also object to or restrict certain data
                processing.
              </p>
              <p>To exercise these rights, please contact our support team.</p>
            </article>

            <article className="terms-article">
              <h6>Cookies</h6>
              <p>
                We use cookies to enhance your experience, analyze site traffic,
                and personalize content.
              </p>
              <p>You can control cookies through your browser settings.</p>
            </article>

            <article className="terms-article">
              <h6>Changes to This Policy</h6>
              <p>
                We may update this privacy policy occasionally. Changes will be
                posted here with the updated effective date.
              </p>
            </article>

            <article className="terms-article">
              <h6>Contact Us</h6>
              <p>
                If you have questions about this policy, please contact us at{" "}
                <a href="mailto:support@example.com">support@example.com</a>.
              </p>
            </article>
          </div>
        </div>
      </Container>
    </>
  );
}

export default Privacy;
