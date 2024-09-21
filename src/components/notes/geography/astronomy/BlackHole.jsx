import React from 'react';
import { Link } from 'react-router-dom';

const BlackHole = () => {
  return (
    <div className="bg-gray-50 min-h-screen p-1 md:p-8">
      <div className="max-w-4xl mx-auto bg-white p-1 md:p-8 rounded-lg shadow-md">
        {/* Explanation of Black Hole */}
        <section className="mb-8">
          <h2 className="text-3xl font-semibold text-gray-800 mb-4">
            ब्लैक होल क्या है? (What is a Black Hole?)
          </h2>
          <p className="text-lg text-gray-700 mb-4">
            ब्लैक होल एक ऐसा क्षेत्र है जहाँ गुरुत्वाकर्षण इतना अधिक होता है कि कोई भी वस्तु, यहाँ तक कि प्रकाश भी, वहाँ से बाहर नहीं निकल सकता। इसे एक काल्पनिक बिंदु के रूप में माना जाता है, जिसे सिंगुलैरिटी कहते हैं।
          </p>
          <p className="text-lg text-gray-700 mb-4">
            A black hole is a region in space where the gravitational pull is so strong that nothing, not even light, can escape from it. It is considered as a hypothetical point known as singularity.
          </p>
        </section>

        <h1 className="text-4xl font-extrabold text-gray-900 mb-6">
          ब्लैक होल की विशेषताएँ (Characteristics of Black Holes)
        </h1>

        {/* Image Section */}
        <div className="mb-8">
          <img 
            src="https://c02.purpledshub.com/uploads/sites/48/2023/11/parts-of-a-black-hole.jpg?fit=800%2C498" 
            alt="Black Hole" 
            className="w-full h-auto rounded-lg"
          />
        </div>

        {/* Points about Black Hole Features */}
        <section className="mb-8">
          <ul className="list-disc pl-6 space-y-2 text-lg text-gray-700">
            <li>1. सिंगुलैरिटी: जहाँ गुरुत्वाकर्षण असीमित होता है। (Singularity: Where gravity is infinite.)</li>
            <li>2. इवेंट होरिजन: वह सीमा जहाँ से कोई वस्तु वापस नहीं लौट सकती। (Event Horizon: The boundary from which no object can return.)</li>
            <li>3. डिस्क: पदार्थ जो ब्लैक होल के चारों ओर घूमता है। (Disk: Material that orbits around the black hole.)</li>
          </ul>
        </section>

        {/* Types of Black Holes */}
        <section className="mb-8">
          <h2 className="text-3xl font-semibold text-gray-800 mb-4">
            ब्लैक होल के प्रकार (Types of Black Holes)
          </h2>
          
          <h3 className="text-2xl font-semibold text-gray-800 mb-2">
            द्रव्यमान के आधार पर (Based on Mass)
          </h3>
          <ul className="list-disc pl-6 space-y-4 text-lg text-gray-700">
            <li>
              1. <strong>प्राथमिक ब्लैक होल:</strong> इसका द्रव्यमान सूरज के द्रव्यमान के बराबर या उससे कम होता है।
              <br />(1. Primary Black Holes: Its mass is equal to or less than the mass of the sun.)
            </li>
            <li>
              2. <strong>स्टेलर ब्लैक होल:</strong> इसका द्रव्यमान सूरज के द्रव्यमान से 3 से 15 गुना अधिक होता है।
              <br />(2. Stellar Black Holes: Its mass is 3 to 15 times the mass of the sun.)
            </li>
            <li>
              3. <strong>मध्यमवर्ती ब्लैक होल:</strong> इसका द्रव्यमान सूरज के द्रव्यमान से कई हजार गुना अधिक होता है।
              <br />(3. Intermediate Black Holes: Its mass is several thousand times the mass of the sun.)
            </li>
            <li>
              4. <strong>विषालकाय ब्लैक होल:</strong> इसका द्रव्यमान सूरज के द्रव्यमान से कुछ मिलियन से लेकर कई मिलियन गुना अधिक होता है।
              <br />(4. Supermassive Black Holes: Its mass is from a few million to several million times the mass of the sun.)
            </li>
          </ul>

          <h3 className="text-2xl font-semibold text-gray-800 mb-2 mt-4">
            घूर्णन और आवेश के आधार पर (Based on Rotation and Charge)
          </h3>
          <ul className="list-disc pl-6 space-y-4 text-lg text-gray-700">
            <li>
              1. <strong>स्थिर ब्लैक होल:</strong> यह अपने अक्ष पर घूर्णन नहीं करते और इनमें कोई विद्युत आवेश नहीं होता।
              <br />(1. Static Black Holes: They do not rotate and have no electric charge.)
            </li>
            <li>
              2. <strong>कर्ब ब्लैक होल:</strong> ये अपने अक्ष पर घूर्णन करते हैं लेकिन विद्युत आवेश नहीं होता।
              <br />(2. Kerr Black Holes: They rotate on their axis but have no electric charge.)
            </li>
            <li>
              3. <strong>आवेशित ब्लैक होल:</strong> इनमें विद्युत आवेश होता है।
              <br />(3. Charged Black Holes: They have electric charge.)
            </li>
            <li>
              4. <strong>रिसकर ब्लैक होल:</strong> ये अपने अक्ष पर घूर्णन नहीं करते।
              <br />(4. Reissner Black Holes: They do not rotate on their axis.)
            </li>
            <li>
              5. <strong>न्यूमैन ब्लैक होल:</strong> ये अपने अक्ष पर घूर्णन करते हैं और विद्युत आवेश भी होता है।
              <br />(5. Newman Black Holes: They rotate on their axis and also have electric charge.)
            </li>
          </ul>
        </section>

        {/* Additional Notes */}
        <section className="mb-8">
          <h2 className="text-3xl font-semibold text-gray-800 mb-4">
            नोट: (Note:)
          </h2>
          <p className="text-lg text-gray-700">
            ब्लैक होल का अध्ययन वैज्ञानिकों के लिए एक चुनौती है, लेकिन यह ब्रह्मांड के गूढ़ रहस्यों को समझने में मदद करता है।
          </p>
          <p className="text-lg text-gray-700">
            The study of black holes presents challenges for scientists but helps in understanding the mysteries of the universe.
          </p>
        </section>

        {/* Navigation Buttons */}
        <div className="flex justify-between mt-8">
          <Link to="/stars" className="bg-gray-800 text-white px-4 py-2 rounded hover:bg-gray-700">
            Previous / पिछले
          </Link>
          <Link to="/celestial-objects" className="bg-gray-800 text-white px-4 py-2 rounded hover:bg-gray-700">
            Next / अगला
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BlackHole;
