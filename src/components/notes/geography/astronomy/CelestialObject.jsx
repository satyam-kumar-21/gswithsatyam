import React from 'react';
import { Link } from 'react-router-dom';

const CelestialObject = () => {
  return (
    <div className="bg-gray-50 min-h-screen p-1 md:p-8">
      <div className="max-w-4xl mx-auto bg-white p-1 md:p-8 rounded-lg shadow-md">
        
        {/* White Hole */}
        <section className="mb-8">
          <h2 className="text-3xl font-semibold text-gray-800 mb-4">
            व्हाइट होल (White Hole)
          </h2>
          <p className="text-lg text-gray-700 mb-4">
            व्हाइट होल एक काल्पनिक खगोलीय पिंड है जहाँ से ऊर्जा और प्रकाश बाहर निकलता है। इसमें प्रवेश का कोई रास्ता नहीं होता। 
            <br />
            (A white hole is a hypothetical astronomical object from which energy and light escape. There is no pathway for anything to enter.)
          </p>
          <img 
            src="https://haleys908219433.wordpress.com/wp-content/uploads/2018/04/maxresdefault.jpg" 
            alt="White Hole" 
            className="w-full h-auto rounded-lg mb-4"
          />
        </section>

        {/* Vampire Star */}
        <section className="mb-8">
          <h2 className="text-3xl font-semibold text-gray-800 mb-4">
            वैंपायर तारा (Vampire Star)
          </h2>
          <p className="text-lg text-gray-700 mb-4">
            जब एक तारा दूसरे तारे से ऊर्जा खींचता है और उसे नष्ट कर देता है, तो इसे वैंपायर तारा कहा जाता है। हाल ही में NASA ने एक वैंपायर तारे की खोज की है।
            <br />
            (A vampire star is one that pulls energy from another star, often destroying it in the process. Recently, NASA discovered a vampire star.)
          </p>
          <img 
            src="https://live.staticflickr.com/7267/7753908826_fc32a750f7_b.jpg" 
            alt="Vampire Star" 
            className="w-full h-auto rounded-lg mb-4"
          />
        </section>

        {/* Pulsar Star */}
        <section className="mb-8">
          <h2 className="text-3xl font-semibold text-gray-800 mb-4">
            पल्सर तारा (Pulsar Star)
          </h2>
          <p className="text-lg text-gray-700 mb-4">
            पल्सर तारे न्यूट्रॉन तारे होते हैं जो घूर्णन करते हैं और अंतरिक्ष में नियमित रूप से ऊर्जा का निष्कासन करते हैं।
            <br />
            (Pulsar stars are neutron stars that rotate and emit energy regularly into space.)
          </p>
          <img 
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmj58yeaWLa9rR60khuS0LXOOxc9ewfRO-GA&s" 
            alt="Pulsar Star" 
            className="w-full h-auto rounded-lg mb-4"
          />
        </section>

        {/* Quasar */}
        <section className="mb-8">
          <h2 className="text-3xl font-semibold text-gray-800 mb-4">
            क्वासर (Quasar)
          </h2>
          <p className="text-lg text-gray-700 mb-4">
            क्वासर आकाशगंगा के सबसे चमकीले क्षेत्र होते हैं, जहाँ एक ब्लैक होल होता है और गैस का डिस्क गर्म होकर ऊर्जा विकिरण करता है।
            <br />
            (Quasars are the brightest regions of galaxies, where a black hole exists and the surrounding gas disk emits energy as it heats up.)
          </p>
          <img 
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZEUGxnlTRpC3_Hxixym7ZsCnnxQUOZBCUyA&s" 
            alt="Quasar" 
            className="w-full h-auto rounded-lg mb-4"
          />
        </section>

        {/* Taramandal (Constellation) */}
        <section className="mb-8">
          <h2 className="text-3xl font-semibold text-gray-800 mb-4">
            तारामंडल (Constellation)
          </h2>
          <p className="text-lg text-gray-700 mb-4">
            तारामंडल में तारे एक निश्चित आकार में होते हैं। प्रमुख तारामंडल में सप्तर्षि शामिल है। अब तक 89 तारामंडल की खोज की गई है।
            <br />
            (Constellations are groups of stars that form a specific shape. The prominent constellation is the Big Dipper. So far, 89 constellations have been discovered.)
          </p>
          <img 
            src="https://vigyanvishwa.in/wp-content/uploads/2011/08/big_dipper11.png" 
            alt="Taramandal" 
            className="w-full h-auto rounded-lg mb-4"
          />
        </section>

        {/* Dhruv Tara (Polaris) */}
        <section className="mb-8">
          <h2 className="text-3xl font-semibold text-gray-800 mb-4">
            ध्रुव तारा (Dhruv Tara)
          </h2>
          <p className="text-lg text-gray-700 mb-4">
            ध्रुव तारा, जिसे पोलारिस भी कहा जाता है, उत्तरी ध्रुव के लगभग सीधे ऊपर स्थित है। यह हमेशा उत्तर दिशा को इंगित करता है और दिशा निर्देश के लिए महत्वपूर्ण है।
            <br />
            (The Dhruv Tara, also known as Polaris, is located almost directly above the North Pole. It always points to the north and is important for navigation.)
          </p>
          <img 
            src="https://www.universetoday.com/wp-content/uploads/2014/05/Polaris_axis_1NEW.jpg" 
            alt="Dhruv Tara" 
            className="w-full h-auto rounded-lg mb-4"
          />
        </section>

        {/* Navigation Buttons */}
        <div className="flex justify-between mt-8">
          <Link to="/black-holes" className="bg-gray-800 text-white px-4 py-2 rounded hover:bg-gray-700">
            Previous / पिछले
          </Link>
          <Link to="/solar-system" className="bg-gray-800 text-white px-4 py-2 rounded hover:bg-gray-700">
            Next / अगला
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CelestialObject;
