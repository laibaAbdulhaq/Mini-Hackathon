// components/HeroSection.js
export default function HeroSection() {
    return (
      <section className="flex flex-col items-center py-12 bg-gray-50">
        <h1 className="text-2xl font-semibold text-center mb-8">
          Sell Your Car on PakWheels and Get the Best Price
        </h1>
        <div className="flex flex-col md:flex-row items-center md:space-x-8 space-y-8 md:space-y-0">
          {/* Left Column */}
          <div className="flex flex-col items-center p-6 bg-white shadow-md rounded-lg">
            <h2 className="text-xl font-medium text-blue-800 mb-4">Post your Ad on PakWheels</h2>
            <ul className="text-gray-700 space-y-2 mb-6">
              <li>✔️ Post your Ad for Free in 3 Easy Steps</li>
              <li>✔️ Get Genuine offers from Verified Buyers</li>
              <li>✔️ Sell your car Fast at the Best Price</li>
            </ul>
            <button className="bg-red-600 text-white py-2 px-4 rounded hover:bg-red-700">
              Post Your Ad
            </button>
          </div>
  
          {/* OR divider */}
          <div className="text-xl font-semibold text-gray-500">OR</div>
  
          {/* Right Column */}
          <div className="flex flex-col items-center p-6 bg-white shadow-md rounded-lg">
            <h2 className="text-xl font-medium text-blue-800 mb-4">Try PakWheels Sell It For Me</h2>
            <ul className="text-gray-700 space-y-2 mb-6">
              <li>✔️ Dedicated Sales Expert to Sell your Car</li>
              <li>✔️ We Bargain for you and share the Best Offer</li>
              <li>✔️ We ensure Safe & Secure Transaction</li>
            </ul>
            <button className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700">
              Register Your Car
            </button>
          </div>
        </div>
      </section>
    );
  }
  
