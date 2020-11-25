
const multiline =
`***********.* 
*S.....**.*.T
*****.....*.*
*****.***.*.*
*****.*****.*
*****.*****.*
*****.......*
*****.*******
*.........***
*.******...**
*....********`

for (i = 0; i < 12; i++) {
    let section = document.createElement('section')
    section.id = i
    document.body.appendChild(section);
}

let id = 0;
let y = 0;

for (i = 0; i < multiline.length; i++) {
    let a = multiline[i].split('');
    if (a == " ") {
        i++
        a = multiline[i].split('');
    }
    if (a == "*") {
        let create_div = document.createElement('div');
        create_div.className = 'wall'
        document.getElementById(id).appendChild(create_div)
    } else if (a == ".") {
        let create_div = document.createElement('div');
        create_div.className = 'path'
        document.getElementById(id).appendChild(create_div)
    } else if (a == "S") {
        let create_div = document.createElement('div');
        create_div.className = 'start'
        document.getElementById(id).appendChild(create_div)
    } else if (a == "T") {
        let create_div = document.createElement('div');
        create_div.className = 'end'
        document.getElementById(id).appendChild(create_div)
    }
    y++
    if (y == 14 && id <= 10) {
        id++
        y = 0
    }
}

let create_player = document.createElement('div')
create_player.className = 'player'
document.querySelector('.start').appendChild(create_player);
let player = document.querySelector('.player')

let pos_x = 2;
let pos_y = 1;

document.addEventListener('keydown', function (event) {
    let target = event.code;
    if (target == 'ArrowUp') {
        if (document.querySelector("#\\3" + (pos_y - 1) + " > div:nth-child(" + pos_x + ")").classList.contains('wall')) {
            console.log('hit a wall');
        } else {
            console.log('moved up');
            pos_y--
            document.querySelector("#\\3" + pos_y + " > div:nth-child(" + pos_x + ")").appendChild(player);
        }
    } else if (target == 'ArrowRight') {
        if (document.querySelector("#\\3" + pos_y + " > div:nth-child(" + (pos_x + 1) + ")").classList.contains('wall')) {
            console.log('hit a wall');
        } else {
            console.log('moved right');
            pos_x++
            console.log(pos_x);
            document.querySelector("#\\3" + pos_y + " > div:nth-child(" + pos_x + ")").appendChild(player);
        }
    } else if (target == 'ArrowDown') {
        if (document.querySelector("#\\3" + (pos_y + 1) + " > div:nth-child(" + pos_x + ")").classList.contains('wall')) {
            console.log('hit a wall');
        } else {
            console.log('moved down');
            pos_y++
            document.querySelector("#\\3" + pos_y + " > div:nth-child(" + pos_x + ")").appendChild(player);
        }
    } else if (target == 'ArrowLeft') {
        if (document.querySelector("#\\3" + pos_y + " > div:nth-child(" + (pos_x - 1) + ")").classList.contains('wall')) {
            console.log('hit a wall');
        } else {
            console.log('moved left');
            pos_x--
            document.querySelector("#\\3" + pos_y + " > div:nth-child(" + pos_x + ")").appendChild(player);
        }
    }
    if (pos_y == 1 && pos_x == 13) {
        alert('You saved her')
    }
    if (pos_y == 2 && pos_x == 10){
        main.innerHTML = "<video autoplay muted><source src='C:\Users\thoma\Desktop\laby\img\The Legend of Zelda_ The Wind Waker HD Wii U Ganondorf Laugh.mp4' type='video/mp4' /></video>"
        setTimeout(function(){ document.querySelector("body > main > video").style.display = location.reload() }, 5000);
        alert('you are dead ');
    }
})