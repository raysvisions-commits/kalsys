import Link from "next/link";

const categories = [
  {
    title: "Bromsar",
    videos: [
      {
        id: "broms-alla-delar",
        title: "Fullständig genomgång av bromsens alla delar",
        description: "Lär dig om frambroms, bakbroms och alla komponenter.",
      },
      {
        id: "fram-broms",
        title: "Frambroms",
        description: "Detaljerad guide till justering och underhåll av frambromsen.",
      },
      {
        id: "bak-broms",
        title: "Bakbroms",
        description: "Hur du byter, justerar och kontrollerar bakbromsen.",
      },
    ],
  },
  {
    title: "Växlar",
    videos: [
      {
        id: "vaxlar",
        title: "Fullständig genomgång av växelsystemet",
        description: "Lär dig om fram- och bakväxlar samt hur de synkroniseras.",
      },
      {
        id: "fram-vaxel",
        title: "Framväxel",
        description: "Justering, rengöring och felsökning av framväxeln.",
      },
      {
        id: "bak-vaxel",
        title: "Bakväxel",
        description: "Tips och tricks för bakväxeln, inklusive kabeljustering.",
      },
    ],
  },
  {
    title: "Kedja & Drivlina",
    videos: [
      {
        id: "kedja",
        title: "Fullständig genomgång av kedjan",
        description: "Hur du rengör, smörjer och byter kedjan korrekt.",
      },
      {
        id: "drev",
        title: "Fram- och bakdrev",
        description: "Kontroll, underhåll och byte av drev.",
      },
    ],
  },
  {
    title: "Hjul & Däck",
    videos: [
      {
        id: "fram-hjul",
        title: "Framhjul",
        description: "Montering, balansering och underhåll.",
      },
      {
        id: "bak-hjul",
        title: "Bakhjul",
        description: "Lär dig att justera och underhålla bakhjulet.",
      },
      {
        id: "dack-slangar",
        title: "Däck & Slangar",
        description: "Byte av däck, slang och tips för punktering.",
      },
    ],
  },
];

export default function EducationLibrary() {
  return (
    <div className="w-full">
      <main className="max-w-3xl mx-auto px-6 py-10 space-y-12">
        <h1 className="text-2xl font-semibold text-gray-900 text-center mb-6">
          Utbildning & Videoguider
        </h1>

        <p className="text-gray-600 text-center mb-8">
          Klicka på en video för att se fullständig guide och instruktion.
        </p>

        {categories.map((category) => (
          <section key={category.title} className="space-y-4">
            <h2 className="text-xl font-semibold text-gray-800">{category.title}</h2>
            <div className="flex flex-col space-y-4">
              {category.videos.map((video) => (
                <Link
                  key={video.id}
                  href={`/utbildning/${video.id}`}
                  className="block border rounded-lg p-4 bg-white shadow-sm hover:shadow-md transition"
                >
                  <h3 className="font-medium text-gray-900 mb-1">{video.title}</h3>
                  <p className="text-gray-600 text-sm">{video.description}</p>
                </Link>
              ))}
            </div>
          </section>
        ))}
      </main>
    </div>
  );
}
