
// // import React, { useState } from 'react';
// // import { FaCarSide, FaTimes } from 'react-icons/fa';
// // import CarBot from './CarBot'; // Your existing CarBot.jsx logic

// // const FloatingCarBot = () => {
// //   const [isOpen, setIsOpen] = useState(false);

// //   return (
// //     <>
// //       <div
// //         className="carbot-toggle-btn"
// //         onClick={() => setIsOpen(!isOpen)}
// //         title={isOpen ? "Close CarBot" : "Ask CarBot"}
// //       >
// //         {isOpen ? <FaTimes size={24} /> : <FaCarSide size={28} />}
// //       </div>

// //       {isOpen && (
// //         <div className="carbot-widget">
// //           <CarBot />
// //         </div>
// //       )}
// //     </>
// //   );
// // };

// // export default FloatingCarBot;

// import React from 'react';
// import { Link } from 'react-router-dom';
// import './FloatingCarBot.css';

// const FloatingCarBot = () => {
//   return (
//     <div className="floating-carbot">
//       <Link to="/carbot" className="btn btn-primary rounded-circle shadow">
//         💬
//       </Link>
//     </div>
//   );
// };

// export default FloatingCarBot;

import React, { useState } from 'react';
import { BsFillChatDotsFill } from 'react-icons/bs';
import CarBot from './CarBot';
import '../App.css'; // You can style this as needed

const FloatingCarBot = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="floating-bot">
      {isOpen && (
        <div className="bot-popup card shadow-lg">
          <div className="bot-header d-flex justify-content-between align-items-center bg-dark text-white p-2">
            <span>CarBot Assistant</span>
            <button className="btn btn-sm btn-light" onClick={() => setIsOpen(false)}>X</button>
          </div>
          <div className="bot-body p-2">
            <CarBot />
          </div>
        </div>
      )}
      {!isOpen && (
        <button className="chat-toggle-btn btn btn-primary rounded-circle" onClick={() => setIsOpen(true)}>
          <BsFillChatDotsFill size={24} />
        </button>
      )}
    </div>
  );
};

export default FloatingCarBot;
