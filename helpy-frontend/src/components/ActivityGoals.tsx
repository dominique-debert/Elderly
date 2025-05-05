import { motion } from "framer-motion";

const ActivityGoals = () => {

return (
  <>
    <motion.div
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
      className="flex flex-col w-full h-full lg:ml-8 ml-4 lg:mb-4 mt-8"
    >
      <div className="card bg-base-100 h-full">
        <h2 className="card-title mb-4">Objectifs d'activité</h2>

        <div className="grid grid-cols-2 grid-rows-2 gap-4 h-full">
          {[
            { id: 1, bg: "bg-pink-50" },
            { id: 2, bg: "bg-slate-50", className: "md:mr-4" },
            { id: 3, bg: "bg-stone-50" },
            { id: 4, bg: "bg-gray-50", className: "md:mr-4" },
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
};

export default ActivityGoals;