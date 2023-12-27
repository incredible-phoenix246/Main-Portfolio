// "use client";

// import Link from "next/link";
// import React, { useState, useEffect } from "react";

// function Home() {
//   return (
//     <div id="home">
//       <h1>Welcome to the Home Section</h1>
//       <p>This is the home section of the page. Add your content here.</p>
//     </div>
//   );
// }

// function About() {
//   return (
//     <div id="about">
//       <h1>About Us</h1>
//       <p>Learn more about our mission and values in the about section.</p>
//     </div>
//   );
// }

// function Project() {
//   return (
//     <div>
//       <h1>Our Projects</h1>
//       <p>
//         Explore the exciting projects we've been working on in this section.
//       </p>
//     </div>
//   );
// }

// function Contact() {
//   return (
//     <div>
//       <h1>Contact Us</h1>
//       <p>
//         Get in touch with us through the contact section. We'd love to hear from
//         you!
//       </p>
//     </div>
//   );
// }

// function Navbar() {
//   const [activeSection, setActiveSection] = useState("home");

//   useEffect(() => {
//     const handleScroll = () => {
//       const homeSection = document.getElementById("home");
//       const aboutSection = document.getElementById("about");
//       const projectSection = document.getElementById("project");
//       const contactSection = document.getElementById("contact");

//       const scrollPosition = window.scrollY;

//       if (aboutSection) {
//         if (scrollPosition < aboutSection.offsetTop) {
//           setActiveSection("home");
//         } else if (
//           projectSection &&
//           scrollPosition < projectSection.offsetTop
//         ) {
//           setActiveSection("about");
//         } else if (
//           contactSection &&
//           scrollPosition < contactSection.offsetTop
//         ) {
//           setActiveSection("project");
//         } else {
//           setActiveSection("contact");
//         }
//       }
//     };

//     window.addEventListener("scroll", handleScroll);

//     return () => {
//       window.removeEventListener("scroll", handleScroll);
//     };
//   }, []);

//   return (
//     <div className="bg-black font-ibmplex text-white">
//       <nav>
//         <ul className="flex justify-around">
//           <li className={` ${activeSection === "home" ? "active" : ""}`}>
//             <Link href="/home">Home</Link>
//           </li>
//           <li className={` ${activeSection === "about" ? "active" : ""}`}>
//             <Link href="#about">About</Link>
//           </li>
//           <li className={` ${activeSection === "project" ? "active" : ""}`}>
//             <Link href="/project">Project</Link>
//           </li>
//           <li className={` ${activeSection === "contact" ? "active" : ""}`}>
//             <Link href="/contact">Contact</Link>
//           </li>
//         </ul>
//       </nav>
//       {activeSection === "home" && <Home />}
//       {activeSection === "about" && <About />}
//       {activeSection === "project" && <Project />}
//       {activeSection === "contact" && <Contact />}
//     </div>
//   );
// }

// export default Navbar;

import React from "react";

function page() {
  return <div>page</div>;
}

export default page;
