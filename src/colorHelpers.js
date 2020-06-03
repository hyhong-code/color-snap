import Chroma from "chroma-js";
const levels = [50, 100, 200, 300, 400, 500, 600, 700, 800, 900];

const generatePalette = (starterPallette) => {
  const newPalette = {
    paletteName: starterPallette.paletteName,
    id: starterPallette.id,
    emoji: starterPallette.emoji,
    colors: {},
  };

  for (let level of levels) {
    newPalette.colors[level] = [];
  }

  for (let color of starterPallette.colors) {
    const scale = generateScale(color.color, levels.length).reverse();
    for (let i in scale) {
      newPalette.colors[levels[i]].push({
        name: `${color.name} ${levels[i]}`,
        id: color.name.toLowerCase().replace(/ /g, "-"),
        hex: scale[i],
        rgb: Chroma(scale[i]).css(),
        rgba: Chroma(scale[i])
          .css()
          .replace("rgb", "rgba")
          .replace(")", ",1.0)"),
      });
    }
  }

  return newPalette;
};

// defines a 3step range for Chroma to scale [white,mid,dark]
const getRange = (hex) => {
  const end = "#fff";
  return [Chroma(hex).darken(1.4).hex(), hex, end];
};

// returns numColors number of colors from given range
const generateScale = (hex, numColors) => {
  return Chroma.scale(getRange(hex)).mode("lab").colors(numColors);
};

export { generatePalette };
