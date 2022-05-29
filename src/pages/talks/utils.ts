import { City, Session as SchemaSession, TalkBySlugQuery } from 'schema';

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
  audience: session.audience,
  slides: session.slides,
  recording: session.recording,
});

export const talkDocumentTransformer = (result: TalkBySlugQuery) => {
  const talk = result.talkCollection?.items[0];
  const sessions = talk?.sessionsCollection?.items as SchemaSession[];

  return {
    title: talk?.title,
    abstract: talk?.abstract?.json,
    sessions: sessions.map(sessionTransformer),
  };
};
