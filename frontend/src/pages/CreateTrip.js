import { useState } from "react";

function CreateTrip() {

  const [tripName, setTripName] = useState("");
  const [place, setPlace] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [description, setDescription] = useState("");
  const [error, setError] = useState("");

  const suggestions = [
    {
      id: 1,
      title: "Beach Exploration",
      location: "Bali",
      image:
        "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
    },
    {
      id: 2,
      title: "Tokyo Food Tour",
      location: "Japan",
      image:
        "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf",
    },
    {
      id: 3,
      title: "Paris Museum Day",
      location: "France",
      image:
        "https://images.unsplash.com/photo-1502602898657-3e91760cbb34",
    },
    {
      id: 4,
      title: "Mountain Hiking",
      location: "Switzerland",
      image:
        "https://images.unsplash.com/photo-1506744038136-46273834b3fb",
    },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!tripName.trim()) {
      setError("Trip name is required");
      return;
    }

    if (!place.trim()) {
      setError("Please select a place");
      return;
    }

    if (!startDate || !endDate) {
      setError("Please select start and end dates");
      return;
    }

    if (new Date(startDate) > new Date(endDate)) {
      setError("Start date must be before end date");
      return;
    }

    setError("");

    alert("Trip Saved Successfully!");
  };

  return (
    <div className="min-h-screen bg-gray-100 pb-16">

      {/* Navbar */}
      <div className="bg-white px-8 py-5 flex justify-between items-center shadow-sm">

        <h1 className="text-3xl font-bold text-blue-600">
          Traveloop
        </h1>

        <button className="bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-700">
          Profile
        </button>

      </div>

      <div className="max-w-5xl mx-auto p-8">

        {/* Heading */}
        <h2 className="text-4xl font-bold mb-8">
          Plan a New Trip
        </h2>

        {/* Form */}
        <div className="bg-white rounded-2xl shadow p-8 mb-14">

          <form onSubmit={handleSubmit} className="space-y-6">

            {/* Trip Name */}
            <div>
              <label className="block mb-2 font-semibold">
                Trip Name
              </label>

              <input
                type="text"
                placeholder="Enter trip name"
                value={tripName}
                onChange={(e) => setTripName(e.target.value)}
                className="w-full p-4 border border-gray-300 rounded-xl outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {/* Place */}
            <div>
              <label className="block mb-2 font-semibold">
                Select Place
              </label>

              <select
                value={place}
                onChange={(e) => setPlace(e.target.value)}
                className="w-full p-4 border border-gray-300 rounded-xl outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="">Choose Destination</option>
                <option>Bali</option>
                <option>Paris</option>
                <option>Tokyo</option>
                <option>Rome</option>
              </select>
            </div>

            {/* Dates */}
            <div className="grid md:grid-cols-2 gap-6">

              <div>
                <label className="block mb-2 font-semibold">
                  Start Date
                </label>

                <input
                  type="date"
                  value={startDate}
                  onChange={(e) => setStartDate(e.target.value)}
                  className="w-full p-4 border border-gray-300 rounded-xl outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div>
                <label className="block mb-2 font-semibold">
                  End Date
                </label>

                <input
                  type="date"
                  value={endDate}
                  onChange={(e) => setEndDate(e.target.value)}
                  className="w-full p-4 border border-gray-300 rounded-xl outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

            </div>

            {/* Description */}
            <div>
              <label className="block mb-2 font-semibold">
                Trip Description (Optional)
              </label>

              <textarea
                rows="5"
                placeholder="Write something about your trip..."
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                className="w-full p-4 border border-gray-300 rounded-xl outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {/* Cover Photo */}
            <div>
              <label className="block mb-2 font-semibold">
                Cover Photo Upload (Optional)
              </label>

              <input
                type="file"
                className="w-full p-3 border border-gray-300 rounded-xl bg-white"
              />
            </div>

            {/* Error */}
            {error && (
              <div className="bg-red-100 text-red-700 p-4 rounded-xl">
                {error}
              </div>
            )}

            {/* Save Button */}
            <button
              type="submit"
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-xl text-lg font-semibold transition"
            >
              Save Trip
            </button>

          </form>

        </div>

        {/* Suggestions */}
        <div>

          <h2 className="text-3xl font-bold mb-6">
            Suggestions for Places to Visit / Activities to Perform
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">

            {suggestions.map((item) => (
              <div
                key={item.id}
                className="bg-white rounded-2xl overflow-hidden shadow hover:shadow-lg transition"
              >

                <img
                  src={item.image}
                  alt={item.title}
                  className="h-44 w-full object-cover"
                />

                <div className="p-4">

                  <h3 className="text-lg font-bold mb-1">
                    {item.title}
                  </h3>

                  <p className="text-gray-600">
                    {item.location}
                  </p>

                </div>

              </div>
            ))}

          </div>

        </div>

      </div>

    </div>
  );
}

export default CreateTrip;