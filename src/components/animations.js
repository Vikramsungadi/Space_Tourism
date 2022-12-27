export const slideFromTop = {
  hidden: { translateY: "-100%" },
  show: { translateY: 0 },
};

export const slideFromLeft = {
  hidden: { translateX: "-100%" },
  show: { translateX: 0 },
};

export const fadeIn = {
  hidden: { opacity: 0 },
  show: { opacity: 1 },
};
export const parentMotionContainer = {
  hidden: { opacity: 1 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.5,
      when: "beforeChildren",
    },
  },
};
