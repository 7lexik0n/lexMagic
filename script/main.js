var gifts = document.querySelectorAll('.gift'),
    giftsFiltred = [];
gifts.forEach(function(element){
    if (element.querySelector('img').getAttribute('src').match(/item/)) giftsFiltred.push(element)
});
for (var i = 0; i < giftsFiltred.length; i++) {
    giftsFiltred[i].parentElement.appendChild(giftsFiltred[i]);
    var signature = document.createElement('div'); 
    if (!giftsFiltred[i].querySelector('.signature')) {
        giftsFiltred[i].appendChild(signature);
        signature.classList.add('signature');
        signature.innerText = giftsFiltred[i].querySelector('img').getAttribute('alt'); 
        signature.style.fontSize = '9px'; 
        signature.style.fontWeight = '700'; 
        signature.style.backgroundColor = 'rgb(19, 177, 8)'; 
        signature.style.color = '#fff'; 
        signature.style.padding = '2px'; 
        signature.style.textAlign = 'center'; 
        giftsFiltred[i].style.float = 'none';
        giftsFiltred[i].style.display = 'inline-block';
        giftsFiltred[i].style.verticalAlign = 'top';
        giftsFiltred[i].style.width = '75px';
        giftsFiltred[i].querySelector('img').style.width = '100%';
        giftsFiltred[i].querySelector('img').style.minHeight = '75px';
        if (giftsFiltred[i].querySelector('.messi_plus')) {
            giftsFiltred[i].querySelector('.messi_plus').style.top = '28px';
            giftsFiltred[i].querySelector('.messi_plus').style.left = '28px';
        }
        if (giftsFiltred[i].querySelector('.menyala_plus')) {
            giftsFiltred[i].querySelector('.menyala_plus').style.top = '28px';
            giftsFiltred[i].querySelector('.menyala_plus').style.left = '28px';
        }
    }    
}