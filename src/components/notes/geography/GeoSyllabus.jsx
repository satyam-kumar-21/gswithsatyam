import React from 'react';
import { Link } from 'react-router-dom';

const Syllabus = () => {
  return (
    <div className="bg-gray-50 min-h-screen p-8">
      {/* Introduction to Geography */}
      <section className="mb-12 p-6 bg-white rounded-lg shadow-md">
        <h1 className="text-4xl font-extrabold text-gray-900 mb-4">
          Introduction to Geography (भूगोल का परिचय)
        </h1>
        <p className="text-lg text-gray-700 mb-2">
          Geography is a science that deals with the description and explanation of Earth's surface. The English word "Geography" comes from the Greek words “ge” (earth) and “grapho” (to describe). Thus, geography essentially means the description of the Earth.
        </p>
        <p className="text-lg text-gray-700">
          भूगोल एक ऐसा विज्ञान है जो भूतल (पृथ्वी की सतह) के वर्णन एवं व्याख्या से सम्बंधित है। भूगोल का अंग्रेजी पर्याय ‘Geography’ (ज्योग्राफी) है जिसकी उत्पत्ति यूनानी भाषा के ‘ge’ (जी) और ‘grapho’ (ग्राफो) शब्दों के मिलने से हुई है। ‘ge’ का शाब्दिक अर्थ ‘पृथ्वी’ और ‘ग्राफो’ का शाब्दिक अर्थ ‘वर्णन करना’ होता है। इस प्रकार भूगोल (Geography) का सामान्य अर्थ है- पृथ्वी का वर्णन।
        </p>
        <p className="text-lg text-gray-700 font-bold mt-4">
          Father of Geography (भूगोल के जनक): Eratosthenes (एराटोस्थनीज)
        </p>
      </section>

      {/* Container for Grid Layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        
        {/* World Geography Section */}
        <section className="space-y-8">
          <h1 className="text-4xl font-extrabold text-gray-900 mb-4">
            World Geography (विश्व भूगोल)
          </h1>

          {/* Astronomy */}
          <div>
            <h2 className="text-3xl font-semibold text-gray-800 mb-4">
              Astronomy (खगोलशास्त्र)
            </h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                <Link to="/universe" className="text-blue-600 hover:underline">
                  Universe and its Formation (ब्रह्मांड और इसका निर्माण)
                </Link>
              </li>
              <li>
                <Link to="/galaxies" className="text-blue-600 hover:underline">
                  Galaxies and their Types (आकाशगंगाएँ और उनकी किस्में)
                </Link>
              </li>
              <li>
                <Link to="/stars" className="text-blue-600 hover:underline">
                  Stars and their Life Cycle (तारे और उनका जीवन चक्र)
                </Link>
              </li>
              <li>
                <Link to="/celestial-objects" className="text-blue-600 hover:underline">
                  Pulsar Stars, Neutron Stars, Dwarf Stars, Black Holes, Quasars, etc. (पल्सर तारे, न्यूट्रॉन तारे, लाल ड्वार्फ तारे, कृष्णविवर, क्वासर आदि)
                </Link>
              </li>
              <li>
                <Link to="/solar-system" className="text-blue-600 hover:underline">
                  Solar System (सौरमंडल)
                </Link>
              </li>
              <li>
                <Link to="/solar-system-origin-theory" className="text-blue-600 hover:underline">
                  Origin Theory Of Solar System (सौरमंडल की उत्पत्ति सिद्धांत)
                </Link>
              </li>
              <li>
                <Link to="/sun-structure" className="text-blue-600 hover:underline">
                  Structure of the Sun (सूर्य की बनावट)
                </Link>
              </li>
              <li>
                <Link to="/planets" className="text-blue-600 hover:underline">
                  Planets (ग्रह)
                </Link>
              </li>
              <li>
                <Link to="/satellite" className="text-blue-600 hover:underline">
                Satellite (उपग्रह)
                </Link>
              </li>
              <li>
                <Link to="/eclipse" className="text-blue-600 hover:underline">
                  Eclipses (ग्रहण)
                </Link>
              </li>
              <li>
                <Link to="/solar-system-celestial-objects" className="text-blue-600 hover:underline">
                  Asteroids, Comets, Meteoroids, Auroras (उल्काएँ, धूमकेतु, उल्कापिंड, आरोरा)
                </Link>
              </li>
            </ul>
          </div>

          {/* Physical Geography */}
          <div>
            <h2 className="text-3xl font-semibold text-gray-800 mb-4">
              Physical Geography (भौतिक भूगोल)
            </h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                <Link to="/geomorphology" className="text-blue-600 hover:underline">
                  Geomorphology (भूआकृति विज्ञान)
                </Link>
              </li>
              <li>
                <Link to="/climatology" className="text-blue-600 hover:underline">
                  Climatology (जलवायु विज्ञान)
                </Link>
              </li>
              <li>
                <Link to="/oceanography" className="text-blue-600 hover:underline">
                  Oceanography (सागर विज्ञान)
                </Link>
              </li>
              <li>
                <Link to="/biogeography" className="text-blue-600 hover:underline">
                  Biogeography (जीव/जैव भूगोल)
                </Link>
              </li>
            </ul>
          </div>
        </section>

        {/* Indian Geography Section */}
        <section className="space-y-8">
          <h1 className="text-4xl font-extrabold text-gray-900 mb-4">
            Indian Geography (भारतीय भूगोल)
          </h1>
          
          <div>
            <h2 className="text-3xl font-semibold text-gray-800 mb-4">
              Indian Geography Syllabus (भारतीय भूगोल पाठ्यक्रम)
            </h2>
            <p className="text-lg text-gray-700 mb-4">
              This section includes detailed information about the geographical aspects of India, covering its physical features, climate, resources, and regions.
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                <a href="#physical-features" className="text-blue-600 hover:underline">
                  Physical Features (भौतिक विशेषताएँ)
                </a>
              </li>
              <li>
                <a href="#climate" className="text-blue-600 hover:underline">
                  Climate (जलवायु)
                </a>
              </li>
              <li>
                <a href="#resources" className="text-blue-600 hover:underline">
                  Natural Resources (प्राकृतिक संसाधन)
                </a>
              </li>
              <li>
                <a href="#regional-geography" className="text-blue-600 hover:underline">
                  Regional Geography (क्षेत्रीय भूगोल)
                </a>
              </li>
            </ul>
          </div>
        </section>
      </div>

      {/* Detailed Breakdown with Definitions */}
      <section className="mt-12 space-y-12">
        <h2 className="text-3xl font-semibold text-gray-800 mb-6">Definitions of types of physical geography (भौतिक भूगोल के प्रकारों की परिभाषाएँ)</h2>
        
        <div id="landforms" className="p-6 bg-white rounded-lg shadow-md">
          <h3 className="text-2xl font-semibold text-gray-800 mb-4">Landforms Science (भूआकृति विज्ञान)</h3>
          <p className="text-lg text-gray-700 mb-2">
            Study of the physical features of the Earth’s surface, including mountains, valleys, and plains.
          </p>
          <p className="text-lg text-gray-700">
            पृथ्वी की सतह के भौतिक लक्षणों का अध्ययन, जिसमें पहाड़, घाटियाँ, और मैदान शामिल हैं।
          </p>
        </div>
        <div id="climatology" className="p-6 bg-white rounded-lg shadow-md">
          <h3 className="text-2xl font-semibold text-gray-800 mb-4">Climatology (जलवायु विज्ञान)</h3>
          <p className="text-lg text-gray-700 mb-2">
            Study of climates and their variations, including weather patterns and climatic zones.
          </p>
          <p className="text-lg text-gray-700">
            जलवायु और उनके परिवर्तनों का अध्ययन, जिसमें मौसम के पैटर्न और जलवायु क्षेत्र शामिल हैं।
          </p>
        </div>
        <div id="oceanography" className="p-6 bg-white rounded-lg shadow-md">
          <h3 className="text-2xl font-semibold text-gray-800 mb-4">Oceanography (सागर विज्ञान)</h3>
          <p className="text-lg text-gray-700 mb-2">
            Study of the oceans, including their physical properties, marine life, and ecosystems.
          </p>
          <p className="text-lg text-gray-700">
            सागरों का अध्ययन, जिसमें उनके भौतिक गुण, समुद्री जीवन और पारिस्थितिक तंत्र शामिल हैं।
          </p>
        </div>
        <div id="biogeography" className="p-6 bg-white rounded-lg shadow-md">
          <h3 className="text-2xl font-semibold text-gray-800 mb-4">Biogeography (जीव/जैव भूगोल)</h3>
          <p className="text-lg text-gray-700 mb-2">
            Study of the distribution of living organisms and their relationship to the environment.
          </p>
          <p className="text-lg text-gray-700">
            जीवित प्राणियों का वितरण और उनके पर्यावरण से संबंधित अध्ययन।
          </p>
        </div>
      </section>
    </div>
  );
};

export default Syllabus;
