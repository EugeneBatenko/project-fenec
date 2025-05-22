import Link from "next/link";

export default function Page() {
  return (
    <section className="my-5">
      <div className="container">
        <div className="row">
          <div className="col-12 mb-3">
            <h1 className="mb-4 mt-5">Privacy Policy</h1>
            <h4>Effective date:</h4>
            <span>11/05/2025</span>
            <p  className="mt-3">We respect your privacy and are committed to protecting any information you provide while using our
              website. This Privacy Policy explains what data we collect, how we use it, and your rights.</p>
          </div>

          <div className="col-12 mb-3">
            <h2 className="mb-3">1. Information We Collect</h2>
            <p>When you use file download service, we automatically collect certain technical information,
              including:</p>
            <ul className="ul">
              <li className="li">Your <strong>IP address</strong></li>
              <li className="li">Your <strong>browser&#39;s User-Agent string</strong> (which may include your browser
                type, version, operating system, and device type)
              </li>
              <li className="li"><strong>Timestamp </strong>of the download</li>
            </ul>
            <p>This data is collected automatically and stored in our system logs or database.</p>
          </div>

          <div className="col-12 mb-3">
            <h2 className="mb-3">2. Purpose of Data Collection</h2>
            <p>We collect the above information solely for:</p>
            <ul className="ul">
              <li className="li"><strong>Analytics and statistical insights</strong> (e.g., understanding which devices
                or browsers are most commonly used)
              </li>
              <li className="li"><strong>Improving our services</strong></li>
              <li className="li"><strong>Ensuring the security and integrity </strong>of the platform</li>
            </ul>
            <p>We do <strong>not</strong> use this information to personally identify users, and we do not combine it
              with any personally identifiable information.</p>
          </div>

          <div className="col-12 mb-3">
            <h2 className="mb-3">3. Data Sharing</h2>
            <p>We do <strong>not</strong> sell, trade, or otherwise transfer your data to third parties. However, we may
              share
              anonymized, aggregated analytics data for technical or business purposes.</p>
          </div>

          <div className="col-12 mb-3">
            <h2 className="mb-3">4. Data Retention</h2>
            <p>We retain collected IP addresses and User-Agent data for a limited period necessary to fulfill the
              purposes mentioned above, after which they are deleted or anonymized.</p>
          </div>

          <div className="col-12 mb-3">
            <h2 className="mb-3">5. Your Rights</h2>
            <p>Depending on your location, you may have rights under data protection laws, including the right to:</p>
            <ul className="ul">
              <li className="li">Request access to your data</li>
              <li className="li">Request deletion of your data</li>
              <li className="li">Object to certain types of data processing</li>
            </ul>
            <p>To exercise any of these rights, please contact us at [your contact email].</p>
          </div>

          <div className="col-12 mb-3">
            <h2 className="mb-3">6. Changes to This Policy</h2>
            <p>We may update this Privacy Policy from time to time. Any changes will be posted on this page with an
              updated effective date.</p>
          </div>

          <div className="col-12 mb-3">
            <h2 className="mb-3">7. Contact Us</h2>
            <p>If you have any questions about this Privacy Policy, please contact me at <Link className="link" href="mailto:batenko.e.v@gmail.com">batenko.e.v@gmail.com</Link></p>
          </div>
        </div>
      </div>
    </section>
  );
}