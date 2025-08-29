import profilePic from "../RossAndrewsVT_PP.png";

export const siteConfig = {
  title: "RossAndrewsVT's Website",

  panel: {
    url: "https://twitch.tv/rossandrewsvt",
  },

  profile: {
    avatar: profilePic,
  },

  sections: {
    aboutMe: "About Me",
  },
} as const;

export type SiteConfig = typeof siteConfig;
