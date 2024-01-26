const SPACER_STEP = 4;

const getSpacerStyle = (size = 1) => {
  return {
    height: size * SPACER_STEP,
  };
};

export { getSpacerStyle };
