// components/Testimonials.js
import React from 'react';

const testimonials = [
  {
    id: 1,
    name: 'Aarav Sharma',
    role: 'Student',
    testimonial: '“The free classes and notes provided have been invaluable in my learning journey. The content is top-notch and has greatly enhanced my understanding of complex topics.”',
  },
  {
    id: 2,
    name: 'Saanvi Patel',
    role: 'Learner',
    testimonial: '“I love the structured approach and the easy-to-follow notes. The YouTube classes are very informative and engaging. Highly recommend to anyone looking to improve their skills.”',
  },
  {
    id: 3,
    name: 'Arjun Reddy',
    role: 'Enthusiast',
    testimonial: '“The quality of education provided is exceptional. The free resources are a great way to get started without any financial commitment. Truly a valuable resource!”',
  },
  {
    id: 4,
    name: 'Priya Gupta',
    role: 'New Learner',
    testimonial: '“Amazing content and resources! The free classes are a great introduction, and the notes are very helpful for further study.”',
  },
  {
    id: 5,
    name: 'Rohan Verma',
    role: 'Tech Enthusiast',
    testimonial: '“I’ve gained so much from these free classes. The notes and videos are well-organized and easy to understand.”',
  },
  {
    id: 6,
    name: 'Isha Desai',
    role: 'Professional',
    testimonial: '“Excellent resource for anyone looking to expand their knowledge. The free classes are well-structured and insightful.”',
  },
];

const TestimonialCard = ({ name, role, testimonial }) => (
  <div className="bg-white p-6 rounded-lg shadow-lg flex flex-col items-center text-center border border-gray-200">
    <p className="text-gray-700 mb-4 text-lg italic font-light">{testimonial}</p>
    <h3 className="text-xl font-semibold text-gray-800 mb-1">{name}</h3>
    <p className="text-sm text-gray-500 font-medium">{role}</p>
  </div>
);

const Testimonials = () => {
  return (
    <section className="bg-gray-100 py-12">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-extrabold text-center mb-12 text-gray-800">
          What Our Learners Say
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <TestimonialCard
              key={testimonial.id}
              name={testimonial.name}
              role={testimonial.role}
              testimonial={testimonial.testimonial}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
