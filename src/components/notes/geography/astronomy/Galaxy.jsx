import React from 'react';
import { Link } from 'react-router-dom';

const Galaxy = () => {
  return (
    <div className="bg-gray-50 min-h-screen p-1 md:p-8">
      <div className="max-w-4xl mx-auto bg-white p-1 md:p-8 rounded-lg shadow-md">
        {/* Explanation of Galaxy */}
        <section className="mb-8">
          <h2 className="text-3xl font-semibold text-gray-800 mb-4">
            आकाशगंगा क्या है? (What is a galaxy?)
          </h2>
          <p className="text-lg text-gray-700 mb-4">
            आकाशगंगा, यानी गैलेक्सी, तारों का समूह होता है। ये तारे एक स्थल (स्पेस) में एक साथ मिलकर घूमते हैं। ये समूह आकाशगंगा के केंद्र, जिसे ब्लैक होल कहा जाता है, के चारों ओर परिक्रमा करते हैं। ऐसा माना जाता है कि बिग बैंग विस्फोट के 500 मिलियन वर्ष बाद पहली आकाशगंगा का निर्माण हुआ था।
          </p>
          <p className="text-lg text-gray-700 mb-4">
            A galaxy is a collection of stars that orbit together in a space. These stars revolve around a central point called a black hole. It is believed that the first galaxy was formed about 500 million years after the Big Bang explosion.
          </p>
        </section>

        <h1 className="text-4xl font-extrabold text-gray-900 mb-6">
          आकाशगंगा की बनावट या संरचना (Structure of a galaxy)
        </h1>

        {/* Image Section */}
        <div className="mb-8">
          <img 
            src="https://media-cldnry.s-nbcnews.com/image/upload/t_fit-1500w,f_auto,q_auto:best/msnbc/Components/Photos/060227/060227_milkyway_hlg_10a.jpg" 
            alt="Galaxy" 
            className="w-full h-auto rounded-lg"
          />
        </div>

        {/* Points about Galaxy Structure */}
        <section className="mb-8">
          <ul className="list-disc pl-6 space-y-2 text-lg text-gray-700">
            <li>1. पहली घूर्णना भुजा में समाहित पुराने तारे पाए जाते हैं। (Old stars are found in the first rotation arm.)</li>
            <li>2. दूसरी घूर्णन भुजा में युवा तारे पाए जाते हैं। हमारा सूरज भी दूसरी घूर्णना भुजा में है। (Young stars are found in the second rotation arm. Our Sun is also in this arm.)</li>
            <li>3. तीसरी घूर्णन भुजा में नए या भ्रूण तारे पाए जाते हैं। (New or protostars are found in the third rotation arm.)</li>
          </ul>
        </section>

        {/* Types of Galaxies */}
        <section className="mb-8">
          <h2 className="text-3xl font-semibold text-gray-800 mb-4">
            आकाशगंगा के प्रकार (Types of galaxies)
          </h2>
          <ul className="list-disc pl-6 space-y-4 text-lg text-gray-700">
            <li>
              1. <strong>दीर्घ वृत्ताकार:</strong> पुराने तथा छोटे तारे। <br />
              रंग: पीला-लाल। <br />
              उदाहरण: एंड्रोमेडा। <br />
              (1. Elliptical: Old and small stars. Color: Yellow-red. Example: Andromeda.)
            </li>
            <li>
              2. <strong>सर्पिलाकार (Spiral) आकाशगंगा:</strong> युवा तारे भुजाओं पर तथा केंद्र के आसपास पुराने तारे। <br />
              रंग: भुजाए नीले रंग का तथा केंद्र लाल रंग का। <br />
              उदाहरण: वीयारफुल गैलेक्सी। <br />
              (2. Spiral Galaxy: Young stars on the arms and old stars around the center. Color: Blue arms and red center. Example: Viyarfull Galaxy.)
            </li>
            <li>
              3. <strong>विशाल सर्पिलाकार (Barred) गैलेक्सी:</strong> तारे अत्यधिक युवा होते हैं। <br />
              रंग: चमकीला नीला। <br />
              उदाहरण: मिल्की वे (मंदाकिनी)। <br />
              (3. Barred Spiral Galaxy: Stars are very young. Color: Bright blue. Example: Milky Way.)
            </li>
            <li>
              4. <strong>अनियमित आकार:</strong> इसका कोई आकार नहीं होता। इसमें नए तथा पुराने तारे शामिल होते हैं। <br />
              रंग: कोई विशेष रंग नहीं होता। <br />
              उदाहरण: LMC1 (लार्ज मैगेलैनिक क्लाउड), SMC2 (स्मॉल मैगेलैनिक क्लाउड)। <br />
              (4. Irregular Shape: No specific shape. Contains both new and old stars. Color: No special color. Example: LMC1, SMC2.)
            </li>
          </ul>
        </section>

        {/* Additional Notes */}
        <section className="mb-8">
          <h2 className="text-3xl font-semibold text-gray-800 mb-4">
            नोट: (Note:)
          </h2>
          <p className="text-lg text-gray-700">
            हाल ही में NASA ने फिनिक्स नामक आकाशगंगा को ढूंढा है। यह अभी तक ज्ञात सारे आकाशगंगाओं में सबसे बड़ी आकाशगंगा है। इसे "मदर ऑफ गैलेक्सी" का नाम दिया गया है।
          </p>
          <p className="text-lg text-gray-700">
            Recently, NASA discovered a galaxy named Phoenix. It is currently the largest known galaxy among all galaxies, referred to as the "Mother of Galaxy."
          </p>
        </section>

        {/* Navigation Buttons */}
        <div className="flex justify-between mt-8">
          <Link to="/universe" className="bg-gray-800 text-white px-4 py-2 rounded hover:bg-gray-700">
            Previous / पिछले
          </Link>
          <Link to="/stars" className="bg-gray-800 text-white px-4 py-2 rounded hover:bg-gray-700">
            Next / अगला
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Galaxy;
