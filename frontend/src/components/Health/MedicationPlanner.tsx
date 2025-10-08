import { motion } from "framer-motion";

export function MedicationPlanner() {
  return (
    <>
      <motion.div
        initial={{ opacity: 0, x: -150 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        className="card bg-base-100 ml-4 lg:ml-8 lg:w-full lg:mt-8 lg:mr-4"
      >
        <h2 className="card-title mb-4 mt-8">Planification des médicaments</h2>

        <div className="card bg-pink-50 text-neutral-content h-full">
          <div className="card-body">
            <h2 className="card-title self-center">1</h2>
          </div>
        </div>
      </motion.div>
    </>
  );
}
