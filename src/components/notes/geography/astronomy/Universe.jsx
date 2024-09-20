import React from 'react';
import { Link } from 'react-router-dom';

const Universe = () => {
  return (
    <div className="bg-gray-50 min-h-screen p-1 md:p-8">
      {/* Container for Content */}
      <div className="max-w-4xl mx-auto bg-white p-3 md:p-8 rounded-lg shadow-md">
        <h1 className="text-4xl font-extrabold text-gray-900 mb-6">
          Universe and its Formation (ब्रह्मांड और इसका निर्माण)
        </h1>

        {/* Definition of the Universe */}
        <section className="mb-8">
          <h2 className="text-3xl font-semibold text-gray-800 mb-4">
            What is the Universe? (ब्रह्मांड क्या है?)
          </h2>
          <p className="text-lg text-gray-700 mb-4">
            The universe encompasses everything that is visible and invisible. It is created by combining various types of celestial bodies, galaxies, matter, and energy. In essence, the universe includes all forms of matter and energy, existing in space and time.
          </p>
          <p className="text-lg text-gray-700">
            ब्रह्मांड में जो कुछ भी दृश्य और अदृश्य है, वह सब कुछ शामिल है। यह विभिन्न प्रकार के आकाशीय पिंडों, आकाशगंगाओं, पदार्थ और ऊर्जा को मिलाकर बनाया गया है। संक्षेप में, ब्रह्मांड में सभी प्रकार की पदार्थ और ऊर्जा शामिल हैं, जो स्थान और समय में विद्यमान हैं।
          </p>
        </section>

        {/* Formation of the Universe */}
        <section className="mb-8">
          <h2 className="text-3xl font-semibold text-gray-800 mb-4">
            Formation of the Universe (ब्रह्मांड का निर्माण)
          </h2>
          <p className="text-lg text-gray-700 mb-4">
            The most widely accepted theory of the universe's formation is the Big Bang Theory. According to this theory, the universe began as a singularity around 13.8 billion years ago. This singularity had extremely high density and gravitational attraction. Due to the intense density, the matter was compressed between the forces and wanted to expand outward, which caused a massive explosion. This explosion released the matter in the form of dust and rocks, leading to the formation of the universe as we know it today.
          </p>
          <p className="text-lg text-gray-700">
            ब्रह्मांड के निर्माण का सबसे स्वीकृत सिद्धांत बिग बैंग थ्योरी है। इस सिद्धांत के अनुसार, ब्रह्मांड लगभग 13.8 अरब साल पहले एक सिंगुलैरिटी के रूप में शुरू हुआ। इस सिंगुलैरिटी का गुरुत्वाकर्षण और घनत्व अत्यधिक था। घनत्व के कारण, पदार्थ बलों के बीच संकुचित था और बाहर की ओर फैलने की कोशिश कर रहा था, जिससे एक विशाल विस्फोट हुआ। इस विस्फोट से पदार्थ धूल और चट्टानों के रूप में बाहर निकल गया, और इसके परिणामस्वरूप आज हम जो ब्रह्मांड देखते हैं, उसका निर्माण हुआ।
          </p>
        </section>

        {/* Additional Notes */}
        <section className="mt-8 p-4 md:p-6 bg-white rounded-lg shadow-md">
          <h2 className="text-3xl font-semibold text-gray-800 mb-4">
            Additional Notes (अतिरिक्त नोट्स)
          </h2>
          <div className="space-y-4">
            {/* Note 1 */}
            <div>
              <p className="text-lg text-gray-700">
                1. <strong>Hubble observed two galaxies moving away from each other using his telescope.</strong> This observation led to the conclusion that the impact of the Big Bang is still observable, causing the universe to continue expanding.
              </p>
              <p className="text-lg text-gray-700">
                1. <strong>हबल नामक वैज्ञानिक ने अपनी दूरबीन से दो आकाशगंगाएँ देखीं जो एक-दूसरे से दूर जा रही थीं।</strong> इससे कहा गया कि ब्रह्मांड में उस महाविस्फोट का प्रभाव अब भी है, जिससे ब्रह्मांड फैल रहा है।
              </p>
            </div>

            {/* Note 2 */}
            <div>
              <p className="text-lg text-gray-700">
                2. <strong>Approximately 100 million years after the universe's origin, the first stars were formed.</strong>
              </p>
              <p className="text-lg text-gray-700">
                2. <strong>ब्रह्मांड की उत्पत्ति के लगभग 100 मिलियन साल बाद, पहले तारे बने।</strong>
              </p>
            </div>

            {/* Note 3 */}
            <div>
              <p className="text-lg text-gray-700">
                3. <strong>500 million years after the universe's origin, the first galaxies were formed.</strong>
              </p>
              <p className="text-lg text-gray-700">
                3. <strong>ब्रह्मांड की उत्पत्ति के 500 मिलियन साल बाद, पहली आकाशगंगाएँ बनीं।</strong>
              </p>
            </div>

            {/* Note 4 */}
            <div>
              <p className="text-lg text-gray-700">
                4. <strong>About 4 billion years after the universe's origin, stars were forming at a very rapid rate.</strong>
              </p>
              <p className="text-lg text-gray-700">
                4. <strong>लगभग 4 बिलियन साल बाद, तारे बहुत तेजी से बन रहे थे।</strong>
              </p>
            </div>
          </div>
        </section>

        {/* Evidence of the Big Bang */}
        <section className="mb-8 mt-8">
          <h2 className="text-3xl font-semibold text-gray-800 mb-4">
            Evidence of the Big Bang Theory (बिग बैंग थ्योरी के प्रमाण)
          </h2>
          <h3 className="text-2xl font-semibold text-gray-800 mb-4">
            Redshift Phenomenon (रेडशिफ्ट की घटना)
          </h3>
          <p className="text-lg text-gray-700 mb-4">
            One of the key pieces of evidence supporting the Big Bang Theory is the phenomenon of redshift. Redshift occurs when light from distant objects shifts to longer, redder wavelengths as it moves away from us. This shift indicates that the universe is expanding, as the space between celestial objects is stretching.
          </p>
          <p className="text-lg text-gray-700">
            बिग बैंग थ्योरी का समर्थन करने वाले मुख्य प्रमाणों में से एक रेडशिफ्ट की घटना है। रेडशिफ्ट तब होती है जब दूरस्थ वस्तुओं से आने वाला प्रकाश हमारे से दूर जाते समय लंबी, लालतर तरंगदैर्ध्य में बदल जाता है। यह बदलाव दर्शाता है कि ब्रह्मांड फैल रहा है, क्योंकि आकाशीय वस्तुओं के बीच की जगह फैल रही है।
          </p>
        </section>


        <div className="flex justify-between mt-8">
          <Link to="/geography" className="bg-gray-800 text-white px-4 py-2 rounded hover:bg-gray-700">
            Previous / पिछले
          </Link>
          <Link to="/galaxies" className="bg-gray-800 text-white px-4 py-2 rounded hover:bg-gray-700">
            Next / अगला
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Universe;
