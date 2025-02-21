import React from 'react'
import Footer from '../components/Footer';
import blurHospital from "../assets/blur-hospital.jpg";
import outerBuilding from "../assets/outerBulding.jpg";
import interiorView from "../assets/interior-view-operating-room.jpg";
import exteriorHospital from "../assets/exteriorHospitalAmb.jpg";
import blurredBackground from "../assets/blurred-background-abstract-blurHospitagallery.jpg";
import hospitalBuilding from "../assets/HospitalBuilding_enhanced.jpg";
import doctorPatientImage from "../assets/groupPhoto.jpg";
import doctorStethoscope from "../assets/groupPhoto2.jpg";




const images = [
  { id: 1, src: blurHospital, alt: "Hospital Exterior" },
  { id: 2, src: outerBuilding, alt: "Reception Area" },
  { id: 3, src: interiorView, alt: "Patient Room" },
  { id: 4, src: exteriorHospital, alt: "Operation Theater" },
  { id: 5, src: blurredBackground, alt: "ICU" },
  { id: 6, src: blurHospital, alt: "Pharmacy" },
  { id: 7, src: hospitalBuilding, alt: "Enhanced Hospital Building" },
  { id: 8, src: doctorPatientImage, alt: "Doctor with Patient" },
  { id: 9, src: doctorStethoscope, alt: "Doctor with Stethoscope" },
];
function Gallery() {
  return (
    <div className="min-h-screen bg-gray-100 py-10">
      <h2 className="text-4xl font-bold text-center mb-8 text-blue-600">
        Hospital Gallery
      </h2>

      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 px-4">
        {images.map((img) => (
          <div key={img.id} className="bg-white p-4 shadow-md rounded-lg">
            <img
              src={img.src}
              alt={img.alt}
              className="w-full h-60 object-cover rounded-lg"
            />
            <p className="text-center mt-2 text-gray-700">{img.alt}</p>
          </div>
        ))}
      </div>
      <Footer/>
    </div>

  )
}

export default Gallery
