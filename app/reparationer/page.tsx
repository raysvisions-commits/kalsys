export default function ServicesPage() {
  return (
    <div className="w-full">
      <main className="max-w-3xl mx-auto px-6 py-10">
        <h1 className="text-2xl font-semibold text-gray-900 mb-6">
          Reparationer & Service
        </h1>

        <p className="text-gray-600 mb-8">
          Vi erbjuder professionell cykelservice i Malmö.  
          Priserna gäller arbete – reservdelar tillkommer vid behov.
        </p>

        {/* Services list */}
        <div className="space-y-4">
          <ServiceItem
            title="Felsökning – hel cykel"
            price="300 SEK"
            description="Grundlig genomgång av hela cykeln för att identifiera problem."
          />

          <ServiceItem
            title="Bromsbyte"
            price="200 SEK / broms"
            description="Byte och justering av bromsar för säker körning."
          />

          <ServiceItem
            title="Växelreparation – hel cykel"
            price="400 SEK"
            description="Justering och reparation av växelsystemet."
          />
        </div>

        {/* Footer note */}
        <p className="text-sm text-gray-500 mt-10">
          Kontakta oss om du är osäker på vilken service du behöver.
        </p>
      </main>
    </div>
  );
}

/* Reusable component */
function ServiceItem({
  title,
  price,
  description,
}: {
  title: string;
  price: string;
  description: string;
}) {
  return (
    <div className="flex justify-between items-start border rounded-lg p-4 bg-white shadow-sm">
      <div>
        <h2 className="font-medium text-gray-900">{title}</h2>
        <p className="text-sm text-gray-600 mt-1">{description}</p>
      </div>

      <div className="font-semibold text-gray-900 whitespace-nowrap">
        {price}
      </div>
    </div>
  );
}
