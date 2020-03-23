// Alert
document.write('<h1>Alert</h1>');
var greet = prompt('Enter Your Name');
alert('Hello ' + greet + '\n How are your ?');
console.log('Hello ' + greet + '\n How are you ?');

// Variable for Strings
document.write('<h1>Variable for Strings</h1>');
var titledmsg;
titledmsg = 'Hello World';
alert(titledmsg);

var book = 'A Smarter Way to Learn a JavaScript';
document.write(book);

// Variable for Numbers
document.write('<h1>Variable for Numbers</h1>');
var age;
age ='35';
alert (greet + ' Your Age is ' + age);

var birthyear;
birthyear = '1985';
document.write('<br /> '+ greet + ' Your Birth Year is '+ birthyear);

// Legal and IIIegal Variables
document.write('<h1>Legal and IIIegal Variables</h1><br />');
document.write('<h3>a) A heading stating "Rules for naming JS variables"<br /></h3>');
document.write('<h3>b) Variables names can only contain <b> Alpha, AlphaNumeric,</b><br /><b> $Alpha</b> and <b>_Alpha</b>.<br /></h3>');
document.write('<h3>For example: $my_1stVariable<br /></h3>');
document.write('<h3>c) Variables must begin with a <b>Letter</b>, <b> $</b> or <br /><b> _Alpha</b>.<br /></h3>');
document.write('<h3>For example: $name, _name or name<br /></h3>');
document.write('<h3>d) Variable name are case Sensetive<br /></h3>');
document.write('<h3>e) Variable name should not be JS Library. <br /></h3>');

// Math Expression : Familiar Operators
document.write('<h1>Math Expression : Familiar Operators</h1>');
var abc;
document.write('<br />' + 'Number =', abc);
abc = '4';
document.write('<br />' + 'Initial Value :  Number = ' + abc);
abc++;
document.write('<br />' + 'After Increment :  Number = ' + abc);
abc += 7;
document.write('<br />' + 'After Addition 7 :  Number = ' + abc);
abc -= 5;
document.write('<br />' + 'After Decrement :  Number = ' + abc);
abc %= 3;
document.write('<br />' + 'The Reminder is :  Number = ' + abc);


// Math Expressions: Unfamiliar operators
document.write('<h1>Math Expressions: Unfamiliar operators</h1>');
var a = 2, b = 1;
var result = --a - --b + ++b + b--;
document.write('var a=2, b=1;<br />');
document.write('var result = --a - --b + ++b + b--<br />');
document.write(--a, '<br />');
document.write(--a - --b, '<br />');
document.write(--a - --b + ++b, '<br />');
document.write(--a - --b + ++b + b--, '<br />');

// Math Expressions: eliminating ambiguity
document.write('<h1>Math Expressions: eliminating ambiguity</h1>');
var celsius = 2;
var f;
var far = 38;
var c;
document.write('<sup>o</sup>C = ', celsius, '<br />');
document.write('<sup>o</sup>F = ', (celsius * 9 / 5) + 32, '<br />');
document.write('<sup>o</sup>F = ', far, '<br />');
document.write('<sup>o</sup>C = ', (far - 32) * 5 / 9, '<br />');

// Prompts
document.write('<h1>Prompts</h1>');
var user = prompt('Enter Your Name');
alert('Hello ' + user);
document.write('UserName = ', user);

// If Statment
document.write('<h1>if Statment</h1>');
var gender = prompt('Enter your Gender');
var msg;
if (gender === 'male') {
    msg = 'Good Morning Sir';
    document.write(msg, '<br /><br />');
};
if (gender === 'female') {
    msg = "Good Morning Ma'am"
    document.write(msg, '<br /><br />');
};

// Vowels
var userv = prompt('Enter Vowels Words Like A, E, I, O, U');
if (userv === 'a' || userv === 'e' || userv === 'i' || userv === 'o' || userv === 'u') {
    var vowels = 'It Is Vowel'
    document.write(vowels)
} else {
    var vowels = 'It Is Not Vowel Character'
    document.write(vowels)
};

// If...else and else if statment
document.write('<h1>If...else and else if statment</h1>');
var userL = prompt('Enter Color of Traffic Lights');
if (userL === 'red') {
    var msgL = 'Must Stop'
    document.write(msgL, '<br />');
} else if (userL === 'yellow') {
    var msgL = 'Ready to Move'
    document.write(msgL, '<br />');
} else if (userL === 'green') {
    var msgL = 'Move Now'
    document.write(msgL, '<br />');
};

// Comparison Operator
document.write('<h1>Comparsion Operator</h1>');
var userz = prompt('Enter a Number');
if (userz > '0') {
    var msgz = 'Number is Positive'
} else if (userz < '0') {
    var msgz = 'Nubmer is Negative'
} else if (userz === '0') {
    var msgz = 'Nubmer is Zero'
} else {
    var msgz = 'Please Enter Nubmer 0 - 9'
};
document.write(msgz, '<br /><br />');

var pass = 'mughal';
var userpass = prompt('Enter Your Password');
if (userpass > '') {
    if (pass === userpass) {
        var passmsg = '"Correct!" The Password you entered matches the original Password'
    } else {
        var passmsg = 'InCorrect Password'
    }
} else {
    var passmsg = 'Please Enter your Password'
};
document.write(passmsg, "<br />");

// Testing Set of Conditions
document.write('<h1>Testing Set of Conditions</h1><br />');
var utime = prompt('Enter Time 24 Hours Clock format Like : 1900 = 7pm');
if (utime >= '0000' && utime < 1200) {
    var timemsg = 'Good Morning'
} else if (utime >= '1200' && utime < 1700) {
    var timemsg = 'Good Afternoon'
} else if (utime >= '1700' && utime < 2100) {
    var timemsg = 'Good Evening'
} else if (utime >= '2100' && utime <= 2359) {
    var timemsg = 'Good Night'
} else {
    var timemsg = 'Please Enter Valid Time Format Like: 1900 = 7pm'
};
document.write(timemsg);

// Arrays
document.write('<h1>Arrays</h1>');
var arr = ['Moiz', 'Naveed', 'Ali'];
var score = ['370', '250', '470'];
var perc = [];
for (i = 0; i < arr.length; i++) {
    var per = score[i] / 500 * 100
    perc.push(per + '% ');
};
for (j = 0; j < arr.length; j++) {
    document.write('Score of ' + arr[j] + ' is ' + score[j] + ' Percentage: ' + perc[j] + '<br />');
};

// Arrays : adding and removing elements
// Arrays: removing, inserting, and exrtacting elements
var arrcolor = ['red', 'green', 'orange'];
document.write('<br /> Color: ', arrcolor, '<br /><br />');
var ucolor = prompt('Enter Color for Adding First Record');
arrcolor.unshift(ucolor);
document.write('a) Color: ', arrcolor, '<br /><br />');
var uecolor = prompt('Enter Color for Adding Last Record');
arrcolor.push(uecolor);
document.write('b) Color: ', arrcolor, '<br /><br />');
var uc1color = prompt('Enter First Color to Begning Array');
var uc2color = prompt('Enter Second Color to Begning Array');
arrcolor.unshift(uc1color, uc2color);
document.write('c) Color: ', arrcolor, '<br /><br />');
arrcolor.shift();
document.write('d) Color: ', arrcolor, '<br /><br />');
arrcolor.pop();
document.write('e) Color: ', arrcolor, '<br /><br />');
var ufcolor = prompt('Enter Index No of Array for ADD COLOR');
var uucolor = prompt('Enter COLOR Name');
arrcolor.splice(ufcolor, 0, uucolor);
document.write('f) Color: ', arrcolor, '<br /><br />');
var ug1 = prompt('Enter Index No to Start Delet Recored from array');
var ug2 = prompt('Enter Index No to End Delet Recored from array');
arrcolor.splice(ug1, ug2);
document.write('g) Color: ', arrcolor, '<br /><br />');

var city = ['Karachi', 'Islamabad', 'Multan', 'Hyderabad', 'Rawalpindi', 'Lahore'];
document.write(' City : ', city, '<br /><br />');
var icity = city.splice(2, 3);
var selectedcities = [];
selectedcities.push(icity);
document.write(' Selected Cities : ', selectedcities, '<br /><br />');

var pakistan = ['karachi', 'lahore', 'Islamabad'];
var uae = ['dubai', 'sharjah', 'Abu Dhabi'];
var countries = [pakistan, uae];
document.write(' Pakistan : ', pakistan, '<br /><br />');
document.write(' Uae : ', uae, '<br /><br />');
document.write(' Cities of Different Countries : ', countries, '<br /><br />');

// For Loops
document.write('<h1> For Loops </h1><br /><br />');
var table = prompt('Enter Multiplication Table No ');
var tablelen = prompt('Enter Multiplication Table Length');

for (i = 1; i <= tablelen; i++) {
    var result = table * i
    document.write(table + ' x ' + i + ' = ' + result + '<br />');
}

var counting = [];
for (i = 1; i <= 10; i++) {
    counting.push(i);
}
document.write('<br /> a) Counting : ' + counting + '<br />');

var rcounting = [];
for (i = 10; i > 0; i--) {
    rcounting.push(i);
}
document.write('<br /> b) Reverse Counting : ' + rcounting + '<br />');

var even = [];
for (i = 0; i <= 20; i++, i++) {
    even.push(i);
}
document.write('<br /> c) Even : ' + even + '<br />');

var odd = [];
for (i = 1; i <= 20; i++, i++) {
    odd.push(i);
}
document.write('<br /> d) Odd : ' + odd + '<br />');

var series = [];
for (i = 2; i <= 20; i++, i++) {
    series.push(i + 'k');
}
document.write('<br /> e) Series : ' + series + '<br />');

var fruits = ['apple', 'orange', 'banana', 'graps', 'mango'];
var ufruits = prompt('Enter Stop Value of Fuits to Print');
document.write('<br />3) Fruits : ', fruits, '<br />');
document.write(fruits.splice(0, ufruits, '<br />'));

// for loops : flasgs, Booleans, array length, and breaks
document.write('<h1>for loops : flasgs, Booleans, array length, and breaks</h1>');
var shop = ['cake', 'apple pie', 'cookie', 'chips', 'patties'];
var matchfound = 'no';
document.write(' Bakrey Items Available :  ', shop, '<br />');
var ushop = prompt('Enter Bakery Item for search in Shop Available or not');
for (i = 0; i < shop.length; i++) {
    if (ushop === shop[i]) {
        matchfound = 'yes';
        break;
    };
};
if (matchfound === 'no') {
    document.write('Item Not Available in Shop');
} else {
    document.write(ushop, ' Available in Shop Thanks For Shopping');
};

// Nested Loops
document.write('<h1>Nested Loops</h1>');
var a1 = [24, 53, 78, 91, 12];
var largest = 0;
var smallest = 0;
for (i = 0; i < a1.length; i++) {
    if (a1[i] > largest) {
        largest = a1[i];
    } else if (a1[i] < largest) {
        smallest = a1[i];
    };
};
document.write('Largest :  ', largest, '<br />');
document.write('Smallest :  ', smallest, '<br />');

// Challenge
document.write('<h1>Challenge</h1>');
var stars = 7;
for (j = 0; j < 7; j++) {
    for (i = 0; i < stars; i++) {
        document.write("*");
    }
    document.write("<br />");
    stars--;
};

document.write('<h3>Q2</h3>');
var auser = prompt('Enter How many Lines you want ');
stars = auser;
for (j = 0; j < auser; j++) {
    document.write('a) ');
    for (i = 0; i < stars; i++) {
        document.write("*");
    }
    document.write("<br />");
};
document.write('<br /><br />');
var buser = prompt('Enter How many Lines you want ');
stars = 1;
for (j = 0; j < buser; j++) {
    document.write('b) ');
    for (i = 0; i < stars; i++) {
        document.write("*");
    }
    document.write("<br />");
    stars++;
};
document.write('<br /><br />');
var cuser = prompt('Enter How many Lines you want ');
stars=cuser;
for(j=0; j < cuser; j++) {
    document.write('c)  ');
    for(i = 0; i < stars; i++) {
      document.write("*");
    }
    document.write("<br />");
    stars--;
  };

  document.write('<br /><br />');
  var duser = prompt('Enter How many Lines you want ');
  stars = 1;
for (j = 0; j < duser; j++) {
    document.write('d) ');
    for (i = 0; i < stars; i++) {
        document.write("*");
    }
    document.write("<br />");
    stars++;
};
stars=duser;
for(j=0; j < duser-1; j++) {
    document.write('d)  ');
    for(i = 0; i < stars-1; i++) {
      document.write("*");
    }
    document.write("<br />");
    stars--;
  };
