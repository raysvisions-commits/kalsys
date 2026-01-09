export default function ContactPage() {
  return (
    <div className="w-full">
      <main className=" mx-auto flex flex-col gap-6">
        <h1 className="text-2xl font-semibold text-gray-900">
          Kontakta oss
        </h1>

        <p className="text-gray-600">
          Har du en fråga eller behöver du hjälp med din cykel?
          Du kan skicka en förfrågan via formuläret nedan
        </p>

        {/* Contact details */}
        <div className="space-y-2 text-gray-700">
          <p>
            <strong>Email:</strong>{" "}
            <a href="mailto:info@cycklarimalmo.se" className="text-blue-600">
              info@cycklarimalmo.se
            </a>
          </p>
          <p>
            <strong>Telefon i mån av tid:</strong> 070-123 45 67
          </p>
          <p>
            <strong>Plats:</strong> Malmö, Sverige
          </p>
        </div>

        {/* Contact form */}
        <form className="mt-6 space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Name
            </label>
            <input
              type="text"
              className="mt-1 w-full rounded border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Your name"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              type="email"
              className="mt-1 w-full rounded border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="you@example.com"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Meddelande
            </label>
            <textarea
              rows={4}
              className="mt-1 w-full rounded border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="How can we help you?"
            />
          </div>

          <button
            type="submit"
            className="mt-4 rounded bg-blue-600 px-6 py-2 text-white font-medium hover:bg-blue-700 transition"
          >
            Skicka meddelande
          </button>
        </form>
      </main>
    </div>
  );
}
