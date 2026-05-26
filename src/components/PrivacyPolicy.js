import React from 'react';
import './PrivacyPolicy.css';

const PrivacyPolicy = () => {
  return (
    <main className="privacy-policy-page">
      <div className="container privacy-container">
        <header className="privacy-header">
          <h1 className="privacy-title">Privacy Policy</h1>
        </header>

        <article className="privacy-content">
          <section className="privacy-section">
            <p className="privacy-text">
              We take the privacy of our users seriously. We are committed to safeguarding the privacy of our users while providing a personalized and valuable service. This Privacy Policy statement explains the data processing practices of Taxareus. If you have any requests concerning your personal information or any queries with regard to these practices, please contact our Privacy Officer by e-mail at <a href="mailto:info@taxareus.com">info@taxareus.com</a>.
            </p>
            <p className="privacy-text">
              Our site might also contain links to third party sites which are not subject to this privacy policy. We recommend that you read the privacy policy of any such sites that you visit.
            </p>
          </section>

          <section className="privacy-section">
            <h2 className="privacy-section-title">Information Collected</h2>
            <p className="privacy-text">
              Personal information is collected by Taxareus, and we collect personally identifiable information about you (your "Data") through the provision of your details to us either online or offline.
            </p>
            <p className="privacy-text">
              We may also collect information that we request from you regarding your use of our service or that we collect automatically about your visit to our sites.
            </p>
          </section>

          <section className="privacy-section">
            <h2 className="privacy-section-title">Use and Disclosure of Personal Information</h2>
            <p className="privacy-text">We use your Data for purposes which may include:</p>
            <ul className="privacy-list">
              <li>Providing our users with a personalized service</li>
              <li>Completing tax registration and filing formalities, and enquiries</li>
              <li>Conducting market research surveys</li>
              <li>Allowing users to participate in interactive features of our service, where they choose to do so</li>
              <li>Running promotions</li>
              <li>Providing you with information about products and services we offer, if you agree to receive such information</li>
              <li>Monitoring compliance with our terms and conditions</li>
            </ul>
            <p className="privacy-text">
              We may also disclose your information to our business partners, subject to your prior consent, to provide various services including processing data, lending, or investment offerings etc., successors in title to our business or in accordance with a properly executed court order or as otherwise required to do so by law.
            </p>
            <p className="privacy-text">
              We reserve the right to fully co-operate with any law enforcement authorities or court order requiring or requesting us to disclose the identity or other usage details of any user of our sites.
            </p>
            <p className="privacy-text">We also use information in aggregate form so that no individual user is identified by name:</p>
            <ul className="privacy-list">
              <li>To build up marketing profiles.</li>
              <li>To aid strategic development.</li>
              <li>To audit usage of the site.</li>
            </ul>
            <p className="privacy-text">
              We use technology on our websites, which may record user movements, including page scrolling, mouse clicks and text entered. The data we collect in this way helps us to identify usability issues, to improve the assistance and technical support we can provide to users and is also used for aggregated and statistical reporting purposes.
            </p>
          </section>

          <section className="privacy-section">
            <h2 className="privacy-section-title">Security Policy</h2>
            <p className="privacy-text">
              Taxareus has devised suitable measures to ensure that our users' Data is protected against unauthorized access or use, alteration, unlawful or accidental destruction and accidental loss.
            </p>
          </section>

          <section className="privacy-section">
            <h2 className="privacy-section-title">Deactivating the Account</h2>
            <p className="privacy-text">
              You may choose to discontinue the use of your account with Taxareus at any time. The information in the account will remain unchanged/untouched until you decide to reactivate the account by signing in with your password.
            </p>
          </section>

          <section className="privacy-section">
            <h2 className="privacy-section-title">Transfer of Data</h2>
            <p className="privacy-text">
              The Internet is a global environment. Using the Internet to collect and process personal data necessarily involves the transmission of data on an international basis. Therefore, by browsing the Taxareus site and communicating electronically with us you acknowledge and agree to our processing of personal data in this way.
            </p>
          </section>

          <section className="privacy-section">
            <h2 className="privacy-section-title">User Access and Control of Data</h2>
            <p className="privacy-text">
              If you wish to amend any of the Data which we hold about you, or update your preferences, please contact <a href="mailto:info@taxareus.com">info@taxareus.com</a> or visit the "Contact Us" section of our website.
            </p>
          </section>

          <section className="privacy-section">
            <h2 className="privacy-section-title">Changes to this Policy</h2>
            <p className="privacy-text">
              This policy is effective from December 16, 2021. We reserve the right to make changes to this privacy policy statement to reflect any changes to our privacy practices in accordance with changes to legislation, best practice or website enhancements.
            </p>
          </section>

          <section className="privacy-support">
            <h2 className="privacy-support-title">Need Support?</h2>
            <p>
              <a href="mailto:info@taxareus.com">info@taxareus.com</a>
              <span>+92 332-7772354</span>
            </p>
          </section>
        </article>
      </div>
    </main>
  );
};

export default PrivacyPolicy;
