export const slideOutVariant = {
  initial: {
    x: 50,
    opacity: 0,
  },
  final: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      type: 'tween',
    },
  },
  exit: {
    x: -25,
    opacity: 0,
    transition: {
      duration: 0.5,
      type: 'tween',
    },
  },
};
