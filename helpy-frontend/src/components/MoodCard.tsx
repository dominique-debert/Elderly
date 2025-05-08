import { IMood } from '../@types/IMood';
import Icon from '@mdi/react';
import { mdiCircle } from '@mdi/js';
import { motion } from "framer-motion";
import { getRandomInt } from '../utils/randomInt';

type MoodCardProps = {
  mood: IMood;
};

export default function MoodCard({ mood }: MoodCardProps) {

  return (
    <motion.div
      initial={{ opacity: 0, y: getRandomInt(0, 50) }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="rounded-lg border-[1px] border-gray-300 p-4 shadow-lg"
      style={{ borderLeft: `10px solid ${mood.color}`}}
    >
      <div className="flex items-center w-full text-xl font-bold">
        {/* <Icon
          path={mdiCircle}
          size={0.8}
          className="mr-2"
          style={{ color: mood.color }}
        /> */}
        {mood.name}
      </div>
      <p className="text-sm text-gray-600">
        {mood.valence} · intensité {mood.intensity}/5
      </p>
      {mood.description && <p className="mt-2">{mood.description}</p>}
    </motion.div>
  );
}
