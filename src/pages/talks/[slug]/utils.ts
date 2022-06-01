import { City, GetTalkQuery, Session as SchemaSession } from 'graphql/schema';

/*~
 * TYPES
 */

export type Session = ReturnType<typeof sessionTransformer>;

/*~
 * TRANSFORMERS
 */

const locationTransformer = (city: City) => ({
  name: `${city.country?.flag} ${city.name}, ${city.country?.name}`,
  photo: city.photo?.url,
});

const sessionTransformer = (session: SchemaSession) => ({
  id: session.sys.id,
  eventName: session.event?.name,
  eventStartingDate: session.event?.startingDate,
  eventEndingDate: session.event?.endingDate,
  location: locationTransformer(session.event?.city as City),
  audience: formatAudience(session.audience),
  language: formatLanguage(session.language),
  online: session.online,
  slides: session.slides,
  recording: session.recording,
});

export const talkDocumentTransformer = (result: GetTalkQuery) => {
  const talk = result.talkCollection?.items[0];
  const sessions = talk?.sessionsCollection?.items as SchemaSession[];

  return {
    title: talk?.title,
    abstract: talk?.abstract?.json,
    sessions: sessions.map(sessionTransformer),
  };
};

/*~
 * FORMATTERS
 */

export const formatAudience = (data: SchemaSession['audience']) =>
  data ? `~${data} people audience` : 'No audience data';

export const formatLanguage = (data: SchemaSession['language']) =>
  `Presented in ${data?.language}`;
