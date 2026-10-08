export interface FriendshipCard {
  emoji: string;
  title: string;
  text: string;
}

export interface StoryChapter {
  id: string;
  badge: string;
  title: string;
  paragraphs: string[];
  image: string;
  imageAlt: string;
}

export interface BirthdayConfig {
  birthdayPerson: {
    name: string;
    nickname: string;
    age: number;
    birthYear?: number;
  };
  sender: {
    name: string;
    relationship: string;
    signOffMessage: string;
  };
  entrance: {
    badgeText: string;
    title: string;
    subtitle: string;
    buttonText: string;
  };
  hero: {
    badgeText: string;
    title: string;
    taglineBefore: string;
    highlightText: string;
    taglineAfter: string;
    scrollHint: string;
    heroImage: string;
  };
  chapters: StoryChapter[];
  friendshipCardsSection: {
    badge: string;
    title: string;
    subtitle: string;
    cards: FriendshipCard[];
  };
  quotesSection: {
    quote1: string;
    quote2: string;
    quote3: string;
  };
  cakeSection: {
    badge: string;
    title: string;
    subtitle: string;
    tapToRevealTitle: string;
    tapToRevealSubtitle: string;
    instructionBannerTitle: string;
    instructionBannerSubtitle: string;
    celebrationTitle: string;
    celebrationSubtitle: string;
    blowAllButtonText: string;
    reLightButtonText: string;
  };
  lanternsSection: {
    badge: string;
    title: string;
  };
  finaleSection: {
    badge: string;
    titleLine1: string;
    titleLine2: string;
    bridgeText: string;
    nameText: string;
    wishesParagraphs: string[];
    signOffPreText: string;
    signOffRelationship: string;
    signOffName: string;
    footerNote: string;
  };
  audio: {
    backgroundMusic: string;
    volume: number;
  };
}

const FRIEND_NAME = "Rida";
const NICKNAME = "Riddi Piddi";
const SENDER_NAME = "Hashir";

export const BIRTHDAY_CONFIG: BirthdayConfig = {
  birthdayPerson: {
    name: FRIEND_NAME,
    nickname: `${NICKNAME} ✨`,
    age: 0,
  },
  sender: {
    name: SENDER_NAME,
    relationship: "Someone who loves you",
    signOffMessage: `Made with all my love for ${FRIEND_NAME}'s birthday 💗`,
  },
  entrance: {
    badgeText: "💗 MADE WITH LOVE, FOR YOU 💗",
    title: `HAPPY BIRTHDAY ${FRIEND_NAME.toUpperCase()}!! 💗`,
    subtitle:
      "janu manu i made u something and im gonna send it to u this sham ko. open it ok??",
    buttonText: "OPEN YOUR SPECIAL GIFT 🎁",
  },
  hero: {
    badgeText: "💗 HAPPY BIRTHDAY MY LOVE 💗",
    title: `${FRIEND_NAME} ✨`,
    taglineBefore: "To",
    highlightText: `my ${NICKNAME}`,
    taglineAfter:
      "— u are litr the cutest girl alive and i love u so much its stupid. this whole thing is urs.",
    scrollHint: "Scroll to explore",
    heroImage: "./assets/hero.png",
  },
  chapters: [
    {
      id: "chapter-1",
      badge: "Chapter One",
      title: "WOHOOO ITS UR B'DAY",
      paragraphs: [
        "ok so today is the best day of the year bc its YOUR b'day. like obviously.",
        "i cant send u real gifts rn and it makes me so sad yar ☹️ but i made u THIS instead so... open everything ok",
      ],
      image: "./assets/intro.png",
      imageAlt: "A golden gift for Rida",
    },
    {
      id: "chapter-3",
      badge: "Chapter Three",
      title: "UR SO PRETTY SHUT UP",
      paragraphs: [
        "u are litr the best person ever and i need u to know that. like actually know it, not js hear it.",
        "and stop saying ur not pretty bc thats litr the biggest lie ever told. u are SO cute its not even fair. okay?? okay.",
      ],
      image: "./assets/wings.png",
      imageAlt: "Golden wings",
    },
    {
      id: "chapter-4",
      badge: "Chapter Four",
      title: "PUT THE BOOKS DOWN",
      paragraphs: [
        "new rule: no parhai today. not even 'js one page'. books will be fine without u for one day, i checked.",
        "go out w ur family, eat smth good, and have the best time ever. thats ur only homework today and its mandatory 😌",
      ],
      image: "./assets/friendship.png",
      imageAlt: "Love constellation",
    },
    {
      id: "chapter-5",
      badge: "Chapter Five",
      title: "MY FAVORITE HUMAN",
      paragraphs: [
        "u make me so happy u dont even get it. like my whole day flips the second u text me.",
        "u deserve everything good meri jan. EVERYTHING. so today we celebrate u like the queen u are.",
      ],
      image: "./assets/heart.png",
      imageAlt: "Golden heart",
    },
    {
      id: "chapter-6",
      badge: "Chapter Six",
      title: "MY FAV NOTIFICATION",
      paragraphs: [
        "late night talks w u are litr the best part of my day. i be waiting for ur texts like its my job.",
        "ur my person ok. my janu manu. and im never letting go so dont even try.",
      ],
      image: "./assets/book.png",
      imageAlt: "Our storybook",
    },
    {
      id: "chapter-7",
      badge: "Chapter Seven",
      title: "ONE MORE TIME",
      paragraphs: [
        "happy birthday again my love 💗 i js wanted u to know ur so loved. like SO loved.",
        "now go enjoy ur day and smile lots bc ur smile is my fav thing in the world. okay bye. LOVE U.",
      ],
      image: "./assets/tree.png",
      imageAlt: "Tree of love",
    },
  ],
  friendshipCardsSection: {
    badge: "Chapter Two",
    title: "STUFF I LOVE ABOUT U",
    subtitle: "tap them all. no skipping allowed.",
    cards: [
      {
        emoji: "🌸",
        title: NICKNAME,
        text: "my special name for u and ONLY u. anyone else tries it and im fighting them.",
      },
      {
        emoji: "✨",
        title: "UR LAUGH",
        text: "pls never stop laughing ok. its my fav sound in the world.",
      },
      {
        emoji: "💛",
        title: "UR HEART",
        text: "u care abt everyone sm and its the cutest thing ever. too pure for this world tbh.",
      },
      {
        emoji: "🌙",
        title: "3AM U",
        text: "sleepy u is elite. extra silly extra cute. top tier.",
      },
      {
        emoji: "🎯",
        title: "MY JANU MANU",
        text: "mine. thats it. thats the whole card.",
      },
      {
        emoji: "🤝",
        title: "US",
        text: "u and me against the world. we always win btw.",
      },
    ],
  },
  quotesSection: {
    quote1:
      "ur not js my gf, ur my best friend and my fav person. all in one. kinda greedy tbh.",
    quote2:
      "distance is so stupid and i hate it. but u make it worth it.",
    quote3:
      "be happy today ok? thats litr ur only job. and ur so good at it.",
  },
  cakeSection: {
    badge: "Interactive Birthday Celebration",
    title: "Blow Out The Candles!",
    subtitle:
      "think of the best wish ever and BLOWWWW. make it a good one 😤✨",
    tapToRevealTitle: "TAP TO REVEAL YOUR BIRTHDAY CAKE!",
    tapToRevealSubtitle: "Something yummy is waiting for you inside ✨",
    instructionBannerTitle: "🕯️ TAP EACH CANDLE OR THE BUTTON BELOW! 🕯️",
    instructionBannerSubtitle:
      "Make your birthday wish and blow out the candles!",
    celebrationTitle: "HAPPY BIRTHDAY MY LOVE!!",
    celebrationSubtitle:
      "IT WORKED!! ur wish is officially in the universe now and its gonna come true bc i said so. happy bday cutie ✨💗",
    blowAllButtonText: "BLOW ALL CANDLES AT ONCE",
    reLightButtonText: "Light Candles Again 🕯️",
  },
  lanternsSection: {
    badge: "Chapter Eight",
    title:
      "every lantern = one wish i made for u. and i wished a LOT so... good luck universe.",
  },
  finaleSection: {
    badge: "💗 HAPPY BIRTHDAY MERI JAN 💗",
    titleLine1: "HAPPIEST",
    titleLine2: "BIRTHDAY",
    bridgeText: "To My",
    nameText: `${FRIEND_NAME.toUpperCase()}`,
    wishesParagraphs: [
      `ok one last time: HAPPY BIRTHDAY ${FRIEND_NAME.toUpperCase()}!! i love u so much and i hope today is as amazing as u are.`,
      "now go have fun w ur family and eat cake and DONT study. i'll know if u do. i have spies.",
      "ur my everything janu manu. mwah. forever urs 💗",
    ],
    signOffPreText: "Forever and always, with all my heart",
    signOffRelationship: "YOURS ONLY",
    signOffName: SENDER_NAME.toUpperCase(),
    footerNote: `Made with all my love for ${FRIEND_NAME}'s birthday 💗💗💗`,
  },
  audio: {
    backgroundMusic: "./audio/birthday.mp3",
    volume: 0.6,
  },
};
