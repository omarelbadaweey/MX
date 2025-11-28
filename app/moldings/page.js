import Back from '../components/Back';
import MoldingsCard from '../components/MoldingsCard';
import data from "../data.json";

export const metadata = {
  title: "MX-Store Moldings Collection",
  description: "Moldings Collection",

};

export default function MoldingsPage() {
  const moldings = data[1].moldings
  return (
    <section className="py-22 bg-white">
      <Back />
      <div className="container mx-auto px-4">
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="inline-block mb-4">
            <span className="text-md font-semibold text-black uppercase tracking-wider bg-amber-100 rounded-4xl py-1 px-3">
              MX moldings Collection
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl  text-black mb-4">
            Modern Stunning moldings
          </h2>
          <div className="w-24 h-1 bg-amber-100 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Explore our stylish, high-quality moldings designed for lasting performance.
          </p>
        </div>

        {/* doors Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-8">
          {moldings.map((molding) => (
            <MoldingsCard key={molding.id} molding={molding} />
          ))}
        </div>

      </div>
    </section>
  );
};