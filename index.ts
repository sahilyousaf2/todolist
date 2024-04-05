#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
console.log(
    chalk.magenta.bold("\n \t Welcome To CodeWithSahil - Todo-List App!\n")
);

let todosList = []
let condition = true
while (condition) {
    let optionAns = await inquirer.prompt([
        {
            message: chalk.greenBright.italic("Please Select Option"),
            type: "list",
            name: "option",
            choices: [
                "Add Your Task",
                "Delete Your Task",
                "View Your Task",
                "Exit Application",
            ],
        },
    ]);
    if (optionAns.option == "Add Your Task") {
        let addTodos = await inquirer.prompt([
            {
                name: "moreTodos",
                type: "input",
                message: chalk.greenBright.italic("Enter Your Task: "),
            },
        ]);
        todosList.push(addTodos.moreTodos);

        if (addTodos.moreTodos <= 0) {
            console.log(chalk.red.strikethrough("Sorry Add Some Task"));
        } else {
            // console.log(`Your Task has been added`);
            console.log(chalk.cyanBright.italic(`${todosList} Your Task Has Been Added`));
        }
    } else if (optionAns.option == "Delete Your Task") {
        todosList.pop();
        // console.log(chalk.red(`${todosList}`));
        console.log(chalk.red('\n \tTask Deleted\n'));
        
        
        
    } else if (optionAns.option == "View Your Task") {
        console.log(chalk.yellowBright.bold("\n \tYour Task List Follow :\n"));
        todosList.forEach((moreTodos) => {
            console.log(moreTodos);
        });
    } else if (optionAns.option == "Exit Application") {
        condition = false;
        console.log(chalk.yellowBright.bold("\n \tThanks You!\n"));
    } else {
        console.log(chalk.red("Error"));
    }
}
