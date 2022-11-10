import { el, empty } from "./lib/helpers.js";
import { mockBook } from "./mocks.js";
const leitarAPI = "http://openlibrary.org/search.json";
document.getElementById("leit").onkeyup = function () {
  findBooks();
};
const searchList = document.getElementById("search-List");

async function loadBooks(query) {
  const url = new URL(`${leitarAPI}?q=${query}`);
  const res = await fetch(`${url}`);
  const data = await res.json();
  displayBooks(data.docs);
}

function findBooks() {
  let searchTerm = leit.value.trim();
  //console.error(searchTerm);
  if (searchTerm.length > 0) {
    searchList.classList.remove("hide-search-List");
    loadBooks(searchTerm);
  } else {
    searchList.classList.add("hide-search-List");
  }
}

function displayBooks(book) {
  searchList.innerHTML = "";
  for (let idbook = 0; idbook < book.length; idbook++) {
    let bookListItem = document.createElement("div");
    bookListItem.dataset.id = book[idbook].key; //skoða
    bookListItem.classList.add("search-list-item");
    var a = document.createElement("a");
    a.href = `https://www.openlibrary.org${book[idbook].title}`;
    a.text = " TEst";
    bookListItem.innerHTML = ` <div class = "search-item-info"> <h3>${book[idbook].title}</h3><p>${book[idbook].author_name}<p><p>${a}</div>`;
    searchList.appendChild(bookListItem);
  }
  loadBookDetails();
}

function loadBookDetails() {
  const searchListBook = searchList.querySelector(".search-list-item");
  console.log(searchListBook);
}
/*
function createAuthorsList(query) {
  const list = document.createElement("ul"); 
  const url = new URL(`${leitarAPI}?q=${query}`);

  list.appendChild(
    list.appendChild(el("li", { class: "listBooks" }, "Sæki gögn..."))
  );

  fetch(url)
    .then((response) => {
      mode: "no cors";
      empty(list);
      response.json().then((data) => {
        for (const doc of data.docs) {
          list.appendChild(
            list.appendChild(
              el(
                "li",
                { class: "listBooks" },
                "Bókarheiti: " + doc.title + "Höfundur:" + doc.author_name
              )
            )
          );
        }
      });
    })
    .catch((error) => {
      empty(list);
      list.appendChild(
        list.appendChild(el("li", { class: "listBooks" }, "Villa"))
      );
      console.error("gat ekki sótt gögn : ", error);
    });

  return list;
}
*/ /*
function main(query) {
  const mainElement = document.querySelector("main");
  const searchInput = loadBooks(query);
  //const authors = createAuthorsList(query);
  //mainElement.appendChild(searchInput);
}*/
document.querySelector("form").addEventListener("submit", onFormSubmit);
const searchBox = document.getElementById("leit");
//console.error(searchBox);
function onFormSubmit(e) {
  e.preventDefault();
  console.error(value);

  empty(bookListItem);
  main(value);
}
