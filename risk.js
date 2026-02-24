// risk.js
const calculatePositionSize = (accountBalance, edgeStrength, volatility) => {
  const kelly = (edgeStrength / (volatility * volatility)) * 0.5; // Half-Kelly
  let size = accountBalance * Math.min(kelly, config.maxRiskPerTrade);

  size = Math.min(size, config.maxPositionUSD);
  size = Math.max(size, config.minPositionUSD);

  if (dailyLoss > config.maxDailyLoss || drawdown > 0.15) {
    return 0; // emergency stop
  }
  return size;
};
