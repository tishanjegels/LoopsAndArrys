//Activity 1 - Create a variable called "tasks" with an array of 10 task items e.g. let tasks = ['swim', 'study', 'eat']

let tasks = ['study', 'hockey', 'rugby', 'soccer', 'netball', 'eat', 'sleep', 'swim', 'run', 'walk'];

//Using the "for" loop display the value of each of these items

for (let i = 0; i < tasks.length; i++) {

    //console.log(tasks[i] +'');
    document.getElementById("tasks").innerHTML = tasks; //creat thing in html

};

//"console.log" the output, separated by a space





//Activity 2 - Edit the loop created above, to now calculate the sum of all the items leading up to 10. e.g. 1 + 2 + 3 = 6

let calculate = 0;

for(let i = 0; i < tasks.length; i++){

    calculate = calculate + i ;

    console.log(calculate);
}


//console.log your output



//Activity 3 - Using the tasks variable created above



//Create a loop that performs the 15 times table



//Leading up to the "length" of your tasks variable



//Activity 4 - Edit your code in activity 3, by creating an array called timesTable
//And store each value of the your fifteen times table in it
//Add your code below


//Activity 5 - Using the array you created in the Activity 4, loop through the array and print each value to the console.
//Add your code below


//Activty 6 - Use the .reduce() built-in method to calculate the average of the array created in Activity 4.
//Add your code below


//Bonus Activity
//Repeat the output of what you produced in activity 6, this time by not using the .reduce function
//Add your code below

//Create a "for of" loop, looping through the values of your tasks variable created in activity 1
//console.log the output
//Add your code below

//Try to replicate the above activity by using a "for in" loop instead
//Does this work? can you understand and explain why it displays what it displays?
//Add your code below