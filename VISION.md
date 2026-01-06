# Aegis OS: The Financial Operating System for Inflationary Economies

## Vision
A single, non-custodial operating system that unifies your liquidity (Crypto + Fiat) and actively protects your purchasing power.

**Core Philosophy:**  
**First, we see the money (Data Harvest). Then, we save it from melting (Inflation Shield).**

---

## 1. The Problem: "Blind & Melting"

Argentines face two simultaneous problems that current apps solve separately, but never together:

### Fragmentation (Blindness)
Money is scattered across Binance, Lemon, Galicia, MercadoPago, and Metamask.  
You never know your real net worth.

### Devaluation (Melting)
Every minute your pesos sit idle, they lose value.  
Traditional budgeting apps (Expense Trackers) are useless because they look at the past, while inflation kills your future.

**Aegis OS fixes this by combining Capital Flow (Visibility) with Inflation Shield (Action).**

---

## 2. The Architecture: "Data Harvest" (The Engine)

**Current Status:** MVP achieved for Binance & Public Wallets.

We do not ask the user to input data. We harvest it.

> **Principle:**  
> "The user does not write their reality; the system reads it."

### Connectivity Layer

#### Crypto (Native)
- Direct connection to CEXs (Binance, Lemon)
- On-chain wallets (EVM / Bitcoin)
- Read-only APIs & public keys

#### Fiat (Open Banking)
- Integration with banks & wallets (Galicia, MercadoPago)
- Detects salary deposits and ARS balances

### Unified Liquidity
All assets (ARS, BTC, ETH, etc.) are normalized into a single **Mental Currency (USDT / USD)**.

**One true number:**  
👉 *Total Spendable Power*

---

## 3. The Brain: The "Shield" Logic (The Value)

Once the data is harvested, the system stops being passive and becomes an active protector.

### A. The "Payday" Autopilot (Salary Splitter)

**Trigger:**  
Email Harvest detects: "Transferencia recibida: $1.000.000 ARS".

**Logic:**  
The system consults the Living Calendar to detect upcoming liabilities (rent, credit card closing dates).

**Action Examples:**
- "Keep 300k ARS for bills due next week."
- "Move $700k ARS to USDT immediately. Dolar MEP spread is favorable."

---

### B. The "Rulo" Scanner (Arbitrage Engine)

**Continuous Scan:**  
Monitors spreads between:
- Blue
- MEP
- CCL
- Crypto (USDT)

**Alert Example:**  
> "Dólar MEP is 5% cheaper than USDT. Opportunity to buy cheap dollars detected."

---

### C. "Modo Argentina" – Debt Management

**Credit Card Reality**
- Harvests *cuotas* (installments), not just current balance
- Projects real future debt

**Cashflow Protection**
- Distinguishes between:
  - **Liabilities:** total debt
  - **Cashflow hit:** what you actually pay this month

---

## 4. The Interface: Calm & Opinionated

### 1️⃣ The Command Center (Dashboard)

- **Net Worth (Real):** displayed in USDT / Blue rate
- **Inflation Decay Meter:**  
  > "Your 200k ARS lost $500 in value since this morning."
- **Binary Actions:**  
  - Shield Now  
  - Hold

---

### 2️⃣ The Living Calendar

- Projects liquidity into the future
- Smart warnings like:
  > "On the 18th, your peso liquidity hits zero. Swap 100 USDT on the 17th."

---

## 5. Technical Stack & Security

### Stack
- **Backend:** Java (Spring Boot)
- **Data:** PostgreSQL (user data) + Redis (real-time rates)
- **Frontend:** React + Tailwind (Neobrutalism Lite)
- **Integrations:** 
  - Crypto: CCXT (Java) or direct Exchange APIs.
  - Fiat: Gmail API (Java client) + Regex Parsers for AR Banks.

### Security Principles
- **Non-Custodial:** We never hold funds
- **Read-Only:** All API keys and Email tokens are strictly read-only
- **Biometric Resume:** App locks immediately when backgrounded

---

## 6. Roadmap to MVP 2.0

### Phase 1 — Done
- Data Harvest for crypto (Binance + public wallets)

### Phase 2 — Current Focus
- Integrate "Rulo Scanner" & "Real Net Worth" calculation (ARS -> USDT).
- Implement Gmail API Connector to auto-detect Fiat movements (MercadoPago/Banks).

### Phase 3
- Living Calendar
- Automated recommendations & smart actions

---

## The Ultimate Promise

**Aegis OS doesn’t just tell you where your money went.**  
It tells you **where your money should go right now to survive inflation.**
