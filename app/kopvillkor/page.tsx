"use client";

export default function KoperVillkorPage() {
  return (
    <div className="w-full bg-zinc-50 min-h-screen font-sans">
      <main className="max-w-3xl mx-auto px-6 py-12 space-y-6">
        <h1 className="text-3xl font-semibold text-gray-900 text-center mb-4">
          Köpvillkor
        </h1>
        <p className="text-gray-600 text-center mb-8">
          Nedan finner du våra villkor för köp av produkter och tjänster.
        </p>

        <section className="bg-white shadow-sm rounded-lg p-6 space-y-4">
          <h2 className="text-xl font-semibold text-gray-800">1. Allmänt</h2>
          <p className="text-gray-700">
            Genom att handla hos Cyklar i Malmö accepterar du våra köpvillkor. Vi reserverar oss för eventuella tryckfel och prisändringar.
          </p>
        </section>

        <section className="bg-white shadow-sm rounded-lg p-6 space-y-4">
          <h2 className="text-xl font-semibold text-gray-800">2. Beställning</h2>
          <p className="text-gray-700">
            Alla köp sker via möte på plats. Beställningar via hemsidan är endast informationssyfte och visar vårt utbud.
          </p>
        </section>

        <section className="bg-white shadow-sm rounded-lg p-6 space-y-4">
          <h2 className="text-xl font-semibold text-gray-800">3. Betalning</h2>
          <p className="text-gray-700">
            Vi accepterar kontant betalning eller Swish vid upphämtning eller service på plats. Ingen onlinebetalning sker via hemsidan.
          </p>
        </section>

        <section className="bg-white shadow-sm rounded-lg p-6 space-y-4">
          <h2 className="text-xl font-semibold text-gray-800">4. Leverans & upphämtning</h2>
          <p className="text-gray-700">
            Alla produkter levereras eller hämtas på plats i Malmö. Leveranstid och plats avtalas vid beställning.
          </p>
        </section>

        <section className="bg-white shadow-sm rounded-lg p-6 space-y-4">
          <h2 className="text-xl font-semibold text-gray-800">5. Returer & reklamation</h2>
          <p className="text-gray-700">
            Vi accepterar returer endast vid felaktiga eller defekta produkter. Kontakta oss direkt vid problem med köp eller service.
          </p>
        </section>

        <section className="bg-white shadow-sm rounded-lg p-6 space-y-4">
          <h2 className="text-xl font-semibold text-gray-800">6. Ansvar</h2>
          <p className="text-gray-700">
            Vi ansvarar för produkter och tjänster enligt svensk lag. Vi ansvarar inte för indirekta skador eller felanvändning av cyklar och produkter.
          </p>
        </section>

        <section className="bg-white shadow-sm rounded-lg p-6 space-y-4">
          <h2 className="text-xl font-semibold text-gray-800">7. Kontakta oss</h2>
          <p className="text-gray-700">
            Vid frågor om köpvillkoren, vänligen kontakta oss på <a href="mailto:info@cycklarimalmo.se" className="text-blue-600">info@cycklarimalmo.se</a> eller via telefon 070-123 45 67.
          </p>
        </section>
      </main>
    </div>
  );
}
