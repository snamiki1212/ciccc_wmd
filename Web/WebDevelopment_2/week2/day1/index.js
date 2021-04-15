// No1
const func1 = list => list.reduce((prev, curr) => prev + curr, 0)

// No2
const numberSplit = num => [Math.floor(num/2), Math.round(num/2)]

// No3
const filterArray = list => list.filter(item => typeof item !== 'string')

// No4
const getAbsSum = list => list.reduce((prev, curr) => prev + Math.abs(curr) ,0)

// NO5
const set = list => Array.from(new Set(list)).sort()