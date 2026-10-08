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
    title: `IT'S YOUR DAY ${FRIEND_NAME.toUpperCase()}!! 💗`,
    subtitle:
      "My janu manu — I stayed up making you something, and it's finally ready. This sham, this is all for you. Ready??",
    buttonText: "OPEN YOUR SPECIAL GIFT 🎁",
  },
  hero: {
    badgeText: "💗 HAPPY BIRTHDAY MY LOVE 💗",
    title: `${FRIEND_NAME} ✨`,
    taglineBefore: "To",
    highlightText: `my ${NICKNAME}`,
    taglineAfter:
      "— the cutest girl on the planet and the owner of my whole heart. I made this entire thing just for YOU.",
    scrollHint: "Scroll to explore",
    heroImage: "./assets/hero.png",
  },
  chapters: [
    {
      id: "chapter-1",
      badge: "Chapter One",
      title: "TODAY IS ALL ABOUT YOU",
      paragraphs: [
        "OKAY SO. Out of all 365 days, today is my favorite — because it's the day YOU showed up in this world. The universe really outdid itself with this one.",
        "I couldn't wrap you a present yar, so I built you this instead ☹️💗. It's not much, but I made it with my own two hands and my whole heart.",
      ],
      image: "./assets/intro.png",
      imageAlt: "A golden gift for Rida",
    },
    {
      id: "chapter-3",
      badge: "Chapter Three",
      title: "MY EYES WORK FINE, OKAY?",
      paragraphs: [
        "Rida, you're genuinely the sweetest person I know, and it makes me SO happy just having you around.",
        "But listen — no more of that 'I'm not pretty' nonsense, okay?? Have you SEEN you?? You're adorable and that's final. No appeals allowed.",
      ],
      image: "./assets/wings.png",
      imageAlt: "Golden wings",
    },
    {
      id: "chapter-4",
      badge: "Chapter Four",
      title: "BOOKS ARE BANNED TODAY",
      paragraphs: [
        "New rule, effective immediately: no studying today. Not even 'just one chapter'. Your books can wait — they've waited this long, one more day won't kill them.",
        "Today's agenda: go out with your family, eat something delicious, and just have the BEST time. That's an order, soldier.",
      ],
      image: "./assets/friendship.png",
      imageAlt: "Love constellation",
    },
    {
      id: "chapter-5",
      badge: "Chapter Five",
      title: "MY FAVORITE HUMAN",
      paragraphs: [
        "You make everything better just by being in it, meri jan. Bad days, good days — all better with you around.",
        "If I could, I'd hand you the moon tonight. For now, this website and all my love will have to do.",
      ],
      image: "./assets/heart.png",
      imageAlt: "Golden heart",
    },
    {
      id: "chapter-6",
      badge: "Chapter Six",
      title: "OUR LITTLE UNIVERSE",
      paragraphs: [
        "The late-night talks, the dumb jokes, the way you laugh at my worst puns — I wouldn't trade any of it for anything.",
        "You're my favorite notification, my favorite distraction, my favorite everything. And we're just getting started, janu manu.",
      ],
      image: "./assets/book.png",
      imageAlt: "Our storybook",
    },
    {
      id: "chapter-7",
      badge: "Chapter Seven",
      title: "FOREVER YOURS, OKAY?",
      paragraphs: [
        "Just so we're clear: you're not getting rid of me. Ever. I'm like glitter — once I'm on you, I'm there forever.",
        "Happy birthday once more, my love 💗💗💗",
      ],
      image: "./assets/tree.png",
      imageAlt: "Tree of love",
    },
  ],
  friendshipCardsSection: {
    badge: "Chapter Two",
    title: "THINGS I LOVE ABOUT YOU",
    subtitle: "Tap them all, okay? No skipping.",
    cards: [
      {
        emoji: "🌸",
        title: NICKNAME,
        text: "Only I get to call you that. It's the law. My law.",
      },
      {
        emoji: "✨",
        title: "THAT SMILE",
        text: "Scientifically proven* to fix my worst moods in under 3 seconds. (*not scientifically proven, but trust me)",
      },
      {
        emoji: "💛",
        title: "YOUR HEART",
        text: "The way you care about everyone?? You're too good for this world, honestly.",
      },
      {
        emoji: "🌙",
        title: "3AM YOU",
        text: "Sleepy, silly, extra cute you. My favorite version. Don't tell the other versions.",
      },
      {
        emoji: "🎯",
        title: "MY PERSON",
        text: "In every universe, I'd pick you. Even the one where we're both cats.",
      },
      {
        emoji: "🤝",
        title: "US",
        text: "You + me + snacks + no plans = perfect day. That's the formula. Don't question it.",
      },
    ],
  },
  quotesSection: {
    quote1:
      "Some people are birthdays themselves — they make every day feel like a celebration. You're one of them.",
    quote2:
      "I don't need a genie. I already got my wish — it's you.",
    quote3:
      "Today, the only homework is happiness. And you're already top of the class.",
  },
  cakeSection: {
    badge: "Interactive Birthday Celebration",
    title: "Blow Out The Candles!",
    subtitle:
      "Close your eyes, think of the BEST wish, and blow!! I'll handle the rest ✨",
    tapToRevealTitle: "TAP TO REVEAL YOUR BIRTHDAY CAKE!",
    tapToRevealSubtitle: "Something yummy is waiting for you inside ✨",
    instructionBannerTitle: "🕯️ TAP EACH CANDLE OR THE BUTTON BELOW! 🕯️",
    instructionBannerSubtitle:
      "Make your birthday wish and blow out the candles!",
    celebrationTitle: "HAPPY BIRTHDAY MY LOVE!!",
    celebrationSubtitle:
      "WISH GRANTED!! (Probably. The candles and I did our best.) Happy birthday to the cutest girl alive ✨💗",
    blowAllButtonText: "BLOW ALL CANDLES AT ONCE",
    reLightButtonText: "Light Candles Again 🕯️",
  },
  lanternsSection: {
    badge: "Chapter Eight",
    title:
      "Every lantern up there is carrying one of my wishes for you. Spoiler: they're all about you being happy.",
  },
  finaleSection: {
    badge: "💗 HAPPY BIRTHDAY MERI JAN 💗",
    titleLine1: "HAPPIEST",
    titleLine2: "BIRTHDAY",
    bridgeText: "To My",
    nameText: `${FRIEND_NAME.toUpperCase()}`,
    wishesParagraphs: [
      `One more time, nice and loud: HAPPY BIRTHDAY, ${FRIEND_NAME.toUpperCase()}!! I hope today treats you as well as you treat everyone else.`,
      "Now go enjoy with your family, eat way too much cake, and forget your textbooks exist. Doctor's orders. (I'm the doctor.)",
      "I love you endlessly, my janu manu. MWAHHH — forever yours. 💗",
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
