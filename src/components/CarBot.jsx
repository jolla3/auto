
// // import React, { useState, useEffect } from 'react';

// // const CarBot = () => {
// //   const pairs = [
// //     // Greeting and entertainment
// //     { pattern: /hi|hello|hey/i, response: [
// //       "Hey road warrior! You just pulled into MJ-auto’s pit lane. What car cravings can I satisfy today?",
// //       "Sup driver? Ready to talk torque, turbos, and tire smoke?",
// //       "Welcome to MJ-auto! I'm your digital pit crew. Ask me anything from sedans to superchargers!"
// //     ]},

// //     { pattern: /how are you\?/i, response: [
// //       "Purring like a tuned V8. Let's burn some rubber—in knowledge!",
// //       "Idling smoothly. Hit me with your best auto queries!",
// //     ]},

// //     // Car jokes & fun
// //     { pattern: /.*(joke|funny|bored|entertain).*/i, response: [
// //       "Why did the car apply for a job? Because it wanted to quit being exhausted!",
// //       "What do you call a Ford Fiesta that breaks down? A Ford Siesta.",
// //       "Why don’t cars ever get tired? Because they come with their own spare!",
// //       "What’s a car’s favorite workout? Exhaust lunges and piston squats!"
// //     ]},

// //     // Car types
// //     { pattern: /.*(suv|sedan|coupe|convertible|truck|van).*/i, response: [
// //       "SUVs = rugged royalty. Sedans = smooth cruisers. Coupes = eye candy with attitude. Vans? Rolling living rooms.",
// //       "Convertibles bring the sun. Trucks bring the muscle. Pick your drive style!"
// //     ]},

// //     // Fuel types
// //     { pattern: /.*(electric|ev|hybrid|diesel|petrol|gasoline).*/i, response: [
// //       "EVs = whisper-quiet torque monsters. Hybrids give you the best of both worlds.",
// //       "Diesel's great for torque, petrol for revs. Choose your weapon wisely!"
// //     ]},

// //     // Car brands
// //     { pattern: /.*(tesla|bmw|audi|toyota|honda|ford|chevy|mercedes|kia|hyundai).*/i, response: [
// //       "Tesla's got tech. BMW’s the ultimate driving machine. Toyota? Bulletproof. Honda? Smooth. Mercedes? Prestige on wheels.",
// //       "Chevy and Ford bring the V8 thunder. Kia and Hyundai are the silent killers—value-packed and sleek!"
// //     ]},

// //     // Performance
// //     { pattern: /.*(engine|horsepower|torque|0-60|acceleration|top speed).*/i, response: [
// //       "Horsepower is like charm—torque is what actually gets the job done. Want speed? Balance both!",
// //       "0-60 in under 4 seconds? Now you're speaking my language.",
// //       "Top speed matters at the track. On the road? Torque wins the light."
// //     ]},

// //     // Maintenance
// //     { pattern: /.*(maintain|service|oil|tire|brake|checkup).*/i, response: [
// //       "Change oil every 5k–7k miles. Rotate tires. Don’t let your brakes squeal—unless it’s on the track.",
// //       "Keep your engine happier than a car guy in a parts shop—maintain it well!"
// //     ]},

// //     // Buying advice
// //     { pattern: /.*(buy|purchase|lease|finance|recommend|choose).*/i, response: [
// //       "Leasing is short-term fun. Buying? Go long-term with resale in mind.",
// //       "Want reliability? Toyota or Honda. Want thrills? BMW, Audi. Need space? SUV it up."
// //     ]},

// //     // EVs and charging
// //     { pattern: /.*(battery|charging|range|electric|ev).*/i, response: [
// //       "EV range anxiety is so last year. 300+ miles is the new norm.",
// //       "Charge fast, drive clean. Just don’t forget your home wall box!"
// //     ]},

// //     // Safety
// //     { pattern: /.*(safety|airbags|assist|ncap|collision).*/i, response: [
// //       "Adaptive cruise. Lane keep. AEB. Cars are smarter than ever. Let them watch your six.",
// //       "5-star NCAP? That’s what you want. Brakes and brains matter more than speed."
// //     ]},

// //     // Tech
// //     { pattern: /.*(infotainment|bluetooth|hud|carplay|android auto).*/i, response: [
// //       "Modern rides talk to your phone, your house, and sometimes your dog. Welcome to the future!",
// //       "Heads-Up Display: because who wants to look down when you’re flying down the road?"
// //     ]},

// //     // Fuel economy
// //     { pattern: /.*(mpg|kmpl|mileage|fuel|consumption).*/i, response: [
// //       "Hybrids sip fuel like tea. V8s? They guzzle like frat bros. It’s all about what drives you.",
// //       "Want better MPG? Go easy on that pedal and keep tires inflated!"
// //     ]},

// //     // Insurance
// //     { pattern: /.*(insurance|premium|quote|coverage).*/i, response: [
// //       "Sports cars = heart-pounding premiums. Safe sedans? Your wallet thanks you.",
// //       "Shop quotes yearly. Loyalty is expensive in the insurance game."
// //     ]},

// //     // Thank you / Exit
// //     { pattern: /.*(thanks|thank you|appreciate).*/i, response: [
// //       "Anytime, gearhead! May your ride be smooth and your gas tank full.",
// //       "You’re welcome! Catch you at the next pit stop."
// //     ]},
// //     { pattern: /quit|exit|bye/i, response: ["Signing off. Remember—life’s too short to drive boring cars. 🏁"] },

// //     // Catch-all fallback
// //     { pattern: /.*/i, response: [
// //       "That’s outside my lane, but I’m happy to chat cars, engines, and auto tips!",
// //       "If it’s got wheels and an engine—or even a battery—I’m all ears!"
// //     ]},
// //   ];

// //   const [messages, setMessages] = useState([
// //     { text: "Welcome to MJ-auto! I’m CarBot, your driving buddy. Ask me anything—horsepower to hatchbacks, I’ve got you covered.", isBot: true }
// //   ]);
// //   const [isTyping, setIsTyping] = useState(false);
// //   const [input, setInput] = useState("");

// //   const simulateBotTyping = (message) => {
// //     setIsTyping(true);
// //     setTimeout(() => {
// //       setMessages(prev => [...prev, { text: message, isBot: true }]);
// //       setIsTyping(false);
// //     }, Math.random() * (2000 - 1000) + 1000);
// //   };

// //   const handleUserInput = (inputText) => {
// //     const userMessage = { text: inputText, isBot: false };
// //     setMessages(prev => [...prev, userMessage]);

// //     let response = "I’m not sure about that. Ask me something auto-related!";
// //     for (let pair of pairs) {
// //       if (pair.pattern.test(inputText)) {
// //         response = pair.response[Math.floor(Math.random() * pair.response.length)];
// //         break;
// //       }
// //     }

// //     simulateBotTyping(response);
// //   };

// //   useEffect(() => {
// //     const chatbox = document.querySelector(".chatbox");
// //     if (chatbox) {
// //       chatbox.scrollTop = chatbox.scrollHeight;
// //     }
// //   }, [messages]);

// //   return (
// //     <div className="chatbot-container">
// //       <div className="chatbox">
// //         {messages.map((msg, index) => (
// //           <div key={index} className={msg.isBot ? "bot-message" : "user-message"}>
// //             {msg.text}
// //           </div>
// //         ))}
// //         {isTyping && <div className="bot-message typing">...</div>}
// //       </div>


// // <div className="chatbot-input-wrapper">
// //   <div className="floating-input">
// //     <input
// //       type="text"
// //       id="chat-input"
// //       value={input}
// //       onChange={(e) => setInput(e.target.value)}
// //       onKeyDown={(e) => {
// //         if (e.key === "Enter" && input.trim() !== "") {
// //           handleUserInput(input);
// //           setInput("");
// //         }
// //       }}
// //       required
// //     />
// //     <label htmlFor="chat-input">Type your message...</label>
// //   </div>
// // </div>

// // {/*       
// // <div className="chatbot-input-wrapper">
// //   <input
// //     type="text"
// //     requireda
// //     id="chat-input"
// //     onKeyDown={(e) => {
// //       if (e.key === "Enter") {
// //         const input = e.target.value;
// //         if (input.trim() !== "") {
// //           handleUserInput(input);
// //           e.target.value = "";
// //         }
// //       }
// //     }}
// //   />
// //   <label htmlFor="chat-input">Type your message...</label>
// // </div> */}

// // {/* 
// //       <input
// //         type="text"
// //         value={input}
// //         placeholder="Ask me anything car-related!"
// //         onChange={(e) => setInput(e.target.value)}
// //         onKeyDown={(e) => {
// //           if (e.key === "Enter" && input.trim() !== "") {
// //             handleUserInput(input);
// //             setInput("");
// //           }
// //         }}
// //       /> */}
// //     </div>
// //   );
// // };

// // export default CarBot;

// // import React, { useState, useEffect } from 'react';

// // const CarBot = () => {
// //   const pairs = [
// //     { pattern: /hi|hello|hey/i, response: [
// //       "Hey road warrior! You just pulled into MJ-auto’s pit lane. What car cravings can I satisfy today?",
// //       "Sup driver? Ready to talk torque, turbos, and tire smoke?",
// //       "Welcome to MJ-auto! I'm your digital pit crew. Ask me anything from sedans to superchargers!"
// //     ]},
// //     { pattern: /how are you\?/i, response: [
// //       "Purring like a tuned V8. Let's burn some rubber—in knowledge!",
// //       "Idling smoothly. Hit me with your best auto queries!"
// //     ]},
// //     { pattern: /.*(joke|funny|bored|entertain).*/i, response: [
// //       "Why did the car apply for a job? Because it wanted to quit being exhausted!",
// //       "What do you call a Ford Fiesta that breaks down? A Ford Siesta.",
// //       "Why don’t cars ever get tired? Because they come with their own spare!",
// //       "What’s a car’s favorite workout? Exhaust lunges and piston squats!"
// //     ]},
// //     { pattern: /.*(suv|sedan|coupe|convertible|truck|van).*/i, response: [
// //       "SUVs = rugged royalty. Sedans = smooth cruisers. Coupes = eye candy with attitude. Vans? Rolling living rooms.",
// //       "Convertibles bring the sun. Trucks bring the muscle. Pick your drive style!"
// //     ]},
// //     { pattern: /.*(electric|ev|hybrid|diesel|petrol|gasoline).*/i, response: [
// //       "EVs = whisper-quiet torque monsters. Hybrids give you the best of both worlds.",
// //       "Diesel's great for torque, petrol for revs. Choose your weapon wisely!"
// //     ]},
// //     { pattern: /.*(tesla|bmw|audi|toyota|honda|ford|chevy|mercedes|kia|hyundai).*/i, response: [
// //       "Tesla's got tech. BMW’s the ultimate driving machine. Toyota? Bulletproof. Honda? Smooth. Mercedes? Prestige on wheels.",
// //       "Chevy and Ford bring the V8 thunder. Kia and Hyundai are the silent killers—value-packed and sleek!"
// //     ]},
// //     { pattern: /.*(engine|horsepower|torque|0-60|acceleration|top speed).*/i, response: [
// //       "Horsepower is like charm—torque is what actually gets the job done. Want speed? Balance both!",
// //       "0-60 in under 4 seconds? Now you're speaking my language.",
// //       "Top speed matters at the track. On the road? Torque wins the light."
// //     ]},
// //     { pattern: /.*(maintain|service|oil|tire|brake|checkup).*/i, response: [
// //       "Change oil every 5k–7k miles. Rotate tires. Don’t let your brakes squeal—unless it’s on the track.",
// //       "Keep your engine happier than a car guy in a parts shop—maintain it well!"
// //     ]},
// //     { pattern: /.*(buy|purchase|lease|finance|recommend|choose).*/i, response: [
// //       "Leasing is short-term fun. Buying? Go long-term with resale in mind.",
// //       "Want reliability? Toyota or Honda. Want thrills? BMW, Audi. Need space? SUV it up."
// //     ]},
// //     { pattern: /.*(battery|charging|range|electric|ev).*/i, response: [
// //       "EV range anxiety is so last year. 300+ miles is the new norm.",
// //       "Charge fast, drive clean. Just don’t forget your home wall box!"
// //     ]},
// //     { pattern: /.*(safety|airbags|assist|ncap|collision).*/i, response: [
// //       "Adaptive cruise. Lane keep. AEB. Cars are smarter than ever. Let them watch your six.",
// //       "5-star NCAP? That’s what you want. Brakes and brains matter more than speed."
// //     ]},
// //     { pattern: /.*(infotainment|bluetooth|hud|carplay|android auto).*/i, response: [
// //       "Modern rides talk to your phone, your house, and sometimes your dog. Welcome to the future!",
// //       "Heads-Up Display: because who wants to look down when you’re flying down the road?"
// //     ]},
// //     { pattern: /.*(mpg|kmpl|mileage|fuel|consumption).*/i, response: [
// //       "Hybrids sip fuel like tea. V8s? They guzzle like frat bros. It’s all about what drives you.",
// //       "Want better MPG? Go easy on that pedal and keep tires inflated!"
// //     ]},
// //     { pattern: /.*(insurance|premium|quote|coverage).*/i, response: [
// //       "Sports cars = heart-pounding premiums. Safe sedans? Your wallet thanks you.",
// //       "Shop quotes yearly. Loyalty is expensive in the insurance game."
// //     ]},
// //     { pattern: /.*(thanks|thank you|appreciate).*/i, response: [
// //       "Anytime, gearhead! May your ride be smooth and your gas tank full.",
// //       "You’re welcome! Catch you at the next pit stop."
// //     ]},
// //     { pattern: /quit|exit|bye/i, response: ["Signing off. Remember—life’s too short to drive boring cars. 🏁"] },
// //     { pattern: /.*/i, response: [
// //       "That’s outside my lane, but I’m happy to chat cars, engines, and auto tips!",
// //       "If it’s got wheels and an engine—or even a battery—I’m all ears!"
// //     ]}
// //   ];

// //   const [messages, setMessages] = useState([
// //     { text: "Welcome to MJ-auto! I’m CarBot, your driving buddy. Ask me anything—horsepower to hatchbacks, I’ve got you covered.", isBot: true }
// //   ]);
// //   const [isTyping, setIsTyping] = useState(false);
// //   const [input, setInput] = useState("");

// //   const simulateBotTyping = (message) => {
// //     setIsTyping(true);
// //     setTimeout(() => {
// //       setMessages(prev => [...prev, { text: message, isBot: true }]);
// //       setIsTyping(false);
// //     }, Math.random() * (2000 - 1000) + 1000);
// //   };

// //   const handleUserInput = (inputText) => {
// //     const userMessage = { text: inputText, isBot: false };
// //     setMessages(prev => [...prev, userMessage]);

// //     let response = "I’m not sure about that. Ask me something auto-related!";
// //     for (let pair of pairs) {
// //       if (pair.pattern.test(inputText)) {
// //         response = pair.response[Math.floor(Math.random() * pair.response.length)];
// //         break;
// //       }
// //     }

// //     simulateBotTyping(response);
// //   };

// //   useEffect(() => {
// //     const chatbox = document.querySelector(".chatbox");
// //     if (chatbox) {
// //       chatbox.scrollTop = chatbox.scrollHeight;
// //     }
// //   }, [messages]);

// //   return (
// //     <div className="container mt-4">
// //       <div className="card chatbot-container">
// //         <div className="card-body chatbox" style={{ maxHeight: "400px", overflowY: "auto" }}>
// //           {messages.map((msg, index) => (
// //             <div key={index} className={`mb-2 ${msg.isBot ? "text-start" : "text-end"}`}>
// //               <span className={`badge ${msg.isBot ? "bg-secondary" : "bg-primary"}`}>
// //                 {msg.text}
// //               </span>
// //             </div>
// //           ))}
// //           {isTyping && <div className="text-start text-muted">CarBot is typing...</div>}
// //         </div>

// //         <div className="card-footer">
// //           <div className="input-group">
// //             <input
// //               type="text"
// //               className="form-control"
// //               placeholder="Type your message..."
// //               value={input}
// //               onChange={(e) => setInput(e.target.value)}
// //               onKeyDown={(e) => {
// //                 if (e.key === "Enter" && input.trim() !== "") {
// //                   handleUserInput(input);
// //                   setInput("");
// //                 }
// //               }}
// //             />
// //             <button
// //               className="btn btn-primary"
// //               onClick={() => {
// //                 if (input.trim() !== "") {
// //                   handleUserInput(input);
// //                   setInput("");
// //                 }
// //               }}
// //             >
// //               Send
// //             </button>
// //           </div>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // };

// // export default CarBot;



// import React, { useState, useEffect } from 'react';

// const CarBot = () => {
//   const pairs = [
//     { pattern: /hi|hello|hey/i, response: [
//       "Hey road warrior! You just pulled into MJ-auto’s pit lane. What car cravings can I satisfy today?",
//       "Sup driver? Ready to talk torque, turbos, and tire smoke?",
//       "Welcome to MJ-auto! I'm your digital pit crew. Ask me anything from sedans to superchargers!"
//     ]},
//     { pattern: /how are you\?/i, response: [
//       "Purring like a tuned V8. Let's burn some rubber—in knowledge!",
//       "Idling smoothly. Hit me with your best auto queries!"
//     ]},
//     { pattern: /.*(joke|funny|bored|entertain).*/i, response: [
//       "Why did the car apply for a job? Because it wanted to quit being exhausted!",
//       "What do you call a Ford Fiesta that breaks down? A Ford Siesta.",
//       "Why don’t cars ever get tired? Because they come with their own spare!",
//       "What’s a car’s favorite workout? Exhaust lunges and piston squats!"
//     ]},
//     { pattern: /.*(suv|sedan|coupe|convertible|truck|van).*/i, response: [
//       "SUVs = rugged royalty. Sedans = smooth cruisers. Coupes = eye candy with attitude. Vans? Rolling living rooms.",
//       "Convertibles bring the sun. Trucks bring the muscle. Pick your drive style!"
//     ]},
//     { pattern: /.*(electric|ev|hybrid|diesel|petrol|gasoline).*/i, response: [
//       "EVs = whisper-quiet torque monsters. Hybrids give you the best of both worlds.",
//       "Diesel's great for torque, petrol for revs. Choose your weapon wisely!"
//     ]},
//     { pattern: /.*(tesla|bmw|audi|toyota|honda|ford|chevy|mercedes|kia|hyundai).*/i, response: [
//       "Tesla's got tech. BMW’s the ultimate driving machine. Toyota? Bulletproof. Honda? Smooth. Mercedes? Prestige on wheels.",
//       "Chevy and Ford bring the V8 thunder. Kia and Hyundai are the silent killers—value-packed and sleek!"
//     ]},
//     { pattern: /.*(engine|horsepower|torque|0-60|acceleration|top speed).*/i, response: [
//       "Horsepower is like charm—torque is what actually gets the job done. Want speed? Balance both!",
//       "0-60 in under 4 seconds? Now you're speaking my language.",
//       "Top speed matters at the track. On the road? Torque wins the light."
//     ]},
//     { pattern: /.*(maintain|service|oil|tire|brake|checkup).*/i, response: [
//       "Change oil every 5k–7k miles. Rotate tires. Don’t let your brakes squeal—unless it’s on the track.",
//       "Keep your engine happier than a car guy in a parts shop—maintain it well!"
//     ]},
//     { pattern: /.*(buy|purchase|lease|finance|recommend|choose).*/i, response: [
//       "Leasing is short-term fun. Buying? Go long-term with resale in mind.",
//       "Want reliability? Toyota or Honda. Want thrills? BMW, Audi. Need space? SUV it up."
//     ]},
//     { pattern: /.*(battery|charging|range|electric|ev).*/i, response: [
//       "EV range anxiety is so last year. 300+ miles is the new norm.",
//       "Charge fast, drive clean. Just don’t forget your home wall box!"
//     ]},
//     { pattern: /.*(safety|airbags|assist|ncap|collision).*/i, response: [
//       "Adaptive cruise. Lane keep. AEB. Cars are smarter than ever. Let them watch your six.",
//       "5-star NCAP? That’s what you want. Brakes and brains matter more than speed."
//     ]},
//     { pattern: /.*(infotainment|bluetooth|hud|carplay|android auto).*/i, response: [
//       "Modern rides talk to your phone, your house, and sometimes your dog. Welcome to the future!",
//       "Heads-Up Display: because who wants to look down when you’re flying down the road?"
//     ]},
//     { pattern: /.*(mpg|kmpl|mileage|fuel|consumption).*/i, response: [
//       "Hybrids sip fuel like tea. V8s? They guzzle like frat bros. It’s all about what drives you.",
//       "Want better MPG? Go easy on that pedal and keep tires inflated!"
//     ]},
//     { pattern: /.*(insurance|premium|quote|coverage).*/i, response: [
//       "Sports cars = heart-pounding premiums. Safe sedans? Your wallet thanks you.",
//       "Shop quotes yearly. Loyalty is expensive in the insurance game."
//     ]},
//     { pattern: /.*(thanks|thank you|appreciate).*/i, response: [
//       "Anytime, gearhead! May your ride be smooth and your gas tank full.",
//       "You’re welcome! Catch you at the next pit stop."
//     ]},
//     { pattern: /quit|exit|bye/i, response: ["Signing off. Remember—life’s too short to drive boring cars. 🏁"] },
//     { pattern: /.*/i, response: [
//       "That’s outside my lane, but I’m happy to chat cars, engines, and auto tips!",
//       "If it’s got wheels and an engine—or even a battery—I’m all ears!"
//     ]}
//   ];

//   const [messages, setMessages] = useState([
//     { text: "Welcome to MJ-auto! I’m CarBot, your driving buddy. Ask me anything—horsepower to hatchbacks, I’ve got you covered.", isBot: true }
//   ]);
//   const [isTyping, setIsTyping] = useState(false);
//   const [input, setInput] = useState("");

//   const simulateBotTyping = (message) => {
//     setIsTyping(true);
//     setTimeout(() => {
//       setMessages(prev => [...prev, { text: message, isBot: true }]);
//       setIsTyping(false);
//     }, Math.random() * (2000 - 1000) + 1000);
//   };

//   const handleUserInput = (inputText) => {
//     const userMessage = { text: inputText, isBot: false };
//     setMessages(prev => [...prev, userMessage]);

//     let response = "I’m not sure about that. Ask me something auto-related!";
//     for (let pair of pairs) {
//       if (pair.pattern.test(inputText)) {
//         response = pair.response[Math.floor(Math.random() * pair.response.length)];
//         break;
//       }
//     }

//     simulateBotTyping(response);
//   };

//   useEffect(() => {
//     const chatbox = document.querySelector(".chatbox");
//     if (chatbox) {
//       chatbox.scrollTop = chatbox.scrollHeight;
//     }
//   }, [messages]);

//   return (
//     <div
//       className="card chatbot-container"
//       style={{
//         position: "fixed",
//         bottom: "20px",
//         right: "20px",
//         width: "300px",
//         maxHeight: "450px",
//         boxShadow: "0 4px 12px rgba(0,0,0,0.2)",
//         borderRadius: "15px",
//         zIndex: 9999
//       }}
//     >
//       <div className="card-body chatbox" style={{ maxHeight: "300px", overflowY: "auto" }}>
//         {messages.map((msg, index) => (
//           <div key={index} className={`mb-2 ${msg.isBot ? "text-start" : "text-end"}`}>
//             <span className={`badge ${msg.isBot ? "bg-secondary" : "bg-primary"}`}>
//               {msg.text}
//             </span>
//           </div>
//         ))}
//         {isTyping && <div className="text-start text-muted">CarBot is typing...</div>}
//       </div>

//       <div className="card-footer p-2">
//         <div className="input-group">
//           <input
//             type="text"
//             className="form-control"
//             placeholder="Type your message..."
//             value={input}
//             onChange={(e) => setInput(e.target.value)}
//             onKeyDown={(e) => {
//               if (e.key === "Enter" && input.trim() !== "") {
//                 handleUserInput(input);
//                 setInput("");
//               }
//             }}
//           />
//           <button
//             className="btn btn-primary"
//             onClick={() => {
//               if (input.trim() !== "") {
//                 handleUserInput(input);
//                 setInput("");
//               }
//             }}
//           >
//             Send
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default CarBot;

// import React, { useState, useEffect } from 'react';
// import '../App.css'; // optional: add custom styles here

// const CarBot = () => {
//   const pairs = [
//     { pattern: /hi|hello|hey/i, response: [
//       "Hey road warrior! You just pulled into MJ-auto’s pit lane. What car cravings can I satisfy today?",
//       "Sup driver? Ready to talk torque, turbos, and tire smoke?",
//       "Welcome to MJ-auto! I'm your digital pit crew. Ask me anything from sedans to superchargers!"
//     ]},
//     { pattern: /how are you\?/i, response: [
//       "Purring like a tuned V8. Let's burn some rubber—in knowledge!",
//       "Idling smoothly. Hit me with your best auto queries!"
//     ]},
//     { pattern: /.*(joke|funny|bored|entertain).*/i, response: [
//       "Why did the car apply for a job? Because it wanted to quit being exhausted!",
//       "What do you call a Ford Fiesta that breaks down? A Ford Siesta.",
//       "Why don’t cars ever get tired? Because they come with their own spare!",
//       "What’s a car’s favorite workout? Exhaust lunges and piston squats!"
//     ]},
//     { pattern: /.*(suv|sedan|coupe|convertible|truck|van).*/i, response: [
//       "SUVs = rugged royalty. Sedans = smooth cruisers. Coupes = eye candy with attitude. Vans? Rolling living rooms.",
//       "Convertibles bring the sun. Trucks bring the muscle. Pick your drive style!"
//     ]},
//     { pattern: /.*(electric|ev|hybrid|diesel|petrol|gasoline).*/i, response: [
//       "EVs = whisper-quiet torque monsters. Hybrids give you the best of both worlds.",
//       "Diesel's great for torque, petrol for revs. Choose your weapon wisely!"
//     ]},
//     { pattern: /.*(tesla|bmw|audi|toyota|honda|ford|chevy|mercedes|kia|hyundai).*/i, response: [
//       "Tesla's got tech. BMW’s the ultimate driving machine. Toyota? Bulletproof. Honda? Smooth. Mercedes? Prestige on wheels.",
//       "Chevy and Ford bring the V8 thunder. Kia and Hyundai are the silent killers—value-packed and sleek!"
//     ]},
//     { pattern: /.*(engine|horsepower|torque|0-60|acceleration|top speed).*/i, response: [
//       "Horsepower is like charm—torque is what actually gets the job done. Want speed? Balance both!",
//       "0-60 in under 4 seconds? Now you're speaking my language.",
//       "Top speed matters at the track. On the road? Torque wins the light."
//     ]},
//     { pattern: /.*(maintain|service|oil|tire|brake|checkup).*/i, response: [
//       "Change oil every 5k–7k miles. Rotate tires. Don’t let your brakes squeal—unless it’s on the track.",
//       "Keep your engine happier than a car guy in a parts shop—maintain it well!"
//     ]},
//     { pattern: /.*(buy|purchase|lease|finance|recommend|choose).*/i, response: [
//       "Leasing is short-term fun. Buying? Go long-term with resale in mind.",
//       "Want reliability? Toyota or Honda. Want thrills? BMW, Audi. Need space? SUV it up."
//     ]},
//     { pattern: /.*(battery|charging|range|electric|ev).*/i, response: [
//       "EV range anxiety is so last year. 300+ miles is the new norm.",
//       "Charge fast, drive clean. Just don’t forget your home wall box!"
//     ]},
//     { pattern: /.*(safety|airbags|assist|ncap|collision).*/i, response: [
//       "Adaptive cruise. Lane keep. AEB. Cars are smarter than ever. Let them watch your six.",
//       "5-star NCAP? That’s what you want. Brakes and brains matter more than speed."
//     ]},
//     { pattern: /.*(infotainment|bluetooth|hud|carplay|android auto).*/i, response: [
//       "Modern rides talk to your phone, your house, and sometimes your dog. Welcome to the future!",
//       "Heads-Up Display: because who wants to look down when you’re flying down the road?"
//     ]},
//     { pattern: /.*(mpg|kmpl|mileage|fuel|consumption).*/i, response: [
//       "Hybrids sip fuel like tea. V8s? They guzzle like frat bros. It’s all about what drives you.",
//       "Want better MPG? Go easy on that pedal and keep tires inflated!"
//     ]},
//     { pattern: /.*(insurance|premium|quote|coverage).*/i, response: [
//       "Sports cars = heart-pounding premiums. Safe sedans? Your wallet thanks you.",
//       "Shop quotes yearly. Loyalty is expensive in the insurance game."
//     ]},
//     { pattern: /.*(thanks|thank you|appreciate).*/i, response: [
//       "Anytime, gearhead! May your ride be smooth and your gas tank full.",
//       "You’re welcome! Catch you at the next pit stop."
//     ]},
//     { pattern: /quit|exit|bye/i, response: ["Signing off. Remember—life’s too short to drive boring cars. 🏁"] },
//     { pattern: /.*/i, response: [
//       "That’s outside my lane, but I’m happy to chat cars, engines, and auto tips!",
//       "If it’s got wheels and an engine—or even a battery—I’m all ears!"
//     ]}
//   ];

//   const [messages, setMessages] = useState([
//     { text: "Welcome to MJ-auto! I’m CarBot, your driving buddy. Ask me anything—horsepower to hatchbacks, I’ve got you covered.", isBot: true }
//   ]);
//   const [isTyping, setIsTyping] = useState(false);
//   const [input, setInput] = useState("");
//   const [isOpen, setIsOpen] = useState(false);

//   const simulateBotTyping = (message) => {
//     setIsTyping(true);
//     setTimeout(() => {
//       setMessages(prev => [...prev, { text: message, isBot: true }]);
//       setIsTyping(false);
//     }, Math.random() * (2000 - 1000) + 1000);
//   };

//   const handleUserInput = (inputText) => {
//     const userMessage = { text: inputText, isBot: false };
//     setMessages(prev => [...prev, userMessage]);

//     let response = "I’m not sure about that. Ask me something auto-related!";
//     for (let pair of pairs) {
//       if (pair.pattern.test(inputText)) {
//         response = pair.response[Math.floor(Math.random() * pair.response.length)];
//         break;
//       }
//     }

//     simulateBotTyping(response);
//   };

//   useEffect(() => {
//     const chatbox = document.querySelector(".chatbox");
//     if (chatbox) {
//       chatbox.scrollTop = chatbox.scrollHeight;
//     }
//   }, [messages]);

//   return (
//     <>
//       <button
//         className="btn btn-success position-fixed"
//         style={{ bottom: "20px", right: "20px", zIndex: 9999, borderRadius: "50%", width: "60px", height: "60px" }}
//         onClick={() => setIsOpen(!isOpen)}
//       >
//         💬
//       </button>

//       {isOpen && (
//         <div className="card chatbot-container position-fixed" style={{ bottom: "90px", right: "20px", width: "300px", zIndex: 9998 }}>
//         <div className="card-body chatbox"    style={{height: "100px",overflowY: "auto",overflowX: "hidden",paddingRight: "10px" }}>

//             {messages.map((msg, index) => (
//               <div key={index} className={`mb-2 ${msg.isBot ? "text-start" : "text-end"}`}>
//                 <span className={`badge ${msg.isBot ? "bg-secondary" : "bg-primary"}`}>{msg.text}</span>
//               </div>
//             ))}
//             {isTyping && <div className="text-start text-muted">CarBot is typing...</div>}
//           </div>

//           <div className="card-footer">
//             <div className="input-group">
//               <input
//                 type="text"
//                 className="form-control"
//                 placeholder="Type your message..."
//                 value={input}
//                 onChange={(e) => setInput(e.target.value)}
//                 onKeyDown={(e) => {
//                   if (e.key === "Enter" && input.trim() !== "") {
//                     handleUserInput(input);
//                     setInput("");
//                   }
//                 }}
//               />
//               <button
//                 className="btn btn-primary"
//                 onClick={() => {
//                   if (input.trim() !== "") {
//                     handleUserInput(input);
//                     setInput("");
//                   }
//                 }}
//               >
//                 Send
//               </button>
//             </div>
//           </div>
//         </div>
//       )}
//     </>
//   );
// };

// export default CarBot;

import React, { useState, useEffect } from 'react';
import '../App.css';

const CarBot = () => {
  const pairs = [
    { pattern: /hi|hello|hey/i, response: [
      "Hey road warrior! You just pulled into MJ-auto’s pit lane. What car cravings can I satisfy today?",
      "Sup driver? Ready to talk torque, turbos, and tire smoke?",
      "Welcome to MJ-auto! I'm your digital pit crew. Ask me anything from sedans to superchargers!"
    ]},
    { pattern: /how are you\?/i, response: [
      "Purring like a tuned V8. Let's burn some rubber—in knowledge!",
      "Idling smoothly. Hit me with your best auto queries!"
    ]},
    { pattern: /.*(joke|funny|bored|entertain).*/i, response: [
      "Why did the car apply for a job? Because it wanted to quit being exhausted!",
      "What do you call a Ford Fiesta that breaks down? A Ford Siesta.",
      "Why don’t cars ever get tired? Because they come with their own spare!",
      "What’s a car’s favorite workout? Exhaust lunges and piston squats!"
    ]},
    { pattern: /.*(suv|sedan|coupe|convertible|truck|van).*/i, response: [
      "SUVs = rugged royalty. Sedans = smooth cruisers. Coupes = eye candy with attitude. Vans? Rolling living rooms.",
      "Convertibles bring the sun. Trucks bring the muscle. Pick your drive style!"
    ]},
    { pattern: /.*(electric|ev|hybrid|diesel|petrol|gasoline).*/i, response: [
      "EVs = whisper-quiet torque monsters. Hybrids give you the best of both worlds.",
      "Diesel's great for torque, petrol for revs. Choose your weapon wisely!"
    ]},
    { pattern: /.*(tesla|bmw|audi|toyota|honda|ford|chevy|mercedes|kia|hyundai).*/i, response: [
      "Tesla's got tech. BMW’s the ultimate driving machine. Toyota? Bulletproof. Honda? Smooth. Mercedes? Prestige on wheels.",
      "Chevy and Ford bring the V8 thunder. Kia and Hyundai are the silent killers—value-packed and sleek!"
    ]},
    { pattern: /.*(engine|horsepower|torque|0-60|acceleration|top speed).*/i, response: [
      "Horsepower is like charm—torque is what actually gets the job done. Want speed? Balance both!",
      "0-60 in under 4 seconds? Now you're speaking my language.",
      "Top speed matters at the track. On the road? Torque wins the light."
    ]},
    { pattern: /.*(maintain|service|oil|tire|brake|checkup).*/i, response: [
      "Change oil every 5k–7k miles. Rotate tires. Don’t let your brakes squeal—unless it’s on the track.",
      "Keep your engine happier than a car guy in a parts shop—maintain it well!"
    ]},
    { pattern: /.*(buy|purchase|lease|finance|recommend|choose).*/i, response: [
      "Leasing is short-term fun. Buying? Go long-term with resale in mind.",
      "Want reliability? Toyota or Honda. Want thrills? BMW, Audi. Need space? SUV it up."
    ]},
    { pattern: /.*(battery|charging|range|electric|ev).*/i, response: [
      "EV range anxiety is so last year. 300+ miles is the new norm.",
      "Charge fast, drive clean. Just don’t forget your home wall box!"
    ]},
    { pattern: /.*(safety|airbags|assist|ncap|collision).*/i, response: [
      "Adaptive cruise. Lane keep. AEB. Cars are smarter than ever. Let them watch your six.",
      "5-star NCAP? That’s what you want. Brakes and brains matter more than speed."
    ]},
    { pattern: /.*(infotainment|bluetooth|hud|carplay|android auto).*/i, response: [
      "Modern rides talk to your phone, your house, and sometimes your dog. Welcome to the future!",
      "Heads-Up Display: because who wants to look down when you’re flying down the road?"
    ]},
    { pattern: /.*(mpg|kmpl|mileage|fuel|consumption).*/i, response: [
      "Hybrids sip fuel like tea. V8s? They guzzle like frat bros. It’s all about what drives you.",
      "Want better MPG? Go easy on that pedal and keep tires inflated!"
    ]},
    { pattern: /.*(insurance|premium|quote|coverage).*/i, response: [
      "Sports cars = heart-pounding premiums. Safe sedans? Your wallet thanks you.",
      "Shop quotes yearly. Loyalty is expensive in the insurance game."
    ]},
    { pattern: /.*(thanks|thank you|appreciate).*/i, response: [
      "Anytime, gearhead! May your ride be smooth and your gas tank full.",
      "You’re welcome! Catch you at the next pit stop."
    ]},
    { pattern: /quit|exit|bye/i, response: ["Signing off. Remember—life’s too short to drive boring cars. 🏁"] },
    { pattern: /.*/i, response: [
      "That’s outside my lane, but I’m happy to chat cars, engines, and auto tips!",
      "If it’s got wheels and an engine—or even a battery—I’m all ears!"
    ]}
  ];

  const [messages, setMessages] = useState([
    { text: "Welcome to MJ-auto! I’m CarBot, your driving buddy. Ask me anything—horsepower to hatchbacks, I’ve got you covered.", isBot: true }
  ]);
  const [isTyping, setIsTyping] = useState(false);
  const [input, setInput] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  const simulateBotTyping = (message) => {
    setIsTyping(true);
    setTimeout(() => {
      setMessages(prev => [...prev, { text: message, isBot: true }]);
      setIsTyping(false);
    }, Math.random() * (2000 - 1000) + 1000);
  };

  const handleUserInput = (inputText) => {
    const userMessage = { text: inputText, isBot: false };
    setMessages(prev => [...prev, userMessage]);

    let response = "I’m not sure about that. Ask me something auto-related!";
    for (let pair of pairs) {
      if (pair.pattern.test(inputText)) {
        response = pair.response[Math.floor(Math.random() * pair.response.length)];
        break;
      }
    }

    simulateBotTyping(response);
  };

  useEffect(() => {
    const chatbox = document.querySelector(".chatbox");
    if (chatbox) {
      chatbox.scrollTop = chatbox.scrollHeight;
    }
  }, [messages]);

  return (
    <>
      <button
        className="btn btn-success position-fixed"
        style={{
          bottom: "20px",
          right: "20px",
          zIndex: 9999,
          borderRadius: "50%",
          width: "60px",
          height: "60px"
        }}
        onClick={() => setIsOpen(!isOpen)}
      >
        💬
      </button>

      {isOpen && (
        <div
          className="card chatbot-container position-fixed"
          style={{
            bottom: "90px",
            right: "20px",
            width: "320px",
            maxHeight: "400px",
            display: "flex",
            flexDirection: "column",
            zIndex: 9998
          }}
        >
          <div
            className="card-body chatbox"
            style={{
              maxHeight: "250px",
              minHeight: "150px",
              overflowY: "auto",
              overflowX: "hidden",
              paddingRight: "10px",
              backgroundColor: "#f8f9fa"
            }}
          >
            {messages.map((msg, index) => (
              <div key={index} className={`mb-2 ${msg.isBot ? "text-start" : "text-end"}`}>
                <span className={`badge ${msg.isBot ? "bg-secondary" : "bg-primary"}`}>{msg.text}</span>
              </div>
            ))}
            {isTyping && <div className="text-start text-muted">CarBot is typing...</div>}
          </div>

          <div className="card-footer">
            <div className="input-group">
              <input
                type="text"
                className="form-control"
                placeholder="Type your message..."
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === "Enter" && input.trim() !== "") {
                    handleUserInput(input);
                    setInput("");
                  }
                }}
              />
              <button
                className="btn btn-primary"
                onClick={() => {
                  if (input.trim() !== "") {
                    handleUserInput(input);
                    setInput("");
                  }
                }}
              >
                Send
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default CarBot;
