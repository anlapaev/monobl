console.log('1555')

// let all = document.getElementsByClassName("transparent")
let all = document.getElementsByClassName("cube")
let not_transparent = document.getElementsByClassName("not_transparent")
// let not_transparent = document.querySelector("not_transparent")

console.log(all)

// console.log(niznii)
// console.log(map)



// niznii.addEventListener(click, () => {
//     console.log('31')
// })

let arr_img = [
    niz2 = './niznii2.png',
    dzer2 = './dzer2.png',
    semenov2 = './semenov2.png',
    vorotin2 = './vorotin2.png'
]


setTimeout(() => {
    
    console.log(all)
    console.log(not_transparent)

    for(let i = 0; i < all.length/2; i++) {
        
        all[i + 1].addEventListener('click', function() {
            console.log(31)
            // all[i].src = arr_img[i]
            not_transparent[i].classList.add('active')
        })
    }
            
    // for(let j = 0; j < not_transparent.length; j++) {
    //     not_transparent[j].classList.add('active')
    // }





}, 100)