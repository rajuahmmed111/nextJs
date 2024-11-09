import React from "react";

interface Course {
  title: string;
  duration: string;
  videos: number;
}

const courseList: Course[] = [
  { title: "Behavior", duration: "5:50", videos: 3 },
  { title: "Market-components", duration: "12:06", videos: 3 },
  { title: "Major-Minor-Levels", duration: "8:40", videos: 3 },
  { title: "Highs-Lows-Misconception", duration: "6:30", videos: 3 },
  { title: "Market-Structures", duration: "9:10", videos: 3 },
  { title: "Continuation Structures", duration: "11:15", videos: 3 },
  { title: "Reversal-Structures", duration: "10:00", videos: 3 },
];

const VideoCoursePage: React.FC = () => {
  return (
    <div className="bg-gray-50 min-h-screen p-4 md:p-8 lg:p-12">
      {/* Header Section */}
      <header className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-blue-900">
          My Financial Trading
        </h1>
        <div>
          <button className="bg-blue-700 text-white px-4 py-2 mr-2 rounded-md hover:bg-blue-800">
            View Classes
          </button>
          <button className="bg-yellow-500 text-black px-4 py-2 rounded-md hover:bg-yellow-600">
            Schedule a Meeting
          </button>
        </div>
      </header>

      {/* Main Content */}
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        {/* Sidebar - Course List */}
        <aside className="lg:col-span-1 bg-white p-4 rounded-lg shadow-lg">
          <h2 className="text-lg font-semibold mb-4">All Courses & Videos</h2>
          <ul className="space-y-3">
            {courseList.map((course, index) => (
              <li
                key={index}
                className="flex justify-between items-center p-2 bg-gray-100 rounded-md"
              >
                <div className="text-blue-800">{course.title}</div>
                <div className="text-gray-600">{course.duration}</div>
              </li>
            ))}
          </ul>
        </aside>

        {/* Video and Details Section */}
        <section className="lg:col-span-3">
          <div className="bg-white p-4 rounded-lg shadow-lg">
            <div className="mb-4">
              <iframe
                className="w-full rounded-lg"
                height="400"
                src="https://www.youtube.com/embed/example"
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
            <h3 className="text-xl font-semibold">
              Market-components - Class 1
            </h3>
            <p className="text-gray-700 mt-2">
              In this ultimate trading masterclass, you will learn how to master
              trading as a beginner in 2025. I will reveal the exact steps that
              you need to take to become consistently profitable while every
              other retail trader remains a losing trader. Learn exactly how to
              make over 5K to $10k/month trading and live your dream life.
            </p>
          </div>
        </section>
      </div>

      {/* Newsletter Section */}
      <div className="mt-8 bg-blue-900 text-white p-6 rounded-lg">
        <h4 className="text-lg mb-3">Subscribe to our Newsletter</h4>
        <form className="flex flex-col sm:flex-row">
          <input
            type="email"
            className="w-full p-2 mb-3 sm:mb-0 sm:mr-2 rounded-md text-black"
            placeholder="Enter your email"
          />
          <button className="bg-yellow-500 px-4 py-2 rounded-md hover:bg-yellow-600">
            Subscribe Now
          </button>
        </form>
      </div>

      {/* Footer Section */}
      <footer className="mt-8 text-center text-gray-600">
        <div className="flex justify-center space-x-4 mb-3">
          <a href="#" className="hover:underline">
            About us
          </a>
          <a href="#" className="hover:underline">
            Discover
          </a>
          <a href="#" className="hover:underline">
            Explore
          </a>
          <a href="#" className="hover:underline">
            Books
          </a>
        </div>
        <p>© 2024 My Financial Trading. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default VideoCoursePage;
