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

const MedicationTimeline: React.FC = () => {
  const sortedEvents = [...mockEvents].sort(
    (a, b) => timeOfDayOrder.indexOf(a.timeOfDay) - timeOfDayOrder.indexOf(b.timeOfDay)
  );

  return (
    <div className="w-full max-w-xl mx-auto p-4">
      <h2 className="text-2xl font-bold mb-6 text-center text-primary">Prise de médicaments</h2>
      <ul className="timeline timeline-horizontal">
        {sortedEvents.map((event, index) => (
          <li key={index}>
            <div className="timeline-start text-sm text-gray-500">{event.timeOfDay}</div>
            <div className="timeline-middle">
              <Icon path={mdiClockAlertOutline}
                size={1}
              />
            </div>
            <div className="timeline-end mb-10">
              <div className="card shadow-md bg-base-100 p-4">
                <h3 className="text-lg font-semibold text-primary">{event.name}</h3>
                <p className="text-sm text-gray-600">
                  Heure : <span className="font-medium">{event.time}</span>
                </p>
                {event.dose && (
                  <p className="text-sm text-gray-600">
                    Dose : <span className="font-medium">{event.dose}</span>
                  </p>
                )}
              </div>
            </div>
            {index < sortedEvents.length - 1 && <hr />}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MedicationTimeline;
