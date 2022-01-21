// next generate a random integer between 1-100,
// until you find a prime number, and print all numbers.

const random = () => {
    const ran = Math.floor(Math.random()*100);
    return ran;
}

const Prime = ( r ) => {
    for ( let i = 2; i < r ; i++ ){
        if(r % i === 0){
            console.log(r);
            return Prime(random());
        }
    }
    return console.log(`Prime Number:${r}`);
}

Prime(random());
