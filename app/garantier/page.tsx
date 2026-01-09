export default function SubscriptionsPage() {
  return (
    <div className="w-full">
      <main className="max-w-5xl mx-auto px-6 py-12">
        <h1 className="text-2xl font-semibold text-gray-900 text-center mb-4">
          Garantier & Prenumerationer
        </h1>

        <p className="text-gray-600 text-center max-w-2xl mx-auto mb-12">
          Välj den prenumeration som passar din cykling bäst.  
          Alla planer ger dig trygg service året runt.
        </p>

        {/* Pricing cards */}
        <div className="grid gap-8 md:grid-cols-3">
          <PricingCard
            title="Bas"
            price="1 200 SEK / år"
            description="För vardagscyklisten"
            features={[
              "Service för vanliga problem",
              "Justering av bromsar och växlar",
              "Säkerhetskontroll",
            ]}
          />

          <PricingCard
            title="Plus"
            price="1 500 SEK / år"
            description="Material ingår"
            features={[
              "Allt i Bas",
              "Material och standardreservdelar ingår",
              "Prioriterad service",
            ]}
          />

          <PricingCard
            title="Pro"
            price="2 500 SEK / år"
            description="Professionell funktion året runt"
            features={[
              "Full cykelservice",
              "2 professionella genomgångar per år",
              "Noggrann funktionskontroll",
              "Maximal livslängd på cykeln",
            ]}
            highlighted
          />
        </div>
      </main>
    </div>
  );
}

/* Vertical pricing card */
function PricingCard({
  title,
  price,
  description,
  features,
  highlighted = false,
}: {
  title: string;
  price: string;
  description: string;
  features: string[];
  highlighted?: boolean;
}) {
  return (
    <div
      className={`flex flex-col border rounded-xl p-6 bg-white shadow-sm transition ${
        highlighted
          ? "border-blue-600 shadow-md scale-[1.02]"
          : "border-gray-200"
      }`}
    >
      <h2 className="text-lg font-semibold text-gray-900 text-center">
        {title}
      </h2>

      <p className="text-center text-gray-500 mt-1">
        {description}
      </p>

      <div className="text-center my-6">
        <span className="text-3xl font-bold text-gray-900">
          {price}
        </span>
      </div>

      <ul className="flex-1 space-y-2 text-gray-700 mb-6">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start gap-2">
            <span className="text-blue-600 font-bold">✓</span>
            <span>{feature}</span>
          </li>
        ))}
      </ul>

      <button
        className={`mt-auto w-full rounded-lg py-2 font-medium transition ${
          highlighted
            ? "bg-blue-600 text-white hover:bg-blue-700"
            : "bg-gray-100 text-gray-900 hover:bg-gray-200"
        }`}
      >
        Välj plan
      </button>
    </div>
  );
}
