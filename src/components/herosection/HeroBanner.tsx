// components/HeroBanner.js
export default function HeroBanner() {
    return (
      <section className="relative bg-blue-900 text-white py-20">
        <div className="absolute inset-0 bg-cover bg-center opacity-60" style={{ backgroundImage:  "url('bg-cover.jpeg')" }}></div>
        <div className="relative z-10 flex flex-col items-center text-center px-4">
          <h1 className="text-3xl md:text-5xl font-bold mb-4">Find Used Cars in Pakistan</h1>
          <p className="text-lg md:text-xl mb-8">With thousands of cars, we have just the right one for you</p>
  
          {/* Search Fields */}
          <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
            <input
              type="text"
              placeholder="Car Make or Model"
              className="px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900"
            />
            <input
              type="text"
              placeholder="All Cities"
              className="px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900"
            />
            <input
              type="text"
              placeholder="Price Range"
              className="px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900"
            />
          </div>
          <button className="text-sm mt-4 underline">Advance Filter</button>
        </div>
      </section>
    );
  }
  