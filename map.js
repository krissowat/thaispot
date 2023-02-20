async function getCoords(query) {
    console.log(query);
    let url = "https://nominatim.openstreetmap.org/search?";
    url = url + "q=" + query + "&format=json";
    // const response = await fetch(url);
    // const data = await response.json();
    // console.log(data);


    await fetch(url)
        .then(res => res.json())
        .then(res => console.log(res))
        .then(data => {
            this.articles = data;
            localStorage.setItem("jsonFile", data);
            console.log(data);
        })

}

async function openmap() {
    var mapquery = document.getElementById("txtInput").value.toString();
    var newlat = "33.6405"
    var newlon = "-117.8443"
    localStorage.setItem("newlat", newlat);
    localStorage.setItem("newlon", newlon);
    coordData = await getCoords(mapquery);
}

