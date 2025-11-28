export const metadata = {
  title: "About Mx-Store",
};

import Link from 'next/link';
import AboutHero from '../components/AboutHero';
import Back from '../components/Back';

export default function About() {
  return (
    <main className="min-h-screen bg-amber-50">
      <Back />
      <AboutHero />

      {/* Features Section */}
      <section className="py-16 bg-linear-to-br to-black via-black/90 from-black/80">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-amber-100 mb-12">Why Choose MX?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl">🌳</span>
              </div>
              <h3 className="text-xl font-semibold mb-4">Premium Quality Materials
              </h3>
              <p className="text-gray-200">
                We use high-grade, carefully selected wood to ensure strength, durability, and a long-lasting finish that stands the test of time.
              </p>
            </div>
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl">🔨</span>
              </div>
              <h3 className="text-xl font-semibold mb-4">Expert Craftsmanship
              </h3>
              <p className="text-gray-200">
                Our skilled craftsmen deliver precise workmanship, clean detailing, and flawless finishing in every piece we create.
              </p>
            </div>
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl">💎</span>
              </div>
              <h3 className="text-xl font-semibold mb-4">Custom & Unique Designs
              </h3>
              <p className="text-gray-200">

                Every project is tailor-made to match your style and space, whether modern, classic, or luxury.
              </p>
            </div>
          </div>
        </div>
      </section>


      {/* About Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-black mb-6">Our Story</h2>
              <p className="text-gray-700 text-lg mb-6">
                MX Wood Crafts was born from a passion for transforming raw timber into
                breathtaking works of art. For over a decade, we've been crafting
                exceptional wooden decorations that bring warmth and character to spaces.
              </p>
              <p className="text-gray-700 text-lg mb-6">
                Our master craftsmen combine traditional woodworking techniques with
                contemporary design, creating pieces that tell stories and evoke emotions.
                Each creation is a testament to our commitment to quality and sustainability.
              </p>
              <div className="grid grid-cols-2 gap-6 mt-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-black">12+</div>
                  <div className="text-gray-600">Years Experience</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-black">500+</div>
                  <div className="text-gray-600">Projects Completed</div>
                </div>
              </div>
            </div>
            <div className="relative h-96 rounded-lg overflow-hidden shadow-2xl">
              <img
                src="/hero.jpg"
                alt="Woodworking workshop"

                className="w-full h-full"
              />
            </div>
          </div>
        </div>
      </section>




      {/* CTA Section */}
      <section className="py-16 bg-linear-to-tl to-black via-black/90 from-black/80 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Transform Your Space?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Let us bring the beauty of natural wood into your home or office with our
            custom-designed wooden decorations.
          </p>
          <div className="">
            <Link href="/" className="bg-white text-black px-10 py-3 rounded-lg font-semibold hover:bg-black hover:text-amber-100 transition duration-300">
              Get Started
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}