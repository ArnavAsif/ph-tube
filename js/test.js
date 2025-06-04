// const isVerified = '';

// console.log(`${isVerified===true ? 'verified': 'not verified'} `)

// function getTime(time) {
    
//     const hour =parseInt(time / 3600);
//     let remainingSecond = time % 3600;
//     const minute = parseInt(remainingSecond / 60);
//     remainingSecond = remainingSecond % 60;
//     return ` ${hour} hour ${minute} minutes ${remainingSecond} second ago`;
// }
// console.log(getTime(4205))


function getDay(time){
    const day = parseInt(time / 86400);
    let remainingSecond = time % 86400;
    let remainingHour = parseInt(remainingSecond / 3600);
    let minuts = parseInt(remainingSecond % 3600);
    return `${day} days ago ${remainingHour} hours ago ${minuts} minutes ${remainingSecond} second`
}
console.log(getDay(900500))