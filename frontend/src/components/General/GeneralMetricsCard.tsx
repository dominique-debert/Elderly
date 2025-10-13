import { motion } from "framer-motion";

export function GeneralMetricsCard() {
  return (
    <>
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        className="card w-full ml-4 pr-4 lg:mb-4 mt-4"
      >
        <div className="flex flex-col w-full h-full">
          <h2 className="card-title mt-4 mb-4">Mesures générales</h2>
          <div className="grid grid-cols-4 gap-4 h-full">
            <div className="card flex justify-end items-center align-middle bg-pink-50 row-span-2 col-span-2 ml-1">
              <span className="m-4 absolute top-2 left-2">Humeur</span>
              <div className="badge bg-green-600 m-2 p-4 rotate-12 text-white lg:text-base">
                concentré
              </div>
              <span>
                <div className="badge bg-orange-400 text-white mt-4 p-4 -rotate-45 lg:text-base">
                  heureux
                </div>
                <div className="badge bg-red-500 text-white ml-[-15px] p-4 -rotate-12 lg:text-base">
                  en colère
                </div>
                <div className="badge bg-pink-500 text-white ml-[-15px] p-4 rotate-90 lg:text-base">
                  inspiré
                </div>
              </span>
              <span>
                <div className="badge bg-violet-400 text-white mt-6 p-4 lg:text-base">
                  détendu
                </div>
                <div className="badge bg-cyan-400 text-white mt-6 p-4 rotate-45 lg:text-base mb-6">
                  triste
                </div>
              </span>
            </div>
            {[
              { id: 2, bg: "bg-indigo-50" },
              { id: 3, bg: "bg-yellow-50" },
              { id: 4, bg: "bg-blue-50", className: "col-span-2" },
            ].map(({ id, bg, className }) => (
              <div key={id} className={className}>
                <div className={`card ${bg} text-neutral-content h-full`}>
                  <div className="card-body">
                    <h2 className="card-title self-center">{id}</h2>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </>
  );
}
