var gifts = document.querySelectorAll('.gift'),
    giftsFiltred = [];
gifts.forEach(function(element){
    if (element.querySelector('img').getAttribute('src').match(/item/)) giftsFiltred.push(element)
});
giftsFiltred.forEach(function(element){
    let elWidth = +element.style.width.slice(0,-2);
    element.style.width = elWidth - 5 +'px';
    let elHeight = +element.querySelector('img').style.minHeight.slice(0,-2);
    element.querySelector('img').style.minHeight = elHeight - 5 + 'px';
    if (element.querySelector('.messi_plus')) {
        let elTop = element.querySelector('.messi_plus').style.top.slice(0,-2);
        let elLeft = element.querySelector('.messi_plus').style.left.slice(0,-2);
        element.querySelector('.messi_plus').style.top = elTop - 2.5 + 'px';
        element.querySelector('.messi_plus').style.top = elLeft - 2.5 + 'px';
    }
    if (element.querySelector('.menyala_plus')) {
        let elTop = element.querySelector('.menyala_plus').style.top.slice(0,-2);
        let elLeft = elementelement.querySelector('.menyala_plus').style.left.slice(0,-2);
        element.querySelector('.menyala_plus').style.top = elTop - 2.5 + 'px';
        element.querySelector('.menyala_plus').style.top = elLeft - 2.5 + 'px';
    }
});