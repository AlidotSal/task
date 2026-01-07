import { useEffect } from 'react';
import { useStationStore } from './store/useStationStore';
import { Sidebar } from './components/Sidebar';
import { StationMap } from './components/StationMap';

function App() {
  const { fetchStations, isLoading, error } = useStationStore();

  useEffect(() => {
    fetchStations();
  }, []);

  if (error) return <div className="h-screen flex items-center justify-center text-red-500">Error: {error}</div>;

  return (
    <div className="flex h-screen w-full bg-gray-50 overflow-hidden">
      <Sidebar />
      <main className="flex-1 relative">
        {isLoading && (
          <div className="absolute inset-0 z-[1001] bg-white/60 flex items-center justify-center backdrop-blur-sm">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600" />
          </div>
        )}
        <StationMap />
      </main>
    </div>
  );
}

export default App;