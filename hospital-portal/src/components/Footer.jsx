import React from 'react';

function Footer() {
  return (
    <footer className="bg-blue-500 text-white py-6">
      <div className="container mx-auto px-4">
        {/* Top Section: Contact Information */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {/* About Us */}
          <div>
            <h3 className="text-xl font-bold mb-2">About Us</h3>
            <p className="text-sm">
              We are dedicated to providing the best healthcare services with
              advanced facilities and a compassionate team of professionals.
            </p>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold mb-2">Contact Us</h3>
            <ul className="text-sm">
              <li>📍 Address: 123, Main Street, City</li>
              <li>📞 Phone: +1 234 567 890</li>
              <li>✉️ Email: info@hospital.com</li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-2">Quick Links</h3>
            <ul className="text-sm">
              <li>
                <a href="#services" className="hover:underline">
                  Our Services
                </a>
              </li>
              <li>
                <a href="#about" className="hover:underline">
                  About Us
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:underline">
                  Contact
                </a>
              </li>
              <li>
                <a href="#appointment" className="hover:underline">
                  Book an Appointment
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <hr className="my-4 border-gray-500" />

        {/* Bottom Section: Copyright */}
        <div className="text-center text-sm">
          <p>
            &copy; {new Date().getFullYear()} Our Hospital. All Rights Reserved.
          </p>
          <p>
            Designed with ❤️ by <span className="font-bold">Your Team</span>.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
