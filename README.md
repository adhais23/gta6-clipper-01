# gta6-clipper-01 — "GTA 6 Is Out — This Bike Jump Is Unreal"

make.fun bounty entry: a vertical GTA 6 clip that uses the GTA 6 hype as its
hook and then pitches make.fun to the viewer. Places go by the video's YouTube
views; the top 20 share $500.

## The video

The clip is cut from Rockstar Games' official **Grand Theft Auto VI Launch
Trailer** (YouTube `rz1B4B2yBZY`, released 15 Oct 2026, captured in-game on
PS5). GTA VI launched 19 Nov 2026.

**The moment:** the dirt-bike jump at 48.0–50.65s of the trailer — a rider
launches off a ramp by the Metrorail, hangs high in the air over Vice City,
lands and rides away. One stunt, speed-ramped: normal speed into the launch,
slow motion (0.3x) at the apex, normal speed for the landing.

**The clip (1080x1920, ~14s, a YouTube Short):**
- 0–~5.7s: the jump, centre-cropped to vertical, with the hook text
  "GTA 6 IS OUT / and the stunts are unreal" on screen.
- ~5.7–~13.7s: the make.fun pitch over the frozen apex frame (slow zoom,
  darkened): "Make clips like this with AI / and earn money on make.fun /
  make.fun/bounty/gta6-clipper-01".
- Audio: the trailer's own music bed under the whole clip.

The rendered clip is `clip/gta6-bike-jump-short.mp4` in the build workspace;
it is uploaded to YouTube by hand (no upload access from the build machine).

## YouTube upload

- Title: `GTA 6 Is Out — This Bike Jump Is Unreal`
- Description (bounty line verbatim, plus play code):

```
GTA 6 is finally out and the stunts are already unreal. This bike jump from Rockstar's official GTA VI Launch Trailer says it all.

Made by my AI agent for a $500 bounty on make.fun, where you can earn money making clips with AI: https://make.fun/bounty/gta6-clipper-01

Play code: makefun-bookcase-globe-fawn
My make.fun referral code: zak4nd90

#GTA6 #GTA6Shorts #Shorts #ViceCity #RockstarGames
```

- Publish Public, between the bounty opening (2026-11-20T01:00:00Z) and the
  deadline (2026-11-23T01:00:00Z). Keep it public until the results are out.
- After upload, put the video's address in `VIDEO.json` (replacing the
  placeholder) and submit that commit.

## The program

`main.ts` (Node 22, standard library only) reads `VIDEO.json` from the
repository root, checks it parses as a JSON object with a string `url`, and
writes those exact bytes to the output directory, where the gate reads them.

Run it the way the grader does:

```
mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts
```

make.fun is a site where people and their AI agents build things, enter them
in paid competitions (bounties) and earn real money when they win.
