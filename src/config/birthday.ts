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
  // 1. Basic Info
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

  // 2. Entrance Gate (Screen before opening the gift)
  entrance: {
    badgeText: string;
    title: string;
    subtitle: string;
    buttonText: string;
  };

  // 3. Hero Section (First visible screen after entrance)
  hero: {
    badgeText: string;
    title: string;
    taglineBefore: string;
    highlightText: string;
    taglineAfter: string;
    scrollHint: string;
    heroImage: string;
  };

  // 4. Story Chapters (Timeline & Parallax Sections)
  chapters: StoryChapter[];

  // 5. Interactive Flip Cards (Chapter Two)
  friendshipCardsSection: {
    badge: string;
    title: string;
    subtitle: string;
    cards: FriendshipCard[];
  };

  // 6. Emotional Quotes Section
  quotesSection: {
    quote1: string;
    quote2: string;
    quote3: string;
  };

  // 7. Interactive Birthday Cake Section
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

  // 8. Lanterns Section
  lanternsSection: {
    badge: string;
    title: string;
  };

  // 9. Grand Finale Section
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

  // 10. Background Music
  audio: {
    backgroundMusic: string;
    volume: number;
  };
}

/**
 * 🎂 RIDA'S BIRTHDAY — customized October 8, 2026
 * Romantic tone. No age number (age-agnostic copy).
 */
const FRIEND_NAME = "Rida";
const NICKNAME = "Riddi Piddi";
const SENDER_NAME = "Hashir";

export const BIRTHDAY_CONFIG: BirthdayConfig = {
  // ─── 1. BASIC INFORMATION ───
  birthdayPerson: {
    name: FRIEND_NAME,
    nickname: `${NICKNAME} ✨`,
    age: 0,
  },
  sender: {
    name: SENDER_NAME,
    relationship: "Someone who loves you",
    signOffMessage: `Made with all my love for ${FRIEND_NAME}'s birthday 💛`,
  },

  // ─── 2. ENTRANCE GATE ───
  entrance: {
    badgeText: "💛 MADE WITH LOVE, FOR YOU 💛",
    title: `Happy Birthday, ${FRIEND_NAME} ✨`,
    subtitle: `My ${NICKNAME} — my favorite person in every universe. I built you a little world of gold and starlight, because you deserve to be celebrated like the queen you are. Ready?`,
    buttonText: "OPEN YOUR SPECIAL GIFT 🎁",
  },

  // ─── 3. HERO SECTION ───
  hero: {
    badgeText: "💛 HAPPY BIRTHDAY MY LOVE 💛",
    title: `${FRIEND_NAME} ✨`,
    taglineBefore: "To",
    highlightText: `my ${NICKNAME}`,
    taglineAfter:
      "— the girl who stole my heart and makes every single day brighter. This is all for you.",
    scrollHint: "Scroll to explore",
    heroImage: "./assets/hero.png",
  },

  // ─── 4. STORY CHAPTERS ───
  chapters: [
    {
      id: "chapter-1",
      badge: "Chapter One",
      title: "The Day My World Changed",
      paragraphs: [
        `They say the best things come into your life when you least expect them. You didn't just walk into my life, ${NICKNAME} — you made it home.`,
        "Today we celebrate the day the universe decided I deserved someone as wonderful as you.",
      ],
      image: "./assets/intro.png",
      imageAlt: "A golden gift for Rida",
    },
    {
      id: "chapter-3",
      badge: "Chapter Three",
      title: "You Give Me Wings",
      paragraphs: [
        "Behind every dream I chase, there's you — believing in me even on the days I don't believe in myself.",
        "Your love is the reason I dare to fly higher. Everything good in me has your fingerprints on it.",
      ],
      image: "./assets/wings.png",
      imageAlt: "Golden wings",
    },
    {
      id: "chapter-4",
      badge: "Chapter Four",
      title: "Written in the Stars",
      paragraphs: [
        "Out of billions of people in this world, my heart found you. If that's not destiny, I don't know what is.",
        `Like a constellation, every little thing about you — your laugh, your warmth, your spark — lights up my entire sky. Happy birthday, ${NICKNAME}.`,
      ],
      image: "./assets/friendship.png",
      imageAlt: "Love constellation",
    },
    {
      id: "chapter-5",
      badge: "Chapter Five",
      title: "My Favorite Person",
      paragraphs: [
        "Your laugh is my favorite sound. Your smile is my favorite sight.",
        "And you — you're my favorite everything. Today, the whole world gets to celebrate what I celebrate every day: you.",
      ],
      image: "./assets/heart.png",
      imageAlt: "Golden heart",
    },
    {
      id: "chapter-6",
      badge: "Chapter Six",
      title: "Our Story",
      paragraphs: [
        "Every love story is beautiful, but ours is my favorite — the late-night talks, the silly jokes, the way you just get me.",
        "And the best part? We're still writing it. The next chapters are going to be even better.",
      ],
      image: "./assets/book.png",
      imageAlt: "Our storybook",
    },
    {
      id: "chapter-7",
      badge: "Chapter Seven",
      title: "Forever & Always",
      paragraphs: [
        "Like the deepest roots, what I feel for you only grows stronger with time — through every season, every storm, every sunshine.",
        `Happy birthday, my love. Here's to us — today, tomorrow, always.`,
      ],
      image: "./assets/tree.png",
      imageAlt: "Tree of love",
    },
  ],

  // ─── 5. INTERACTIVE FLIP CARDS ───
  friendshipCardsSection: {
    badge: "Chapter Two",
    title: "Reasons You're My Everything",
    subtitle: "Tap each card — every one of them is true.",
    cards: [
      {
        emoji: "🌸",
        title: NICKNAME,
        text: "The name only I call you — because you're the only one who makes my heart do that little jump.",
      },
      {
        emoji: "✨",
        title: "Your Smile",
        text: "One smile from you and my worst days turn into my best ones. It's basically magic at this point.",
      },
      {
        emoji: "💛",
        title: "My Home",
        text: `Home isn't a place, ${NICKNAME}. It's wherever you are — your laugh, your warmth, your arms.`,
      },
      {
        emoji: "🌙",
        title: "Midnight Us",
        text: "My favorite time of day is whenever I'm talking to you — even if the whole world is asleep.",
      },
      {
        emoji: "🎯",
        title: "My Dream Come True",
        text: "I used to wish on stars. Then I met you, and I stopped — because my wish had already come true.",
      },
      {
        emoji: "🤝",
        title: "My Person",
        text: "In every lifetime, in every universe, I'd find you and I'd choose you. Every single time.",
      },
    ],
  },

  // ─── 6. QUOTES ───
  quotesSection: {
    quote1:
      "I love you not because of who you are, but because of who I am when I'm with you.",
    quote2:
      "You are my today, my tomorrow, and every beautiful moment in between.",
    quote3:
      "If I had one wish, I'd wish to relive every moment with you — over and over, forever.",
  },

  // ─── 7. INTERACTIVE BIRTHDAY CAKE SECTION ───
  cakeSection: {
    badge: "Interactive Birthday Celebration",
    title: "Blow Out The Candles!",
    subtitle:
      "Make your birthday wish, blow out the candles, and watch the magic happen! ✨",
    tapToRevealTitle: "TAP TO REVEAL YOUR BIRTHDAY CAKE!",
    tapToRevealSubtitle: "A special surprise is waiting for you inside ✨",
    instructionBannerTitle: "🕯️ TAP EACH CANDLE OR THE BUTTON BELOW! 🕯️",
    instructionBannerSubtitle:
      "Make your birthday wish and blow out the candles!",
    celebrationTitle: "HAPPY BIRTHDAY MY LOVE!",
    celebrationSubtitle: `You blew out all the candles! Close your eyes, my ${NICKNAME} — everything you wished for is already on its way. Happy birthday to the girl who has my whole heart ✨`,
    blowAllButtonText: "BLOW ALL CANDLES AT ONCE",
    reLightButtonText: "Light Candles Again 🕯️",
  },

  // ─── 8. LANTERNS SECTION ───
  lanternsSection: {
    badge: "Chapter Eight",
    title:
      "May every dream we dream together take flight like these lanterns into the infinite sky",
  },

  // ─── 9. GRAND FINALE SECTION ───
  finaleSection: {
    badge: "💛 HAPPY BIRTHDAY MY LOVE 💛",
    titleLine1: "HAPPIEST",
    titleLine2: "BIRTHDAY",
    bridgeText: "To My",
    nameText: `${FRIEND_NAME.toUpperCase()} 👑`,
    wishesParagraphs: [
      `Happy birthday, my ${NICKNAME}! I wish you a year as beautiful as your soul — full of laughter, success, and all the love you give so freely, returned to you a hundredfold.`,
      "May your smile always shine brighter than every star in the night sky.",
      "Thank you for being the best part of my life. I love you — today, tomorrow, always.",
    ],
    signOffPreText: "Forever and always, with all my heart",
    signOffRelationship: "YOURS ONLY",
    signOffName: SENDER_NAME.toUpperCase(),
    footerNote: `Made with all my love for ${FRIEND_NAME}'s birthday 💛`,
  },

  // ─── 10. BACKGROUND MUSIC ───
  audio: {
    backgroundMusic: "./audio/birthday.mp3",
    volume: 0.6,
  },
};
