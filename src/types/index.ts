export interface Station {
    id: number;
    name: string;
    city: string;
    lat: number;
    lng: number;
}

export interface GistResponse {
    stations: Station[];
}