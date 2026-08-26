import photoPackData from "./updated-1.json";

type PhotoDay = {
  day: string;
  title: string;
  image: string;
};

type PhotoPack = Record<string, Record<string, Record<string, PhotoDay[]>>>;

const photoPack = photoPackData as PhotoPack;

const countryAliases: Record<string, string> = {
  "united states of america": "USA",
  "united states": "USA",
  "u.s.a.": "USA",
  "u.s.a": "USA",
  "u s a": "USA",
  "uae": "UAE",
};

const destinationAliases: Record<string, string> = {
  "xi'an": "Xian",
  "xian": "Xian",
  "chichén itzá": "Chichen Itza",
  "chichen itza": "Chichen Itza",
  "st. petersburg": "St Petersburg",
  "st petersburg": "St Petersburg",
  "malé atoll": "Male Atoll",
  "male atoll": "Male Atoll",
  "khovsgol lake": "Khovsgol Lake",
  "khövsgöl lake": "Khovsgol Lake",
};

function normalize(value: string): string {
  return value
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .replace(/&/g, "and")
    .replace(/[^a-z0-9]+/g, " ")
    .trim();
}

function resolveKeyByName<T>(record: Record<string, T>, input: string): string | null {
  const normalizedInput = normalize(input);
  for (const key of Object.keys(record)) {
    if (normalize(key) === normalizedInput) return key;
  }
  return null;
}

function resolveCountryKey(regionKey: string, country: string): string | null {
  const region = photoPack[regionKey];
  if (!region) return null;
  const alias = countryAliases[normalize(country)];
  return resolveKeyByName(region, alias ?? country);
}

function resolveDestinationKey(regionKey: string, countryKey: string, destination: string): string | null {
  const country = photoPack[regionKey]?.[countryKey];
  if (!country) return null;
  const alias = destinationAliases[normalize(destination)];
  return resolveKeyByName(country, alias ?? destination);
}

export function getDestinationPhotos(region: string, country: string, destination: string): PhotoDay[] {
  const regionKey = resolveKeyByName(photoPack, region);
  if (!regionKey) return [];

  const countryKey = resolveCountryKey(regionKey, country);
  if (!countryKey) return [];

  const destinationKey = resolveDestinationKey(regionKey, countryKey, destination);
  if (!destinationKey) return [];

  return photoPack[regionKey][countryKey][destinationKey] ?? [];
}

export function getCountryPhotos(region: string, country: string): PhotoDay[] {
  const regionKey = resolveKeyByName(photoPack, region);
  if (!regionKey) return [];

  const countryKey = resolveCountryKey(regionKey, country);
  if (!countryKey) return [];

  return Object.values(photoPack[regionKey][countryKey]).flat();
}

export function getRegionPhotos(region: string): PhotoDay[] {
  const regionKey = resolveKeyByName(photoPack, region);
  if (!regionKey) return [];

  return Object.values(photoPack[regionKey]).flatMap((destinations) => Object.values(destinations).flat());
}
