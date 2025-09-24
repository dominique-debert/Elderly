import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const MealPlan = () => {

return (
  <>
    <motion.div
      initial={{ opacity: 0, y: -150 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}    
      className="flex flex-col w-full h-full mr-4 mt-8"
    >
      <Card className="h-full ml-4">
        <CardHeader>
          <CardTitle>Planification des repas</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4 lg:space-y-8">
          {[
            { id: 1, bg: "bg-pink-50", text: "Matin" },
            { id: 2, bg: "bg-slate-50", text: "Midi" },
          ].map(({ id, bg, text }) => (
            <Card key={id} className={`${bg} text-neutral-content h-full`}>
              <CardContent className="flex items-center justify-center h-full">
                <CardTitle className="self-center">{text}</CardTitle>
              </CardContent>
            </Card>
          ))}

          {/* Dernière carte avec style particulier */}
          <Card className="bg-gray-50 text-neutral-content h-full">
            <CardContent className="flex items-center justify-center h-full">
              <CardTitle className="self-center">Soir</CardTitle>
            </CardContent>
          </Card>
        </CardContent>
      </Card>
    </motion.div>
  </>  
  );
};

export default MealPlan; 