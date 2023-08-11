let clock =()=> {
    let date = new Date()
    let monht_num = date.getMonth()
    let day = date.getDay()
    let hours = date.getHours()
    let minutes = date.getMinutes()
    let second = date.getSeconds()

    // let date_time = 'Бугун :'+ day + monht_num+'-'+'саат'+hours+':'+minutes+':'+second
    if(hours<9)hours="0"+hours
    if(minutes<9)minutes="0"+minutes
    if(second<10)second="0"+second
let month = ["янв", "фе", "март", "апр", "май", "июнь", "июль", "ав", "сень", "окт", "ноя", "дек"]
console.log()
let date_time = hours+":"+minutes+":"+second
let element = document.getElementById('time').innerHTML = date_time
setTimeout(()=>{
    clock()
},1000);
}

// let date = new Date()
// console.log(date_time)

clock()