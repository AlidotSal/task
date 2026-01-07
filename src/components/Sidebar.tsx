import { Search, MapPin } from 'lucide-react';
import { useStationStore } from '../store/useStationStore';

export const Sidebar = () => {
  const { filteredStations, searchQuery, setSearchQuery, selectStation, selectedStation } = useStationStore();

  return (
    <div className="w-80 h-full flex flex-col bg-white border-r border-gray-200 shadow-xl z-10">
      <div className="p-4 border-b-2 border-neutral-400">
        <h1 className="text-xl font-bold text-blue-600 mb-4">PANTOhealth Stations</h1>
        <div className="relative">
          <Search className="absolute left-3 top-2.5 text-gray-400 h-5 w-5" />
          <input
            type="text"
            placeholder="Search by city or station..."
            className="w-full pl-10 pr-4 py-2 outline-1 outline-solid outline-neutral-500 rounded-md focus:ring-2 focus:ring-blue-500 outline-none transition-all"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
      </div>
      
      <div className="flex-1 overflow-y-auto relative">
        {filteredStations.length === 0 ? (
          <p className="p-4 text-gray-500 text-center">No stations found</p>
        ) : (
          filteredStations.map((station,i) => (
            <div
              key={station.id}
              onClick={() => selectStation(station)}
              style={{transform: `translateY(${i*70}px)`, transition: "all 250ms ease-out"}}
              className={`absolute p-3 w-full border-b border-neutral-300 cursor-pointer hover:bg-blue-100 ${
                selectedStation?.id === station.id ? 'bg-blue-100 border-l-4 border-l-blue-600' : ''
              }`}
            >
              <div className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-blue-500 mt-1" />
                <div>
                  <h3 className="font-medium text-gray-900">{station.name}</h3>
                  <p className="text-sm text-gray-500">{station.city}</p>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};