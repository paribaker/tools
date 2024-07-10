// node tztconverter.js 'America/Bogota' '2024-07-07T06:00:43Z'
const args = process.argv.slice(2);
const timezone = args[0];
const datetime = args[1];

console.log(timezone)
console.log(datetime)
const date = new Date(datetime);
const convertedDate = new Date(date.toLocaleString('en-US', { timeZone: timezone }));

console.log(convertedDate)