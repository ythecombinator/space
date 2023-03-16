import * as dotenv from 'dotenv';
import { outputFile } from 'fs-extra';
import got from 'got';

/*~
 * CONSTANTS
 */

dotenv.config();

const LINKEDIN_URL = 'https://www.linkedin.com/in/ythecombinator';
const DEST_PATH = 'src/content/biography/experience.json';

const API_BASE_URL = 'https://nubela.co/proxycurl/api/v2/linkedin';
const API_TOKEN = `Bearer ${process.env.NUBELA_TOKEN}`;

/*~
 * UTILS
 */

function getMonthName(monthNumber: number) {
  const date = new Date();
  date.setMonth(monthNumber - 1);

  return date.toLocaleString('en-US', { month: 'long' });
}

function getStartDate(startDate: ExperienceEntry['starts_at']) {
  return `${getMonthName(startDate.month)}, ${startDate.year}`;
}

function getEndDate(endDate: ExperienceEntry['ends_at']) {
  if (endDate) {
    return `${getMonthName(endDate.month)}, ${endDate.year}`;
  }

  return 'Present';
}

function getCompanyUrl(url: string) {
  if (url) {
    return url.replace('https://cz.linkedin.com', 'https://linkedin.com');
  }

  return null;
}

function mapExperience(experiences: ExperienceEntry[]) {
  return experiences
    .map((experience) => {
      return {
        company: experience.company,
        companyUrl: getCompanyUrl(experience.company_linkedin_profile_url),
        startDate: getStartDate(experience.starts_at),
        endDate: getEndDate(experience.ends_at),
        location: experience.location,
        title: experience.title,
        description: experience.description,
      };
    })
    .filter((experience) => Boolean(experience.companyUrl));
}

/*~
 * CORE
 */

async function fetchData() {
  const searchParams = new URLSearchParams([
    ['url', LINKEDIN_URL],
    ['fallback_to_cache', 'on-error'],
  ]);

  const result = await got
    .get(API_BASE_URL, {
      searchParams,
      headers: { Authorization: API_TOKEN },
    })
    .json<Profile>();

  return result;
}

async function codegenLinkedin() {
  const data = await fetchData();

  const work = mapExperience(data.experiences!);
  const volunteering = mapExperience(data.volunteer_work!);

  await outputFile(DEST_PATH, JSON.stringify({ work, volunteering }, null, 2));
}

codegenLinkedin();

/*~
 * TYPES
 */

// Derived from: https://nubela.co/proxycurl/docs#people-api-person-profile-endpoint
// Using: https://jvilk.com/MakeTypes/

interface Profile {
  accomplishment_projects: AccomplishmentProject[];
  activities: Activity[];
  background_cover_image_url: string;
  certifications: Certification[];
  city: string;
  connections: number;
  country: string;
  country_full_name: string;
  education: Education[];
  experiences: ExperienceEntry[];
  first_name: string;
  full_name: string;
  headline: string;
  languages: string[];
  last_name: string;
  occupation: string;
  profile_pic_url: string;
  public_identifier: string;
  recommendations: string[];
  similarly_named_profiles: SimilarProfile[];
  state: string;
  summary: string;
  volunteer_work: VolunteerWorkEntry[];
}

interface AccomplishmentProject {
  description: string;
  ends_at: CalendarDate;
  starts_at: CalendarDate;
  title: string;
  url: string;
}

interface CalendarDate {
  day: number;
  month: number;
  year: number;
}

interface Activity {
  activity_status: string;
  link: string;
  title: string;
}

interface Certification {
  authority: string;
  ends_at: CalendarDate;
  name: string;
  starts_at: CalendarDate;
  url: string;
}

interface Education {
  degree_name: string;
  description: string;
  ends_at: CalendarDate;
  field_of_study: string;
  grade: number;
  logo_url: string;
  school: string;
  school_linkedin_profile_url: string;
  starts_at: CalendarDate;
}

interface CalendarDate {
  day: number;
  month: number;
  year: number;
}

interface ExperienceEntry {
  company: string;
  company_linkedin_profile_url: string;
  description: string;
  ends_at: CalendarDate;
  location: string;
  logo_url: string;
  starts_at: CalendarDate;
  title: string;
}

interface VolunteerWorkEntry extends ExperienceEntry {
  cause: string;
}

interface SimilarProfile {
  link: string;
  location: string;
  name: string;
  summary: string;
}
