// impulse.js – excerpt from the real bot
const detectImpulse = (priceWindow, config) => {
  const emaFast = calculateEMA(priceWindow, 8);
  const emaSlow = calculateEMA(priceWindow, 21);
  const velocity = calculateVelocity(priceWindow, 5);
  const ofd = calculateOrderFlowDelta();

  return {
    signal: emaFast > emaSlow && 
            velocity > config.minVelocity && 
            ofd > config.minOFD,
    magnitude: Math.abs(emaFast - emaSlow),
    confidence: calculateConfidence(velocity, ofd)
  };
};
