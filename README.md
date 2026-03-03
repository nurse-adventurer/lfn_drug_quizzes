# 💊 LFN Drug Formulary Quizzes

**Interactive, offline-ready quiz app for Life Flight Network flight nurses and critical care transport professionals.**

Built to reinforce drug formulary protocols through scenario-based questions, clinical reasoning, and detailed rationales — accessible anywhere, even without internet.

---

## Features

- **Scenario-based quizzes** with vital signs, clinical context, and three-tier rationales (mechanism, clinical pearl, protocol reference)
- **Tabbed drug reference** for each medication — Dosing & Indications, Pharmacology, Considerations, Warnings & Precautions
- **Works offline** after first visit — study during transport, at remote bases, or without cell service
- **Installable as an app** on iPhone, Android, and desktop with a home screen icon
- **Passcode protected** — only accessible to authorized personnel

---

## Available Quizzes

| Drug | Section | Drug Class | Questions |
|------|---------|------------|-----------|
| Hypertonic Saline 3% | 12.39 | Osmotic Agent | 10 |
| Labetalol | 12.43 | Mixed Alpha & Beta Blocker | 10 |
| Lidocaine | 12.46 | Antiarrhythmic Class Ib / Local Anesthetic | 10 |

**Coming soon:** Amiodarone, Ketamine, Midazolam, Epinephrine, Fentanyl, and more.

---

## Getting Started

1. Open the app URL in your phone's browser (Safari for iPhone, Chrome for Android)
2. Enter the **access code** when prompted (contact your instructor for the code)
3. Check **"Remember on this device"** so you won't be asked again
4. Tap any quiz card to start studying

---

## Install as an App

Installing is optional but recommended — it gives you a home screen icon and full-screen experience.

### iPhone / iPad

1. Open the URL in **Safari** (not Chrome)
2. Tap the **Share** button (↑)
3. Tap **"Add to Home Screen"**
4. Tap **"Add"**

### Android

1. Open the URL in **Chrome**
2. Tap the install banner, or tap **⋮ Menu → "Install app"**

### Desktop

1. Open in Chrome or Edge
2. Click the install icon in the address bar

---

## Offline Use

After opening the app once with internet, all quizzes are cached on your device. You can then use the app with **no internet connection** — just open it from your home screen as usual.

---

## Signing Out

On a shared device, scroll to the bottom of the quiz menu and tap **🔒 Sign Out** to lock the app. The next person will need to enter the access code.

---

## Troubleshooting

| Issue | Solution |
|-------|----------|
| App won't load | Make sure you have internet for the first visit. Try clearing browser cache and reloading. |
| "Add to Home Screen" not showing | iPhone requires Safari. Android requires Chrome. |
| Access code not working | Codes are case-sensitive. Contact your instructor for the current code. |
| Quiz looks broken | Try refreshing. If installed, delete from home screen and re-add. |
| Can't access offline | Open the app once with internet first to cache content. |

---

## Access Code Management

The app is protected by a passcode gate. The default access code is set in the code and can be changed at any time.

### To change the access code:

1. In **`index.html`**, find the marked block near the top of the `<script>` section:
   ```js
   const ACCESS_CODE = 'LFN2025';
   ```
   Replace `'LFN2025'` with your new code.

2. In each file inside the **`quizzes/`** folder, find line 5:
   ```js
   var c="LFN2025"
   ```
   Replace `"LFN2025"` with the same new code.

3. Commit and push. Anyone with the old code saved will be prompted for the new one automatically.

---

## Deploy to GitHub Pages

1. Create a new GitHub repository named **`lfn_drug_quizzes`**
2. Upload all files to the repository root: `index.html`, `sw.js`, `manifest.json`, `README.md`, and the `quizzes/` folder
3. Go to **Settings → Pages**
4. Set source to **Deploy from a branch → main → / (root) → Save**
5. Your app will be live at: `https://YOUR-USERNAME.github.io/lfn_drug_quizzes/`

---

## Contact

Ruthie Clearwater — [rclearwater@lifeflight.org](mailto:rclearwater@lifeflight.org)

For new quiz suggestions, bug reports, or access code requests.

---

## Disclaimer

This is a personal study resource and does not replace official LFN training or protocols. Always refer to current **Life Flight Network Patient Care Guidelines** for clinical decisions. Protocol content is derived from LFN formulary documentation and is intended solely for educational reinforcement by authorized personnel.

---

© All rights reserved. Proprietary educational materials based on Life Flight Network clinical protocols. Unauthorized reproduction, distribution, or commercial use is prohibited.
