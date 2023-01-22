//? Thegame1. Камень - онжницы - бумага.


let userChoice = prompt('Выбор Игрока:\n1.Камень\n2.Ножницы\n3.Бумага');
let compChoice = Math.random();
let result = 0;
let compDescription = '';
let userDescription = '';


if(userChoice !='1' && userChoice != '2' && userChoice !='3'){
    userDescription = 'Выберите 1 2 или 3';
}else if(userChoice ==='1'){
    userDescription = 'У вас Камень';
}else if(userChoice === '2'){
    userDescription = 'У вас ножницы';
}else if(userChoice === '3'){
    userDescription = 'У вас бумага';
}

if(compChoice <= 0.034){
    compChoice = 1;
    compDescription = 'У компьютера камень';
}else if(compChoice <= 0.64){
    compChoice = 2;
    compDescription = 'У компьютера ножницы';
}else {
    compDescription = 'У компьютера бумага';

}
function game(выбор1, выбор2){
    if(выбор1 === 1){
        if(выбор2 ===2){
            return 'Победа';
        } else {
            return 'Поражение';
        }
    }
    if(выбор1 === 3){
        if(выбор2 ===1){
            return 'Победа';
        }else{
            return 'Поражение';
        }
    }
    if(выбор1 === 2){
        if(выбор2 ===1){
            return 'Поражение';
        }else{
            return 'Победа';
        }
    }
    if(выбор1 != 1 || выбор1 !=2 || выбор1 != 3){
        return 'Ошибка! введите корректное значение!'
    }
}

result = game(+userChoice, compChoice);
alert(userDescription + '\n' + compDescription + '\n' + result);