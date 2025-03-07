// // src/pages/services/ServiceQuote.jsx
// import React, { useState } from "react";
// import "./ServiceQuote.css";
// import rocketIllustration from "../../assets/pvtltdcompany1.png";
// import ChatWidget from "../ChatWidget";

// const ServiceQuote = () => {
//   const [formData, setFormData] = useState({
//     prefix: "",
//     fullName: "",
//     email: "",
//     mobile: "",
//     whatsappUpdates: true,
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({
//       ...formData,
//       [name]: value,
//     });
//   };

//   const handleToggle = () => {
//     setFormData({
//       ...formData,
//       whatsappUpdates: !formData.whatsappUpdates,
//     });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log("Quote request submitted:", formData);
//     // Here you would typically send this data to your backend
//     alert("Quote request submitted successfully!");
//   };

//   return (
//     <div className="service-detail-page">
//       <div className="service-detail-container">
//         <div className="quote-form-container">
//           <div className="quote-form">
//             <h2>Get Quote Instantly in a Minute!</h2>

//             <form onSubmit={handleSubmit} style={{ gap: "0x" }}>
//               <div className="form-row">
//                 <div className="form-group prefix-group">
//                   <input
//                     type="text"
//                     placeholder="Prefix"
//                     name="prefix"
//                     value={formData.prefix}
//                     onChange={handleChange}
//                   />
//                 </div>

//                 <div className="form-group fullname-group">
//                   <input
//                     type="text"
//                     placeholder="Full Name"
//                     name="fullName"
//                     value={formData.fullName}
//                     onChange={handleChange}
//                     required
//                   />
//                 </div>
//               </div>

//               <div className="form-group">
//                 <input
//                   type="email"
//                   placeholder="Email ID"
//                   name="email"
//                   value={formData.email}
//                   onChange={handleChange}
//                   required
//                 />
//               </div>

//               <div className="form-group">
//                 <input
//                   type="tel"
//                   placeholder="Mobile Number"
//                   name="mobile"
//                   value={formData.mobile}
//                   onChange={handleChange}
//                   required
//                 />
//               </div>

//               <div className="toggle-group">
//                 <div
//                   className={`toggle-switch ${
//                     formData.whatsappUpdates ? "active" : ""
//                   }`}
//                   onClick={handleToggle}
//                 >
//                   <div className="toggle-button"></div>
//                 </div>
//                 <label>Get updates through Whatsapp</label>
//               </div>

//               <button type="submit" className="quote-button">
//                 Get Quote Now
//               </button>
//             </form>
//           </div>
//         </div>

//         <div className="service-detail-content">
//           <div className="service-detail-info">
//             <h1>Private Limited Company</h1>
//             <p className="service-subtitle">Start your Pvt. Ltd. in 15 days</p>
//             <p className="service-price">Rs. 6299</p>
//           </div>

//           <div className="service-detail-illustration">
//             <img src={rocketIllustration} alt="Private Limited Company" />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ServiceQuote;
import React from "react";
import { useState } from "react";
import "./ServiceQuote.css";
// import rocketIllustration from "../../assets/rocketIllustration.png"; // Update path if needed

const ServiceQuote = () => {
    const [whatsappUpdates, setWhatsappUpdates] = useState(true);
const handleToggle = () => {
  setWhatsappUpdates(!whatsappUpdates);
};
  return (
    <div className="service-quote-container">
      {/* Background Illustration */}
      <div className="service-detail-illustration"></div>

      {/* Content Section */}
      <div className="service-content">
        {/* Text Section */}
        <div className="service-info">
          <h1>Private Limited Company</h1>
          <p>Start your Pvt. Ltd. in 15 days</p>
          <p>Rs. 6299</p>
        </div>

        {/* Quote Form */}
        <div className="quote-form-container">
          <div className="quote-form">
            <h2>Get Quote Instantly in a Minute!</h2>
            
            <div className="form-group">
              <input type="text" placeholder="Full Name" />
            </div>
            <div className="form-group">
              <input type="email" placeholder="E-mail ID" />
            </div>
            <div className="form-group">
              <input type="text" placeholder="Mobile Number" />
            </div>
            <div className="form-group">
              <input type="text" placeholder="City" />
            </div>
            {/* Fixed Toggle Group */}
            <div className="toggle-group">
              <div
                className={`toggle-switch ${whatsappUpdates ? "active" : ""}`}
                onClick={handleToggle}
              >
                <div className="toggle-button"></div>
              </div>
              <label>Get updates through WhatsApp</label>
            </div>
            <button className="quote-button">Get Quote Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceQuote;

