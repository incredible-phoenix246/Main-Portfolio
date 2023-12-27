// // SocialButtons.tsx
// import React from "react";
// import {
//   FacebookShareButton,
//   TwitterShareButton,
//   LinkedinShareButton,
//   WhatsappShareButton,
// } from "react-share";
// import {
// //   FacebookIcon,
//   TwitterIcon,
//   LinkedinIcon,
// //   WhatsappIcon,
// } from "react-share";
// import SocialButton from "./SButton";

// const SocialButtons: React.FC = () => {
//   const shareUrl = "https://example.com"; // Replace with your actual share URL
//   const shareText = "Check out this link!"; // Replace with your desired share text

//   const socials = [
//     { shareButton: FacebookShareButton, shareIcon: FacebookIcon },
//     { shareButton: TwitterShareButton, shareIcon: TwitterIcon },
//     { shareButton: LinkedinShareButton, shareIcon: LinkedinIcon },
//     { shareButton: WhatsappShareButton, shareIcon: WhatsappIcon },
//   ];

//   return (
//     <div className="flex space-x-2">
//       {socials.map((social, index) => (
//         <SocialButton
//           key={index}
//           shareButton={social.shareButton}
//           shareIcon={social.shareIcon}
//           shareUrl={shareUrl}
//           shareText={shareText}
//         />
//       ))}
//     </div>
//   );
// };

// export default SocialButtons;
