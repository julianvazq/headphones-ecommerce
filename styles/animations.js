export const slideOutVariant = {
  initial: {
    translateX: -50,
    opacity: 0,
  },
  final: {
    translateX: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      type: 'tween',
    },
  },
  exit: {
    translateX: 25,
    opacity: 0,
    transition: {
      type: 'tween',
    },
  },
};
