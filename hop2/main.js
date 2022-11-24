const API_URL = "https://hvirfill.reykjavik.is";
const event_URL = "https://menningarnott.is/dagskra?event=";

var map;
initMap();
function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    center: {
      lat: 64.1494763586437 /* values.location[0]*/,
      lng: -21.9414147881113 /*values.location[1]*/,
    },
    zoom: 8,
  });
}

fetch(
  "https://hvirfill.reykjavik.is/find?all=menningarnott.is&format=json&lang=is&limit=30&offset=0&range=2022-08-20%2C2022-08-20&search=&sort=start"
)
  .then((data) => {
    return data.json();
  })
  .then((completedata) => {
    let data1 = "";
    completedata.map((values) => {
      data1 += `
       <div class="card" onclick="window.open('${event_URL}${
        values.id
      }','mywindow');" style="cursor: pointer;">&nbsp;
    <img src= https://hvirfill.reykjavik.is${
      values.event_image
    }    alt="img" class="images" />
    <h1 class="title">${values.language.is.title}</h1>
    <p>Dagsetning:${values.start.substring(8, 10)}Ágúst</p>
    <p>Upphaf:  ${values.start.substring(11, 16)}</p>
    <p>Endar:  ${values.end.substring(11, 16)}</p>
    <p class="place">${values.language.is.place}</p>
    <div id="maps"><p>Hér ætti kort að koma</p>
    ${values.location[0]}
    ${values.location[1]}<p>
  kem ekki billing i gegn</p></div>
  </div>`;
    });
    document.getElementById("cards").innerHTML = data1;
  })
  .catch((error) => {
    console.log(error);
  });
