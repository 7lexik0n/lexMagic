var gifts = document.querySelectorAll('.ititle'),
    giftsCopy = gifts,
    wrapper = document.querySelector('.block_6');
for (var i = 0; i < giftsCopy.length; i++) {
    wrapper.appendChild(giftsCopy[i]);
    var signature = document.createElement('div'); 
    giftsCopy[i].appendChild(signature); 
    signature.innerText = giftsCopy[i].getAttribute('data-title'); 
    signature.style.fontSize = '12px'; 
    signature.style.fontWeight = '700'; 
    signature.style.backgroundColor = 'rgb(19, 177, 8)'; 
    signature.style.color = '#fff'; 
    signature.style.padding = '2px'; 
    signature.style.textAlign = 'center'; 
    giftsCopy[i].style.float = 'none';
    giftsCopy[i].style.display = 'inline-block';
    giftsCopy[i].style.verticalAlign = 'top';
    giftsCopy[i].style.width = '15%';
    giftsCopy[i].children[0].children[0].style.width = '100%';
    giftsCopy[i].children[0].children[0].style.minHeight = '120px';
}