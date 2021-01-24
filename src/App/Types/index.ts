export enum resources {
  FILMS = "films",
  PEOPLE = "people",
  PLANETS = "planets",
  SPECIES = "species",
  STARSHIPS = "starships",
  VEHICLES = "vehicles",
}

export interface PeopleAttributesType {
  birth_year: string;
  eye_color: string;
  films: string[];
  gender: string;
  hair_color: string;
  height: string;
  homeworld: string;
  mass: string;
  name: string;
  skin_color: string;
  created: string;
  edited: string;
  species: string[];
  starships: string[];
  url: string;
  vehicles: string[];
}

export interface StarshipsAttributesType {
  mglt: string;
  cargoCapacity: string;
  consumables: string;
  costInCredits: string;
  created: string;
  crew: string;
  edited: string;
  hyperdriveRating: string;
  length: string;
  manufacturer: string;
  maxAtmospheringSpeed: string;
  model: string;
  name: string;
  passengers: string;
  films: string[];
  pilots: string[];
  starship_class: string;
  url: string;
}

export interface PeopleAttributesResponseType {
  results: PeopleAttributesType[];
  count: number;
  next: string | null;
  previous: string | null;
}

export interface StarshipsAttributesResponseType {
  results: StarshipsAttributesType[];
  count: number;
  next: string | null;
  previous: string | null;
}