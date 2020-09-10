import chalk from 'chalk'

export const print = console.log

// generator or controller
export const blue = log => print(chalk.blue(log))
// error
export const red = log => print(chalk.red(log))
// action POST, GET, PUT, DELETE
export const green = log => print(chalk.green(log))
// route
export const green = log => print(chalk.green(log))
