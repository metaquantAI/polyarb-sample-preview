// lag.js – the real edge protector
const isStillValidEdge = async (polymarketMid, binanceMoveTime) => {
  const lag = await measureCurrentLag();
  const timeSinceMove = Date.now() - binanceMoveTime;
  return timeSinceMove < lag + config.lagBufferMs;
};
