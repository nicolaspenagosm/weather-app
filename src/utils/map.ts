export const getMostRepeatedEl = (map: Map<string, number>) => {
  let max = 0;
  let el: string;
  map.forEach((val, key) => {
    if (max < val) {
      max = val;
      el = key;
    }
  });
  return el!;
};

export function setOrAddCount(map: Map<string, number>, key: string) {
  if (map.get(key)) map.set(key, map.get(key)! + 1);
  else {
    map.set(key, 1);
  }
}
