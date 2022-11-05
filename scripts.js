let actualColorMode = '';
let statusOfCopyColor = false;

function setRandonColor () {    
    copyColorStatusFalse();
    switch(actualColorMode){
        case '': simpleSelected(), setClasses();
        case "simple": simpleColors(), setClasses();
        break;
        case "hex": colorHex(), setClasses();   
        break;
        case "rgb": rgbRandomColors(), setClasses();
    };
};

function setClasses(){
    document.querySelector('.hiddenStatus').hidden = false;
    document.querySelector('.mainInstrutionsArea').style.display = "none";
    document.querySelector('.contentAreabackground').style.display = "flex";
    document.querySelector('.createdBy').style.display = "block";
    document.querySelector('.btnCopyColor').hidden = false;  
}

/*------------- Simple colors ---------------------*/

const simpleColorsList = [
    "Black", "Orchid", "Blue", "Orange", "Darkgreen", "Violet", "Gray","Green", "Red", "Orange", "Silver", "Indigo", "Yellow", "Pink","Teal","PaleGreen","BurlyWood"
];

function simpleColors (){
    const colorNameSimple = simpleColorsList[(Math.floor(Math.random() * simpleColorsList.length))];

    document.querySelector('.showActualColor').innerText = 
    document.body.style.backgroundColor = colorNameSimple;

    if( colorNameSimple === 'Black' || colorNameSimple === 'Blue' || colorNameSimple === 'Indigo' || colorNameSimple === 'Darkgreen' ){
        document.querySelector('.btnRandonColor').classList.add('btnLightColor');
        document.querySelector('.btnCopyColor').classList.add('btnLigthCopyColor');
        smallColorDark();

    } else {
        document.querySelector('.btnRandonColor').classList.remove('btnLightColor');
        document.querySelector('.btnCopyColor').classList.remove('btnLigthCopyColor');
        smallColorLight();     
    };
};

/*------------- Hexadecimal colors ---------------------*/

const hexColorsList = ["A","B","C","D","E","F",0,1,2,3,4,5,6,7,8,9];

function colorHex(){
    let hexcolor = '#';

    for(let i = 0; i < 6; i++){
        hexcolor += hexColorsList[randomfunctionHex()]      
    };

    document.body.style.backgroundColor = hexcolor;
    document.querySelector('.showActualColor').innerText = hexcolor;

    const resultHex = hexcolor.slice(1,6);
    const hexRed = `${resultHex[0]}${resultHex[1]}`;
    const hexGreen = `${resultHex[2]}${resultHex[3]}`;
    const hexBlue = `${resultHex[4]}${resultHex[5]}`;

    if(hexRed <= 64 && hexGreen <= 64 || hexRed <= 64 && hexBlue || hexGreen <= 64 && hexBlue ){
        document.querySelector('.btnRandonColor').classList.add('btnLightColor');
        document.querySelector('.btnCopyColor').classList.add('btnLigthCopyColor');
        smallColorDark();

        
    } else {
        document.querySelector('.btnRandonColor').classList.remove('btnLightColor');
        document.querySelector('.btnCopyColor').classList.remove('btnLigthCopyColor');
        smallColorLight();
    };
};

function randomfunctionHex (){
    return(
        Math.floor(Math.random() * hexColorsList.length)
    );
};



/*------------- RGB colors ---------------------*/
function rgbRandomColors (){
    const randomRed = Math.floor(Math.random()*255);
    const randomGreen = Math.floor(Math.random()*255);
    const randomBlue = Math.floor(Math.random()*255);


    resultColorsRgb = `rgb(${randomRed}, ${randomGreen}, ${randomBlue})`;
    document.body.style.backgroundColor = resultColorsRgb;
    document.querySelector('.showActualColor').innerText = resultColorsRgb;

    if(randomRed <= 100 && randomGreen <= 100 || randomRed <= 100 && randomBlue <= 100 || randomGreen <= 100 && randomBlue <= 100){
        document.querySelector('.btnRandonColor').classList.add('btnLightColor');
        document.querySelector('.btnCopyColor').classList.add('btnLigthCopyColor');
        smallColorDark();

    } else {
        document.querySelector('.btnRandonColor').classList.remove('btnLightColor');
        document.querySelector('.btnCopyColor').classList.remove('btnLigthCopyColor');
        smallColorLight();

    }
};


/* ----------------- complementary functions -----------------------  */
function removeClassColorModes(){
    document.querySelector(".simpleModeColor").classList.remove("choosedModeColor"),
    document.querySelector(".hexModeColor").classList.remove("choosedModeColor");
    document.querySelector(".rgbModeColor").classList.remove("choosedModeColor");
};

function simpleSelected (){
    removeClassColorModes();
    document.querySelector(".simpleModeColor").classList.add("choosedModeColor");
    actualColorMode = 'simple';
};

function hexSelected (){
    removeClassColorModes();
    document.querySelector(".hexModeColor").classList.add("choosedModeColor");
    actualColorMode = 'hex';

};
function rgbSelected (){
    removeClassColorModes();
    document.querySelector(".rgbModeColor").classList.add("choosedModeColor");
    actualColorMode = 'rgb';
};

/*--------------------------- */

function copyContent(){
   const resultCopy = document.getElementById('contentToCopy').innerText;
   navigator.clipboard.writeText(resultCopy);
   `use a combinação de teclas ${"Ctr"} + ${"V"} para colar o conteúdo [ ${resultCopy} ] copiado onde desejar: `;
   copyColorStatusTrue();
};

function smallColorDark(){
    if(document.querySelector('.createdBy').classList.contains('smallDarkColor')){
        document.querySelector('.createdBy').classList.remove('smallDarkColor');
        document.querySelector('.createdBy').classList.add('smallLightColor');

        document.querySelector('.siteTitleColorFlipper').classList.remove('smallDarkColor');
        document.querySelector('.siteTitleColorFlipper').classList.add('smallLightColor');
    };
};
function smallColorLight(){
    if(document.querySelector('.createdBy').classList.contains('smallLightColor')){
        document.querySelector('.createdBy').classList.remove('smallLightColor');
        document.querySelector('.createdBy').classList.add('smallDarkColor');

        document.querySelector('.siteTitleColorFlipper').classList.remove('smallLightColor');
        document.querySelector('.siteTitleColorFlipper').classList.add('smallDarkColor');
    };
};


function copyColorStatusTrue(){
        statusOfCopyColor = true; 
        document.querySelector('.btnCopyColor').innerText = "Copied!";
        document.querySelector('.btnCopyColor').classList.add('copiedColorBtn');

        setTimeout(copyColorStatusFalse, 1300);
};

function copyColorStatusFalse(){    
        statusOfCopyColor = false;
        document.querySelector('.btnCopyColor').innerText = "Copy";
        document.querySelector('.btnCopyColor').classList.remove('copiedColorBtn');
};


