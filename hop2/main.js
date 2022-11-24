const API_URL = "https://hvirfill.reykjavik.is";

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
       <div class="card">
    <img src= https://hvirfill.reykjavik.is${
      values.event_image
    }    alt="img" class="images"/>
    <h1 class="title">${values.language.is.title}</h1>
    <p>Dagsetning:${values.start.substring(8, 10)}Ágúst</p>
    <p>Byrjar:${values.start.substring(11, 16)}</p>
    <p>Endar:${values.end.substring(11, 16)}</p>
    <p class="place">${values.language.is.place}</p>
  </div>`;
    });
    document.getElementById("cards").innerHTML = data1;
  })
  .catch((error) => {
    console.log(error);
  });
