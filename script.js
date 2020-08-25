const fs = require('fs');
// 1 - What floor does Santa end up on
// ( --> should go UP 1 floor
// ) --> should go DOWN 1 floor

function question1() {
    fs.readFile('./santa.txt', (err, data) => {
        const direction = data.toString();
        const directionArray = direction.split('');
        const answer = directionArray.reduce((acc, currentValue) => {
            if(currentValue === '('){
                return acc += 1
            }
            else if(currentValue === ')'){
                return acc -= 1
            }
        }, 0)
        console.log('floor:', answer);
    })
}

question1()


//2 - When does the Santa first enter the basement

function question2(){
    fs.readFile('./santa.txt', (err, data) => {
        const direction = data.toString();
        const directionArray = direction.split('');
        let acc = 0;
        let counter = 0;

        const answer = directionArray.some((currentValue) => {
            if(currentValue === '('){
                acc += 1
            }
            else if(currentValue === ')'){
                acc -= 1
            }
            counter++;
            return acc < 0
        })
        console.log('basement entered at:', counter);
    })
}

question2()