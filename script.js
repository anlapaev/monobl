
let all = document.getElementsByClassName("cube")


let map = document.getElementsByClassName("map")
    
let arr_img = [
    niz2 = './niznii2.png',
    dzer2 = './dzer2.png',
    semenov2 = './semenov2.png',
    vorotin2 = './vorotin2.png'
]

function checkTimeAndPlay() {
    var x = document.getElementById("myVideo");
    x.style.visibility='visible'
    x.play();
}
  

let j = 0;

setTimeout(() => {
    
    for(let i = 0; i < all.length; i++) {
        all[i].addEventListener('click', function () {
            
            // all[i].src = arr_img[i]
            all[i].src = arr_img[i];
            console.log(j);
            j++;
            if (j == 4) {
                for (let index = 0; index < all.length; index++) {
                    all[index].style.display = 'none';
                }
                
                console.log(j);
                setTimeout(checkTimeAndPlay, 1500);

    }
        })
        
    }
    
            
}, 450)







