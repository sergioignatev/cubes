document.querySelector('div').addEventListener('click',

function(){
    
    document.querySelector('div').classList.add('anim');
    document.querySelector('div').innerHTML=""
    setTimeout(
        function(){
            document.querySelector('.anim').innerHTML=`<i class="fa fa-bolt" aria-hidden="true"></i>`
            document.querySelector('.anim').style.color='black';
            document.querySelector('.anim').style.background='white'
    },5000
    )
    setTimeout(
        function(){
            document.querySelector('.anim').innerHTML=`<i class="fa fa-battery-quarter" aria-hidden="true"></i>`
        },10000
    )
}

)
