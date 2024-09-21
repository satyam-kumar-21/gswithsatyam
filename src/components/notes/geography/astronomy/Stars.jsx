import React from 'react';
import { Link } from 'react-router-dom';

const Stars = () => {
  return (
    <div className="bg-gray-50 min-h-screen p-1 md:p-8">
      <div className="max-w-4xl mx-auto bg-white p-1 md:p-8 rounded-lg shadow-md">
        <h1 className="text-4xl font-extrabold text-gray-900 mb-6">
          Stars / तारे
        </h1>

        {/* Definition of Stars */}
        <section className="mb-8">
          <h2 className="text-3xl font-semibold text-gray-800 mb-4">
            Definition of Stars / तारे की परिभाषा
          </h2>

          <h3 className="text-xl font-semibold text-gray-800 mb-2">
            1. Example of Celestial Body / आकाशीय पिंड का उदाहरण
          </h3>
          <p className="text-lg text-gray-700 mb-4">
            Stars are celestial bodies that shine brightly in the night sky. / तारे आकाश में चमकने वाले पिंड होते हैं।
          </p>

          <h3 className="text-xl font-semibold text-gray-800 mb-2">
            2. Self-Emitting Light / स्वंय का अपना प्रकाश होता है
          </h3>
          <p className="text-lg text-gray-700 mb-4">
            Stars emit their own light due to nuclear fusion processes in their cores. / तारे अपने कोर में नाभिकीय संलयन की प्रक्रियाओं के कारण अपनी रोशनी खुद उत्पन्न करते हैं।
          </p>

          <h3 className="text-xl font-semibold text-gray-800 mb-2">
            3. Self-Contained Energy / स्वंय की अपनी ऊर्जा है
          </h3>
          <p className="text-lg text-gray-700 mb-4">
            Stars have their own energy produced from nuclear reactions, mainly converting hydrogen to helium. / तारों में अपनी ऊर्जा होती है जो मुख्य रूप से हाइड्रोजन से हीलियम में परिवर्तन के कारण उत्पन्न होती है।
          </p>

          <h3 className="text-xl font-semibold text-gray-800 mb-2">
            4. In a State of Motion / गति की अवस्था में हैं
          </h3>
          <p className="text-lg text-gray-700 mb-4">
            Stars are in constant motion within galaxies. This can be divided into two types: <br />
            - Rotation / घूर्णन: Stars rotate around their axes. / तारे अपनी धुरी पर घूमते हैं। <br />
            - Revolution / परिक्रमण: Stars revolve around the center of their galaxy. / तारे अपनी आकाशगंगा के केंद्र के चारों ओर परिक्रमा करते हैं।
          </p>
        </section>

        {/* Details of Motion */}
        <section className="mb-8">
          <h2 className="text-3xl font-semibold text-gray-800 mb-4">
            Details of Motion / गति का विवरण
          </h2>
          <p className="text-lg text-gray-700 mb-4">
            - Rotation: Stars rotate around their own axes like a top, maintaining their state. / घूर्णन: तारे अपनी धुरी पर घूमते हैं जैसे एक लट्टू। <br />
            - Revolution: Stars revolve around the center of the galaxy, similar to how planets orbit a star. / परिक्रमण: तारे अपनी आकाशगंगा के केंद्र के चारों ओर परिक्रमा करते हैं।
          </p>
        </section>

        {/* Consequences of Motion */}
        <section className="mb-8">
          <h2 className="text-3xl font-semibold text-gray-800 mb-4">
            Consequences of Motion / गति के परिणाम
          </h2>
          <p className="text-lg text-gray-700 mb-4">
            If stars stop rotating, they cannot maintain their state and may collide with other celestial bodies or get destroyed. / यदि तारे घूमना बंद कर देते हैं, तो वे अपनी स्थिति बनाए नहीं रख सकते और अन्य तारे या आकाशीय पिंडों से टकरा सकते हैं।
          </p>
        </section>

        {/* Formation of Stars */}
        <section className="mb-8">
  <h2 className="text-3xl font-semibold text-gray-800 mb-4">
    Life Cycle of Stars / तारों का जीवन चक्र
  </h2>

  <img 
    src="https://www.shalom-education.com/wp-content/uploads/2021/05/image-41.png" 
    alt="Life Cycle of Stars"
    className="w-full h-auto rounded-lg mb-4"
  />
  <p className="text-lg text-gray-700 mb-4">
    The life cycle of stars includes various stages such as nebula, main sequence, red giant, and finally, either a supernova or a white dwarf, depending on their mass. / तारों का जीवन चक्र कई चरणों में विभाजित होता है जैसे नेबुला, मुख्य अनुक्रम, लाल विशाल, और अंततः, या तो सुपरनोवा या सफेद बौना, उनके द्रव्यमान के आधार पर।
  </p>

  {/* Notes Section */}
  <h3 className="text-2xl font-semibold text-gray-800 mb-2">
    Notes / नोट्स
  </h3>
  <ul className="list-disc pl-6 text-lg text-gray-700 space-y-2">
    <li>
      If a star is less than the Chandrasekhar limit, it is classified as an average star. If it is greater, it is considered a massive star. / यदि कोई तारा चंद्रशेखर सीमा से कम है, तो इसे औसत तारा माना जाता है। यदि यह अधिक है, तो इसे विशाल तारा माना जाता है।
    </li>
    <li>
      A white dwarf is also referred to as a "jivashm tara" (living fossil star). / सफेद बौने को "जीवाश्म तारा" भी कहा जाता है।
    </li>
    <li>
      A supernova is known as "visfotak tara" (explosive star) and "abhinav tara". / सुपरनोवा को "विस्फोटक तारा" और "अभिनव तारा" कहा जाता है।
    </li>
    <li>
      Stars contain fuel in the form of plasma, with temperatures reaching around 6000 degrees Celsius. / तारों में प्लाज्मा के रूप में ईंधन होता है, जिसका तापमान लगभग 6000 डिग्री सेल्सियस तक पहुँचता है।
    </li>
  </ul>
</section>


        {/* Chandrashekhar Seema */}
        <section className="mb-8">
          <h2 className="text-3xl font-semibold text-gray-800 mb-4">
            Chandrashekhar Limit / चंद्रशेखर सीमा
          </h2>
          <p className="text-lg text-gray-700 mb-4">
            If a star's mass is more than 1.44 times that of the Sun, it will become a black hole. Smaller stars will become neutron stars. / यदि किसी तारे का आकार सूर्य के आकार से 1.44 गुना बड़ा है, तो वह ब्लैक होल बन जाएगा। छोटे तारे न्यूट्रॉन तारे बनेंगे।
          </p>
        </section>

        {/* Navigation Buttons */}
        <div className="flex justify-between mt-8">
          <Link to="/galaxies" className="bg-gray-800 text-white px-4 py-2 rounded hover:bg-gray-700">
            Previous / पिछले
          </Link>
          <Link to="/black-holes" className="bg-gray-800 text-white px-4 py-2 rounded hover:bg-gray-700">
            Next / अगला
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Stars;
