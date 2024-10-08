
function highlight() {
    //Write your code her
	const bolds=document.querySelectorAll("strong");
	// console.log(bolds);
	bolds.forEach((b)=>{
		// console.log(b);
		b.classList.add("color");
	});
}


function return_normal() {
    //Write your code here
	const bolds=document.querySelectorAll("strong");
	// console.log(bolds);
	bolds.forEach((b)=>{
		// console.log(b);
		b.classList.remove("color");
	});
}
