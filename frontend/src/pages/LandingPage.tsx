import { Link } from "react-router-dom";

export function LandingPage() {
  return (
    <div className="h-vh bg-[#0F172A] text-white flex flex-col items-center justify-center pt-6">
      <header className="w-full flex justify-between items-center mb-12 border-b border-slate-800">
        <div className="flex items-center gap-2 text-xl font-semibold mb-6 ml-6">
          <img src="/images/logo.png" alt="Logo" className="h-10" />
        </div>
        <div className="flex gap-3 mb-6 mr-6">
          <button className="px-4 py-2 border border-gray-500 rounded-xl text-sm">
            S’inscrire
          </button>
          <button className="px-4 py-2 bg-white text-black rounded-xl text-sm font-medium">
            <Link to="/login">Se connecter</Link>
          </button>
        </div>
      </header>

      <main className="flex flex-col lg:flex-row items-center justify-between max-w-6xl w-full h-full mt-30">
        <div className="text-left max-w-lg flex flex-col h-full justify-center">
          <h1 className="text-5xl font-extrabold mb-4 leading-tight">
            Relier les <span className="text-blue-300">Générations</span>,<br />
            Enrichir les Vies.
          </h1>
          <p className="text-gray-400 mb-8">
            Neighborly s’attache à favoriser des relations significatives et à
            fournir des ressources précieuses aux personnes âgées et à leurs
            familles.
          </p>
          <button className="bg-primary hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium w-50">
            Démarrer
          </button>
        </div>

        <div className="mt-12 lg:mt-0 lg:ml-12 rounded-2xl overflow-hidden border border-slate-600 shadow-xl">
          <img
            src="/images/landing-illustration.jpg"
            alt="Personnes âgées et jeunes cuisinant ensemble"
            className="object-cover w-[500px] h-[320px]"
          />
        </div>
      </main>
    </div>
  );
}
