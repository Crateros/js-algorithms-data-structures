/*
  On election day, a voting machine writes data in the form (voter_id, candidate_id)
  to a text file. Write a program that reads this file as a stream and returns the
  top 3 candidates at any given time. If you find a voter voting
  more than once, report this as fraud.
*/

var fs = require('fs');

const handleReadFile = (file) => {
 const fileData = fs.readFileSync(file, 'utf8');
 return fileData;
};

const parseVoterData = (file) => {
  // Consume file data and format for parsing
  let data = handleReadFile(file);
  data = data.replace(/\(/g, '').split(')');
  data.pop();
  const voters = [];
  const candidates = [];

  // Split formatted data into separate arrays
  for (let i = 0; i < data.length; i++) {
    let vote = data[i].split(',');
    voters.push(vote[0]);
    candidates.push(vote[1]);
  };

  // Detect voter fraud via duplicate voter_id entries
  const voterFraud = [];
  voters.map((id, index) => {
    if (voters.indexOf(id) !== index) {
      voterFraud.push([id, candidates[index]]);
    };
  });

  console.log('Voter Fraud: ', voterFraud);

  // Determine top 3 leading candidates
  const rankings = {}
  candidates.map(candidate => {
    if (!(candidate in rankings)) {
      rankings[candidate] = 1;
    } else rankings[candidate] ++;
  });

  Object.values(rankings).sort((a,b) => b - a)
  .splice(0,3)
  .map(value => {
    console.log(Object.keys(rankings).find(key => rankings[key] == value))
  });
};

parseVoterData('voter_data.txt');



// handleReadFileStream = (file) => {
//   var dataStream = fs.createReadStream(file);
//   let fileData = "";

//   dataStream.on('data', (chunk) => fileData += chunk);

//   dataStream.on('end', () => {
//     return fileData;
//   });
// };

// var voterData = handleReadFile('voter_data.txt');
