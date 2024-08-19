
var BMI;
let mMass = 80;
let mHeight = 185;

let jMass = 100;
let jHeight = 170;

mBMI = mMass / (mHeight * mHeight);
jBMI = jMass / (jHeight * jHeight);

markHigherBMI = true;
if(jBMI > mBMI)
{
    var jmarkHigherBMI = true;
    var mMarkHigherBMI = false;
    console.log("mass of john " +jBMI);
}
else{
     mMarkHigherBMI = true;
    jmarkHigherBMI = false;
    console.log("mass of mark " +mBMI);
}

