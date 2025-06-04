import profilePic from "../RossAndrewsVT_PP.png";
import backgroundImg from "../background.jpg"; // Add this line

export const siteConfig = {
  title: "Ross Andrews' VTuber Zone",

  background: backgroundImg, // Add this line

  panel: {
    url: "https://twitch.tv/rossandrewsvt",
    buttonText: "Watch on Twitch",
  },

  plans: {
    student: {
      name: "Student Plan",
      description: "Special discount for students with GitHub Student Pack",
      benefits: [
        "50% off regular price",
        "Priority support",
        "Extended resource limits",
        "Early access to new features",
      ],
      githubRequired: true,
    },
  },

  profile: {
    name: "RossAndrewsVT",
    realName: "Ross Andrews",
    email: "rossandrewsvt@example.com",
    location: "Virtual World",
    about: [
      "Hi! I'm **RossAndrewsVT**, a variety VTuber who loves streaming games, chatting, and sharing good vibes!",
      "Catch me live on [Twitch](https://twitch.tv/rossandrewsvt) and join our cozy community.",
      "I play everything from indie gems to big releases, and sometimes just hang out and chat.",
      "Let's make some memories together!",
    ].join("\n\n"),
    avatar: profilePic,
    gaming: {
      steam: "rossandrews_vt",
      epicGames: "rossandrewsvt",
      ubisoft: "rossandrewsvt",
      discord: "RossAndrewsVT#1234",
    },
    links: [
      {
        label: "Twitch",
        url: "https://twitch.tv/rossandrewsvt",
        icon: "twitch",
      },
      {
        label: "Twitter",
        url: "https://twitter.com/rossandrewsvt",
        icon: "twitter",
      },
      {
        label: "YouTube",
        url: "https://youtube.com/@rossandrewsvt",
        icon: "youtube",
      },
      {
        label: "Discord",
        url: "https://discord.gg/rossandrewsvt",
        icon: "discord",
      },
    ],
  },

  sections: {
    aboutMe: "About Me",
  },
} as const;

export type SiteConfig = typeof siteConfig;