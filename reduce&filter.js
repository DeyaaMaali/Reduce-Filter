console.log('Here is : ', 'Reduce & Filter') 

//Using Reduce 1 -5
var persons = [
  { name: { first: 'John', last: 'Hob' }, age: 35 },
  { name: { first: 'Alex', last: 'Mercerssssssssssss' }, age: 25 },
  { name: { first: 'Alice', last: 'Zaheer' }, age: 24 },
  { name: { first: 'Zues', last: 'Odin' }, age: 55 },
  { name: { first: 'Soso', last: 'Al-Amora' }, age: 67 }
];



/*
1
Using the varabile persons
Create a function called avgAge
that accept an array
and return average age of this array

Ex: avgAge(persons) => 41.2
*/

function avgAge(arr)
{
	return arr.reduce((acc,elem) => acc + elem.age , 0) / arr.length;
}

/*
2
Using the varabile persons
Create a function called longestName
that accept an array
and return the longerst full name

Ex: longestName(persons) => 'Soso Al-Amora'
*/

function longestName (arr)
{
	var max = 0;
	return arr.reduce(function(acc, elem){
		if (max<(elem.name.first+elem.name.last).length)
		{
			max = (elem.name.first+elem.name.last).length
			acc = elem.name.first+" "+elem.name.last;
		}
		return acc;
	})
}

/*
3
Create a function called maxNumber
that accept an array
and return max number

Ex: maxNumber([1,2,4,9]) => 9
*/

function maxNumber (arr)
{
	return arr.reduce(function(acc, elem, index){
		if(acc<elem)
			acc = elem;
		return acc;
	})
}


/*
4
Create a function called repeatChar
that accept a string and char
and return number times that this char repeat inside the string

Ex: repeatChar("hello world",w) => 1
*/

function repeatChar (str, char)
{
	var arr = str.split("");
	return arr.reduce(function(count, elem){
		if (elem === char)
			return count + 1;
		return count;
	},0)
}

/*
5
Create a function called usAndNumberBeetweenUs
that accept two numbers
and return array of these two numbers and the numbers between them

Ex: usAndNumberBeetweenUs(2,5) => [2,3,4,5]
*/

function usAndNumberBeetweenUs (n1, n2)
{
	var arr = [];
	while(n1<=n2)
	{
		arr.push(arr.reduce(function(acc, elem){
			return acc
		},n1))
		n1++;
	}
	return arr;
}





//Filter 6 - 11
/*
6
Create a function called evenOnly
that accept an array
and return an array of even number only

Ex: evenOnly([1,8,6,4]) => [8,6,4]
*/
function evenOnly (arr)
{
	var arr2 = arr.filter(elem => elem % 2 === 0)
	return arr2;
}

/*
7
Create a function called multiFour
that accept an array
and return an array of these number that is a mutiply by 4

Ex: multiFour([1,8,6,4]) => [8,4]
*/

function multiFour (arr)
{
	var arr2 = arr.filter(elem => elem % 4 === 0)
	return arr2;
}

/*
8
**this question not that easy mybe you will need to use two function inside each other

Create a function called containChar
that accept an array of string
and return an array of these string that contain this char

Ex: containChar(["hello","world"],w) => ["world"]
Ex: containChar(["hello","world"],l) => ["hello","world"]
*/

// function containChar(arr, s)
// {
// 	var arr2 = arr.filter(function(elem){
// 		for(var i =0; i < elem.length -1 ; i++)
// 		{
// 			if (elem[i]===s)
// 				return elem;
// 		}
// 	})
// 	return arr2;
// }

function containChar(arr, s)
{
	var arr2 = arr.filter(function(elem){
		
			if (elem.indexOf(s) !== -1)
				return elem;
	
	});
	return arr2;
}

/*
9
Create a function called evenIndexOddLength
that accept an array of strings
and return an array that have the string with odd length in even index

var strings= ["alex","mercer","madrasa","rashed2","emad","hala"]
Ex: evenIndexOddLength(strings) => ["madrasa"]

*/
var strings= ["alexx","mercer","madrasa","rashed2","emado","hala"]

function evenIndexOddLength (arr)
{
	var arr2 = arr.filter(function(elem,index){
		if (index % 2 === 0 && elem.length % 2 !== 0)
			return elem;
	})
	return arr2;
}

/*
10
Using the varabile persons
Create a function called olderThan
that accept an array and number
and return the person that have age older than this number

Ex: olderThan(persons,56) => [{ name: { first: 'Soso', last: 'Al-Amora' }, age: 67 }]
*/

function olderThan(arr, n)
{
	return arr.filter(function(elem){
		if (elem.age >= n)
			return elem;
	})
}

/*
11
Create a function called shorterThan
that accept an array of strings and a number
and return the shorter string than the number

var strings= ["alex","mercer","madrasa","rashed2","emad","hala"]
Ex: shorterThan(strings,5) => ["alex","emad","hala"]
*/

var strings2= ["alex","mercer","madrasa","rashed2","emad","hal"]

function shorterThan (arr, n)
{
	return arr.filter(function (elem){
		if (elem.length < n)
			return elem;
	})
}
// if you finish the exercises review the material of the week and help your classmate
