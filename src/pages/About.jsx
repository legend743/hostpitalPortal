import React from 'react'
import HospitalImage1 from '../assets/doctorpatient.jpg'
import HospitalImage2 from '../assets/doctorstethoscope.jpg'
import TeamImage from '../assets/groupPhoto2.jpg'
import Footer from '../components/Footer'
function About() {
  return (
    <div className="w-full min-h-screen bg-gray-50">
    {/* Header Section */}
    <section className="bg-gray-50 py-10">
      <div className="container mx-auto text-center">
        <h1 className="text-4xl font-bold mb-4">About Us</h1>
        <p className="text-lg">
          Welcome to <strong>Ahuja Nursing Home</strong>, where we combine
          state-of-the-art medical facilities with compassionate care to bring
          you the best in healthcare services.
        </p>
      </div>
    </section>

    {/* Introduction Section */}
    <section className="py-12">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-gray-800">Who We Are</h2>
          <p className="text-gray-600 mt-4">
            Ahuja Nursing Home has been a cornerstone of healthcare in the
            community for over 20 years. Our dedicated team of doctors and
            staff work tirelessly to provide top-notch medical services in a
            caring and friendly environment. From maternity care to
            specialized treatments, we are here to support you every step of
            the way.
          </p>
        </div>
      </div>
    </section>

    {/* Image and Details Section */}
    <section className="py-12 bg-gray-100">
      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Hospital Image 1 */}
        <div className="bg-white rounded-lg shadow-md p-4">
          <img
            src={HospitalImage1}
            alt="Ahuja Nursing Home Building"
            className="w-full h-48 object-cover rounded-lg mb-4"
          />
          <h3 className="text-xl font-bold text-gray-800">Modern Facilities</h3>
          <p className="text-gray-600 mt-2">
            Our hospital is equipped with state-of-the-art medical technology
            to ensure you receive the best care possible.
          </p>
        </div>

        {/* Hospital Image 2 */}
        <div className="bg-white rounded-lg shadow-md p-4">
          <img
            src={HospitalImage2}
            alt="Ahuja Nursing Home Interior"
            className="w-full h-48 object-cover rounded-lg mb-4"
          />
          <h3 className="text-xl font-bold text-gray-800">Comfortable Environment</h3>
          <p className="text-gray-600 mt-2">
            We provide a comfortable and welcoming environment for patients
            and their families, ensuring peace of mind during their stay.
          </p>
        </div>

        {/* Team Image */}
        <div className="bg-white rounded-lg shadow-md p-4">
          <img
            src={TeamImage}
            alt="Ahuja Nursing Home Team"
            className="w-full h-48 object-cover rounded-lg mb-4"
          />
          <h3 className="text-xl font-bold text-gray-800">Expert Team</h3>
          <p className="text-gray-600 mt-2">
            Our team of experienced doctors, nurses, and staff is dedicated to
            providing compassionate and effective care.
          </p>
        </div>
      </div>
    </section>

    {/* Vision and Mission Section */}
    <section className="py-12">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Our Vision and Mission</h2>
          <p className="text-gray-600 leading-7">
            At Ahuja Nursing Home, we aim to revolutionize healthcare with a
            patient-first approach. Our mission is to provide affordable,
            high-quality medical care while building trust and relationships
            with our patients.
          </p>
          <p className="text-gray-600 mt-4 leading-7">
            Our vision is to become a center of excellence in healthcare, combining
            modern advancements with a personal touch.
          </p>
        </div>
      </div>
    </section>
    <Footer/>
  </div>
  )
}

export default About
