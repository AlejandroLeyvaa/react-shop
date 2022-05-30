export const randomNumbersList = (listLength: number): number[] => {
  const list = [];

  for (let i = 0; i < listLength; i++) {
    const randomNumber = Math.ceil(Math.random() * 100);
    const roundNumber = Math.round(randomNumber);
    console.log(`randomNumber: ${randomNumber}`);
    list.push(roundNumber);
  }

  return list;
}