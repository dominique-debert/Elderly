import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const MedicationPlanning = () => {

return (
  <>
    <motion.div
      initial={{ opacity: 0, x: -150 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}    
      className="ml-4 lg:ml-8 lg:w-full lg:mt-8 lg:mr-4"
    >
      <Card>
        <CardHeader>
          <CardTitle>Planification des médicaments</CardTitle>
        </CardHeader>
        <CardContent>
          <Card className="bg-pink-50 text-neutral-content h-full">
            <CardContent className="flex items-center justify-center h-full">
              <CardTitle className="self-center">1</CardTitle>
            </CardContent>
          </Card>
        </CardContent>
      </Card>
    </motion.div>
  </>
  );
};

export default MedicationPlanning;