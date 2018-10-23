function onSubmit(){
    var month = document.getElementById("month").value;
    var name = document.getElementById("name").value;
    var day = document.getElementById("day").value;
    var sign = determineSign(day, month);
    var text = determineImage(sign, name)[0];
    var image = determineImage(sign, name)[1];
    document.getElementById("image").innerHTML = image;
    document.getElementById("text").innerHTML = text;
    document.getElementById("horoscope").innerHTML = determineHoroscope(sign);
    var happyBirthday = "";
    if(determineBirthday(month, day) == true){
        happyBirthday = "Wait a second, It's your birthday!!!!! Congratulations " + name + "!";
    }
    document.getElementById("birthday").innerHTML = happyBirthday;
}

function numberOfDays(month){
    var output = "";
    var day = 0;
    if(month == 1|| month == 3 || month == 5 || month == 7|| month == 8 ||month == 10 || month ==12){
        day = 31;
    }else if(month == 4 || month == 6||month== 9 || month == 11){
        day = 30;
    }else if(month == 2){
        day = 29;
    }
    for(var i=1 ; i<day; i++){
        output += "<option value='" + i + "'>" + i + "</option>";
    }
    document.getElementById("day").innerHTML = output;
}
function determineBirthday(month, day){
    var birthday = false;
    var date = new Date();
    var thisMonth = date.getMonth() + 1;
    var today = date.getDate();
    if(today == day && thisMonth == month){
        birthday =  true;
    }
    return birthday;
}
function determineSign(day,month) {
    var sign = 0;
    if ((month == 2 && day >= 19) || (month == 3 && day <= 20)) {
        sign = 1;
    } else if ((month == 3 && day >= 21) || (month == 4 && day <= 19)) {
        sign = 2;
    } else if ((month == 4 && day >= 20) || (month == 5 && day <= 20)) {
        sign = 3;
    } else if ((month == 5 && day >= 21) || (month == 6 && day <= 20)) {
        sign = 4;
    } else if ((month == 6 && day >= 21) || (month == 7 && day <= 22)) {
        sign = 5;
    } else if ((month == 7 && day >= 23) || (month == 8 && day <= 22)) {
        sign = 6;
    } else if ((month == 8 && day >= 23) || (month == 9 && day <= 22)) {
        sign = 7;
    } else if ((month == 9 && day >= 23) || (month == 10 && day <= 22)) {
        sign = 8;
    } else if ((month == 10 && day >= 23) || (month == 11 && day <= 21)) {
        sign = 9;
    } else if ((month == 11 && day >= 22) || (month == 12 && day <= 21)) {
        sign = 10;
    } else if ((month == 12 && day >= 22) || (month == 1 && day <= 19)) {
        sign = 11;
    }else if((month== 1 && day>=20) || (month== 2 && day<=18)){
        sign = 12;
    }
    return sign;
}
function determineImage(sign, name){
    var whatIsMessage = "";
    var image = "";
    if(sign ==1){
        whatIsMessage = document.getElementById("text").innerHTML = "Nice job, " + name + " you are a Pisces";
        image = document.getElementById("image").innerHTML = "<img src='images/pisces.jpg'>";
    }else if(sign ==2){
        whatIsMessage = document.getElementById("text").innerHTML = "Nice job, " + name + " you are a Aries";
        image = document.getElementById("image").innerHTML = "<img src='images/aries-1.jpg'>";
    }else if(sign==3){
        whatIsMessage  = document.getElementById("text").innerHTML = "Nice job, " + name + " you are a Taurus";
        image = document.getElementById("image").innerHTML = "<img src='images/taurus.jpg'>";
    }else if(sign==4){
        whatIsMessage = document.getElementById("text").innerHTML = "Nice job, " + name + " you are a Gemini";
        image = document.getElementById("image").innerHTML = "<img src='images/gemini.jpg'>";
    }else if(sign ==5){
        whatIsMessage = document.getElementById("text").innerHTML = "Nice job, " + name + " you are a Cancer";
        image = document.getElementById("image").innerHTML = "<img src='images/cancer.jpg'>";
    }else if(sign ==6){
        whatIsMessage = document.getElementById("text").innerHTML = "Nice job, " + name + " you are a Leo";
        image = document.getElementById("image").innerHTML = "<img src='images/leo.jpg'>";
    }else if(sign == 7){
        whatIsMessage = document.getElementById("text").innerHTML = "Nice job, " + name + " you are a Virgo";
        image = document.getElementById("image").innerHTML = "<img src='images/virgo.jpg'>";
    }else if(sign == 8){
        whatIsMessage = document.getElementById("text").innerHTML = "Nice job, " + name + " you are a Libra";
        image = document.getElementById("image").innerHTML = "<img src='images/libra.jpg'>";
    }else if(sign ==9){
        whatIsMessage =document.getElementById("text").innerHTML = "Nice job, " + name + " you are a Scorpio";
        image = document.getElementById("image").innerHTML = "<img src='images/scorpio.jpg'>";
    }else if(sign == 10){
        whatIsMessage = document.getElementById("text").innerHTML = "Nice job, " + name + " you are a Sagittarius";
        image = document.getElementById("image").innerHTML = "<img src='images/sagittarius.jpg'>";
    }else if(sign == 11){
        whatIsMessage = document.getElementById("text").innerHTML = "Nice job, " + name + " you are a Capricorn";
        image = document.getElementById("image").innerHTML = "<img src='images/capricorn.jpg'>";
    }else if(sign ==12){
        whatIsMessage = document.getElementById("text").innerHTML="Nice job, " + name + " you are a Aquarius";
        image = document.getElementById("image").innerHTML = "<img src='images/aquarius.jpg'>";
    }
    return [whatIsMessage, image];
}

function determineHoroscope(sign){
    var horoscope = "";
    if(sign ==1){
        horoscope = document.getElementById("horoscope").innerHTML= message[0];
    }else if(sign ==2){
        horoscope = document.getElementById("horoscope").innerHTML= message[1];
    }else if(sign==3){
        horoscope = document.getElementById("horoscope").innerHTML= message[2];
    }else if(sign==4){
        horoscope = document.getElementById("horoscope").innerHTML= message[3];
    }else if(sign ==5){
        horoscope = document.getElementById("horoscope").innerHTML= message[4];
    }else if(sign ==6){
        horoscope = document.getElementById("horoscope").innerHTML= message[5];
    }else if(sign == 7){
        horoscope = document.getElementById("horoscope").innerHTML= message[6];
    }else if(sign == 8){
        horoscope = document.getElementById("horoscope").innerHTML= message[7];
    }else if(sign ==9){
        horoscope = document.getElementById("horoscope").innerHTML= message[8];
    }else if(sign == 10){
        horoscope = document.getElementById("horoscope").innerHTML= message[9];
    }else if(sign == 11){
        horoscope = document.getElementById("horoscope").innerHTML= message[10];
    }else if(sign ==12){
        horoscope = document.getElementById("horoscope").innerHTML= message[11];
    }
    return horoscope;
}
var message = ["Many Pisceans can surprise you by kicking your ass and the asses of your four imaginary friends. While " +
"Leos tend to achieve the most fame in the field of entertainment, Pisceans strive to achieve historical greatness by " +
"sheer fluke.",
    "Aries hate listening to Scorpios talk because they take pride in being even more self-centered. In fact, " +
    "much to the Scorpios' dismay, you are the biggest pricks in the zodiac. Your rams' horns are in everyone else's " +
    "asses.",
    "Taureans love happy movies where everyone is jolly and having fun, but they fight with waiters and get upset " +
    "with billboards. ",
    "Geminis are pushy and overbearing. They pick fights with small children and moon people at weddings. They " +
    "like to use Libras as punching bags. A bisexual Gemini is a walking double date. The rest are hermaphrodites. ",
    "You like to know what's going on in the lives of everyone in the galaxy. However, you tend not know know " +
    "what's going on in your own. If you are lucky, your friends will tell you. Cancerians only get dressed because " +
    "they have to, and their fashion sense can only be described as \"erratic.\" You are more likely than any other " +
    "sign in the zodiac (except Pisces, who does not iron) to iron your clothes by sleeping with them sandwiched " +
    "between the mattress and box-spring.",
    "You like to kiss mirrors a lot. Genghis Khan was a Leo, and so is Barney the Dinosaur. People still love Lucy, " +
    "but less because she was a Leo. Leos will interrupt conversation to talk, and they will place themselves bodily " +
    "in the way of someone who is trying to leave before the Leo is finished saying what he or she needs to say.",
    "No Virgo in history has ever belched. Virgos clean every square inch of everything they own twice daily with a " +
    "toothbrush. Everything has its place, and yours is on the floor scrubbing with a magnifying glass, checking for " +
    "germs. Obsessive-compulsive disorder? A nice euphemism for the word \"Virgo\".",
    "Libras are trendy and malleable folks. They are funny because they will glom " +
    "onto something they hated before if it suddenly becomes fashionable. Velour is not entirely lost upon these people. " +
    "Libras eat a lot of ethnic food from cultures they don't understand. They single-handedly started the cappucino movement. ",
    "You got into computers early so you could use made-up, bulls**t terminology and get away with it. Most " +
    "hackers are Scorpios, as are most people who think they're going to find fame on a chat board.",
    "Sagittarians are born adventurers. They like smashing spiders with their bare hands and trying to walk to " +
    "the bathroom in the middle of the night with the lights out. They would sooner sustain crippling injury than " +
    "do anything the easy way. ",
    "Capricorns are often good at math which explains why they are such pains in the ass. René Descartes was a great " +
    "mathematician and a crappy philosopher, so he must have been a Capricorn." , "The Aquarius loves a party. " +
    "Anytime, anywhere is their motto. It is not unlikely that an Aquarius will consider a wake a good place " +
    "to meet chicks. Aquarians tend to be nostalgic about the 1960s because that was the last time they could be " +
    "naked in public and get away with it. Aquarians love to be naked. "];

