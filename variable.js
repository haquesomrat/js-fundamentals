//variables
var favouriteBook = "4 hour work week";

// Array
var bookList = ['positionong', 'hooked', 'start with why', 'shoe dog'];
var shoeDogIndex = bookList.indexOf('shoe dog');
bookList[1] = 'Story Brand';
bookList.push('small giants');
bookList.pop();

// Conditionals
if (bookList[1] == 'hooked') {
    console.log('I am hooked')
}
else {
    console.log('I am not hooked')
}

//while loop
var i = 0; //loop variable
while (i < 15) {
    console.log(i);
    console.log('looping looping looping');
    i++;

}

//for loop

for (var i = 0; i < 15; i++;) {
    console.log(i);
}