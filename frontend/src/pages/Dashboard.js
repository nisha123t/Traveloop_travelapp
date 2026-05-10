import { useState } from "react";

function Dashboard() {

  const topSelections = [
    {
      id: 1,
      name: "Bali",
      country: "Indonesia",
      image:
        "https://images.unsplash.com/photo-1537996194471-e657df975ab4",
    },
    {
      id: 2,
      name: "Paris",
      country: "France",
      image:
        "https://images.unsplash.com/photo-1502602898657-3e91760cbb34",
    },
    {
      id: 3,
      name: "Tokyo",
      country: "Japan",
      image:
        "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf",
    },
    {
      id: 4,
      name: "Rome",
      country: "Italy",
      image:
        "https://images.unsplash.com/photo-1552832230-c0197dd311b5",
    },
  ];

  const previousTrips = [
    {
      id: 1,
      title: "Europe Summer Trip",
      dates: "June 1 - June 15",
      image:
        "https://images.unsplash.com/photo-1491555103944-7c647fd857e6",
    },
    {
      id: 2,
      title: "Thailand Escape",
      dates: "March 10 - March 18",
      image:
        "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
    },
    {
      id: 3,
      title: "Japan Adventure",
      dates: "July 5 - July 14",
      image:
        "https://images.unsplash.com/photo-1526481280695-3c4691f38f80",
    },
  ];

  const [search, setSearch] = useState("");

  const filteredSelections = topSelections.filter((place) =>
    place.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gray-100 pb-24">

      {/* Navbar */}
      <div className="bg-white px-8 py-5 flex justify-between items-center shadow-sm">

        <h1 className="text-3xl font-bold text-blue-600">
          Traveloop
        </h1>

        <button className="bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-700 transition">
          Profile
        </button>

      </div>

      {/* Banner */}
      <div className="w-full h-[35vh]">
        <img
          src="https://images.unsplash.com/photo-1501785888041-af3ef285b470"
          alt="Travel Banner"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Content */}
      <div className="p-8">

        {/* Search + Controls */}
        <div className="flex flex-col lg:flex-row gap-4 justify-between items-center mb-10">

          {/* Search Bar */}
          <input
            type="text"
            placeholder="Search destinations..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full lg:w-[50%] p-4 rounded-xl border border-gray-300 outline-none focus:ring-2 focus:ring-blue-500 bg-white"
          />

          {/* Controls */}
          <div className="flex gap-4">

            <select className="p-3 rounded-xl border border-gray-300 bg-white">
              <option>Group By</option>
              <option>Country</option>
              <option>Budget</option>
            </select>

            <select className="p-3 rounded-xl border border-gray-300 bg-white">
              <option>Filter</option>
              <option>Popular</option>
              <option>Affordable</option>
            </select>

            <select className="p-3 rounded-xl border border-gray-300 bg-white">
              <option>Sort By</option>
              <option>Name</option>
              <option>Rating</option>
            </select>

          </div>

        </div>

        {/* Top Regional Selections */}
        <div className="mb-14">

          <h2 className="text-3xl font-bold mb-6">
            Top Regional Selections
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">

            {filteredSelections.map((place) => (
              <div
                key={place.id}
                className="bg-white rounded-2xl overflow-hidden shadow hover:shadow-lg transition"
              >

                <img
                  src={place.image}
                  alt={place.name}
                  className="h-44 w-full object-cover"
                />

                <div className="p-4">

                  <h3 className="text-xl font-bold">
                    {place.name}
                  </h3>

                  <p className="text-gray-600">
                    {place.country}
                  </p>

                </div>

              </div>
            ))}

          </div>

        </div>

        {/* Previous Trips */}
        <div>

          <h2 className="text-3xl font-bold mb-6">
            Previous Trips
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

            {previousTrips.map((trip) => (
              <div
                key={trip.id}
                className="bg-white rounded-2xl overflow-hidden shadow hover:shadow-lg transition"
              >

                <img
                  src={trip.image}
                  alt={trip.title}
                  className="h-52 w-full object-cover"
                />

                <div className="p-5">

                  <h3 className="text-2xl font-bold mb-2">
                    {trip.title}
                  </h3>

                  <p className="text-gray-600">
                    {trip.dates}
                  </p>

                </div>

              </div>
            ))}

          </div>

        </div>

      </div>

      {/* Floating Add Trip Button */}
      <button
        className="fixed bottom-8 right-8 bg-blue-600 hover:bg-blue-700 text-white px-6 py-4 rounded-full shadow-xl text-lg font-semibold transition"
      >
        + Add Trip
      </button>

    </div>
  );
}

export default Dashboard;