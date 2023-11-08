"use strict";

// ===================================================
//      	  JS-Vertiefung – Objects II
// ===================================================

// ===================================================
//      	JS-Vertiefung – Objects-Level_2_1
// ===================================================

console.log("%c JS-Vertiefung – Objects-Level_2_1", "color: tomato");

// Lernziel:

// Erkennen der Unterschiede in der Anwendung von map() und forEach() für den gleichen Anwendungsfall. Bei der einen Methode musst du darauf achten eine weitere Array-Methode zu benutzen.

// Aufgabenstellung:

// Greife auf die Objekte im Array mit Hilfe von map(), forEach(), filter() zu und gebe dir Schritt für Schritt die Anweisungen auf der nächsten Folie  in der Konsole aus.
// Der Code dazu ist im Kommentarbereich.

// Vorgehensweise:

// Verwende forEach() und greife auf alle name zu. Pushe diese in ein neues Array.
// Verwende map() und greife auf alle name zu.
// Verwende forEach() und greife auf alle preiseGramEuro zu und pushe diese ein neues Array.
// Verwende map() und greife auf alle preiseGramEuro zu.
// Verwende forEach() und greife auf alle veraenderung zu und pushe in ein neues Array.
// Verwende map() und greife auf alle veraenderung zu.
// Verwende filter() und greife auf preiseGramEuro die teurer als 50 Euro zu

// Was fällt dir auf, wenn du beide Methoden vergleichst und mal auf das push() verzichtest?

// Gib anschließend alles als Tabelle in deinem HTML-Dokument aus. Sieh dir die Vorschauen dazu an.

let edelMetallPreise = [
	{ name: "Gold", preiseGramEuro: 42.91, veraenderung: "+0.12%" },
	{ name: "Silber", preiseGramEuro: 0.51, veraenderung: "+1.02%" },
	{ name: "Platin", preiseGramEuro: 25.74, veraenderung: "+0.41%" },
	{ name: "Palladium", preiseGramEuro: 50.93, veraenderung: "0.00%" },
	{ name: "Rhodium", preiseGramEuro: 160.12, veraenderung: "-0.10%" },
	{ name: "Iridium", preiseGramEuro: 42.84, veraenderung: "0.00%" },
	{ name: "Ruthenium", preiseGramEuro: 7.36, veraenderung: "0.00%" },
	{ name: "Rhenium", preiseGramEuro: 37.22, veraenderung: "-0.53%" },
	{ name: "Osmium", preiseGramEuro: 11.54, veraenderung: "0.00%" },
];

// Neues Array für Tabellenausgabe
const edelmetalle = [];
// forEach() und push in neues Array
edelMetallPreise.forEach((elem) => edelmetalle.push(elem.name));
console.log(edelmetalle);

// map() und schreiben in neue Variable
const arrName = edelMetallPreise.map((elem) => elem.name);
console.log(arrName);

// Neues Array für Tabellenausgabe
const preiseGramEuro = [];
// forEach() und push in neues Array
edelMetallPreise.forEach((elem) => preiseGramEuro.push(elem.preiseGramEuro));

// map() und schreiben in neue Variable
const arrPreiseGramEuro = edelMetallPreise.map((elem) => elem.preiseGramEuro);
console.log(arrPreiseGramEuro);

// Neues Array für Tabellenausgabe
const veraenderung = [];
// forEach() und push in neues Array
edelMetallPreise.forEach((elem) => veraenderung.push(elem.veraenderung));

// map() und schreiben in neue Variable
const arrVeraenderung = edelMetallPreise.map((elem) => elem.veraenderung);
console.log(arrVeraenderung);

// filter()
const result = edelMetallPreise.filter((elem) => elem.preiseGramEuro > 50);
console.log(result);

// ===================================================
//      			Tabelle erstellen
// ===================================================

const output = document.querySelector("#output");

// HTML-Tabelle erstellen
const table = document.createElement("table");
const thead = document.createElement("thead");
const tbody = document.createElement("tbody");

// Tabellenüberschriften (Table Headers) erstellen
const headerRow = document.createElement("tr");

const nameHeader = document.createElement("th");
nameHeader.textContent = "Name";
headerRow.appendChild(nameHeader);

const preiseGramEuroHeader = document.createElement("th");
preiseGramEuroHeader.textContent = "PreiseGramEuro";
headerRow.appendChild(preiseGramEuroHeader);

const veraenderungHeader = document.createElement("th");
veraenderungHeader.textContent = "Veränderung";
headerRow.appendChild(veraenderungHeader);

thead.appendChild(headerRow);
table.appendChild(thead);

// Tabelle mit Daten füllen
for (let i = 0; i < edelmetalle.length; i++) {
	const row = document.createElement("tr");

	const nameCell = document.createElement("td");
	nameCell.textContent = edelmetalle[i];
	row.appendChild(nameCell);

	const preiseGramEuroCell = document.createElement("td");
	preiseGramEuroCell.textContent = preiseGramEuro[i];
	row.appendChild(preiseGramEuroCell);

	const veraenderungCell = document.createElement("td");
	veraenderungCell.textContent = veraenderung[i];
	row.appendChild(veraenderungCell);

	tbody.appendChild(row);
}

table.appendChild(tbody);

// Tabelle dem "output"-Element hinzufügen
output.appendChild(table);

// ===================================================
//      	JS-Vertiefung – Objects-Level_2_2
// ===================================================

console.log("%c JS-Vertiefung – Objects-Level_2_2", "color: tomato");

// Aufgabenstellung:

// Du hast Sammlungen deiner Lieblingsbands. Du möchtest sie alphabetisch sortieren.
// Sortiere die Bands alphabetisch nach Namen.
// Verwende den Code aus dem Kommentarbereich.
// Sortiere die Bands alphabetisch.
// Gib das Ergebnis in der Konsole aus.

// Assets:
// sort()
// if else
// return

const singers = [
	{
		name: "The Beatles",
		country: "United Kingdom",
		period_active: { start: 1960, end: 1970 },
		genre: "Rock / Pop",
	},
	{
		name: "Elvis Presley",
		country: "United States",
		period_active: { start: 1954, end: 1977 },
		genre: "Rock and roll",
	},
	{
		name: "Michael Jackson",
		country: "United States",
		period_active: { start: 1964, end: 2009 },
		genre: "Pop / Rock / Dance / Soul / R&B",
	},
	{
		name: "Elton John",
		country: "United Kingdom",
		period_active: { start: 1964, end: "present" },
		genre: "Pop / Rock",
	},
	{
		name: "Madonna",
		country: "United States",
		period_active: { start: 1979, end: "present" },
		genre: "Pop / Dance / Electronica",
	},
	{
		name: "Led Zeppelin",
		country: "United Kingdom",
		period_active: { start: 1968, end: 1980 },
		genre: "Hard rock / Blues rock / Folk rock",
	},
	{
		name: "Rihanna",
		country: "United States",
		period_active: { start: 2005, end: "present" },
		genre: "R&B / Pop / Dance / Hip-hop",
	},
	{
		name: "Pink Floyd",
		country: "United Kingdom",
		period_active: { start: 1965, end: 1996, extra: 2014 },
		genre: "Progressive rock / Psychedelic rock",
	},
];

const sortedSingers = [...singers];
// sort by name
sortedSingers.sort((a, b) => {
	const nameA = a.name.toUpperCase(); // ignore upper and lowercase
	const nameB = b.name.toUpperCase(); // ignore upper and lowercase
	if (nameA < nameB) {
		return -1;
	}
	if (nameA > nameB) {
		return 1;
	}

	// names must be equal
	return 0;
});

console.log(sortedSingers);

// ===================================================
//      	JS-Vertiefung – Objects-Level_2_3
// ===================================================

console.log("%c JS-Vertiefung – Objects-Level_2_3", "color: tomato");

const tableContainer = document.querySelector("#table-container");
let tableHTML = `<table><thead><tr><th>Name</th><th>Country</th><th>Period Active</th><th>Genre</th></tr></thead><tbody>`;

singers.forEach((elem) => {
	tableHTML += `<tr>`;
	tableHTML += `<td>${elem.name}</td>`;
	tableHTML += `<td>${elem.country}</td>`;
	tableHTML += `<td>${elem.period_active.start} - ${elem.period_active.end}</td>`;
	tableHTML += `<td>${elem.genre}</td>`;
	tableHTML += `</tr>`;
});

tableHTML += `</tbody></table>`;
tableContainer.innerHTML = tableHTML;
