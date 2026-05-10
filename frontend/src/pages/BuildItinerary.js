import { useState } from "react";

function BuildItinerary() {

  const [sections, setSections] = useState([
    {
      id: 1,
      title: "Travel Section",
      description: "Flight from Chennai to Bali with airport transfer.",
      date: "10 Jun 2026 - 11 Jun 2026",
      budget: "$850",
    },
    {
      id: 2,
      title: "Hotel Stay",
      description: "5-night stay at a beachfront resort in Bali.",
      date: "11 Jun 2026 - 16 Jun 2026",
      budget: "$1200",
    },
    {
      id: 3,
      title: "Adventure Activities",
      description: "Scuba diving, island hopping and food tours.",
      date: "12 Jun 2026 - 15 Jun 2026",
      budget: "$600",
    },
  ]);

  const addSection = () => {
    const newSection = {
      id: sections.length + 1,
      title: "New Activity Section",
      description: "Add details for this itinerary section.",
      date: "Select Dates",
      budget: "$0",
    };

    setSections([...sections, newSection]);
  };

  return (
    <div className="min-h-screen bg-black text-white pb-20">

      {/* Navbar */}
      <div className="flex justify-between items-center px-8 py-5 border-b border-red-900">

        <h1 className="text-3xl font-bold text-red-700">
          Traveloop
        </h1>

        <button className="bg-red-800 hover:bg-red-900 px-5 py-2 rounded-lg transition">
          Profile
        </button>

      </div>

      {/* Page Content */}
      <div className="max-w-5xl mx-auto px-6 py-10">

        {/* Heading */}
        <h2 className="text-4xl font-bold mb-10 text-red-700">
          Build Itinerary
        </h2>

        {/* Sections */}
        <div className="space-y-8">

          {sections.map((section, index) => (
            <div
              key={section.id}
              className="border border-red-900 bg-[#111111] rounded-2xl p-8 shadow-lg"
            >

              {/* Section Number */}
              <p className="text-sm text-gray-400 mb-4">
                Section {index + 1}
              </p>

              {/* Title */}
              <h3 className="text-2xl font-bold mb-4 text-red-600">
                {section.title}
              </h3>

              {/* Description */}
              <p className="text-gray-300 mb-8 leading-relaxed">
                {section.description}
              </p>

              {/* Bottom Info */}
              <div className="flex justify-between items-center border-t border-gray-800 pt-5">

                {/* Date */}
                <div>
                  <p className="text-sm text-gray-500 mb-1">
                    Date Range
                  </p>

                  <p className="font-medium">
                    {section.date}
                  </p>
                </div>

                {/* Budget */}
                <div className="text-right">
                  <p className="text-sm text-gray-500 mb-1">
                    Budget
                  </p>

                  <p className="text-xl font-bold text-red-500">
                    {section.budget}
                  </p>
                </div>

              </div>

            </div>
          ))}

        </div>

        {/* Add Section Button */}
        <div className="mt-10 flex justify-center">

          <button
            onClick={addSection}
            className="bg-red-800 hover:bg-red-900 px-8 py-4 rounded-xl text-lg font-semibold transition shadow-lg"
          >
            + Add Another Section
          </button>

        </div>

      </div>

    </div>
  );
}

export default BuildItinerary;