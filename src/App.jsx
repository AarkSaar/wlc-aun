import React, { useState, useEffect } from "react";
import {
  X,
  Calendar,
  Users,
  Star,
  Mic,
  Heart,
  Menu,
  Loader2,
} from "lucide-react";
import logo from "./assets/wlc-png.jpeg";
import img1 from "./assets/wlc-1.jpeg";
import img3 from "./assets/wlc-3.jpeg";
import imgPrincess from "./assets/wlc-princess.jpeg";

// 🔴 PASTE YOUR GOOGLE APPS SCRIPT URL HERE
const SCRIPT_URL =
  "https://script.google.com/macros/s/AKfycbygE68eDmtGlFI9t5gdQjvFktq3SxvasMuZQfSK7M68R-lb66svqb8HoIpvL5Yvd6ac/exec";

const WLCWebsite = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Form States
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null); // 'success' | 'error' | null

  // Lock body scroll when modal is open
  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isModalOpen]);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
    setSubmitStatus(null); // Reset form status on close/open
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    const form = e.target;
    const formData = new FormData(form);

    try {
      await fetch(SCRIPT_URL, {
        method: "POST",
        body: formData,
      });
      setSubmitStatus("success");
      form.reset();
      // Optional: Redirect to WhatsApp after short delay
      // setTimeout(() => window.location.href = "YOUR_WHATSAPP_LINK", 2000);
    } catch (error) {
      console.error("Error!", error.message);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen font-sans text-gray-900 bg-white">
      {/* --- NAVIGATION --- */}
      <nav className="fixed top-0 w-full bg-white/90 backdrop-blur-md z-40 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <a href="#" className="flex-shrink-0">
              <img
                src={logo}
                alt="WLC 2025/26"
                className="h-10 lg:h-15 w-auto"
              />
            </a>

            {/* Desktop Nav */}
            <div className="hidden md:flex space-x-8 items-center">
              <a href="#about" className="text-gray-600 hover:text-pink-600">
                About
              </a>
              <a href="#programs" className="text-gray-600 hover:text-pink-600">
                Programs
              </a>
              <a href="#events" className="text-gray-600 hover:text-pink-600">
                Events
              </a>
              <a href="#faq" className="text-gray-600 hover:text-pink-600">
                FAQ
              </a>
              <button
                onClick={toggleModal}
                className="px-4 py-2 bg-pink-500 text-white rounded-full font-medium hover:bg-pink-600 transition"
              >
                Join Now
              </button>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
                <Menu className="h-6 w-6 text-gray-600" />
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* --- HERO SECTION --- */}
      <section className="pt-32 pb-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto flex flex-col items-center text-center">
        <span className="text-sm font-bold tracking-wide text-pink-500 uppercase mb-4">
          Women's Leadership Council — AUN
        </span>
        <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900 mb-6 leading-tight">
          Grow your leadership.
          <br />
          Find your sisterhood.
          <br />
          <span className="text-pink-500">Lead with confidence.</span>
        </h1>
        <p className="max-w-2xl text-lg text-gray-600 mb-8">
          WLC exists to help women in AUN grow into their best selves;
          sharpening leadership skills and fostering a safe, supportive and
          trusted sisterhood.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
          <button
            onClick={toggleModal}
            className="px-8 py-4 bg-pink-500 text-white rounded-lg font-bold text-lg shadow-lg hover:bg-pink-600 transform hover:-translate-y-1 transition"
          >
            Join the WLC
          </button>
          <a
            href="#events"
            className="px-8 py-4 border-2 border-pink-100 text-pink-600 rounded-lg font-bold text-lg hover:border-pink-300 transition flex items-center justify-center gap-2"
          >
            See events
          </a>
        </div>
      </section>

      {/* --- QUICK BLURB --- */}
      <section id="about" className="bg-pink-50 py-12 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-xl md:text-2xl font-medium text-gray-800">
            WLC helps AUN women sharpen leadership skills, build confidence, and
            form a trusted sisterhood.
          </p>
          <div className="mt-4 flex justify-center gap-2 text-sm font-semibold text-pink-600 uppercase tracking-widest">
            <span>Short Workshops</span> • <span>Mentorship</span> •{" "}
            <span>Socials</span>
          </div>
        </div>
      </section>

      {/* --- PROGRAMS --- */}
      <section id="programs" className="py-20 px-4 max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold">What We Do</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="p-8 border border-gray-100 rounded-2xl shadow-sm hover:shadow-md transition bg-white">
            <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-6 text-blue-600">
              <Mic size={24} />
            </div>
            <h3 className="text-xl font-bold mb-3">Leadership Labs</h3>
            <p className="text-gray-600">
              Hands-on skill sessions (public speaking, negotiation, time
              management).
            </p>
          </div>
          <div className="p-8 border border-gray-100 rounded-2xl shadow-sm hover:shadow-md transition bg-white">
            <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mb-6 text-purple-600">
              <Star size={24} />
            </div>
            <h3 className="text-xl font-bold mb-3">Mentorship Circles</h3>
            <p className="text-gray-600">
              Small groups with senior mentors to guide your academic and
              personal journey.
            </p>
          </div>
          <div className="p-8 border border-gray-100 rounded-2xl shadow-sm hover:shadow-md transition bg-white">
            <div className="w-12 h-12 bg-pink-100 rounded-full flex items-center justify-center mb-6 text-pink-600">
              <Heart size={24} />
            </div>
            <h3 className="text-xl font-bold mb-3">Sisterhood Socials</h3>
            <p className="text-gray-600">
              Safe, fun gatherings and peer support. Come as you are.
            </p>
          </div>
        </div>
      </section>

      {/* --- UPCOMING EVENTS --- */}
      <section id="events" className="py-20 bg-gray-50 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="flex justify-between items-end mb-10">
            <h2 className="text-3xl font-bold">Upcoming Events</h2>
            <button className="text-pink-600 font-semibold hover:underline flex items-center gap-1">
              Full Calendar <Calendar size={16} />
            </button>
          </div>

          <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden flex flex-col md:flex-row">
            <div className="md:w-1/3 bg-pink-500 p-8 text-white flex flex-col justify-center items-center text-center">
              <span className="text-5xl font-bold">31</span>
              <span className="text-xl uppercase tracking-widest mt-1">
                JAN
              </span>
              <span className="mt-4 opacity-90">6:00 PM</span>
            </div>
            <div className="p-8 md:w-2/3 flex flex-col justify-center items-start">
              <h3 className="text-2xl font-bold mb-2">Opening Mixer</h3>
              <p className="text-gray-500 mb-2 font-medium">📍 Student Hub</p>
              <p className="text-gray-600 mb-6">
                Meet & mingle + sign-up fair. Get to know the executive board
                and your future sisters.
              </p>
              <button
                onClick={toggleModal}
                className="px-6 py-2 border-2 border-pink-500 text-pink-600 rounded-md font-semibold hover:bg-pink-50"
              >
                RSVP Now
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* --- GALLERY (SOCIAL PROOF) --- */}
      <section className="py-20 px-4 max-w-7xl mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold">WLC in Action</h2>
          <p className="text-gray-500 mt-2">Workshops • Mentors • Socials</p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="h-64 bg-gray-200 rounded-lg overflow-hidden">
            <img
              src={imgPrincess}
              alt="Women meeting"
              className="w-full h-full object-cover hover:scale-105 transition duration-500"
            />
          </div>
          <div className="h-64 bg-gray-200 rounded-lg overflow-hidden md:col-span-2">
            <img
              src={img1}
              alt="Group study"
              className="w-full h-full object-cover hover:scale-105 transition duration-500"
            />
          </div>
          <div className="h-64 bg-gray-200 rounded-lg overflow-hidden">
            <img
              src={img3}
              alt="Laughing"
              className="w-full h-full object-cover hover:scale-105 transition duration-500"
            />
          </div>
        </div>
      </section>

      {/* --- FAQ --- */}
      <section id="faq" className="py-16 bg-pink-50 px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-10">
            Frequently Asked Questions
          </h2>
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h4 className="font-bold text-lg mb-2">Q: Who can join?</h4>
              <p className="text-gray-600">Any woman at AUN.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h4 className="font-bold text-lg mb-2">Q: Is it free?</h4>
              <p className="text-gray-600">
                Yes. Events may sometimes ask for small fees.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h4 className="font-bold text-lg mb-2">
                Q: How often do you meet?
              </h4>
              <p className="text-gray-600">
                Weekly or biweekly depending on the term.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* --- FOOTER --- */}
      <footer className="bg-gray-900 text-white py-12 px-4">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-center md:text-left">
            <h5 className="font-bold text-xl mb-1">
              Women's Leadership Council
            </h5>
            <p className="text-gray-400 text-sm">© 2025/26 AUN Chapter</p>
          </div>
          <div className="text-center">
            <p className="font-medium mb-2">Questions?</p>
            <a
              href="mailto:wlc@aun.edu.ng"
              className="text-pink-400 hover:text-pink-300 transition"
            >
              wlc@aun.edu.ng
            </a>
          </div>
          <div className="flex gap-4">
            <a href="#" className="text-gray-400 hover:text-white transition">
              Instagram
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition">
              WhatsApp
            </a>
          </div>
        </div>
        <div className="text-center mt-8 text-xs text-gray-600">
          Privacy Note: Your data is safe with us.
        </div>
      </footer>

      {/* --- MODAL / POPUP FORM --- */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div
            className="absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity"
            onClick={toggleModal}
          ></div>

          <div className="relative bg-white w-full max-w-lg rounded-2xl shadow-2xl overflow-y-auto max-h-[90vh] animate-fade-in-up">
            <button
              onClick={toggleModal}
              className="absolute top-4 right-4 p-2 bg-gray-100 rounded-full hover:bg-gray-200 transition z-10"
            >
              <X size={20} />
            </button>

            <div className="p-8">
              {submitStatus === "success" ? (
                <div className="flex flex-col items-center justify-center text-center py-12">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center text-green-600 mb-4">
                    <Heart size={32} fill="currentColor" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    Welcome to the Club!
                  </h3>
                  <p className="text-gray-600 mb-6">
                    You've successfully signed up.
                  </p>
                  <a
                    href="#"
                    className="px-6 py-3 bg-green-500 text-white rounded-lg font-bold hover:bg-green-600 transition"
                  >
                    Join the WhatsApp Group
                  </a>
                </div>
              ) : (
                <>
                  <div className="mb-6">
                    <h3 className="text-2xl font-bold text-gray-900">
                      Join the circle
                    </h3>
                    <p className="text-gray-500">
                      We'll keep it short. Fill this out to join.
                    </p>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Full name <span className="text-red-500">*</span>
                      </label>
                      <input
                        name="name"
                        required
                        className="w-full p-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-pink-500 focus:border-pink-500 outline-none transition"
                        placeholder="Enter your name..."
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Email <span className="text-red-500">*</span>
                      </label>
                      <input
                        name="email"
                        type="email"
                        required
                        className="w-full p-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-pink-500 focus:border-pink-500 outline-none transition"
                        placeholder="Enter your AUN E-mail..."
                      />
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          Phone
                        </label>
                        <input
                          name="phone"
                          type="tel"
                          className="w-full p-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-pink-500 outline-none"
                          placeholder="Enter your phone number..."
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          Birthday
                        </label>
                        <input
                          name="birthday"
                          type="date"
                          className="w-full p-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-pink-500 outline-none"
                        />
                      </div>
                    </div>

                    <label className="flex items-center gap-3 p-3 border rounded-lg cursor-pointer hover:bg-gray-50">
                      <input
                        name="optin"
                        type="checkbox"
                        className="w-4 h-4 text-pink-600 rounded focus:ring-pink-500"
                      />
                      <span className="text-sm text-gray-600">
                        Receive emails from us?
                      </span>
                    </label>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Any suggestions?
                      </label>
                      <textarea
                        name="suggestions"
                        rows="2"
                        className="w-full p-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-pink-500 outline-none"
                        placeholder="What would you like to see?"
                      ></textarea>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Merch Interest?
                      </label>
                      <select
                        name="merch"
                        className="w-full p-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-pink-500 outline-none bg-white"
                      >
                        <option value="">No merch right now</option>
                        <option value="tshirt">T-shirt</option>
                        <option value="tote">Tote Bag</option>
                        <option value="pin">Pin / Badge</option>
                        <option value="interested">
                          Interested — tell me more
                        </option>
                      </select>
                    </div>

                    {submitStatus === "error" && (
                      <div className="p-3 bg-red-50 text-red-600 rounded-md text-sm">
                        Something went wrong. Please try again.
                      </div>
                    )}

                    <div className="pt-2 flex flex-col gap-3">
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full py-3 bg-pink-600 text-white rounded-lg font-bold hover:bg-pink-700 transition shadow-md flex justify-center items-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
                      >
                        {isSubmitting ? (
                          <>
                            <Loader2 className="animate-spin" size={20} />{" "}
                            Sending...
                          </>
                        ) : (
                          "Submit & Join WhatsApp"
                        )}
                      </button>
                      <a
                        href="#"
                        className="w-full py-3 border border-green-500 text-green-600 rounded-lg font-bold hover:bg-green-50 transition text-center flex items-center justify-center gap-2"
                      >
                        Skip form & Join WhatsApp
                      </a>
                    </div>
                  </form>
                </>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default WLCWebsite;
