import React from 'react';

const TermsAndConditions = () => {
  return (
    <div className="max-w-4xl mx-auto p-8 text-gray-700">
      <h1 className="text-4xl font-bold mb-6">Terms and Conditions</h1>
      <p className="mb-8">
        Welcome to Appwisestudios! These Terms and Conditions outline the rules and regulations for the use of our web development services.
        By accessing or using our services, you agree to comply with and be bound by these terms.
      </p>
      
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">1. Services</h2>
        <p className="mb-4">
          We offer web development services including but not limited to website design, development, maintenance, and SEO optimization.
          Specific services will be detailed in the project proposal or agreement.
        </p>
        <p>
          <strong>1.1. Service Availability:</strong> Our services are available for clients based on project requirements and availability.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">2. Payment Terms</h2>
        <p className="mb-4">
          Payments for services are due as outlined in the project agreement. We accept various forms of payment including UPI, bank transfers, and PayPal.
        </p>
        <p>
          <strong>2.1. Payment Schedule:</strong> Payment schedules will be detailed in the project proposal. A deposit may be required before work begins, with the remaining balance due upon completion.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">3. Intellectual Property</h2>
        <p className="mb-4">
          All intellectual property rights in the work produced are owned by Appwisestudios until full payment has been received. Upon full payment, the client will receive a license to use the work.
        </p>
        <p>
          <strong>3.1. Ownership:</strong> The client will own the final deliverables, but Appwisestudios retains the right to showcase the work in portfolios or case studies.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">4. Termination</h2>
        <p className="mb-4">
          Either party may terminate the agreement with written notice. In the event of termination, the client will be responsible for payment for work completed up to the termination date.
        </p>
        <p>
          <strong>4.1. Cancellation Policy:</strong> A cancellation fee may apply based on the terms outlined in the project agreement.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">5. Limitation of Liability</h2>
        <p className="mb-4">
          Appwisestudios is not liable for any indirect, incidental, or consequential damages arising from the use of our services.
        </p>
        <p>
          <strong>5.1. Responsibility:</strong> Our liability is limited to the amount paid for the services rendered.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">6. Confidentiality</h2>
        <p className="mb-4">
          Both parties agree to maintain the confidentiality of any sensitive information shared during the project.
        </p>
        <p>
          <strong>6.1. Non-Disclosure:</strong> Any non-disclosure agreements will be outlined separately if necessary.
        </p>
      </section>


      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">8. Changes to Terms</h2>
        <p className="mb-4">
          We may update these Terms and Conditions from time to time. Changes will be effective immediately upon posting.
        </p>
      </section>

      <footer className="mt-12 text-center">
        <p className="text-sm text-gray-600 mb-4">
          If you have any questions about these Terms and Conditions, please contact us at <a href="mailto:support@example.com" className="text-blue-500 hover:underline">appwisestudios@gmail.com</a>.
        </p>
        <p className="text-sm text-gray-600">© {new Date().getFullYear()} Appwisestudios. All Rights Reserved.</p>
      </footer>
    </div>
  );
};

export default TermsAndConditions;
