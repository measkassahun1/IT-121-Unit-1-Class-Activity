// Code to handle button click events and update content area with different messages
document.addEventListener('DOMContentLoaded', function () {
    var showMessage1Button = document.getElementById('showMessage1');
    var showMessage2Button = document.getElementById('showMessage2');
    var contentArea = document.getElementById('contentArea');
    showMessage1Button.addEventListener('click', function () {
        contentArea.innerHTML = "Happy Class time.";
    });
    showMessage2Button.addEventListener('click', function () {
        contentArea.innerHTML = "Today is going to be a very good day.";
    })
})
