export const variants = {
  start: { opacity: 0.0, y: 10 },
  onView: { opacity: 1, y: 0 },
  showTitle: {
    transition: { ease: "easeInOut", delay: 0.3, duration: 0.4 },
  },
  exitShowTitle: {
    opacity: 0.0,
    y: -10,
    transition: { delay: 0.0, duration: 0.3 },
  },
  showPara: {
    transition: { ease: "easeInOut", duration: 0.4 },
  },
  showAurora: {
    transition: { ease: "easeInOut", duration: 0.8, delay: 0.3 },
  },
};
