import React, { useState, useRef } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import emailjs from "@emailjs/browser";

const doctorOptions = [
  {
    name: "Dr. Ananya Reddy",
    specialties: "Orthopedic Surgeon",
  },
  {
    name: "Dr. Rajesh Sharma",
    specialties: "Cardiologist",
  },
  {
    name: "Dr. Meera Iyer",
    specialties: "Pediatrician",
  },
  {
    name: "Dr. Arjun Patel",
    specialties: "Neurologist",
  },
  {
    name: "Dr. Naresh Menon",
    specialties: "Dermatologist",
  },
  {
    name: "Dr. Sameer Khan",
    specialties: "Ophthalmologist",
  },
];

const Contact = ({ closeForm }) => {
  const formRef = useRef();

  const [formData, setFormData] = useState({
    patientName: "",
    userNumber: "",
    doctor: "",
    symptoms: "",
    appointmentDate: "",
  });

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const { patientName, userNumber, doctor, symptoms, appointmentDate } =
      formData;

    if (
      !patientName ||
      !userNumber ||
      !doctor ||
      !symptoms ||
      !appointmentDate
    ) {
      toast.error("Please fill in all the fields!");
      return;
    }

    const SERVICE_ID = "service_43i3aop";
    const TEMPLATE_ID = "template_schx75g";
    const PUBLIC_KEY = "-PamparDc_rQeIqTx";

    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, formRef.current, PUBLIC_KEY).then(
      (result) => {
        toast.success("Appointment request sent successfully!");
        setFormData({
          patientName: "",
          userNumber: "",
          doctor: "",
          symptoms: "",
          appointmentDate: "",
        });

        // 👇 Close the popup after a short delay
        setTimeout(() => {
          closeForm();
        }, 2000); // delay to allow the user to see the toast
      },
      (error) => {
        toast.error("Failed to send appointment request. Please try again.");
        console.error(error);
      }
    );
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/40 z-50">
      <div className="popup-form absolute mt-12 text-black">
        <form
          ref={formRef}
          className="w-80 md:w-96 space-y-5 bg-white p-5 rounded-xl"
          onSubmit={handleSubmit}
        >
          <h1 className="text-4xl font-semibold text-center text-[#dd8036]">
            Book Now
          </h1>

          <input
            type="text"
            name="patientName"
            placeholder="Patient Name"
            value={formData.patientName}
            onChange={handleChange}
            required
            className="py-3 px-2 bg-[#d5f2ec] rounded-lg w-full"
          />

          <input
            type="number"
            name="userNumber"
            placeholder="Phone No."
            value={formData.userNumber}
            onChange={handleChange}
            required
            className="py-3 px-2 bg-[#d5f2ec] rounded-lg w-full"
          />

          <select
            name="doctor"
            value={formData.doctor}
            onChange={handleChange}
            required
            className="px-2 py-3 bg-[#d5f2ec] rounded-lg w-full"
          >
            <option value="" disabled>
              Select Doctor
            </option>

            {doctorOptions.map((doc, idx) => (
              <option key={idx} value={`${doc.name} - ${doc.specialties}`}>
                {doc.name} ({doc.specialties})
              </option>
            ))}
          </select>

          <textarea
            name="symptoms"
            placeholder="Describe your symptoms"
            rows="4"
            value={formData.symptoms}
            onChange={handleChange}
            required
            className="py-3 px-2 bg-[#d5f2ec] rounded-lg resize-none w-full"
          ></textarea>

          <label className="text-sm font-medium text-gray-700">
            Appointment Date
          </label>
          <input
            type="date"
            name="appointmentDate"
            value={formData.appointmentDate}
            onChange={handleChange}
            required
            className="py-3 px-2 bg-[#d5f2ec] rounded-lg w-full"
          />

          <div className="flex gap-5 pt-2">
            <button
              type="submit"
              className="bg-[var(--primary-color)] text-white px-6 py-2 rounded hover:bg-amber-600"
            >
              Book Appointment
            </button>
            <button
              type="button"
              className="bg-red-400 text-white px-10 py-2 rounded hover:bg-red-500"
              onClick={closeForm}
            >
              Close
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
