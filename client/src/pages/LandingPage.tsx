import { Link } from "react-router-dom";

export function LandingPage() {
  return (
    <div className="h-vh flex flex-col items-center justify-center pt-6">
      <header className="w-full flex justify-between items-center mb-12 border-b border-slate-800">
        <div className="flex p-2 pl-5 mb-6 items-center gap-4 font-normal text-2xl text-primary">
          <img src="/images/elderly.webp" alt="Logo" className="h-8" />
          <span className="text-primary text-2xl">Elderly</span>
        </div>
        <div className="flex gap-3 mb-6 mr-6">
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
            Elderly s’attache à favoriser des relations significatives et à
            fournir des ressources précieuses aux personnes âgées et à leurs
            familles.
          </p>
          <button className="bg-primary hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium w-50">
            <Link to="/signup">Démarrer</Link>
          </button>
        </div>

        <div className="mt-12 lg:mt-0 lg:ml-12 rounded-2xl overflow-hidden border border-slate-600 shadow-xl">
          <img
            src="/images/landing-illustration.jpg"
            alt="Personnes âgées et jeunes cuisinant ensemble"
            className="object-cover w-[500px] h-80"
          />
        </div>
      </main>
    </div>
  );
}
