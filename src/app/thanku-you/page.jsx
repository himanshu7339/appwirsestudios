import React from 'react';
import { Link } from 'next/link'

const ThankYouPage = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-center mb-4">Thank You!</h1>
      <p className="text-lg text-center mb-8">
        Thank you for scheduling an appointment with us! We’ve received your request and will be in touch soon to confirm the details.
      </p>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">What Happens Next?</h2>
        <p className="text-base">
          Our team will review your request and contact you within 24 hours to confirm your appointment. In the meantime, check your email for a confirmation message.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">Need to Contact Us?</h2>
        <p className="text-base">
          If you have any questions or need to reschedule, feel free to contact us at <a href="tel:+1234567890" className="text-blue-600 hover:underline">+1 234 567 890</a> or <a href="mailto:info@example.com" className="text-blue-600 hover:underline">info@example.com</a>.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">What Our Clients Say</h2>
        <p className="text-base">
          The service was fantastic! I would highly recommend them to anyone. - Jane Doe
        </p>
        {/* Add more testimonials or a slider here */}
      </section>

     

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">Connect With Us</h2>
        <div className="flex space-x-4">
          <a href="https://twitter.com" className="text-blue-500 hover:underline">Twitter</a>
          <a href="https://facebook.com" className="text-blue-600 hover:underline">Facebook</a>
          <a href="https://instagram.com" className="text-pink-500 hover:underline">Instagram</a>
        </div>
      </section>
    </div>
  );
};

export default ThankYouPage;

