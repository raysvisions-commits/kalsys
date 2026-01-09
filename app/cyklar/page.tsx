import BikeCard from "./components/BikeCard";

interface Bike {
  id: string;
  name: string;
  price: string;
  image: string;
}

const bikes: Bike[] = [
  { id: "1", name: "Mountain Bike", price: "$1,200", image: "/bikes/bike1.jpg" },
  { id: "2", name: "Road Bike", price: "$1,500", image: "/bikes/bike2.jpg" },
  { id: "3", name: "Electric Bike", price: "$2,300", image: "/bikes/bike3.jpg" },
  { id: "4", name: "City Bike", price: "$900", image: "/bikes/bike4.jpg" },
];

export default function BikesPage() {
  return (
    <main className="w-full max-w-6xl mx-auto px-6 py-12">
      <h1 className="text-3xl font-semibold text-gray-900 mb-10 text-center">
        Våra cyklar
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {bikes.map((bike) => (
          <BikeCard key={bike.id} bike={bike} />
        ))}
      </div>
    </main>
  );
}
