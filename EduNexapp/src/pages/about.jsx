import { Card, CardContent } from "@/components/ui/card";
import { motion as Motion } from "framer-motion";
import { ChevronUp } from "lucide-react";
import React, { useState } from "react";

const teamMembers = [
  {
    id: 1,
    name: "Panchali",
    role: "Leader",
    idNumber: "w2084711",
    contribution: "**************************",
    image: "/site.jpg", // Added leading slash for proper path resolution
  },
  {
    id: 2,
    name: "Oshadhi",
    role: "Database",
    idNumber: "w2084712",
    contribution: "**************************",
    image: "/oshadhi.jpg", // Added leading slash
  },
  {
    id: 3,
    name: "Ridmi Poornima",
    role: "Frontend", // Capitalized for consistency
    idNumber: "w2084722",
    contribution: "**************************",
    image: "/ridmi.jpg", // Added leading slash
  },
  {
    id: 4,
    name: "Abishek",
    role: "Backend", // Capitalized for consistency
    idNumber: "w2084733",
    contribution: "**************************",
    image: "/abishek.jpg", // Added leading slash
  },
  {
    id: 5,
    name: "DITHARA",
    role: "Backend",
    idNumber: "w2084744",
    contribution: "**************************",
    image: "/dithara.jpg", // Added leading slash
  },
  {
    id: 6,
    name: "Buthmira",
    role: "Frontend", // Capitalized for consistency
    idNumber: "w2084755",
    contribution: "**************************",
    image: "/buthmira.jpg", // Added leading slash
  },
];

export default function About() {
  const [hoveredMember, setHoveredMember] = useState(null);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="min-h-screen">
      <div>
        {/* Hero Section */}
       

        {/* Hero Section with Transition from White to Blue */}
        <section className="relative overflow-hidden">
          {/* Gradient transition from white to blue */}
          <div className="absolute inset-0 bg-gradient-to-b from-white to-blue-950 opacity-100"></div>

          {/* Triangle wave transition pattern */}
          <div className="absolute top-0 left-0 w-full">
            <svg
              viewBox="0 0 1200 120"
              preserveAspectRatio="none"
              className="w-full h-24"
            >
              <path
                d="M1200 0L0 0 598.97 114.72 1200 0z"
                fill="white"
                opacity="0.3"
              ></path>
            </svg>
          </div>

          {/* Main content */}
          <div className="py-24 relative z-10">
            <div className="max-w-7xl mx-auto text-center px-6">
              <div className="grid md:grid-cols-2 gap-12 items-center">
                {/* Left column - Text content */}
                <Motion.div
                  className="space-y-8"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                >
                  <Motion.h1
                    className="text-4xl md:text-5xl lg:text-6xl font-bold text-white"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.3, duration: 0.8 }}
                  >
                    About <span className="text-blue-300">EduNex</span>
                  </Motion.h1>

                  <Motion.p
                    className="text-xl md:text-2xl text-blue-200"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.6, duration: 0.8 }}
                  >
                    Empowering Education Through Technology
                  </Motion.p>

                  <Motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.9, duration: 0.8 }}
                  >
                  </Motion.div>
                </Motion.div>

                {/* Right column - Illustration */}
                <Motion.div
                  className="hidden md:block"
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3, duration: 0.8 }}
                >
                  <div className="relative w-full aspect-square max-w-md mx-auto">
                    {/* Abstract education-themed graphic */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <Motion.div
                        className="w-64 h-64 rounded-full border-4 border-blue-400/30"
                        animate={{ rotate: 360 }}
                        transition={{
                          duration: 40,
                          repeat: Infinity,
                          ease: "linear",
                        }}
                      />
                      <Motion.div
                        className="absolute w-48 h-48 rounded-full border-4 border-blue-300/40"
                        animate={{ rotate: -360 }}
                        transition={{
                          duration: 30,
                          repeat: Infinity,
                          ease: "linear",
                        }}
                      />
                      <Motion.div
                        className="absolute w-32 h-32 rounded-full bg-gradient-to-r from-blue-400 to-blue-600 opacity-70"
                        animate={{ scale: [1, 1.1, 1] }}
                        transition={{
                          duration: 4,
                          repeat: Infinity,
                          ease: "easeInOut",
                        }}
                      />
                    </div>
                  </div>
                </Motion.div>
              </div>
            </div>
          </div>

          {/* Bottom wave transition */}
          <div className="absolute bottom-0 left-0 w-full overflow-hidden">
            <svg
              viewBox="0 0 1200 120"
              preserveAspectRatio="none"
              className="relative w-full h-12 md:h-16"
            >
              <path
                d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
                fill="rgba(219, 234, 254, 0.1)"
              ></path>
            </svg>
          </div>
        </section>
      </div>

      {/* Enhanced Mission Section */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-4xl font-bold text-gray-800 mb-6">
                Our Mission
              </h2>
              <p className="text-lg text-black leading-relaxed">
                At EduNex, we believe in making quality education accessible to
                everyone. Our platform connects students with Sri Lanka's finest
                educators, providing a comprehensive learning experience that
                transcends traditional boundaries.
              </p>
              <p className="text-lg text-black leading-relaxed">
                We strive to create an engaging, interactive learning
                environment that empowers students to achieve their academic
                goals and pursue their passions.
              </p>
            </div>
            <div className="flex items-center justify-center">
              <div className="relative group">
                <img
                  src="/AC.jpg" // Added leading slash
                  alt="Education Mission"
                  className="rounded-2xl shadow-2xl transform group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 rounded-2xl bg-teal-500 opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Team Members Section */}
      <section className="py-24 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-12 text-center text-gray-800">
            Meet Our Team
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member) => (
              <div
                key={member.id}
                onMouseEnter={() => setHoveredMember(member.id)}
                onMouseLeave={() => setHoveredMember(null)}
                className="transform hover:-translate-y-2 transition-all duration-300"
              >
                <Card className="overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300 group bg-white rounded-2xl">
                  <CardContent className="p-0">
                    <div className="aspect-square relative">
                      <img
                        src={member.image}
                        alt={member.name}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      <div
                        className={`absolute bottom-0 left-0 right-0 bg-black/80 backdrop-blur-sm text-white p-8 transform transition-all duration-300 ease-in-out ${
                          hoveredMember === member.id
                            ? "translate-y-0"
                            : "translate-y-full"
                        }`}
                      >
                        <h3 className="text-2xl font-bold mb-2">
                          {member.name}
                        </h3>
                        <p className="text-teal-300 text-lg mb-3">
                          {member.role}
                        </p>
                        <p className="text-gray-300 mb-2">
                          ID: {member.idNumber}
                        </p>
                        <p className="text-gray-400 text-sm leading-relaxed">
                          {member.contribution}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Footer */}
      <footer className="bg-white text-black py-6">
        <div className="container mx-auto px-4">
          <div className="text-black text-center text-lg">
            <button
              onClick={scrollToTop}
              className="group bg-primary hover:bg-primary/90 text-white p-3 rounded-full shadow-lg mb-6 transition-all duration-300 hover:shadow-primary/30 hover:shadow-xl"
            >
              <ChevronUp className="h-6 w-6 group-hover:-translate-y-1 transition-transform duration-300" />
            </button>
          </div>
        </div>
      </footer>
    </div>
  );
}
