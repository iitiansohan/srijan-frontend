// import { motion } from "framer-motion";
// import textImg from "../data/GalleryText.png";

// // Automatically import all PNGs from your folder
// const images = import.meta.glob("/src/assets/Gallery/*.png", { eager: true });

// export default function InfiniteScroll() {
//   const imageArray = Object.values(images).map((img) => img.default);

//   const half = Math.ceil(imageArray.length / 2);
//   const upperImages = imageArray.slice(0, half);
//   const lowerImages = imageArray.slice(half);

//   const loopUpper = [...upperImages, ...upperImages, ...upperImages, ...upperImages, ...upperImages, ...upperImages, ...upperImages, ...upperImages];
//   const loopLower = [...lowerImages, ...lowerImages, ...lowerImages, ...lowerImages, ...lowerImages, ...lowerImages, ...lowerImages, ...lowerImages];

//   return (
//     <div className="py-10 space-y-10 overflow-hidden bg-[url('./data/GalleryBG.png')] bg-cover bg-center h-screen">

//       <img src={textImg} alt="GalleryText" className="h-20 block mx-auto" />

//       {/* Upper Row */}
      
//         <motion.div
//           className="flex w-max"
//           animate={{ x: ["0%", "-100%"] }}
//           transition={{
//             duration: 400,
//             ease: "linear",
//             repeat: Infinity,
//           }}
//         >
//           {loopUpper.map((src, index) => (
//             <img
//               key={index}
//               src={src}
//               alt={`upper-img-${index}`}
//               className="h-[150px] p-2 mt-8 object-cover shrink-0"
//             />
//           ))}
//         </motion.div>
      

//       {/* Lower Row */}
      
//         <motion.div
//           className="flex w-max"
//           animate={{ x: ["-50%", "0%"] }}
//           transition={{
//             duration: 400,
//             ease: "linear",
//             repeat: Infinity,
//           }}
//         >
//           {loopLower.map((src, index) => (
//             <img
//               key={index}
//               src={src}
//               alt={`lower-img-${index}`}
//               className="h-[150px] p-2 object-cover shrink-0"
//             />
//           ))}
//         </motion.div>
      
//     </div>
//   );
// }
