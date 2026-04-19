import fs from 'fs';
import path from 'path';
import { Point } from '../components/PointCard';

const CONTENT_DIR = path.join(process.cwd(), 'content');

function readJson<T>(filePath: string): T {
  const raw = fs.readFileSync(filePath, 'utf-8');
  return JSON.parse(raw);
}

interface HomepageData {
  sections: { title: string; content: string }[];
}

export interface ContentBlock {
  blockType: 'text' | 'image';
  text?: string;
  image?: string;
}

export interface LocationData {
  title: string;
  shortTitle?: string;
  slug: string;
  subtitle: string;
  lat: string;
  long: string;
  disabled: boolean;
  contentBlocks?: ContentBlock[];
  accordions: {
    accordionTitle: string;
    blocks?: ContentBlock[];
  }[];
  afterAccordionBlocks?: ContentBlock[];
}

interface ExternalLinksData {
  links: { title: string; description: string; link: string }[];
}

export function getHomepageData() {
  const data = readJson<HomepageData>(
    path.join(CONTENT_DIR, 'homepage', 'home.json')
  );
  return data.sections;
}

export function getExternalLinks() {
  const data = readJson<ExternalLinksData>(
    path.join(CONTENT_DIR, 'links', 'external.json')
  );
  return data.links;
}

export function getAllPoints(): Point[] {
  const locationsDir = path.join(CONTENT_DIR, 'locations');
  const files = fs.readdirSync(locationsDir).filter((f) => f.endsWith('.json'));
  const points = files.map((file) => {
    const loc = readJson<LocationData>(path.join(locationsDir, file));
    return {
      title: loc.shortTitle || loc.title,
      link: `/${loc.slug}`,
      location: { lat: loc.lat, long: loc.long },
      disabled: loc.disabled ?? true,
    };
  });
  // Live points first, then disabled
  return points.sort((a, b) => {
    if (a.disabled === b.disabled) return 0;
    return a.disabled ? 1 : -1;
  });
}

export function getLocation(slug: string) {
  const filePath = path.join(CONTENT_DIR, 'locations', `${slug}.json`);
  if (!fs.existsSync(filePath)) return null;
  return readJson<LocationData>(filePath);
}

export function getAllLocationSlugs(): string[] {
  const locationsDir = path.join(CONTENT_DIR, 'locations');
  const files = fs.readdirSync(locationsDir).filter((f) => f.endsWith('.json'));
  return files
    .map((file) => readJson<LocationData>(path.join(locationsDir, file)))
    .filter((loc) => !loc.disabled)
    .map((loc) => loc.slug);
}
