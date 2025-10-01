import Icon from '@mdi/react';
import { mdiClockOutline } from '@mdi/js';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';

const MedicationCard: React.FC = () => {

  return (
    <Card className="lg:w-full bg-base-100 border border-base-200">
      <CardHeader>
        <CardTitle>
          <h2 className="text-2xl font-semibold mb-6 text-center text-primary">Prise de médicaments</h2>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="w-full max-w-xl mx-auto p-4">
          <ul className="timeline timeline-vertical lg:timeline-horizontal">
            <li>
              <div className="timeline-start">Matin</div>
              <div className="timeline-middle">
                <Icon path={mdiClockOutline}
                  title="Parler"
                  size={1}
                  className="text-primary"
                />
              </div>
              <div className="timeline-end timeline-box">Médicament 1</div>
              <hr />
            </li>
            <li>
              <hr />
              <div className="timeline-start">Midi</div>
              <div className="timeline-middle">
                <Icon path={mdiClockOutline}
                  title="Parler"
                  size={1}
                  className="text-primary"
                />
              </div>
              <div className="timeline-end timeline-box">Médicament 2</div>
              <hr />
            </li>
            <li>
              <hr />
              <div className="timeline-start">Soir</div>
              <div className="timeline-middle">
              <div className="timeline-middle">
                <Icon path={mdiClockOutline}
                  title="Parler"
                  size={1}
                  className="text-primary"
                />
              </div>
              </div>
              <div className="timeline-end timeline-box">Médicament 3</div>
              <hr />
            </li>
            <li>
              <hr />
              <div className="timeline-start">Nuit</div>
              <div className="timeline-middle">
                <Icon path={mdiClockOutline}
                  title="Parler"
                  size={1}
                  className="text-primary"
                />
              </div>
              <div className="timeline-end timeline-box">Médicament 4</div>
            </li>
          </ul>        
        </div>
      </CardContent>
    </Card>
  );
};

export default MedicationCard;

