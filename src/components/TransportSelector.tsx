import { useState } from 'react';
import { Bus, Plane, Ship, TrainFront, Dices, Footprints } from 'lucide-react';

export default function TransportSelector() {

  const [selected, setSelected] = useState<string | null>(null);
  const [timestamp, setTimestamp] = useState(0);

  const options = ['hike', 'plane', 'hike', 'train', 'hike', 'ship', 'hike', 'bus'];

  const getIcon = (type: string | null) => {
    switch (type) {
      case 'train': return <TrainFront size={48} />;
      case 'bus': return <Bus size={48} />;
      case 'plane': return <Plane size={48} />;
      case 'ship': return <Ship size={48} />;
      case 'hike': return <Footprints size={48} />;
      default: return <Dices size={48} />;
    }
  };

  const getSteps = (type: string | null) => {
    switch (type) {
      case 'train': return "1 - 6";
      case 'bus': return "1 - 4";
      case 'plane': return "Airport Karte";
      case 'ship': return "1 - 3";
      case 'hike': return "1 - 2";
      default: return "Drücke auf Auswahl";
    }
  };

  const selectRandom = () => {
    const randomIndex = Math.floor(Math.random() * options.length);
    setSelected(options[randomIndex]);
    setTimestamp(Date.now());
  };

  return (
    <div className="p-4 h-dvh  flex flex-col">
      <div className="min-h-1/3 items-center flex-grow">

        <h2 className="text-xl font-bold mb-4 text-center">Globetrotter</h2>
        <h3 className="text-l mb-4 text-center">Erkunde die Welt</h3>
      </div>
      <div className="flex flex-col items-center justify-center gap-8 min-h-1/3 flex-grow">
        <div className="p-8 border-2 border-gray-300 rounded-lg">
          <div
            key={timestamp}
            className="transform transition-all duration-500 ease-in-out animate-spin-scale"
          >
            {getIcon(selected)}
          </div>
        </div>
        <div>
          <div
            key={timestamp}
            className="transform transition-all duration-500 ease-in-out animate-spin-scale">
            {getSteps(selected)}
          </div>
        </div>
        <style>{`
          .animate-spin-scale {
            animation: spinAndScale 0.5s ease-in-out;
            }
            
            @keyframes spinAndScale {
              0% {
                transform: scale(1) rotate(0deg);
              }
              50% {
                transform: scale(1.2) rotate(180deg);
              }
              100% {
                transform: scale(1) rotate(360deg);
              }
            }
          `}
        </style>
        <button
          onClick={selectRandom}
          className="px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
        >
          Auswahl
        </button>
      </div>
      <div className="min-h-1/3 flex-grow">
        <p className='p-4 text-center'>Eine kleine App, die das Drehen am Pfeil, zur Auswahl des Verkehrsmittels, digitalisiert.</p>
      </div>
    </div>
  );
}
