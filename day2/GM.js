function gm(hour){
    if(hour < 12){
        return "Good Morning";
    }else if (hour < 17){
        return "Good Afternoon";
    }else if(hour <21){
        return "Good Evnening"
    }else if(hour <24){
        return "Good Night";
    }else{
        return "What is this time you dumbo ????";
    }

}
console.log(gm(4));
console.log(gm(14));
console.log(gm(19));
console.log(gm(23));
console.log(gm(25));