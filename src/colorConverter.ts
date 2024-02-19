export const colorToHsl = (color: string) => {
  if (color.startsWith("#")) {
  }
};

export const hexToRgb = (color: string) => {
  const trimmedColor = color.replace("#", "");

  if (trimmedColor.length === 6) {
    const r = parseInt(trimmedColor.slice(0, 3), 16);
    const g = parseInt(trimmedColor.slice(2, 4), 16);
    const b = parseInt(trimmedColor.slice(4, 6), 16);

    return [r, g, b];
  }

  if (trimmedColor.length === 3) {
    const r = parseInt(trimmedColor[0] + trimmedColor[0], 16);
    const g = parseInt(trimmedColor[1] + trimmedColor[1], 16);
    const b = parseInt(trimmedColor[2] + trimmedColor[2], 16);

    return [r, g, b];
  }
};

console.log(hexToRgb("#fafafa"));
console.log(hexToRgb("#fad"));
