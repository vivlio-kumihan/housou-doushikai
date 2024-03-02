// header
const includeHeader = new XMLHttpRequest();
includeHeader.open("GET", "../../include/header.html", true);

includeHeader.onreadystatechange = function () {
  if (includeHeader.readyState === 4 && includeHeader.status === 200) {
    const headerHtml = includeHeader.responseText;
    const insertHeader = document.querySelector("#header");
    insertHeader.insertAdjacentHTML("afterbegin", headerHtml); 
  }
};
includeHeader.send();

// // footer
// const includeFooter = new XMLHttpRequest();
// includeFooter.open("GET", "../../include/footer.html", true);

// includeFooter.onreadystatechange = function () {
//   if (includeFooter.readyState === 4 && includeFooter.status === 200) {
//     const footerHtml = includeFooter.responseText;
//     const insertFooter = document.querySelector("#footer");
//     insertFooter.insertAdjacentHTML("afterbegin", footerHtml); 
//   }
// };
// includeFooter.send();
