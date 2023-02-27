var fullName = prompt("What is your full name?");
var userName = prompt("What username do you prefer?");
var gender = confirm("What is your gender?\n Click OK for Male,\n while CANCEL for Female.");
    if (gender){
        gender = "M";
        alert("Your gender has been set to 'Male'")
    }
    else {
        gender = "F";
        alert("Your gender has been set to 'Female'")
    }
var description = prompt("Write a description about yourself.");
var birthYear = prompt("When is your birth year?");
var profilepic = confirm("Do you want to upload a custom pfp?");
    if(profilepic){
        profilepic = prompt("Enter the filename of your pfp.");
        alert("Your pfp has been set to the file " + profilepic);
    }
    else {
        profilepic = "prof.png"
    }

document.getElementById("fname").innerHTML = fullName;
document.getElementById("username").innerHTML = userName;
document.getElementById("gender").innerHTML = gender;
document.getElementById("desc").innerHTML = description;
document.getElementById("year").innerHTML = birthYear;
document.getElementById("age").innerHTML = 2023 - birthYear;
document.getElementById("ppic").setAttribute("src", profilepic);
