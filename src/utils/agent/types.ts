export type AgentPage = {
  title: string;
  path: string;
  markdownPath: string;
  summary: string;
};

export type AgentPost = {
  title: string;
  path: string;
  markdownPath: string;
  date: string;
  summary: string;
  tags: string[];
  language: string;
};

export type AgentTalk = {
  title: string;
  path: string;
  markdownPath: string;
  summary: string;
  tags: string[];
  category: string;
  events: string[];
};

export type AgentTalkStats = {
  talksTotal: number;
  eventsTotal: number;
  citiesTotal: number;
  countriesTotal: number;
};

export type AgentIndex = {
  generatedAt: string;
  site: {
    name: string;
    url: string;
    description: string;
    email: string;
    location: string;
  };
  pages: AgentPage[];
  posts: AgentPost[];
  talks: AgentTalk[];
  talkStats: AgentTalkStats | null;
};
