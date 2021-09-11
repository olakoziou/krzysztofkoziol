export const colors = (alpha = 1) => {
  return {
    navy1: `rgba(15, 32, 39, ${alpha})`,
    navy2: `rgba(32, 58, 67, ${alpha})`,
    navy3: `rgba(44, 83, 100, ${alpha})`,
    orange: `rgba(246, 147, 5, ${alpha})`,
    violet: `rgba(98, 85, 151, ${alpha})`,
    grey: `rgba(232, 228, 211, ${alpha})`,
    darkGrey: `rgba(15, 15, 15, ${alpha})`,
  };
};

export const breakpoints = (bp) => {
  if (bp === 'xsm') {
    return `(min-width: 350px)`;
  } else if (bp === 'sm') {
    return `(min-width: 600px)`;
  } else if (bp === 'md') {
    return `(min-width: 960px)`;
  } else if (bp === 'lg') {
    return `(min-width: 1280px)`;
  } else if (bp === 'xl') {
    return `(min-width: 1920px)`;
  }
};
