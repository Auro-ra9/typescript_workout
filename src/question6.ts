import * as readline from "readline-sync";
let number: number = Number(readline.question("Enter a number"));

switch (true) {
  case (number===1):
    {
      console.log("Monday");
    }

    break;
  case (number===2):
    {
      console.log("Tuesday");
    }

    break;
  case(number=== 3):
    {
      console.log("Wednesday");
    }

    break;
  case(number=== 4):
    {
      console.log("Thursday");
    }

    break;
  case(number=== 5):
    {
      console.log("Friday");
    }

    break;
  case (number===6):
    {
      console.log("Saturday");
    }

    break;
  case (number===7):
    {
      console.log("Sunday");
    }

    break;

  default:
    {
      console.log("Invalid Entry");
    }
    break;
}
