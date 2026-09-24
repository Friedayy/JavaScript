function convertTemperature(degrees, unit){
    if(unit==="C"){
        return (degrees*9/5)+32;
    }else if(unit==="F"){
        return (degrees-32)*5/9;
    }
}
convertTemperature(25, "C");