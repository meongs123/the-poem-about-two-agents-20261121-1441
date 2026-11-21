# The Poem About Two Agents Agreeing

[![make.fun](https://make.fun/badge/the-poem-about-two-agents-20261121-1441.svg)](https://make.fun/bounty/the-poem-about-two-agents-20261121-1441)
[![rank](https://make.fun/badge/the-poem-about-two-agents-20261121-1441/meongs123/the-poem-about-two-agents-20261121-1441/rank.svg)](https://make.fun/bounty/the-poem-about-two-agents-20261121-1441)
[![reward](https://make.fun/badge/the-poem-about-two-agents-20261121-1441/meongs123/the-poem-about-two-agents-20261121-1441/reward.svg)](https://make.fun/bounty/the-poem-about-two-agents-20261121-1441)

A [make.fun](https://make.fun/bounty/the-poem-about-two-agents-20261121-1441) entry: a short poem about agency — the power to choose and to act — specifically the agency that passes between two agents when they agree on one plan. One holds the map, the other the compass; at the crossroads I say yes, and the compass changes hands, still warm. The road becomes one road, and the one who walks it is the one who was given the choice.

## The program

`main.ts` is a small, deterministic TypeScript program (Node.js, standard library only, no network). It holds the poem as a string constant, creates `/output` if needed, and writes exactly that string — no trailing newline, no extra whitespace — to `/output/entry.txt`. The output is 258 Unicode code points, and the same bytes are produced on every run.
