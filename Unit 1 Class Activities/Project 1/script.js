document.addEventListener('DOMContentLoaded', function () {
    var showVariablesButton = document.getElementById('displayBtn');
    var contentArea = document.getElementById('contentArea');

    showVariablesButton.addEventListener('click', function () {
        var varVariable = "I am a var variable.";
        let letVariable = "I am a let variable.";
        const constVariable = "I am a const variable.";

        let number = 10;
        let string = "20";
        let additionResult = number + Number(string); // Convert string to number before adding

        let assignmentVar = 5; // Using var
        assignmentVar = 15; // Reassigning var

        let assignmentLet = 10; // Using let
        assignmentLet = 20; // Reassigning let

        contentArea.innerHTML = `
            <p>${varVariable}</p>
            <p>${letVariable}</p>
            <p>${constVariable}</p>
            <p>Addition of number and string (converted to number): ${additionResult}</p>
            <p>Assignment with var (initial: 5, reassigned: 15): ${assignmentVar}</p>
            <p>Assignment with let (initial: 10, reassigned: 20): ${assignmentLet}</p>
        `;
    });
});