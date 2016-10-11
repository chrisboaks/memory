function randInt(rangeStart, rangeEnd = 0) {
  if (!Number.isInteger(rangeStart) || !Number.isInteger(rangeEnd)) {
    throw new Error('invalid input');
  }
  const min = Math.min(rangeStart, rangeEnd);
  const max = Math.max(rangeStart, rangeEnd);
  const multiplier = max - min + 1;
  return Math.floor(Math.random() * multiplier) + min;
}

function shuffle(ary) {
  if (!Array.isArray(ary)) {
    throw new Error('invalid input');
  }
  const copy = ary.slice();
  const rv = [];
  ary.forEach(() => {
    const randIndex = randInt(copy.length - 1);
    rv.push(copy[randIndex]);
    copy.splice(randIndex, 1);
  });
  return rv;
}

export {shuffle};
