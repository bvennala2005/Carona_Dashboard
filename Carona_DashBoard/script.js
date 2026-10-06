async function loadData(){

const response = await fetch("https://disease.sh/v3/covid-19/countries");
const data = await response.json();

const tableBody = document.getElementById("tableBody");

data.forEach((country, index) => {

const row = document.createElement("tr");

row.innerHTML = `
<td>${index + 1}</td>
<td>${country.country}</td>
<td>${country.cases.toLocaleString()}</td>
<td>${country.recovered.toLocaleString()}</td>
<td>${country.deaths.toLocaleString()}</td>
<td>${country.active.toLocaleString()}</td>
`;

tableBody.appendChild(row);

});

}

function searchCountry(){

let input = document.getElementById("searchBox").value.toLowerCase();
let rows = document.querySelectorAll("#covidTable tbody tr");

rows.forEach(row => {

let country = row.cells[1].textContent.toLowerCase();

if(country.includes(input)){
row.style.display="";
}else{
row.style.display="none";
}

});

}

loadData();