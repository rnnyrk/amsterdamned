export type Location = {
  id: string;
  title: string;
  description?: string;
  lat: number;
  lng: number;
  is_reviewed: boolean;
  categories: string[];
  subcategories?: string[];
  address: string;
};

export type LocationFeature = GeoJSON.Feature & {
  id: string;
  text_nl: string;
  place_name_nl: string;
  center: [lat: number, long: number];
  address?: string;
};
