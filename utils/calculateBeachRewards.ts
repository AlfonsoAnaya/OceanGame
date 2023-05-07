export function calculateBeachRewards(
  squares: HTMLDivElement[], 
  money: string[], 
  coin: string) {
  let accumulator = 0;
  for (let square of squares) {
    if (square.classList.contains('beach')) accumulator++;
  }
  accumulator = accumulator/3
  for (let i=0; i<accumulator; i++) {
    money.push(coin);
  }
}