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
    const hour = parseInt(remainingSecond / 3600);
    let remainingHour = hour % 3600;
    const minute = parseInt(remainingHour / 60)
    return `${day} days ${hour} hours ${minute} ${remainingSecond} second ago`
}
console.log(getDay(900500))

// ${remainingHour} hours ago ${minuts} minutes 