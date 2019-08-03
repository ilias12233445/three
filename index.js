let filterInput = document.getElementById("listhome");

filterInput.addEventListener("keyup", filterNames);

function filterNames() {
	let filterValues = document.getElementById("listhome").value.toLowerCase();


	let text = document.getElementById("list-home");

	let li = ul.querySelectorAll("li.collection-item");


	for(let i = 0; i < li.length; i++) {
		let a = li[i].getElementsByTagName('a')[0];

		if(a.innerHTML.toLowerCase().indexOf(filterValues) > -1){
			li[i].style.display = "block";
		} else {
			li[i].style.display = "none";
		}
}
}