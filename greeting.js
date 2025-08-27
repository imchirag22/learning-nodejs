const fullName = `${process.argv[2]} ${process.argv[3]}`

let time = new Date().getHours()

if (time >18 || time < 4){
    console.log("good night",fullName)
} else if (time > 4 || time < 14 ){
    console.log("good morning",fullName)
} else {
    console.log("good afternoon",fullName)
}