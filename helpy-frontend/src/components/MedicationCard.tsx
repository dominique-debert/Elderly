import Icon from '@mdi/react';
import { mdiClockOutline } from '@mdi/js';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Timeline, TimelineItem, TimelineContent } from './ui/timeline';

const MedicationCard: React.FC = () => {
  const medications = [
    { time: 'Matin', medication: 'Médicament 1' },
    { time: 'Midi', medication: 'Médicament 2' },
    { time: 'Soir', medication: 'Médicament 3' },
    { time: 'Nuit', medication: 'Médicament 4' }
  ];

  return (
    <Card className="lg:w-full bg-background border border-border">
      <CardHeader>
        <CardTitle>
          <h2 className="text-2xl font-semibold mb-6 text-center text-primary">Prise de médicaments</h2>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="w-full max-w-xl mx-auto p-4">
          <Timeline>
            {medications.map((item, index) => (
              <TimelineItem key={index} isLast={index === medications.length - 1}>
                <TimelineContent position="start">
                  {item.time}
                </TimelineContent>
                <TimelineContent position="middle">
                  <Icon 
                    path={mdiClockOutline}
                    title="Medication time"
                    size={1}
                    className="text-primary"
                  />
                </TimelineContent>
                <TimelineContent position="end">
                  {item.medication}
                </TimelineContent>
              </TimelineItem>
            ))}
          </Timeline>        
        </div>
      </CardContent>
    </Card>
  );
};

export default MedicationCard;

