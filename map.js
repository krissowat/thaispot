async function getCoords(query) {
  console.log(query)
    let url = new URL("https://nominatim.openstreetmap.org/search?");
    url.searchParams.append('q', query);
    url.searchParams.append('format', 'json')
    // console.log(url)
    // const response = await fetch(url);
    // const data = await response.json();
    // console.log(data);
    console.log('fetching from '+ url.toString())

    await fetch(url.toString())
        .then(res => res.json())
        .then(res => console.log(res))
        .then(data => {
            this.articles = data;
            console.log('fetched')
            localStorage.setItem("jsonFile", data);
            console.log(data);
        })
        .catch((error) =>{
          console.error('There has been a problem with your fetch operation:', error);
        });
}

async function openmap() {
    let searchButton = document.getElementById("search-button");
    searchButton.addEventListener("click", function(event){
    event.preventDefault()
    });

    window.location.href =  'file:///Users/kris/Documents/Coding/thaispot/search.html?'
    var mapquery = document.getElementById("txtInput").value.toString();
    var newlat = "33.6405"
    var newlon = "-117.8443"
    localStorage.setItem("newlat", newlat);
    localStorage.setItem("newlon", newlon);
    coordData = await getCoords(mapquery);
    console.log("hi");
    return true;
}

function initMap() {
    // The location of Uluru
    const uci = { lat: 33.6405, lng: -117.8443 };
    // The map, centered at Uluru
    const map = new google.maps.Map(document.getElementById("map"), {
      zoom: 12,
      center: uci,
    });
    // The marker, positioned at Uluru
    const marker = new google.maps.Marker({
      position: uci,
      map: map,
    });
  }
  
  

  window.initMap = initMap;
