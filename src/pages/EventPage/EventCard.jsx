import { useState } from "react";
import { motion } from "framer-motion";
import "./EventCard.css";
import { useNavigate } from "react-router";

export default function EventCard({ event, index, onClick }) {
  const [isFlipped, setIsFlipped] = useState(false);
  const navigate = useNavigate();

  return (
    <motion.div
      className="event-card-wrapper perspective-1000"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.8 }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
    >
      <motion.div
        className="event-card-inner"
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{ duration: 0.6, type: "spring", stiffness: 100 }}
        style={{ transformStyle: "preserve-3d" }}
        onClick={() => {
          if (!isFlipped) {
            setIsFlipped(true);
          } else if (event.registration_link) {
            window.open(event.registration_link, '_blank');
          }
        }}
      >
        <motion.div
          className="event-card-front"
          style={{ backfaceVisibility: "hidden" }}
          whileHover={{
            boxShadow: "0px 8px 30px rgba(254, 208, 0, 0.4)"
          }}
        >
          <div className="card-front-inner">
            <div className="card-image">
              <img loading="lazy" src={event.bg_image_url} alt={event.event_name} />
              <div className="card-gradient" />
            </div>

            <div className="card-content">
              <motion.div
                className="category-badge"
                whileHover={{ scale: 1.05 }}
              >
                <span>{event.event_category}</span>
              </motion.div>

              <h3 className="card-name">{event.event_name}</h3>

              <p className="card-hint">Click to see details</p>
            </div>

            <div className="decorative-corners">
              <span className="corner top-left" />
              <span className="corner top-right" />
              <span className="corner bottom-left" />
              <span className="corner bottom-right" />
            </div>

            <div className="card-icon">
              <span>✦</span>
            </div>
          </div>
        </motion.div>

        <motion.div
          className="event-card-back"
          style={{
            backfaceVisibility: "hidden",
            transform: "rotateY(180deg)"
          }}
        >
          <div className="card-back-inner">
            <div className="back-decorative-circles">
              <div className="circle top-right" />
              <div className="circle bottom-left" />
            </div>

            <motion.button
              className="back-close-btn"
              onClick={(e) => {
                e.stopPropagation();
                setIsFlipped(false);
              }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              ✕
            </motion.button>

            <div className="back-header">
              <motion.div
                className="back-category-badge"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.2 }}
              >
                <span>{event.event_category}</span>
              </motion.div>

              <h3 className="back-title">{event.event_name}</h3>

              <div className="back-divider" />
            </div>

            <div className="back-content">
              <div className="back-description">
                <p>
                  {event.description}
                </p>
              </div>

              <div className="back-details-grid">
                <div className="back-detail-item">
                  <p className="detail-label">PRIZES WORTH</p>
                  <p className="detail-value">{event.prize}</p>
                </div>
                <div className="back-detail-item">
                  <p className="detail-label">DATE</p>
                  <p className="detail-value">{event.date}</p>
                </div>
              </div>

              <div className="back-detail-item full">
                <p className="detail-label">VENUE</p>
                <p className="detail-value">{event.venue}</p>
              </div>
            </div>

            {/* <motion.button
              className="back-details-btn"
              whileHover={{
                scale: 1.02,
                backgroundColor: "#FED000",
                boxShadow: "0 0 25px rgba(254, 208, 0, 0.6)"
              }}
              whileTap={{ scale: 0.98 }}
              onClick={(e) => {
                e.stopPropagation();
              }}
            >
              CLICK FOR MORE DETAILS
            </motion.button> */}

            <motion.button
              className="back-details-btn"
              whileHover={{
                scale: 1.02,
                backgroundColor: "#FED000",
                boxShadow: "0 0 25px rgba(254, 208, 0, 0.6)"
              }}
              onClick={(e) => {
                e.stopPropagation();
                setIsFlipped(false);
              }}
              whileTap={{ scale: 0.98 }}
            >
              REGISTER NOW
            </motion.button>
            
          </div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}