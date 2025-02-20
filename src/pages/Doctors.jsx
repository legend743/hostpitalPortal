import React from 'react'
import Docter1 from '../assets/Doct.jpg'
import Doctor2 from '../assets/doct2.jpg'
import Footer from '../components/Footer';


function Doctors() {
 
    const doctors = [
      {
        id: 1,
        name: "Dr. John Doe",
        specialty: "Cardiologist",
        experience: "10+ years",
        image: Docter1,
      },
      {
        id: 2,
        name: "Dr. Jane Smith",
        specialty: "Pediatrician",
        experience: "8+ years",
        image:Doctor2, 
      },
      {
        id: 3,
        name: "Dr. Emily Johnson",
        specialty: "Orthopedic Surgeon",
        experience: "12+ years",
        image: Docter1,
      },
      // Add more doctors here
    ];
  
    return (

<>      <div className="mx-auto text-center mt-20">
      <h1 className="text-4xl font-bold mb-4">Meet Our Doctors</h1>
      <p className="text-lg">
        Our team of highly skilled doctors is dedicated to providing you with the best care possible.
      </p>
    </div>
      <div className="w-full h-screen bg-gray-50 pt-10">
    
        {/* <section className="bg-amber-600 text-white py-8"> */}
         
   
  
        {/* Doctors List Section */}
        <section className="py-12">
          <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {doctors.map((doctor) => (
              <div key={doctor.id} className="bg-white p-6 rounded-lg shadow-md">
                <img
                  src={doctor.image}
                  alt={doctor.name}
                  className="w-32 h-32 mx-auto rounded-full object-cover mb-4"
                />
                <h3 className="text-xl font-bold text-center">{doctor.name}</h3>
                <p className="text-center text-gray-600">{doctor.specialty}</p>
                <p className="text-center text-sm text-gray-500">
                  {doctor.experience} experience
                </p>
                <button className="mt-4 bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 w-full">
                  View Profile
                </button>
              </div>
            ))}
          </div>
        </section>
      </div>
      <Footer/>
      </>

    );
  
}

export default Doctors
