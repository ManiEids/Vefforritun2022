const API_URnL = "https://hvirfill.reykjavik.is";
const event_URL = "https://menningarnott.is/dagskra?event=";

function initMap(index, lat, lng) {
  const map = new google.maps.Map(document.getElementById(`map-${index}`), {
    zoom: 15,
    center: { lat, lng },
  });
  const marker = new google.maps.Marker({ position: { lat, lng }, map: map });
  return marker;
}

function checkTags(tags, index) {
  /*takavið input fra form og filtera display*/
}

fetch(
  "https://hvirfill.reykjavik.is/find?all=menningarnott.is&format=json&lang=is&limit=30&offset=0&range=2022-08-20%2C2022-08-20&search=&sort=start"
)
  .then((data) => {
    return data.json();
  })
  .then((completedata) => {
    let data1 = "";
    completedata.map((value, index) => {
      data1 += `
       <div class="card" onclick="window.open('${event_URL}${
        value.id
      }','mywindow');" style="cursor: pointer;">&nbsp;
    <img src= https://hvirfill.reykjavik.is${
      value.event_image
    }    alt="img" class="images" />
    <h1 class="title">${value.language.is.title}</h1>
    <p>${value.start.substring(8, 10)}.Ágúst</p>
    <p>Upphaf:  ${value.start.substring(11, 16)}</p>
    <p>Endar:  ${value.end.substring(11, 16)}</p>
    <p class="place">${value.language.is.place}</p>
    <div class="map" id="map-${index}"> </div>
  </div>`;
    });
    document.getElementById("cards").innerHTML = data1;
    completedata.map((value, index) => {
      let lat = value.location[0];
      let lng = value.location[1];
      initMap(index, lat, lng);
    });
    /*document.getElementById("cards").innerHTML = data1;
    completedata.map((value) => {
      let tags = value.tags;
      console.log(tags);
      checkTags(tags);
    });*/
  })
  .catch((error) => {
    console.log(error);
  });

/**************TODO**************** buinn með timann
   * Búa til filter með input frá form til að fela óviðeigandi kort
   * nota array filter og words includes 
   * Setja filter Display:status hidden á það sem uppfyllir ekki skylirði
 const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];

const result = words.filter(word => word.includes("e"));

console.log(result);
// expected output: Array ["exuberant", "destruction", "present"]

   */
