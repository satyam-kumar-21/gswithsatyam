import React from 'react';
import { Link } from 'react-router-dom';

const SolarSystem = () => {
  return (
    <div className="bg-gray-50 min-h-screen p-1 md:p-8">
      <div className="max-w-4xl mx-auto bg-white p-1 md:p-8 rounded-lg shadow-md">
        
        {/* Solar System */}
        <section className="mb-8">
          <h2 className="text-3xl font-semibold text-gray-800 mb-4">
            सौर मंडल (Solar System)
          </h2>
          <p className="text-lg text-gray-700 mb-4">
            सौर मंडल में लगभग 98 से 99% सामग्री सूर्य के पास होती है। यह एक खगोलीय प्रणाली है जिसमें सूर्य के चारों ओर विभिन्न ग्रह, उपग्रह, बौने ग्रह, और पुञ्चहाल तारे शामिल होते हैं।
            <br />
            (The solar system contains about 98 to 99% of its mass near the Sun. It is an astronomical system that includes various planets, moons, dwarf planets, and comets orbiting around the Sun.)
          </p>
          <img 
            src="https://media.licdn.com/dms/image/v2/D4D12AQFiCdccTOH-rg/article-cover_image-shrink_600_2000/article-cover_image-shrink_600_2000/0/1681743558580?e=2147483647&v=beta&t=evGK7fA9g5vwYlo8RoofALjn9WRaV8s4PTf72lhCQjk" 
            alt="Solar System" 
            className="w-full h-auto rounded-lg mb-4"
          />
        </section>

        {/* Sun */}
        <section className="mb-8">
          <h2 className="text-3xl font-semibold text-gray-800 mb-4">
            सूर्य (Sun)
          </h2>
          <p className="text-lg text-gray-700 mb-4">
            सौर मंडल का केंद्र और सबसे बड़ा पिंड है। यह ऊर्जा का मुख्य स्रोत है और इसके गुरुत्वाकर्षण के कारण बाकी ग्रह इसके चारों ओर परिक्रमा करते हैं।
            <br />
            (The Sun is the center and the largest body of the solar system. It is the main source of energy, and the gravitational pull causes the other planets to orbit around it.)
          </p>
        </section>

        {/* Planets */}
        <section className="mb-8">
          <h2 className="text-3xl font-semibold text-gray-800 mb-4">
            ग्रह (Planets)
          </h2>
          <p className="text-lg text-gray-700 mb-4">
            सौर मंडल में आठ मुख्य ग्रह होते हैं: पृथ्वी (Earth), मंगल (Mars), शुक्र (Venus), बृहस्पति (Jupiter), शनि (Saturn), यूरेनस (Uranus), नेप्च्यून (Neptune), और प्लूटो (Pluto) - जिसे अब बौना ग्रह माना जाता है।
            <br />
            (The solar system has eight main planets: Earth, Mars, Venus, Jupiter, Saturn, Uranus, Neptune, and Pluto - which is now considered a dwarf planet.)
          </p>
        </section>

        {/* Summary */}
        <section className="mb-8">
          <h2 className="text-3xl font-semibold text-gray-800 mb-4">
            संक्षेप (Summary)
          </h2>
          <p className="text-lg text-gray-700 mb-4">
            सौर मंडल सूर्य द्वारा नियंत्रित एक विशाल खगोलीय प्रणाली है, जिसमें विभिन्न प्रकार के ग्रह शामिल हैं। सूर्य ऊर्जा का मुख्य स्रोत है, और इसका गुरुत्वाकर्षण सौर मंडल के सभी पिंडों को अपने चारों ओर आकर्षित करता है।
            <br />
            (The solar system is a vast astronomical system governed by the Sun, which includes various types of planets. The Sun is the main source of energy, and its gravity attracts all bodies in the solar system around it.)
          </p>
        </section>

        {/* Navigation Buttons */}
        <div className="flex justify-between mt-8">
          <Link to="/celestial-objects" className="bg-gray-800 text-white px-4 py-2 rounded hover:bg-gray-700">
            Previous / पिछले
          </Link>
          <Link to="/solar-system-origin-theory" className="bg-gray-800 text-white px-4 py-2 rounded hover:bg-gray-700">
            Next / अगला
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SolarSystem;
