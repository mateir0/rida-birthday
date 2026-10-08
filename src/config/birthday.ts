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
    title: `HAPPPPYYYY BIRTHDAY ${FRIEND_NAME.toUpperCase()}!! 💗`,
    subtitle:
      "MY CUEST MUTEST PRETTIEST JANU MANU — I made you something special and I'm sending it to you this sham. Ready??",
    buttonText: "OPEN YOUR SPECIAL GIFT 🎁",
  },
  hero: {
    badgeText: "💗 HAPPPPYYYY BIRTHDAY MY LOVE 💗",
    title: `${FRIEND_NAME} ✨`,
    taglineBefore: "To",
    highlightText: `my ${NICKNAME}`,
    taglineAfter:
      "— MY CUEST MUTEST PRETTIEST BEAUTIFUL AND SO SO SO CUTEEEEEEE JANU MANU. I LOVE YOU SO MUCHHHHHHH. This whole thing is for YOU.",
    scrollHint: "Scroll to explore",
    heroImage: "./assets/hero.png",
  },
  chapters: [
    {
      id: "chapter-1",
      badge: "Chapter One",
      title: "THE DAY MY JANU MANU WAS BORN",
      paragraphs: [
        "HAPPPPYYYY HAPPY BIRTHDAY TO MY CUEST MUTEST PRETTIEST BEAUTIFUL AND SO SO SO CUTEEEEEEE JANU MANU!! I LOVE YOU SO MUCHHHHHHHHHHH 💗💗",
        "I wish I could send you gifts yar ☹️☹️ BUT ISSSOKKK — I prepared something for you instead, and you're looking at it RIGHT NOW. This whole little world is yours.",
      ],
      image: "./assets/intro.png",
      imageAlt: "A golden gift for Rida",
    },
    {
      id: "chapter-3",
      badge: "Chapter Three",
      title: "STOP TALKING BAD ABOUT YOURSELF",
      paragraphs: [
        "RIDA YOU'RE LIKE THE BEST HUMAN BEING EVER AND I LOVE U SO MUCH. And I JS DON'T LIKE HOW U TALK BAD ABOUT YOURSELF.",
        "Don't EVER EVER say you're not pretty or anything, okay?? YOU ARE LITR SO CUTE, SO PRETTY. My eyes work perfectly fine — trust me on this one.",
      ],
      image: "./assets/wings.png",
      imageAlt: "Golden wings",
    },
    {
      id: "chapter-4",
      badge: "Chapter Four",
      title: "THE NO-STUDY CHALLENGE",
      paragraphs: [
        "OKAY GIRL LISTEN. AJ DON'T TOUCH YOUR BOOOKS. Don't sirf study today — it's YOUR b'day!! Go out with your family, eat good food, and JS LIKE FOCUS ON HAVING A GOOOD TINEEEEEEEEEE.",
        "Don't worry bout anything else today. AJ APNE BAS ENJOY KARNA HAI. Your books will survive one day without you, I promise.",
      ],
      image: "./assets/friendship.png",
      imageAlt: "Love constellation",
    },
    {
      id: "chapter-5",
      badge: "Chapter Five",
      title: "MWAHHH 💗",
      paragraphs: [
        "YOU BRING SO SO MUCH HAPPINESS TO ME, MERI JANNN. Like you don't even understand?? You're such an amazing person and you deserve EVERYTHING.",
        "So celebrate accordingly!! Be happy, eat cake, and remember someone loves you SOOOOO MUCHJHH. MWAHHH.",
      ],
      image: "./assets/heart.png",
      imageAlt: "Golden heart",
    },
    {
      id: "chapter-6",
      badge: "Chapter Six",
      title: "OUR LITTLE UNIVERSE",
      paragraphs: [
        "Every love story is cute but ours?? Ours is the CUTEST, no debate. The late-night talks, the silly jokes, the way you just get me.",
        "And we're just getting started, JANU MANU. The best chapters are still coming — I can feel it.",
      ],
      image: "./assets/book.png",
      imageAlt: "Our storybook",
    },
    {
      id: "chapter-7",
      badge: "Chapter Seven",
      title: "FOREVER YOURS, OKAY?",
      paragraphs: [
        "Like literally forever. You're my person and I'm not sharing you with anyone, sorry not sorry.",
        "HAPPUUYY BIRTHDAY AGAINNNNNN, meri jan 💗💗💗💗",
      ],
      image: "./assets/tree.png",
      imageAlt: "Tree of love",
    },
  ],
  friendshipCardsSection: {
    badge: "Chapter Two",
    title: "THINGS I LOVE ABOUT YOU",
    subtitle: "Tap each card okay?? Every single one is true.",
    cards: [
      {
        emoji: "🌸",
        title: NICKNAME,
        text: "My silly little name for you. You're the only janu manu in the whole world, and you're MINE.",
      },
      {
        emoji: "✨",
        title: "SO PRETTY",
        text: "Don't ever talk bad about yourself again, okay?? You are LITR so cute, so pretty. My eyes are perfect. Case closed.",
      },
      {
        emoji: "💛",
        title: "MY HAPPINESS",
        text: "You bring SO SO much happiness to me. My whole mood does a backflip the second you text me.",
      },
      {
        emoji: "🌙",
        title: "MIDNIGHT TALKS",
        text: "Best part of my day = talking to you while the whole world is asleep. Don't ever stop.",
      },
      {
        emoji: "🎯",
        title: "MERI JANNN",
        text: "Meri jannnn, my everything. I love you so much it's actually stupid.",
      },
      {
        emoji: "🤝",
        title: "PARTNER IN CRIME",
        text: "Every plan, every silly idea, every 3am thought — I want you there for all of it. Forever.",
      },
    ],
  },
  quotesSection: {
    quote1:
      "HAPPPPYYYY BIRTHDAY TO THE PRETTIEST GIRL IN THE WORLD. Yes I'm talking about you. Don't argue.",
    quote2:
      "You deserve all the happiness, all the cake, and all my love. Today and every single day.",
    quote3:
      "AJ APNE BAS ENJOY KARNA HAI — everything else can wait. It's YOUR day, janu manu. 💗",
  },
  cakeSection: {
    badge: "Interactive Birthday Celebration",
    title: "Blow Out The Candles!",
    subtitle:
      "Make a wish janu manu — make it a GOOD one!! Then blow out the candles ✨",
    tapToRevealTitle: "TAP TO REVEAL YOUR BIRTHDAY CAKE!",
    tapToRevealSubtitle: "Something yummy is waiting for you inside ✨",
    instructionBannerTitle: "🕯️ TAP EACH CANDLE OR THE BUTTON BELOW! 🕯️",
    instructionBannerSubtitle:
      "Make your birthday wish and blow out the candles!",
    celebrationTitle: "HAPPPPYYYY BIRTHDAY MY LOVE!!",
    celebrationSubtitle:
      "YOU DID IT!! Now close your eyes and wish for EVERYTHING — you deserve it ALL, meri jan. Happy birthday to the cutest girl alive ✨💗",
    blowAllButtonText: "BLOW ALL CANDLES AT ONCE",
    reLightButtonText: "Light Candles Again 🕯️",
  },
  lanternsSection: {
    badge: "Chapter Eight",
    title:
      "May every wish you make tonight fly up like these lanterns — and may they ALL come true ✨",
  },
  finaleSection: {
    badge: "💗 HAPPPPYYYY BIRTHDAY MERI JAN 💗",
    titleLine1: "HAPPIEST",
    titleLine2: "BIRTHDAY",
    bridgeText: "To My",
    nameText: `${FRIEND_NAME.toUpperCase()}`,
    wishesParagraphs: [
      `HAPPUUYY BIRTHDAY AGAINNNNNN, my ${NICKNAME}!! I LOVE YOU SO MUCHHHHHHH and I just want you to have the BEST day ever.`,
      "Go out with your family, eat lots of cake, DON'T touch your books, and just enjoy. AJ APNE BAS ENJOY KARNA HAI, okay??",
      "You bring so so much happiness to me and you deserve everything. MWAHHH. Forever yours. 💗",
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
