function greeting(time) {
    const fullName = `${process.argv[2]} ${process.argv[3]}`
    if (time >18 || time < 4){
    console.log("good night",fullName)
} else if (time > 4 || time < 14 ){
    console.log("good morning",fullName)
} else {
    console.log("good afternoon",fullName)
}
}
// old method -> common js
// module.exports = greeting

// new method -> export default
export default greeting

// 1 file 1 export default only