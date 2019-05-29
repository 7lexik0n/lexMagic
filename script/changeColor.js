var titles = document.querySelectorAll('.signature');
localStorage.setItem('backColor', backColor);
titles.forEach(function(element){
    element.style.backgroundColor = backColor;
})