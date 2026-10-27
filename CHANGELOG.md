# Exit Strategy (formerly Ponzi Run) — Changelog

## v1.7.9.5 — 2026-10-26
- **Turkish desk checks reworded** (user picked from options): **Referansı ara · 30 dk**, **Sicilini araştır · 1 saat**, **Ağzını ara · 15 dk**, and **Kulak kabart · 20 dk** on withdrawals. In Turkish, the time sits on a second line of the button.
- Matching result labels (Referans:, Sicil:, Ağzından kaçan:, Kulağına gelenler:). The form field is now "Referans", and "sicil araştırması" is used in the black book and crew text.

## v1.7.9.4 — 2026-10-26
- **Turkish fixes from the first read-through.** The paper is now **Gazete** (masthead: Port Ashford Gazetesi). The black book is **Kara liste** and the cover story is **Kılıf**. "Offshore" is now **yurt dışı**. The shop signs in the window read **MANİKÜR** and **REHİNCİ · NAKİT**.
- Names on ID cards keep English capitals in Turkish (LINDA CASTILLO, not LİNDA CASTİLLO).

## v1.7.9.3 — 2026-10-26
- **Language picker on the title screen: English and Türkçe.** It sits as small tabs beside the case-number tab, and the chosen language is circled in red pen. The choice is remembered, and the page reloads in that language.
- **The whole game is in Turkish**, about 1,200 lines: the title and cold open, planning, desk, forms, tells, pitches, the Ledger, events, crew, ranks, the good life, raids, the Night of the Run, every epilogue, and the coach tips.
- Turkish formats: decimal commas ($1,9M), a 24-hour clock (09:00), %15 instead of 15%, Turkish dates (Haziran 2027), and Turkish-aware capitals (İ). Names get proper case suffixes (Castillo'nun, Port Ashford'a).
- Kept in English on purpose: people, streets, banks and companies (the game is set in an American city), the paper's name (The Port Ashford Ledger), and the EXIT STRATEGY logo.
- The English game is unchanged. Translation tooling and notes are in `i18n/`.

## v1.7.9.2 — 2026-10-26
- **Title screen in the Case File look.** A manila case folder (CASE NO. 27-0412) sits on the wooden desk. The EXIT door scene is now a clipped Polaroid captioned "the way out" in blue pen. The name is typed on a paper label, and a red CASE OPEN stamp sits on the folder. START A SCHEME is a rubber stamp.
- **Cold open** lines are typewritten, with the punch ("Get out.") in red pen.
- Hidden layers now stay hidden even when the page runs outside the artifact host, for example a raw file or a future app wrapper. Before, the pop-up backdrop covered everything in that case.

## v1.7.9.1 — 2026-10-26
- **Pen-on-paper sound** when you circle a promised return or a cover-up (a quick three-stroke scribble), and a short scratch on each step of the skim bar.
- **The SIGNED stamp hits harder:** a crisp slap, a deeper body and a sub thud, plus a wooden knock from the desk. It's tuned to carry on phone speakers too.
- **The guided tutorial is back for every fresh visit.** Since v1.7.7 the game remembered on the device, forever, that the tips were done, so they never showed again. Now that memory only lasts until the page reloads. Restarting after an ending in the same visit still skips the tips, and "I've done this before" still skips them.

## v1.7.9 — 2026-10-26
- **New look: Case File.** Paper and ink on a dark wooden desk. Typewriter headings (Special Elite) and Courier body text.
- The stats sit as index cards in a manila folder. The narrator is a yellow sticky note in handwriting. Panels are paper, crew members are manila tags, and Run / Open the office are rubber stamps.
- **The chosen return and cover-up are circled in red pen.** It's a fine, loose stroke whose ends don't meet, and each option gets its own slightly different loop.
- **Skim is now a bar** with red hatching and a pen nib, with tick marks from 0 to 50%.
- Desk: the clock is a paper slip, the application has a paperclip, check results are in blue handwriting, and checks you've already used are struck through.
- Modals, rank cards and coach tips are paper with red-pen accents.

## v1.7.8 — 2026-10-26
- **Pushing your luck is a real gamble again.** Month 1 (the tutorial month) is unchanged: every hooked investor offers the risky second pitch and the hint is right 90% of the time. From month 2: only about a third of hooked investors leave an opening (half of whales), and the hint points to the real hot button only about 55% of the time.

## v1.7.7 — 2026-10-26
- **Dynamic tutorial instead of a wall of text.** Coach marks on the real screen: a gold spotlight ring dims everything else, with a one-line tip. Info steps move on with a tap; action steps pulse and wait for you to do it. First month: money vs. stash → promised return → skim → Open the office → check the form against the ID → black book and cover story → Pitch → Close the deal → today's take. Month 2: the Ledger → the Run button.
- **Just-in-time tips**, once each, the first time something happens: a withdrawal request, a filing, a surprise audit, a whale, stash money, the car outside, crew available, the bullpen.
- **"Skip tips"** on every tip. The title's "How to play" is now **"I've done this before"** (skips the cold open and the tips). The tutorial is remembered as done on this device.
- The **? button** is now four short lines plus **Replay the tips**. The static "Your desk" popup is gone.
- **Gradual entry:** after "Get rich. Get out." the black dissolves while the office comes into focus, then the first Ledger slides up.

## v1.7.6 — 2026-10-26
First piece of the demo-readiness pass.
- **Title screen:** the game now opens on Exit Strategy's title: a night office with a flickering green EXIT sign over a door left ajar, light spilling out, a briefcase of cash, and red and blue light at the edges. Then "EXIT STRATEGY", the hook ("Make millions with other people's money. Then make it to the exit."), START A SCHEME, How to play, and a sound toggle ("Sound is on. Trust us, keep it on."). Starting also unlocks audio, which iPhones require.
- **Cold open:** four tap-through beats before the first Ledger: "Port Ashford, 2027." / "You have $25,000, a rented office in a strip mall, and no conscience." / "Promise people steady returns. Pay the old investors with the new investors' money. Skim what you can." / "Get rich. Get out."
- "New scheme" after an ending skips both and goes straight to the Ledger.

## v1.7.5 — 2026-10-26
- **Renamed to Exit Strategy.** "Ponzi" in the title risked store and ad-platform flags. The page title is updated, and the in-game Ledger headline about a "Ponzi documentary" now says "Investment-fraud documentary". Save keys are unchanged, so best scores and the sound setting carry over. Files and folders keep their old names for now.

## v1.7.4 — 2026-10-26
- **Whales are whales:** a whale's check is now 5.2–8× the average check at your current rank, measured with the same formula regular applicants use (including the rank's check bonus). Typical whales: Closer about $250k, Shark about $350k, Kingpin about $1.2M, Wolf about $5.5M. Never below 5× the average.

## v1.7.3 — 2026-10-26
- **Cover story changes:** each game draws its own auditor, custodian bank, strategy, wire story and largest position from pools of 4–5 each. Wrong answers on forms come from the same pools. From Shark onward, every rank-up swaps your auditor and bank, with a "Your cover story changed" note, so you have to keep up with your own lie.
- **Kingpin whale is real:** Kingpin and Wolf get a dedicated whale applicant every day (the penthouse sometimes brings one too): a gold-bordered card with a WHALE tag, "Whale in the lobby" in the tray, a coin sound, and a check of at least $250k (3–6% of the fund). It's moved to the front of the queue. It can still be a plant in disguise.
- **Window view stands out:** the window is exempt from the desaturation and sits above the edge-darkening, so it stays bright. The black sedan now cruises past with headlights, taillight and a glowing cigarette, faster as heat rises, and stays readable even from high floors. The surveillance van has a dish and a blinking red light. Rain is heavier. Anything that wasn't outside last month pulses with a gold ring the first time you see it.

## v1.7.2 — 2026-10-26
- **Status is clearer:** each rank now has concrete perks and costs (Closer: bullpen, +1 applicant, some notice; Shark: +20% checks; Kingpin: a whale every day; Wolf: +40% checks, +2 applicants, puff pieces even when it's warm; each rank adds heat every month). Shown on the rank-up screen ("What changes") and any time you tap your title, along with what the next rank needs.
- **The bullpen is its own scene:** after the workday, "Go to the bullpen →" shows your team as a faceless crowd of silhouettes. Your speech changes the scene: everyone rushing to phones (dialing), slumped at desks with red stress squiggles under a night window (working late), or fists in the air (riled up). Each has its own sound.
- **Push your luck:** when someone bites on the right first pitch, their reply hints at their hot button (right 80% of the time). Pick the matching line for ×1.5 (Safe), ×2 (Exclusive) or ×3 (Greed). The wrong line spooks them and they walk. "Don't push it" keeps the original check. Eager plants say yes to the second line too.
- **Months, not weeks:** every turn is a month; the date, the Ledger, ID expiry and birth years all run on months. All "week" wording is now "month".
- **Gradual music:** the mood eases in over several seconds; the groove fades as the heartbeat drone rises, and the tempo slides from 108 to 74.
- **Stronger dread at the edges:** the edge-darkening ramps up nonlinearly with heat, and near the end a red pulse beats like a heartbeat.
- **Raid entrance:** the screen goes black and the music cuts out, then one red and blue flash, sirens, and the countdown begins.

## v1.7.1 — 2026-10-26
Playtest notes, all ten.
1. **Bullpen speech** now changes tomorrow, and says so: *Dialing* (+2 people at your desk), *Nobody leaves* (wrong pitches walk out half as often, crew loyalty −5), *I'm not leaving* (crew loyalty +15, trust +2, a little heat).
2. **Shark Lawyer:** raids give 15 seconds instead of 10 (the sentence perk is gone from the description).
3. **Night of the Run calls** change the escape: your lawyer reveals the watched route for certain; your mother steadies you (+10 odds) or, if they're listening, costs 15 seconds on the spot; your smuggler (if hired) gives +15 odds.
4. **Epilogue variety:** roughly three times the variants in every section, plus new optional sections (The trial, Where are they now with your first and biggest real investors, The story, What you owned). Each ending draws three, so layouts differ run to run.
5. **Office window view** replaces the strip: a different view per office (strip-mall lot with neon, downtown street, 20th floor, top of the tower over the harbor, penthouse at night). Heat shows as a black sedan with a cigarette glowing inside, a van, and rain on the glass.
6. **Inside Source nerfed:** tips arrive only about a third of the weeks and are wrong about a third of the time. Keeps the free background check and early black book pages.
7. **Trust is harder:** starts at 60, drifts back toward 50 every week, and audits, galas, PR and payouts give less. Trust now also changes how many people visit your desk.
8. **Lifestyle reworked** (Scarface/GTA model): items give **image**, which is required for Shark (1), Kingpin (4) and Wolf (8), with a hint when only image holds you back. Each has a perk: the watch (Exclusive pitches never walk; pawnable during the run), the sports car (+1 applicant a day; the coast-highway route), the yacht (marina route), the penthouse (whales; panic room +5s in raids), the island (escape odds). The party gives a big trust and loyalty spike. Weekly upkeep comes out of the stash; can't pay and it's **repossessed in public** (trust −15, a Ledger headline). Endings say what happened to each toy.
9. **Desk harder:** new tells (ID birth year vs. age, form signature vs. ID signature, checks from the closed Ashford Federal Savings that bounce — you owe the money with nothing deposited). **Surprise audits** lock the black book and cover story for that form. Filings now have up to four fields (new: largest position).
10. **Pitching harder:** jobs are only a tendency, quotes match only half the time and sometimes mislead, and a new **Small talk** check (15 min) gives a clearer clue. Wrong pitches walk out 65% of the time. A quarter of plants play it cool instead of agreeing to everything.

## V1.7 — 2026-10-26
The fall and the run.
- **Fixes that fail:** cover-ups lose strength as heat rises (down to 25%), and their notes say so ("The audit landed with a thud"). Bribe backfire chance grows with heat. Every successful bribe puts an official on a weekly hush payroll (25% of the bribe, paid automatically); miss a payment and they talk (heat up). Hush shows under Crew and in the weekly report.
- **Desk flood:** from mid heat, extra panicked withdrawal requests (bigger amounts) and extra regulator paperwork pile into the tray, up to about 13 cards. A "phone hasn't stopped ringing" warning appears at the start of the day.
- **One last deal:** when you start a run with a big fund, a Geneva family office may call offering 15–30% of the fund if you stay one more week. Stay, and they're at your desk next week, pre-pitched. Greed costs a little heat.
- **Night of the Run:** fleeing is now four timed steps (45 real seconds; 30 after a collapse): empty the safe (+60% of cash, 8s), shred or pull the drive or leave the files (better odds, costs time), one call (mom: risky if they're listening; lawyer: lighter sentence), then pick a route you have (jet, marina, airport, border). A police scanner names the watched route, correctly 80% of the time. Run out of time and they catch you on the stairs.
- New ending lines for the safe, the shredder, the calls and hush recipients.
- Live preview tool: `node preview-server.js` serves the game in a phone frame at http://localhost:5500 and reloads on save.

## V1.6 — 2026-10-26
The feel pass: the high, then the sharks.
- **Money feel:** signing slams a SIGNED stamp with the amount, a coin burst and a ka-ching, and big checks shake the screen. The end of day opens with "Today's take" rolling up. Planning-screen numbers roll to their new values each week.
- **The pitch:** before closing an applicant, pitch Safe, Exclusive or Greed. Real people want one of them (hinted by job and words). The right pitch gives a 1.4–1.8× check. A wrong one gives a smaller check or a walk-out. Plants say yes to anything (new Black Book page, week 4).
- **Ranks and offices:** Hustler → Closer → Shark → Kingpin → Wolf, by peak fund size, each with a new office and a gold rank-up celebration. A city strip shows your building growing.
- **Lifestyle** (tap your stash): gold watch, sports car, yacht party (weekly), harbor penthouse, private island (escape readiness). Each buys trust and draws attention. New epilogue lines.
- **Bullpen speech** at the end of each day once you're a Closer: crew loyalty and trust up.
- **Ledger puff pieces** while heat is low.
- **Dread without numbers:** a narrator line whose confidence tracks hidden heat (and sometimes lies to you), a black sedan that appears outside more often as heat rises, colors that drain and edges that darken as heat rises (noisy reading), and phone rings at the desk.
- **Sound:** synthesized effects and a music loop that shifts from swagger to a heartbeat drone. Toggle in the header.
- **Raid countdown:** a raid is now 10 real seconds: run out the back (or to the jet), empty the safe first (+50% of fund cash, costs 4 seconds), or surrender. If the timer runs out, you froze.
- **Fix:** the "Close the office" button no longer stretches to fill the screen.

## V1.5 — 2026-10-26
Built on V1.3. No more page scrolling: every screen fits one phone screen.
- **Planning screen** is a single page: header (week, help, Ledger), 4 money tiles, trust bar, a one-line "last week" summary (tap for the full report), and one panel of compact rows. Returns are chips, marketing is a ‹ › stepper, skim is a slider, cover-up is 4 chips with cost and effect under the label, crew is 3 slots, and escape plan is a readiness button. Forecast is one line, with Run / Open the office at the bottom.
- **Overlays** for detail: weekly report, crew (hire, bonus, fire), escape plan purchases, how to play.
- **Desk:** clock, tray and Black book / Cover story buttons in one header row. The book and cover story open as overlays instead of pushing the document down. Checks and decisions are pinned at the bottom. The week-1 desk tutorial is now a one-time overlay.
- **Sizing:** sizes are in rem, and the root font scales with viewport height and width. Checked at 390×700, 375×560 and 360×640.
- No gameplay or balance changes.

## Restored V1.3 — 2026-10-26
The V1.4 Plague-style map didn't suit portrait play. ponzi.html is back to V1.3 (deception desk), unchanged. V1.3.1 and V1.4 remain in versions/ for reference. The next revision builds on V1.3.
- The published V1.4 had picked up a bubble-tap fix from another session (tapping a map bubble no longer also opens the district underneath). That page is saved as versions/ponzi-v1.4-live.html.

## V1.4 — 2026-10-23
Genre pivot: Plague Inc.-style strategy. Real-time (pause, 1×, 2×, 4×); menus pause time.
- **Port Ashford map:** 12 social circles (Country Club, City Hall, University, Doctors' Row, Law Firms, Tech Park, Seabreeze, Grace Church, Crypto Forum, Yacht Club, Little Lisbon, Harbor Union), each with population, typical check, skepticism, tags and links. Spread is logistic within circles and seeds across links. Pick a starting circle.
- **Clout** from new investors, circle milestones and green bubbles.
- **Upgrade trees:** Pitch (10, which circles you reach), Promises (9, appeal vs severity, promised rate 1/2/4/8% a month, lock-ups, invite-only, cult), Cover (9, slows suspicion or the case; Political friends needs 25% of City Hall; Shred is one-shot). Costs rise within each tree.
- **Rumors:** appear on their own (appeal up, attention up); squash for 6 clout.
- **Map bubbles:** prospects (clout), whales (big deposit), complaints (tap before they reach a regulator).
- **Ponzi math:** owed grows at the promised rate; withdrawals scale with it; when new money falls below outflow, confidence drains into panic withdrawals and collapse.
- **Hidden investigation:** suspicion builds silently until a case opens, then the case fills (more agencies join as the fund grows) until the raid. Only the Ledger hints at it. The end screen reveals when the case opened and how far along it was.
- Skim slider (0–40% of new deposits), escape plan bought from stash, procedural ending with per-circle and per-upgrade fates.

## V1.3.1 — 2026-10-23
Genre experiment: arcade/action. A standalone real-time build; the V1.3 deception desk is preserved in versions/ponzi-v1.3.html.
- One-screen canvas playfield. Walkers carry money along the sidewalk; tap to sign them.
- Plants with visual tells: feds (earpiece, often sunglasses, a badge that glints, carry bait-sized sums), reporters (notepad, hat, sometimes a press card).
- Withdrawal bubbles with patience rings in a 3×3 grid; tap to pay. Request rate scales with investor count, and balances grow with promised returns.
- Hold-to-skim into the vault (score). Hype button buys a wave of walkers.
- Heat shown as a black FBI sedan creeping toward your door; it arrives = raid.
- Briefcase pickups: fake audit, celebrity wave, bribe (can backfire).
- Investor confidence meter; zero = bank run and a forced getaway.
- Getaway: 12-second three-lane dodge to the airport; traffic density scales with heat.
- Ledger headline ticker driven by heat. Procedural ending story adapted to arcade facts.

## V1.3 — 2026-10-23
Genre pivot: deception sim (Papers, Please-style), on top of the existing weekly layer.
- New weekly phase: **the desk**. A turn-based workday (9 am–5 pm); every card costs 10 min and every check costs more. Unhandled cards at closing have consequences.
- **Investor applications:** most are real, some are plants (FBI agent, reporter, regulator) with tells: ID name mismatch, expired ID, Federal Employees Credit Union check, federal building address, fake referral, freelance writer taking notes, Capitol Savings wire. Plant frequency rises with hidden heat. Checks: call referral (30 min), background check (1 hr, always truthful). Accepted plants are revealed next week with a heat spike.
- **Black book:** known tells, gaining a page every couple of weeks (Inside Source unlocks pages early and gives one free background check a day).
- **Withdrawal requests:** pay, pay half, or stall. Visible and hidden traits decide the fallout. "Ask around" (20 min) reveals hidden traits.
- **Document forgery:** regulator filings, audit confirmations, bank reviews, performance letters. Each field must match the **cover story** (reported fund size, claimed return, auditor, bank, strategy, wire story). Truth = confession, mismatch = suspicion. Creative CFO files faster.
- Epilogue: lines for plants you signed and real investors you turned away.
- "End week" button is now "Open the office".

## V1.2 — 2026-10-22
- End-of-game story built from up to six sections chosen by what happened in the run: the ending scene (by outcome × escape method × how it ended), new life or prison (stash tiers, frozen funds, sentence, recovery), the investors (trustee recovery, victim vignettes, mom, church, prosecutor), your crew (per-role fates by loyalty, flipped and fired lieutenants), loose ends from event choices, and a "years later" twist.
- Ending headlines now vary.
- Tracks event choices, bribes, fired and flipped lieutenants for the story.

## V1.1 — 2026-10-22
- Removed the visible heat bar and the escape-odds percentage. Run button now shows plan readiness only.
- New weekly newspaper, *The Port Ashford Ledger*: heat signals drawn from a noisy reading of true heat, red herrings, filler, market news, fund milestones, and warnings when a lieutenant is about to flip.
- Market cycle (boom / normal / bust) affects recruitment, withdrawals and trust; reported only in the Ledger.
- Lieutenants (max 3): Creative CFO, Marketing Director, Shark Lawyer, Inside Source (honest tip in each Ledger), PR Chief, Smuggler. Weekly salary scales with fund size; loyalty drops with heat and missed pay; shifty lieutenants may flip (big heat spike). Bonus and fire actions.
- Events: 14 → 31 (incl. 4 lieutenant events), chance raised to ~55% a week from week 3.
- Yacht (event) adds escape readiness.
- End screen reveals true heat level and real escape odds.

## V1.0 — 2026-10-22
First playable build. Turn-based, one week per turn, no meta progression.
- Weekly decisions: promised return (1–8%), marketing tier, skim % to offshore stash, one cover-up.
- Ponzi math: deposits pay withdrawals; balances compound at the promised rate; missed payouts crash trust.
- Hidden heat meter with fuzzy labels; raid chance rises once heat passes ~35.
- Investor trust drives recruitment and panic withdrawals.
- Escape plan purchases (passport, shell companies, villa, private jet) paid from stash.
- 14 random event cards with two choices each.
- Endings: escaped (score = stash kept), caught in raid, caught fleeing, forced flight after collapse.
- Local best-escape record.
