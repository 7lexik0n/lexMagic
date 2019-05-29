var titles = document.querySelectorAll('.signature');
localStorage.setItem('textColor', textColor);
titles.forEach(function(element){
    element.style.color = textColor;
})