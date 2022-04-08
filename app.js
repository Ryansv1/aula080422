const { circleArea, squareArea } = require('./shape-area.js');
var areaFunctions = {
    circleArea,
    squareArea
};

const circleAreaInput = process.argv[2];
const squareAreaInput = process.argv[3];

console.log(areaFunctions.circleArea(circleAreaInput).toFixed(2));
console.log(areaFunctions.squareArea(squareAreaInput));