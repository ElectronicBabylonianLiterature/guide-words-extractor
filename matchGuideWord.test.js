const matchGuideWord = require('./matchGuideWord')

test.each([
  ['"\\\\~ \\"veiled, covered\"', 'veiled'],
  ['\\"rare; valuable', 'rare'],
  ['OA, OB, jB \\"to be big, to be great, be strong (Am.)', 'be big'],
  ['"(*i/i*; stat. *(w)aruq*, occas. *uruq*) \\\\[SIG7\\\\] \\"become green, yellow; pale\\" of face, invalid; of fluids, fruit, glass, star"', 'become green']
])('%s', (meaning, guideWord) => {
  const strippedMeaning = matchGuideWord(meaning)
  expect(strippedMeaning).toEqual(guideWord)
})
