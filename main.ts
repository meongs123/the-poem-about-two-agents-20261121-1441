import * as fs from "node:fs";

const poem = `You held the map. I held the compass.
At the crossroads, the wind stopped asking.
You pointed east. I said yes, and the needle
settled. You pressed the compass
into my palm — still warm from your hand.
Now the road is one road,
and I am the one who walks it.`;

fs.mkdirSync("/output", { recursive: true });
fs.writeFileSync("/output/entry.txt", poem, "utf8");
