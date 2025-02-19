import React from 'react'
import Carousel from '../components/Carousel'
import hospitalBuilding from "../assets/HospitalBuilding.jpg";
import doctorPatientImage from "../assets/groupPhoto.jpg";
import doctorstethoscope from "../assets/groupPhoto2.jpg";

import Footer from '../components/Footer';


function Home() {
  return (
    
      <>
  
    {/* <img className="w-full h-full object-cover" src={doctorPatientImage} alt="Modern Hospital Facilities" /> */}
 
    
      {/* Hero Section (Carousel) */}
      <section className="w-full h-screen pt-2 mt-14">
      <Carousel>
  <div className="w-full h-full">
    <img className="w-full h-screen object-cover" src={doctorPatientImage} alt="Modern Hospital Facilities" />
  </div>
  <div className="w-full h-full">
    <img className="w-full h-screen object-cover" src={hospitalBuilding} alt="Advanced Equipment" />
  </div>
  <div className="w-full h-full">
    <img className="w-full h-screen object-cover" src={doctorstethoscope} alt="Compassionate Care" />
  </div>
</Carousel> </section>

      {/* About Us Section */}
      <section className="bg-gray-100 py-8 mt-10">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Welcome to Our Hospital</h2>
          <p className="text-gray-700">
            We are dedicated to providing the best healthcare services with state-of-the-art facilities and compassionate care.
          </p>
        </div>
      </section>

      {/* Info Cards Section */}
      <section className="py-10">
        <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-blue-100 p-4 rounded-lg shadow-md">
            <h3 className="text-xl font-bold mb-2">World-Class Facilities</h3>
            <p>Our hospital is equipped with cutting-edge medical technology to provide top-notch care.</p>
          </div>
          <div className="bg-blue-100 p-4 rounded-lg shadow-md">
            <h3 className="text-xl font-bold mb-2">Expert Doctors</h3>
            <p>We have a team of experienced specialists committed to your health and well-being.</p>
          </div>
          <div className="bg-blue-100 p-4 rounded-lg shadow-md">
            <h3 className="text-xl font-bold mb-2">Emergency Services</h3>
            <p>Available 24/7 to provide immediate care in critical situations.</p>
          </div>
        </div>
      </section>
  

    <Footer/>
      </>

    
  )
}

export default Home
