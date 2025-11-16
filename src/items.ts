import type { MagicItem } from "./types";

export const items: MagicItem[] = [
  {
    name: "Healing Potion (Minor)",
    tags: ["Consumable", "Healing", "Magical", "Potion", "Vitality"],
    usage: "held in 1 hand",
    bulk: "L",
    activate: "◆ (manipulate)",
    description:
      "A healing potion is a vial of a ruby-red liquid that imparts a tingling sensation as the drinker's wounds heal rapidly. When you drink a healing potion, you regain 1d8 Hit Points.",
  },
  {
    name: "Predator's Claw",
    tags: ["Consumable", "Magical", "Talisman"],
    usage: "affixed to a weapon",
    bulk: "—",
    activate: "◇ (concentrate);",
    trigger:
      "You critically succeed at an attack roll with the affixed weapon.",
    description:
      "This claw set in an iron clasp and chain is usually that of a large predator. When you activate the claw, the triggering attack gains the weapon's critical specialization effect.",
  },
  {
    name: "Shortbread Spy",
    tags: ["Uncommon", "Consumable", "Divination", "Magical", "Scrying"],
    usage: "held in 2 hands",
    bulk: "—",
    activate: " 1 minute (Interact)",
    description:
      "Though this item looks like a simple cookie in the shape of a humanoid, it springs to life once decorated with icing or other edible substances. The cookie then scrambles away at a Speed of 15 feet, returning to the same spot about 1 hour later, which gives it enough time to travel roughly a half-mile away and then return along the same path. The cookie spy is oblivious to your instructions and can't be given directions, instead following a path of its own choosing. Upon its return, it falls to the ground, never to move again. As long as you decorated the shortbread spy with eyes, it gains normal vision, which it uses to see and magically record the sights along its path. Any creature that eats the cookie once it returns can then see what the spy saw. The images are relatively clear, but the passage of time is a bit muddied, so it might be difficult to tell when the cookie witnessed a given sight.",
  },
];
