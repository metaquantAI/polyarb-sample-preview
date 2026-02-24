# polyarb-sample-preview
A production-ready Binance x Polymarket latency bot package built to detect BTC micro-impulses, check stale 5-minute BTC markets, and execute fast with risk controls
# 🟢 PolyArb – Public Sample Preview

**Binance × Polymarket Latency Arbitrage Bot**

[![Preview](https://img.shields.io/badge/Preview-Production_Ready-00ff9f)](https://github.com/metaquantAI/polyarb-sample-preview)
[![Price](https://img.shields.io/badge/Full_Pack-$99_Lifetime-00f0ff)](https://metaquantuniverse.com/polymarket)

This repository is a **public preview** of the real production code from the full PolyArb lifetime package.

You are seeing clean, professional, battle-tested code — exactly the same quality buyers get in the $99 pack.

---

## ⚠️ This is ONLY a preview

- Full source code = 20+ files + .EXE Launcher + private updates
- This preview shows the architecture and code style so you know exactly what you’re buying

---

## 📁 What’s Inside This Preview

```bash
polyarb-sample-preview/
├── impulse.js              # Micro-impulse detector (EMA + velocity + OFD)
├── lag.js                  # Dynamic LagEstimator™ (real-time repricing check)
├── risk.js                 # Half-Kelly risk engine + drawdown breaker
├── binance.js              # Real WebSocket streams (aggTrade, bookTicker, kline)
├── polymarket.js           # CLOB integration + EIP-712 signing
├── dashboard-server.js     # Live WebSocket dashboard server
├── config.js               # .env driven configuration
├── .env.example
├── README.md
└── package.json
