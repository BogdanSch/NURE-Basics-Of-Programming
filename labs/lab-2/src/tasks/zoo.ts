const findCombinations = (K: number, M: number): string => {
  if (M % 2 !== 0) {
    return "No valid combinations: total wings must be even.";
  }
  const parrots: number = M / 2;
  const remainingLegs: number = K - M;

  if (remainingLegs === 0) {
    return `Guinea pigs: 0, Lizards: 0, Parrots: ${parrots}\n`;
  }
  if (remainingLegs < 0 || remainingLegs % 4 !== 0) {
    return "No valid combinations found.";
  }

  const maxGuineaPigsLizards = remainingLegs / 4;
  let result: string[] = [];

  for (
    let gineaPigsAmount: number = 0;
    gineaPigsAmount <= maxGuineaPigsLizards;
    gineaPigsAmount++
  ) {
    const lizardsAmount: number = maxGuineaPigsLizards - gineaPigsAmount;
    result.push(
      `Guinea pigs: ${gineaPigsAmount}, Lizards: ${lizardsAmount}, Parrots: ${parrots}\n`
    );
  }

  return result.join("");
};

export default findCombinations;
