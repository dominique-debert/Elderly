import { motion } from "framer-motion";

export function MealPlan() {
  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: -150 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="flex flex-col w-full h-full mr-4 mt-8"
      >
        <div className="card h-full ml-4">
          <h2 className="card-title mb-4">Planification des repas</h2>

          {[
            { id: 1, bg: "bg-pink-50", text: "Matin" },
            { id: 2, bg: "bg-slate-50", text: "Midi" },
          ].map(({ id, bg, text }) => (
            <div
              key={id}
              className={`card ${bg} text-neutral-content h-full mb-4 lg:mb-8`}
            >
              <div className="card-body">
                <h2 className="card-title self-center">{text}</h2>
              </div>
            </div>
          ))}

          {/* Dernière carte avec style particulier */}
          <div className="card bg-gray-50 text-neutral-content h-full">
            <div className="card-body">
              <h2 className="card-title self-center">Soir</h2>
            </div>
          </div>
        </div>
      </motion.div>
    </>
  );
}
