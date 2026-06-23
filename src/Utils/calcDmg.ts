export function calcDmg(atk: number, def: number, power: number): number {
  const roll = 0.85 + Math.random() * 0.15;
  return Math.max(1, Math.round(((power * atk) / Math.max(1, def)) * roll));
}

export function sleep(ms: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
