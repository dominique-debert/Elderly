import { motion } from "framer-motion";

export function HealthGoalsCard() {
  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="flex flex-col w-full h-full"
      >
        <div className="card w-full h-full bg-base-100 ml-4 pr-4 lg:mb-4 mt-4 mr-8">
          <h2 className="card-title mt-4 mb-4">Objectifs de santé</h2>

          <div className="grid grid-cols-2 grid-rows-2 gap-4 h-full">
            {[
              { id: 1, bg: "bg-pink-50" },
              { id: 2, bg: "bg-slate-50" },
              { id: 3, bg: "bg-stone-50" },
              { id: 4, bg: "bg-gray-50" },
            ].map(({ id, bg }) => (
              <div
                key={id}
                className={`card ${bg} text-neutral-content h-full`}
              >
                <div className="card-body">
                  <h2 className="card-title self-center">{id}</h2>
                </div>
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </>
  );
}
