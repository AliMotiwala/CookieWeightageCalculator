function calculate() {
  var input = document.getElementById("input");
  var input_brownSugar = document.getElementById("brownSugar");
  var input_whiteSugar = document.getElementById("whiteSugar");
  var input_flour = document.getElementById("flour");
  var input_eggs = document.getElementById("eggs");
  var input_butter = document.getElementById("butter");
  var input_chocolate = document.getElementById("chocolate");
  var input_cocoa = document.getElementById("cocoa");

  var cookies = parseInt(input.value);
  if (cookies > 0) {
    
    // Below is the Weight (in grams) of ingredients that will be used to make 20 cookies

    var perCookieWeight = 65;

    var brownSugar = 375;
    var whiteSugar = 500;
    var flour = 500;
    var eggs = 5;
    var butter = 125;
    var chocolate = 300;
    var cocoa = 150;

    // calculate how much of brown sugar will be used to make 1 cookie, above mentioed weight is for 20 cookies

    var brownSugarUsed = (cookies / 20) * brownSugar;
    var whiteSugarUsed = (cookies / 20) * whiteSugar;
    var flourUsed = (cookies / 20) * flour;
    var eggsUsed = (cookies / 20) * eggs;
    var butterUsed = (cookies / 20) * butter;
    var chocolateUsed = (cookies / 20) * chocolate;
    var cocoaUsed = (cookies / 20) * cocoa;

    // output results in controls mentioned in .html file
    input_brownSugar.innerHTML = "Brown Sugar: " + brownSugarUsed + " grams";
    input_whiteSugar.innerHTML = "white Sugar: " + whiteSugarUsed + " grams";
    input_flour.innerHTML = "Flour: " + flourUsed + " grams";
    input_eggs.innerHTML = "Eggs: " + eggsUsed + " grams";
    input_butter.innerHTML = "Butter: " + butterUsed + " grams";
    input_chocolate.innerHTML = "Chocolate: " + chocolateUsed + " grams";
    input_cocoa.innerHTML = "Cocoa Powder: " + cocoaUsed + " grams";
    
  } else {
    output.innerHTML = "Please enter a number greater than 0";
  }
}
