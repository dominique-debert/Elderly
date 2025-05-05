import { mdiMicrophoneOutline } from "@mdi/js";
import Icon from '@mdi/react';
import { motion } from "framer-motion";

const AIAssistantCard = () => {

return (
  <>
    <motion.div
      className="flex flex-col p-4 w-full"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >    
      <div className="flex flex-col p-4 w-full">
        <div className="card w-full">
          <figure className="rounded-xl relative no-border w-full h-full">
            <img src="/images/brain.webp" alt="brain" className="w-full" /> 
            <div className="absolute">
              <div className="bg-pink-200 border-8 border-white opacity-80 text-black rounded-full text-md font-normal cursor-pointer">
                <div className="text-center text-pretty font-normal pl-12 pr-12 pt-9 pb-20">Exprimez<br/>vous
                  <Icon path={mdiMicrophoneOutline}
                    title="Parler"
                    size={2}
                    className="text-white absolute p-2 top-[100px] left-[67px] mt-1 btn-circle bg-indigo-950 hover:bg-indigo-400"
                    />
                </div>
              </div>
            </div>
          </figure>
        </div>
      </div>
    </motion.div>
  </>
  );
};

export default AIAssistantCard;