import React from 'react';

const AboutUs = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      {/* Hero Section */}
      <div className="text-gray-800 py-16 px-6 text-center bg-gradient-to-r from-blue-100 to-gray-200">
        <h1 className="text-5xl font-extrabold mb-4">About Us</h1>
        <p className="text-xl mb-8 max-w-3xl mx-auto">
          Discover how GS with Satyam is revolutionizing free education with high-quality lectures and notes.
        </p>
      </div>

      {/* Main Content */}
      <div className="flex items-center justify-center py-12 px-6">
        <div className="max-w-4xl bg-white p-8 rounded-lg shadow-xl border border-gray-200">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">Welcome to GS with Satyam</h2>
          <p className="text-lg text-gray-700 mb-6">
            At <strong className="text-blue-600">GS with Satyam</strong>, we are dedicated to providing free, high-quality lectures and study notes to help students and learners excel in their studies. Our platform offers valuable educational resources that are accessible to everyone, regardless of their background or financial situation.
          </p>
          <p className="text-lg text-gray-700 mb-6">
            We believe that education should be a right, not a privilege. Our mission is to make learning materials and lecture notes available for free to support students in their academic journey. We aim to create a comprehensive resource hub that covers a wide range of subjects and topics, ensuring that you have the tools you need to succeed.
          </p>
          <p className="text-lg text-gray-700 mb-6">
            Our founder, Satyam, is passionate about teaching and education. With years of experience in the field, Satyam is committed to delivering content that is both informative and engaging. We continually update our materials and resources to reflect the latest developments and ensure that you receive the most relevant information.
          </p>
          <h3 className="text-2xl font-semibold text-gray-800 mb-4">Our Mission</h3>
          <p className="text-lg text-gray-700 mb-6">
            Our goal is to make quality education accessible to all. We provide free resources to help you succeed academically, and we are constantly working to improve and expand our offerings.
          </p>
          
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
