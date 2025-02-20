import React from "react";
import PatientCareImage from "../assets/logo/disabledpatient.jpg"; // Replace with an actual image
import EmergencyImage from "../assets/logo/medpatientCare.jpg"; // Replace with an actual image
import DiagnosticImage from "../assets/logo/doctorstethoscope.jpg"; // Replace with an actual image
import Footer from "../components/Footer";

function PatientCare() {
  const services = [
    {
      id: 1,
      name: "Outpatient Care",
      description:
        "Expert consultations with our specialists to diagnose and treat a variety of health conditions.",
      image: PatientCareImage,
    },
    {
      id: 2,
      name: "Emergency Services",
      description:
        "24/7 emergency care for critical medical situations, ensuring timely treatment.",
      image: EmergencyImage,
    },
    {
      id: 3,
      name: "Diagnostic Services",
      description:
        "State-of-the-art diagnostic equipment for accurate and efficient testing.",
      image: DiagnosticImage,
    },
    // Add more services as needed
  ];

  return (
    <div className="w-full min-h-screen bg-gray-50">
      {/* Header Section */}
      <section className=" py-10">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl font-bold mb-4">Patient Care</h1>
          <p className="text-lg">
            At <strong>Ahuja Nursing Home</strong>, we prioritize the comfort
            and well-being of our patients, delivering exceptional care every
            step of the way.
          </p>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-12">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-gray-800 text-center mb-8">
            Our Services
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <div
                key={service.id}
                className="bg-white rounded-lg shadow-md p-4 text-center"
              >
                <img
                  src={service.image}
                  alt={service.name}
                  className="w-full h-48 object-cover rounded-lg mb-4"
                />
                <h3 className="text-xl font-bold text-gray-800">{service.name}</h3>
                <p className="text-gray-600 mt-2">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-12 bg-gray-100">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-gray-800 text-center mb-8">
            What Our Patients Say
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Example testimonial cards */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <p className="text-gray-600 italic">
                "The care I received at Ahuja Nursing Home was outstanding. The
                doctors and staff went above and beyond to make me feel
                comfortable and cared for."
              </p>
              <p className="text-gray-800 font-bold mt-4">- Patient Name</p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6">
              <p className="text-gray-600 italic">
                "The facilities are excellent, and the staff is very attentive.
                I would highly recommend this hospital to anyone."
              </p>
              <p className="text-gray-800 font-bold mt-4">- Patient Name</p>
            </div>
          </div>
        </div>
      </section>

      {/* Support Section */}
      <section className="py-12">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Support & Assistance</h2>
          <p className="text-gray-600 leading-7">
            Need help? Our dedicated support team is here for you 24/7. Whether
            you have questions about your treatment plan, need assistance with
            admission, or have any other concerns, we’re just a call away.
          </p>
          <button className="mt-6 bg-green-600 text-white py-2 px-4 rounded-lg hover:bg-green-700">
            Contact Us
          </button>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-12 bg-gray-100">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-gray-800 text-center mb-8">
            Frequently Asked Questions
          </h2>
          <div className="space-y-4">
            {/* Example FAQs */}
            <div>
              <h3 className="font-bold text-gray-800">What are your visiting hours?</h3>
              <p className="text-gray-600">Our visiting hours are from 9:00 AM to 7:00 PM daily.</p>
            </div>
            <div>
              <h3 className="font-bold text-gray-800">Do you offer 24/7 emergency services?</h3>
              <p className="text-gray-600">Yes, our emergency department operates round the clock.</p>
            </div>
          </div>
        </div>
      </section>

      <Footer/>
    </div>
  );
}

export default PatientCare;
