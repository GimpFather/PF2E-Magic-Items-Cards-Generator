import type { MagicItem } from "./types";

export const getMagicItems = (): MagicItem[] => {
  return JSON.parse(localStorage.getItem("magicItems") || "[]");
};

export const saveMagicItems = (magicItems: MagicItem[]) => {
  localStorage.setItem("magicItems", JSON.stringify(magicItems));
};
