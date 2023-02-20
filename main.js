const search_tags = [1, 1, 1, 1, 1]

function cat1func() {
    if (document.getElementById("cat1").style.opacity == "0.5") {
        document.getElementById("cat1").style.opacity = "1";
        search_tags[0] = 1
    } else {
        document.getElementById("cat1").style.opacity = "0.5";
        search_tags[0] = 0
    }
    console.log(search_tags)

}

function cat2func() {
    if (document.getElementById("cat2").style.opacity == "0.5") {
        document.getElementById("cat2").style.opacity = "1";
        search_tags[1] = 1
    } else {
        document.getElementById("cat2").style.opacity = "0.5";
        search_tags[1] = 0
    }
    console.log(search_tags)

}

function cat3func() {
    if (document.getElementById("cat3").style.opacity == "0.5") {
        document.getElementById("cat3").style.opacity = "1";
        search_tags[2] = 1
    } else {
        document.getElementById("cat3").style.opacity = "0.5";
        search_tags[2] = 0
    }
    console.log(search_tags)

}

function cat4func() {
    if (document.getElementById("cat4").style.opacity == "0.5") {
        document.getElementById("cat4").style.opacity = "1";
        search_tags[3] = 1
    } else {
        document.getElementById("cat4").style.opacity = "0.5";
        search_tags[3] = 0
    }
    console.log(search_tags)

}

function cat5func() {
    if (document.getElementById("cat5").style.opacity == "0.5") {
        document.getElementById("cat5").style.opacity = "1";
        search_tags[4] = 1
    } else {
        document.getElementById("cat5").style.opacity = "0.5";
        search_tags[4] = 0
    }
    console.log(search_tags)

}