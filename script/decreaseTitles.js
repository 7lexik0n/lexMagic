var gifts = document.querySelectorAll('.gift'),
    giftsFiltred = [];
gifts.forEach(function(element){
    if (element.querySelector('img').getAttribute('src').match(/item/)) giftsFiltred.push(element)
});
giftsFiltred.forEach(function(element){
    let font = +element.querySelector('.signature').style.fontSize.slice(0,-2);
    element.querySelector('.signature').style.fontSize = font - 1 +'px';
});