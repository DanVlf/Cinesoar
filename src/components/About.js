import React from "react";

const About = () => {
  return (
    <section
      id="about"
      className="bg-white py-24 px-6 md:px-20 text-gray-800 relative"
    >
      {/* Jemné stínování pozadí pro lepší viditelnost */}
      <div className="absolute inset-0 bg-gradient-to-r from-gray-50 via-gray-100 to-gray-200 opacity-70"></div>

      <div className="relative z-10 max-w-7xl mx-auto flex flex-col md:flex-row gap-12 items-center justify-center md:justify-between">
        {/* Obrázková část */}
        <div className="w-full md:w-1/3 relative">
          <img
            src="/dron.jpeg"
            alt="Dron v akci"
            className="w-full h-full object-cover rounded-2xl shadow-xl transform transition-all duration-300 hover:scale-105"
          />
        </div>

        {/* Textová část */}
        <div className="text-center md:text-left max-w-xl mx-auto md:mx-0">
          <h1 className="text-3xl md:text-4xl font-bold mb-6 tracking-tight leading-tight text-gray-900 drop-shadow-xl">
            KDO JSME?
          </h1>
          <p className="text-base md:text-lg leading-relaxed mb-5 opacity-90 drop-shadow-lg">
            Jsme tým nadšenců, kteří propojují technologie, umění a dobrodružství.
            Každý z nás má své jedinečné dovednosti a všichni se spojujeme v touze
            zachytit ty nejkrásnější záběry.
          </p>
          <p className="text-base text-gray-600 mb-6 drop-shadow-sm">
            Naší misí je přinášet nezapomenutelné zážitky s precizně zpracovanými
            vizuály, které vám umožní vidět svět z úplně nové perspektivy.
          </p>
          <p className="text-sm italic text-gray-500 drop-shadow-sm">
            „Nehledáme jen krásné záběry. Hledáme emoce, které s nimi přicházejí.“
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
