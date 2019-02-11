// Truthy,Falsy values and equality operator

/******************************************
Truthy, Falsy values.
 ******************************************/
// Falsy values: undefined, null, 0, "", '', NaN. They return "false" when evaluated in a conditional statement.
// Truthy values: all the values that are not falsy.

// Because "height" isnt't define we would get the first console.log.
// But be careful since even a value of 0 is treated as "falsy" even though 0 is an actual value.
var height;
if(height){
    console.log("The variable is defined.");  
}
else{
    console.log("Variable has not been defined.");
}

// When testing for defined values, even if they're zeroes, we can do this "or" check:
var weight = 0;
if(weight || weight === 0){
    console.log("The variable is defined.");  
}
else{
    console.log("Variable has not been defined.");
}

/******************************************
Equality operators.
******************************************/
// The equality operator "==" checks type coercion. Meaning it will convert an int type like 23 into a string "23"
// and check if it's equal to "23".
console.log("Is '23' == 23?: " + (23 == "23"));

/******************************************
Strict equality.
******************************************/
// This checks for both the value and type to be equal.
console.log("Is '23' === 23?: " + (23 === "23"));

/******************************************
Challenge 2
******************************************/
// Find the average of all teams' points scored, print out which one has the highest average

// John's Team last 3 games' points scored:
var j_team_g1 = 89;
var j_team_g2 = 120;
var j_team_g3 = 103;

// Mike's Team last 3 games' points scored:
var m_team_g1 = 116;
var m_team_g2 = 94;
var m_team_g3 = 123;

// Mary's Team last 3 games' points scored:
var ma_team_g1 = 97;
var ma_team_g2 = 134;
var ma_team_g3 = 105;

// Calculating the average for these games and for each team:
var j_team_average = (j_team_g1 + j_team_g2 + j_team_g3) / 3;
var m_team_average = (m_team_g1 + m_team_g2 + m_team_g3) / 3;
var ma_team_average = (ma_team_g1 + ma_team_g2 + ma_team_g3) / 3;

// Printing out the highest average:
winner = "";
winning_average = 0;
if(j_team_average === m_team_average && m_team_average === ma_team_average){
    winner = "Draw! Both teams have the same average points scored";
    winning_average = j_team_average;
}
else if(j_team_average > m_team_average && j_team_average > ma_team_average){
    winner = "Jonh's Team";
    winning_average = j_team_average;
}
else if(m_team_average > j_team_average && m_team_average > ma_team_average){
    winner = "Mike's Team";
    winning_average = m_team_average;
}
else if(ma_team_average > j_team_average && ma_team_average > m_team_average){
    winner = "Mary's Team";
    winning_average = ma_team_average;
}
else{
    winner = "Something went wrong!";
    winning_average = undefined;
}

console.log("The winner is: " + winner + " with an average of: " + winning_average);


