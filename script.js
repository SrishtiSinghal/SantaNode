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