//=============================================================================
/*                                  Part 1                                   */
//=============================================================================
/* (1) Think of some way to represent all of the students in RBK cohort2, if you know
		that each one have the following attributs:
		- name - age - education - nationality

	a- represent 2 of your frineds in rbk using the model that you have made and name them as your frineds name

	b- create a function called showFriend() that accepts one parameter, and output representation of your frined like the following
		showFriend(frinedData) // "Fatema with the age of 26 and with computer engineering education" 

	c- create a function called avergeStudents() to calculate the average age of your class students, is it possible to pass all your class students one by one ? think of a way to pass them in your function
*/
// write your code here ...
function students (name,age,education,nationality){
	return {
		name:name,
		age:age,
		education:education,
		nationality:nationality
	}
}
var fr1=students("aya",21,"computer","iraqian");
var fr2=students("duaa",23,"software engineering","jordanian")

function showFriend(frinedData){
	var x=""
	for (var key in frinedData){
		x=frinedData.name+" "+"with the age of"+" "+frinedData.age+" "+ "and with"+" "+frinedData.education+" "+"education"
	}
	return x
}
var x=[fr1,fr2]
function avergeStudents (x){
	var sum =0
	var avg=0
for (var i =0 ;i<x.length;i++){
	sum+=x[i][age]
	avg=sum/x.length
}
return avg
}
/*
 b-create a function called rangeSquared in which it will accept two parameters, and will output the squared numbers between these two parameter if the number is even 
	in order to square the numbers create a function called square and call it inside rangeSquared function
	rangeSquared(2)// [4];
	rangeSquared(3) // null
	rangeSquared(2,10)// [4,16,36,64,100];
*/
// write your code here ...

function rangeSquared (n1,n2){
	var arr=[]
	if (n2===undefined || n1 %2!==0){
		return n1
	}
	for ( var i =n1;i<=n2;i+2){
		arr.push(i*i)
		i+=2
	}
	return arr
}


/* c- Find all leaders in an array. A leader is an element larger than all elements to the right of it.
 	Example:
	leader([98, 20, 30, 5, 11, 27]) // output: [98, 30, 27]
*/

// write your code here ....
function leader (array){
	var max = array[0];
	var newarr=[];
	for ( var i =0 ; i<array.length;i++){
		if (max>array[i+1]){
			newarr.push(array[i])
		}
		i++
		if(array[i]>array[i+1]){
			i++
		newarr.push(array[i+1])
	}
	}
		return newarr
}


