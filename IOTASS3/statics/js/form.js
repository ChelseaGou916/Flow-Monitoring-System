var loadMsg = function()
	{
	var tb = document.getElementById("show");
	tb.innerHTML = "";
	for(var i = 0, j = 0; i< localStorage.length; i++)
	{
		var key = localStorage.key(i);
		if(key.indexOf('_fk') == 0)
		{
			var date = new Date();
			date.setTime(key.substring(3));
			var datestr = date.toLocaleDateString()
			+ "&nbsp;" + date.toLocaleTimeString();
			var msgStr = localStorage[key];
			var msg = JSON.parse(msgStr);
			var row = tb.insertRow(j++);
			row.insertCell(0).innerHTML = msg.name;
			row.insertCell(1).innerHTML = msg.number;
			row.insertCell(2).innerHTML = msg.address;
			row.insertCell(3).innerHTML = msg.people;
			row.insertCell(4).innerHTML = msg.bed;
			row.insertCell(5).innerHTML = msg.model;
			row.insertCell(6).innerHTML = msg.type;
			row.insertCell(7).innerHTML = msg.price;
			row.insertCell(8).innerHTML = msg.facilities;
			row.insertCell(9).innerHTML = msg.introduction;
			row.insertCell(10).innerHTML = msg.pictures;
			row.insertCell(11).innerHTML = datestr;
		}
	}
}
		
var addMsg = function()
{
	var nameElement = document.getElementById("name");
	var numberElement = document.getElementById("number");
	var addressElement = document.getElementById("address");
	var peopleElement = document.getElementById("people");
	var bedElement = document.getElementById("bed");
	var modelElement = document.getElementById("model");
	var typeElement = document.getElementById("type");
	var priceElement = document.getElementById("price");
	var facilitiesElement = document.getElementById("facilities");
	var introductionElement = document.getElementById("introduction");
	var picturesElement = document.getElementById("pictures");
	var msg = {
		name: nameElement.value,
		number: numberElement.value,
		address: addressElement.value,
		people: peopleElement.value,
		bed: bedElement.value,
		model: modelElement.value,
		type: typeElement.value,
		price: priceElement.value,
		facilities: facilitiesElement.value,
		introduction: introductionElement.value,
		pictures: picturesElement.value,
	}
	var time = new Date().getTime();
	localStorage['_fk' + time] =JSON.stringify(msg);
	nameElement.value = "";
	numberElement.value = "";
	addressElement.value = "";
	peopleElement.value = "";
	bedElement.value = "";
	modelElement.value = "";
	typeElement.value = "";
	priceElement.value = "";
	facilitiesElement.value = "";
	introductionElement.value = "";
	picturesElement.value = "";
	alert("All data are saved");
	loadMsg();
}

function clearMsg()
{
	localStorage.clear();
	alert("All data are cleared");
	loadMsg();
}

window.onload = loadMsg();