import "./TeamPage.css";
import React from "react";
import PageHeader from "../../components/PageHeader/PageHeader";
import { motion } from "framer-motion";
import img1 from "./ProfileImage/profile_img_1.png";


// TEAM DATA IN SECTIONS
const teamSections = [
  {
    title: "Organizers",
    members: [
      { name: "Devang", role: "Lead Organizer", img: img1 },
      { name: "Sohan", role: "Lead Organizer", img: img1 },
      { name: "Arman", role: "Lead Organizer", img: img1 }
    
    ],
  },

  {
    title: "Web Development Team",
    members: [
      { name: "Rahul Verma", role: "Frontend Developer", img: img1 },
      { name: "Aman Guptaa", role: "Backend Developer", img: img1 },
    ],
  },

  {
    title: "Design Team",
    members: [
      { name: "John Doe", role: "UI Designer", img: img1 },
      { name: "Simran Kaur", role: "Graphic Artist", img: img1 },
    ],
  },

  {
    title: "Volunteers",
    members: [
      { name: "Ankit Raj", role: "Volunteer", img: img1 },
      { name: "Sneha Tiwari", role: "Volunteer", img: img1 },
      { name: "Karan Sharma", role: "Volunteer", img: img1 },
    ],
  },
];

function TeamPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#08061E] via-[#301258] to-[#48286f] pb-24">
      <PageHeader
        title="TEAM"
        subtitle="Explore the vibrant spectrum of cultural celebrations"
        showBackButton={true}
        backPath="/"
        titleDelay={0.2}
        showStars={true}
      />

      {/* ALL SECTIONS */}
      <div className="max-w-7xl mx-auto px-6 mt-16 space-y-20">
        {teamSections.map((section, sectionIndex) => (
          <div key={sectionIndex}>

            {/* SECTION TITLE */}
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center text-[2.6rem] text-[#FFD85A] drop-shadow-[0_0_10px_rgba(255,215,100,0.7)] mb-10 tracking-wider"
              style={{ fontFamily: "'Cinzel Decorative', cursive" }}
            >
              {section.title}
            </motion.h2>

            {/* MEMBER CARDS GRID */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
              {section.members.map((member, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.15 }}
                  whileHover={{ scale: 1.07 }}
                  className="group relative rounded-2xl p-[2px] pb-8 bg-gradient-to-br from-yellow-400 to-yellow-600 shadow-[0_0_20px_rgba(255,200,0,0.5)]"
                >
                  <div className="rounded-2xl bg-[#1f132efe] p-6 flex flex-col items-center text-center hover:bg-[#1d0033] transition">

                     <div className="absolute top-4 right-4 w-12 h-12 border-2 border-[#FED000]   rounded-full flex items-center justify-center backdrop-blur-sm bg-[#08061E]/30">
                        <span className="text-[#FED000] text-lg">✦</span>
                      </div>

                    {/* IMAGE */}
                    <img
                      src={member.img}
                      alt={member.name}
                      className="w-28 h-28 object-cover rounded-full border-2 border-yellow-400 shadow-lg group-hover:shadow-yellow-500 transition"
                    />

                    {/* NAME */}
                    <h3
                      className="mt-4 text-[1.3rem] font-bold  tracking-wider text-[#FFD85A]
                                 drop-shadow-[0_0_6px_rgba(255,215,100,0.6)]
                                 uppercase"
                      style={{ fontFamily: "'Cinzel Decorative', cursive" }}
                    >
                      {member.name}
                    </h3>

                    {/* DESCRIPTION BOX */}
                    <div className="bg-[#08061E]/30 mt-4 backdrop-blur-sm rounded-xl p-4 border border-[#FED000]/30">
                <p className="text-[#E3CDEC] text-xs leading-relaxed font-['Cinzel_Decorative']">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
              </div>

                    {/* HOVER GLOW */}
                    <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition bg-gradient-to-br from-yellow-500/20 to-transparent pointer-events-none"></div>
                  </div>
                </motion.div>
              ))}
            </div>

          </div>
        ))}
      </div>
    </div>
  );
}

export default TeamPage;
