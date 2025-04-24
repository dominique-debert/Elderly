import React from "react";
import Icon from '@mdi/react';
import { mdiClockAlertOutline } from "@mdi/js";

type MedicationEvent = {
  timeOfDay: "Matin" | "Midi" | "Soir" | "Nuit";
  time: string;
  name: string;
  dose?: string;
};

const timeOfDayOrder = ["Matin", "Midi", "Soir", "Nuit"];

const mockEvents: MedicationEvent[] = [
  {
    timeOfDay: "Matin",
    time: "08:00",
    name: "Doliprane",
    dose: "500mg",
  },
  {
    timeOfDay: "Midi",
    time: "12:30",
    name: "Vitamine D",
    dose: "1000 UI",
  },
  {
    timeOfDay: "Soir",
    time: "20:00",
    name: "Ibuprofène",
    dose: "400mg",
  },
  {
    timeOfDay: "Nuit",
    time: "23:00",
    name: "Mélatonine",
    dose: "3mg",
  },
];

const MedicationCard: React.FC = () => {
  const sortedEvents = [...mockEvents].sort(
    (a, b) => timeOfDayOrder.indexOf(a.timeOfDay) - timeOfDayOrder.indexOf(b.timeOfDay)
  );

  return (
    <div className="flex flex-row space-x-4 mt-4 w-full">
      <div className="card w-full bg-base-100 shadow-lg border border-gray-200">
        <div className="w-full max-w-xl mx-auto p-4">
          <h2 className="text-2xl font-bold mb-6 text-center text-primary">Prise de médicaments</h2>
<ul className="timeline timeline-vertical lg:timeline-horizontal">
  <li>
    <div className="timeline-start">1984</div>
    <div className="timeline-middle">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        fill="currentColor"
        className="h-5 w-5"
      >
        <path
          fill-rule="evenodd"
          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
          clip-rule="evenodd"
        />
      </svg>
    </div>
    <div className="timeline-end timeline-box">First Macintosh computer</div>
    <hr />
  </li>
  <li>
    <hr />
    <div className="timeline-start">1998</div>
    <div className="timeline-middle">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        fill="currentColor"
        className="h-5 w-5"
      >
        <path
          fill-rule="evenodd"
          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
          clip-rule="evenodd"
        />
      </svg>
    </div>
    <div className="timeline-end timeline-box">iMac</div>
    <hr />
  </li>
  <li>
    <hr />
    <div className="timeline-start">2001</div>
    <div className="timeline-middle">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        fill="currentColor"
        className="h-5 w-5"
      >
        <path
          fill-rule="evenodd"
          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
          clip-rule="evenodd"
        />
      </svg>
    </div>
    <div className="timeline-end timeline-box">iPod</div>
    <hr />
  </li>
  <li>
    <hr />
    <div className="timeline-start">2007</div>
    <div className="timeline-middle">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        fill="currentColor"
        className="h-5 w-5"
      >
        <path
          fill-rule="evenodd"
          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
          clip-rule="evenodd"
        />
      </svg>
    </div>
    <div className="timeline-end timeline-box">iPhone</div>
    <hr />
  </li>
  <li>
    <hr />
    <div className="timeline-start">2015</div>
    <div className="timeline-middle">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        fill="currentColor"
        className="h-5 w-5"
      >
        <path
          fill-rule="evenodd"
          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
          clip-rule="evenodd"
        />
      </svg>
    </div>
    <div className="timeline-end timeline-box">Apple Watch</div>
  </li>
</ul>        </div>
      </div>
    </div>
  );
};

export default MedicationCard;

