import { useState } from 'react';
import { Bus, Plane, Ship, TrainFront, Dices, Footprints } from 'lucide-react';

export default function TransportSelector() {

  const [selected, setSelected] = useState(null);

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

  const selectRandom = () => {
    const randomIndex = Math.floor(Math.random() * options.length);
    setSelected(options[randomIndex]);
  };

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">Random Transport Selector</h2>
      <div className="flex flex-col items-center justify-center gap-8 min-h-screen">
        <button
          onClick={selectRandom}
          className="px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
        >
          Select Transport
        </button>
        <div className="p-8 border-2 border-gray-300 rounded-lg">
          {getIcon(selected)}
        </div>
      </div>
    </div>
  );
}
