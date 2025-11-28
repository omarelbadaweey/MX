import Back from '../components/Back';
import DoorsCard from '../components/DoorsCard';
import data from "../data.json";

export const metadata = {
  title: "MX-Store Doors Collection",
  description: "Doors Collection",

};

export default function DoorsPage() {
  const doors = data[0].doors
  return (
    <section className="py-22  bg-white">
      <Back />
      <div className="container mx-auto px-4">
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="inline-block mb-4">
            <span className="text-md font-semibold text-black uppercase tracking-wider bg-amber-100 rounded-4xl py-1 px-3">
              MX Doors Collection
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl  text-black mb-4">
            Elegant Wooden Doors
          </h2>
          <div className="w-24 h-1 bg-amber-100 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Discover our exclusive collection of premium wooden doors crafted with timeless elegance.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-8">
          {doors.map((door) => (
            <DoorsCard key={door.id} door={door} />
          ))}
        </div>

      </div>
    </section>
  );
};