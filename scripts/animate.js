document.querySelector('div').addEventListener('click',Animate)


function Animate(){
    document.querySelector('div').classList.add('red');
setInterval(function(){document.querySelector('div').style.display='none'},2330)
}


export {Animate}