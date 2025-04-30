import { mdiMicrophoneOutline } from "@mdi/js";
import Icon from '@mdi/react';

const AIAssistantCard = () => {

return (
  <>
    <div className="flex flex-col p-4 w-full">
      <h2 className="font-light">ICI: Assistant IA</h2>
      <div className="card w-full">
        <figure className="rounded-xl relative no-border w-full h-full">
          <img src="/images/brain.png" alt="brain" className="w-full" /> 
          <div className="absolute">
            <div className="bg-pink-200 border-4 border-white opacity-85 text-black rounded-full text-md font-normal cursor-pointer">
              <p className="text-center text-pretty font-normal pl-9 pr-9 pt-9 pb-20">Tell me how<br/>do you feel
                <Icon path={mdiMicrophoneOutline}
                  title="Speak"
                  size={2}
                  className="text-white absolute p-2 left-[59px] top-24 mt-1 btn-circle bg-indigo-950 hover:bg-indigo-400"
                />
              </p>
            </div>
          </div>
        </figure>
      </div>
    </div>
  </>
  );
};

export default AIAssistantCard;