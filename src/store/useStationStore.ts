import { create } from 'zustand';
import type { Station } from '../types';

interface StationState {
    stations: Station[];
    filteredStations: Station[];
    isLoading: boolean;
    error: string | null;
    selectedStation: Station | null;
    searchQuery: string;

    fetchStations: () => Promise<void>;
    setSearchQuery: (query: string) => void;
    selectStation: (station: Station | null) => void;
}

const GIST_URL = "https://gist.githubusercontent.com/neysidev/bbd40032f0f4e167a1e6a8b3e99a490c/raw/fc7dc242f41393845d90edaa99e32e28f1ddfe24/train-stations.json";

export const useStationStore = create<StationState>((set, get) => ({
    stations: [],
    filteredStations: [],
    isLoading: false,
    error: null,
    selectedStation: null,
    searchQuery: '',

    fetchStations: async () => {
        set({ isLoading: true, error: null });
        try {
            const response = await fetch(GIST_URL);
            if (!response.ok) throw new Error('Failed to fetch station data');
            const data = await response.json();
            set({ stations: data, filteredStations: data });
        } catch (err) {
            set({ error: (err as Error).message });
        } finally {
            set({ isLoading: false });
        }
    },

    setSearchQuery: (query) => {
        const { stations } = get();
        const filtered = stations.filter(s =>
            s.city.toLowerCase().includes(query.toLowerCase())
        );
        set({ searchQuery: query, filteredStations: filtered });
    },

    selectStation: (station) => set({ selectedStation: station }),
}));