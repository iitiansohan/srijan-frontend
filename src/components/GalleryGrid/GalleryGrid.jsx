import React from "react";
import { motion } from "framer-motion";
import "./GalleryGrid.css";

const images = import.meta.glob("/src/assets/Gallery/*.png", { eager: false });

const orbs = [
  { size: 300, x: "15%", y: "20%", duration: 10, delay: 0 },
  { size: 250, x: "85%", y: "30%", duration: 12, delay: 2 },
  { size: 200, x: "10%", y: "80%", duration: 11, delay: 1 },
  { size: 280, x: "90%", y: "70%", duration: 9, delay: 3 },
];

const GalleryGrid = () => {
  const [imageArray, setImageArray] = React.useState([]);

  React.useEffect(() => {
  const loadImages = async () => {
    const entries = Object.values(images);

    const loaded = await Promise.all(
      entries.map((load) =>
        load().then((mod) => mod.default)
      )
    );

    setImageArray(loaded);
  };

  loadImages();
}, []);


  const isLargeImage = (index) => {
    return (index % 3) === 2;
  };

  return (
    <div className="gallery-grid-container">
      <div className="gallery-orbs-container">
        {orbs.map((orb, index) => (
          <motion.div
            key={index}
            className="gallery-orb"
            style={{
              width: orb.size,
              height: orb.size,
              left: orb.x,
              top: orb.y,
            }}
            animate={{
              scale: [1, 1.3, 1],
              opacity: [0.2, 0.4, 0.2],
              x: [0, Math.random() * 60 - 30, 0],
              y: [0, Math.random() * 60 - 30, 0],
            }}
            transition={{
              duration: orb.duration,
              repeat: Infinity,
              ease: "easeInOut",
              delay: orb.delay,
            }}
          />
        ))}
      </div>

      <div className="gallery-grid-wrapper">
        <div className="gallery-header">
          <motion.div
            className="gallery-title-decoration top"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          />
          
          <motion.h2 
            className="gallery-grid-title"
            initial={{ opacity: 0, y: -30, scale: 0.9 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
          >
            <span className="gallery-title-star">✦</span>
            GALLERY
            <span className="gallery-title-star">✦</span>
          </motion.h2>
          
          <motion.p
            className="gallery-subtitle"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            A glimpse into the vibrant world of Srijan
          </motion.p>
          
          <motion.div
            className="gallery-title-decoration bottom"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
          />
        </div>
        
        <div className="gallery-grid">
          {imageArray.map((src, index) => {
            const isLarge = isLargeImage(index);
            
            return (
              <motion.div
                key={index}
                className={`gallery-grid-item ${isLarge ? "large" : "small"}`}
                initial={{ opacity: 0, scale: 0.8, rotateY: -15 }}
                whileInView={{ opacity: 1, scale: 1, rotateY: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ 
                  duration: 0.6, 
                  delay: index * 0.05,
                  type: "spring",
                  stiffness: 100
                }}
                whileHover={{ 
                  scale: 1.05,
                  zIndex: 10,
                  transition: { duration: 0.3 }
                }}
              >
                <div className="gallery-card-corners">
                  <span className="corner top-left"></span>
                  <span className="corner top-right"></span>
                  <span className="corner bottom-left"></span>
                  <span className="corner bottom-right"></span>
                </div>

                <img
                  src={src}
                  alt={`Gallery image ${index + 1}`}
                  className="gallery-grid-image"
                  loading="lazy"
                />

                <motion.div 
                  className="gallery-card-overlay"
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                >
                  <motion.div
                    className="gallery-card-icon"
                    initial={{ scale: 0, rotate: -180 }}
                    whileHover={{ scale: 1, rotate: 0 }}
                    transition={{ duration: 0.4, delay: 0.1 }}
                  >
                    ✦
                  </motion.div>
                </motion.div>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          className="gallery-footer-decoration"
          initial={{ scaleX: 0, opacity: 0 }}
          whileInView={{ scaleX: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.5 }}
        />
      </div>
    </div>
  );
};

export default GalleryGrid;