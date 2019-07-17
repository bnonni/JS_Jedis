
function loadRankings() {
 var xhttp = new XMLHttpRequest();
 xhttp.onreadystatechange = function () {
  if (this.status == 200) {
   var data = JSON.parse(this.responseText);
   // var string_data = JSON.stringify(data);
   console.log(data);
   populateRankings(data);
  }
 }
 xhttp.open("GET", "https://codepen.io/imisterk/pen/MLgwOa.js", true);
 xhttp.send();
}

function populateRankings(data) {
 var i = 0;
 var rankingsBody = document.querySelector("#rankings > tbody");
 while (i <= 10) {
  data.forEach((array) => {
   console.log(array);
   var tr = document.createElement("tr");
   rankingsBody.appendChild(tr);
   array.forEach((item) => {
    console.log(item);
    var td = document.createElement("td");
    tr.appendChild(td);
    td.textContent += item;
    i++;
   })
  })
 }
}

$("#search-leaderboard").keyup(function () {
 var value = this.value;

 $("table").find("tr").each(function (index) {


  var if_td_has = false;
  $(this).find('td').each(function () {
   if_td_has = if_td_has || $(this).text().indexOf(value) !== -1; //Check if td's text matches key and then use OR to check it for all td's
  });

  $(this).toggle(if_td_has);

 });
});

function getCookie(name) {
 var re = new RegExp("high score" + "=([^;]+)");
 var value = re.exec(document.cookie);
 return (value != null) ? unescape(value[1]) : null;
}

