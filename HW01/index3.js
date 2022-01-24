    // Реализовать cкрипт универсльного калькулятора который получает от пользователя два значения (a, b), и выводит в консоль результат всех арифметических операций (+, -, *, /).
    // **************
    // При а = [значение], b = [значение]
    // Результат:
    // --------------------
    // a + b = [res]; a - b = [res]; a * b = [res]; a / b = [res];
    // -------------------
    // **************


    const firstString = prompt("Enter the first number = a");
    const secondString = prompt("Enter the second number = b");

    const firstNumber = Number(firstString);
    const secondNumber = Number(secondString);

    const sumResult = (firstNumber + secondNumber);
    const substrResult = (firstNumber - secondNumber);
    const multiplResult = (firstNumber * secondNumber);
    const divResult = (firstNumber / secondNumber);
    

    console.log(`**************
        \n\nПри a = ${firstNumber}, b =  ${secondNumber}
        \n\nРезультат:
        \n\na + b = ${sumResult}; a - b = ${substrResult}; a * b = ${multiplResult}; a / b = ${divResult};
        \n\n-------------------
        \n\n**************`);