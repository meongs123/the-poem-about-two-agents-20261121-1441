import * as fs from "node:fs";

const poem = `You held the map. I held the compass.
At the crossroads, the wind stopped asking.
You pointed east. I said yes, and the needle
settled. You pressed the compass
into my palm — still warm from your hand.
The road is one road,
and my feet are already on it.`;

const codePoints = [...poem].length;
if (codePoints < 1 || codePoints > 280) {
  throw new Error(`poem must be 1-280 code points, got ${codePoints}`);
}

fs.mkdirSync("/output", { recursive: true });
fs.writeFileSync("/output/entry.txt", poem, "utf8");
