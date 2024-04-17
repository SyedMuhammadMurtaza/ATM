#! /usr/bin/env node
import inquirer from "inquirer";
let myBalance = 10000;
let myPin = 1234;
let exit;
//PIN Inquirer
let pinAnswer = await inquirer.prompt({
    name: "pin",
    message: "Enter your PIN",
    type: "number"
});
if (pinAnswer.pin === myPin) {
    while (exit !== "exit") {
        let operationAns = await inquirer.prompt([
            {
                name: "operation",
                message: "Please Select Option",
                type: "list",
                choices: ["withdraw", "check balance", "exit"]
            }
        ]);
        //Option Selection
        if (operationAns.operation === "withdraw") {
            let amountAns = await inquirer.prompt({
                name: "select",
                message: "Select Any Amount",
                type: "list",
                choices: ["1000", "1500", "2000", "5000", "enter amount"]
            });
            if (amountAns.select === "enter amount") {
                let customAmount = await inquirer.prompt({
                    name: "amount",
                    message: "Enter Your Amount",
                    type: "number"
                });
                if (customAmount.amount > myBalance) {
                    console.log("Insufficeint Balance");
                }
                else {
                    myBalance -= customAmount.amount;
                    console.log(myBalance);
                }
            }
            else {
                if (amountAns.select <= myBalance) {
                    myBalance -= amountAns.select;
                    console.log(myBalance);
                }
                else {
                    console.log("Insufficient Balance");
                }
            }
            console.log(`Your Balance Is: ${myBalance} `);
        }
        else if (operationAns.operation === "check balance") {
            console.log(myBalance);
        }
        else if (operationAns.operation === "exit") {
            console.log("Exiting");
            exit = "exit";
        }
    }
}
else {
    console.log("Incorrect PIN");
}
