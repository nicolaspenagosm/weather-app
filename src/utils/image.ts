export const getIconUrl = (icon: string, size: "1" | "2" | "4") => {
  const sizePath = size !== "1" ? `@${size}x` : "";
  return `https://openweathermap.org/img/wn/${icon + sizePath}.png`;
};