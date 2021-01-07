const allCountryScores = [
    {
      name: "Ethiopia", 
      scores:  [ {n: "Sub", s: 9990}, {n: "lucy", s: 4134234}, {n: "DWH", s: 9999},  {n: "Hanif", s: 999999999} ]
    },     
    {
      name: "Scotland", 
      scores: [  {n: "groundkeeper willie", s: 4000}, {n: "Neill", s: 999999}, {n: "braveheart", s: -200}]
    },{
      name: "England", 
      scores: [ {n: "Jonny", s: 202020}, {n: "Chris", s: 202021}]
    },{
      name: "Brazil", 
      scores: [ {n: "Mozart", s: 999}]
	}];
	
const sortedScores = [...allCountryScores].map((el) => {return {name: el.name, scores: el.scores.sort((a,b) => a.s - b.s)}});

console.log(sortedScores[0].scores);

const newsortedScores = [...allCountryScores].map((el) => {return {name: el.name, scores: el.scores.sort((a,b) => b.s - a.s)}});

console.log(newsortedScores[0].scores);