import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import EventCard from "./EventCard";
// import EventModal from "./EventModal";

import ART from "./Images/ART.jpg";
import CINEMA from "./Images/CINEMA.jpg";
import COMEDY from "./Images/COMEDY.jpg";
import DANCE from "./Images/DANCE.jpg";
import DRAMA from "./Images/DRAMA.jpg";
import LITERACY from "./Images/LITERACY.jpg";
import MUSIC from "./Images/MUSIC.jpg";

export default function Display({ category , date }) {
  const [allEvents, setAllEvents] = useState([]);
  const [filteredEvents, setFilteredEvents] = useState([]);
  const [selectedEvent, setSelectedEvent] = useState(null);

  // Fetch events based on category
  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const url = category === "ALL"
          ? "https://srijan-2026.onrender.com/api/v1/event/all"
          : `https://srijan-2026.onrender.com/v1/event/category/${category}`;
        const response = await fetch(url);
        if (!response.ok) throw new Error("Failed to fetch events");
        const data = await response.json();
        setAllEvents(data.data);
      } catch(err){
        console.error("Error fetching events:", err);
        setAllEvents([]);
      }
    };
    fetchEvents();
  }, [category]);

  // Filter events by date
  useEffect(() => {
    if (date === "ALL") {
      setFilteredEvents(allEvents);
    } else {
      const filtered = allEvents.filter(event => {
        // Check if event has a date property and matches the selected date
        return event.date === date || event.eventDate === date || event.day === date;
      });
      setFilteredEvents(filtered);
    }
  }, [date, allEvents]);



  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-4 sm:px-8 md:px-16 lg:px-32">
        {filteredEvents.length === 0 && (
          <motion.p
            key="no-data"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="text-[#FED000] font-['Cinzel_Decorative'] text-center col-span-full font-semibold"
          >
            NO EVENTS FOUND FOR {category} {date !== "ALL" ? `ON ${date}` : ""}
          </motion.p>
        )}

        {filteredEvents.map((event, index) => (
          <EventCard
            key={index}
            event={event}
            index={index}
            onClick={() => setSelectedEvent(event)}
            eventData={selectedEvent}
          />
        ))}
      </div>

      {/* <EventModal
        isOpen={!!selectedEvent}
        onClose={() => setSelectedEvent(null)}
        eventData={selectedEvent}
      /> */}
    </>
  );
}