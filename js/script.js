function texthello(){
    $("#halo-text").velocity("transition.slideUpIn",{ duration : 1500});
}

function aboutanimation(){
    $("#about-animation").velocity("transition.slideUpIn",{duration : 1500});
}

function imghp(){
    $("#img-hp").velocity("transition.slideUpIn",{duration : 1500});
}

function whyustext(){
    $("#whyustext").velocity("transition.slideUpIn",{duration : 1500});
}

function whyuspict(){
    $("#whyuspict").velocity("transition.slideUpIn",{duration : 1500});
}

$(document).ready(function(){
    texthello();
    aboutanimation();
    imghp();
    whyustext();
    whyuspict();
});