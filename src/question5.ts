import * as readline from "readline-sync";

let totalMark: number = Number(readline.question("enter your score"));

switch (true) {
  case( totalMark > 90):
    {
      console.log("Grade: A");
    }
    break;
  case (totalMark >= 80 && totalMark <= 89):
    {
      console.log("Grade: B");
    }
    break;
  case (totalMark >= 70 && totalMark <= 79):
    {
      console.log("Grade: C");
    }
    break;
  case (totalMark >= 60 && totalMark <= 69):
    {
      console.log("Grade: D");
    }
    break;
  case (totalMark >= 50 && totalMark <= 59):
    {
      console.log("Grade: E");
    }
    break;
  case( totalMark >= 50):
    {
      console.log("Failed");
    }
    break;
}
