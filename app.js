// Chapters 21-25.pdf:

// 1.
var firstName = prompt("Enter your first name:");
var lastName = prompt("Enter your last name:");
var fullName = firstName + " " + lastName;
alert("Hello, " + fullName + "!");

// 2. 
var phoneModel = prompt("Enter your favorite mobile phone model:");
document.write("Length of your input: " + phoneModel.length);

// 3. 
var word = "Pakistani";
document.write("Index of 'n' in 'Pakistani': " + word.indexOf("n"));

// 4. 
var phrase = "Hello World";
document.write("Last index of 'l' in 'Hello World': " + phrase.lastIndexOf("l"));

// 5. 
var country = "Pakistani";
document.write("Character at 3rd index in 'Pakistani': " + country.charAt(3));

// 6. 
var firstName = prompt("Enter your first name:");
var lastName = prompt("Enter your last name:");
var fullName = firstName.concat(" ", lastName);
alert("Hello, " + fullName + "!");

// 7. 
var city = "Hyderabad";
document.write("After replacement: " + city.replace("Hyder", "Islam"));

// 8. 
var message = "Ali and Sami are best friends. They play cricket and football together.";
document.write("After replacement: " + message.replace(/and/g, "&"));

// 9. 
var strNumber = "472";
document.write("Value:"+strNumber + "<br>")
document.write("type:"+typeof strNumber +"<br>"+"<br>")
var number = parseInt(strNumber);
document.write("Value: " + number + "<br>");
document.write("Type: " + typeof(number));

// 10. 
var userInput = prompt("Enter some text:");
document.write("Capitalized input: " + userInput.toUpperCase());

// 11. 
var userInput = prompt("Enter some text:");
var titleCase = userInput.toLowerCase().replace(/\b\w/g, function (char) {
    return char.toUpperCase();
});
document.write("Title case input: " + titleCase);

// 12. 
var num = 35.36;
var strNum = num.toString().replace(".", "");
document.write("Number without dot: " + strNum);

// 13. 
var username = prompt("Enter your username:");
if (/[!@,.]/.test(username)) {
    alert("Please enter a valid username without special symbols.");
}

// 14. 
var A = ["cake", "apple pie", "cookie", "chips", "patties"];
var userInput = prompt("Enter an item to search:");
var found = false;
for (var i = 0; i < A.length; i++) {
    if (A[i].toLowerCase() === userInput.toLowerCase()) {
        found = true;
        break;
    }
}
if (found) {
    alert("Yes, '" + userInput + "' is available in the list.");
} else {
    alert("No, '" + userInput + "' is not available in the list.");
}

// 15.
var password = prompt("Enter your password:");
if (
    !/^[a-zA-Z].*\d|\d.*[a-zA-Z]/.test(password) ||
    password.length < 6
) {
    alert("Please enter a valid password.");
}

// 16. 
var university = "University of Karachi";
var universityArray = university.split(" ");
for (var i = 0; i < universityArray.length; i++) {
    document.write(universityArray[i] + "<br>");
}

// 17. 
var userInput = prompt("Enter something:");
document.write("Last character: " + userInput.charAt(userInput.length - 1));

// 18.
var sentence = "The quick brown fox jumps over the lazy dog";
var count = sentence.match(/\bthe\b/gi).length;
document.write("Occurrences of 'the': " + count);



// Questions PDF 21-25:

// Chapter 21 (Changing Case)

// 1. 
var allLower = userInput.toLowerCase();

// 2. 
x = x.toLowerCase();

// 3. 
y = y.toUpperCase();

// 4.
var lowerCaseString = originalString.toLowerCase();

// 5. 
var lowerCaseElement = arrayElement.toLowerCase();

// 6. 
alert(cityName.toUpperCase());

// 7. 
var cityName = "kaRacHi";
cityName = cityName.charAt(0).toUpperCase() + cityName.slice(1).toLowerCase();


// Chapter 22 - 25 (Strings)

// 1. 
var sameWords = "captain";
var slicedWord = sameWords.slice(1, 3);

// 2. 
var stringLength = someString.length;

// 3. 
var animal = "elephant";
var seg = animal.slice(2, 6);

// 4. 
var str = "some string";
var strLength = str.length;

// 5. 
var anotherString = "some other string";
var length = anotherString.length;
var slicedPart = anotherString.slice(1, length - 3);

// 6. 
var text = "To be or not to be.";
var indx = text.indexOf("be"); 

// 7. 
var text = "To be or not to be.";
var indx = text.lastIndexOf("be"); 

// 8. 
var indx = text.lastIndexOf("go");

// 9. 
if (text.indexOf(segment) !== -1) 

// 10. 
var cha = "abcde".charAt(2); 

// 11. 
var cha = text.charAt(9);

// 12. 
var x = str.charAt(str.length - 1);

// 13. 
var cha = input.charAt(4);
