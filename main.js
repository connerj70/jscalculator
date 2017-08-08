$(document).ready(function() {
	var leftstring = [];
	var rightstring = [];
	var numberarr = [];
	var final;
	
	$("#calc_one").click(function() {
		$("#calc_number").append("1");
		$("#calc_tracker").append("1");
		numberarr.push("1");
	});

	$("#calc_two").click(function() {
		$("#calc_number").append("2");
		$("#calc_tracker").append("2");
		numberarr.push("2");
	});

	$("#calc_three").click(function() {
		$("#calc_number").append("3");
		$("#calc_tracker").append("3");
		numberarr.push("3");
	});

	$("#calc_four").click(function() {
		$("#calc_number").append("4");
		$("#calc_tracker").append("4");
		numberarr.push("4");
	});

	$("#calc_five").click(function() {
		$("#calc_number").append("5");
		$("#calc_tracker").append("5");
		numberarr.push("5");
	});

	$("#calc_six").click(function() {
		$("#calc_number").append("6");
		$("#calc_tracker").append("6");
		numberarr.push("6");
	});

	$("#calc_seven").click(function() {
		$("#calc_number").append("7");
		$("#calc_tracker").append("7");
		numberarr.push("7");
	});

	$("#calc_eight").click(function() {
		$("#calc_number").append("8");
		$("#calc_tracker").append("8");
		numberarr.push("8");
	});

	$("#calc_nine").click(function() {
		$("#calc_number").append("9");
		$("#calc_tracker").append("9");
		numberarr.push("9");
	});

	$("#calc_zero").click(function() {
		console.log($("calc_number").value);
		$("#calc_number").append("0");
		$("#calc_tracker").append("0");
		numberarr.push("0");
	});


	$("#calc_divide").click(function() {
		var indexdiv = numberarr.indexOf("÷");
		var indexmult = numberarr.indexOf("*");
		
		if(indexmult !== -1) {
			leftstring = numberarr.slice(0, indexmult).join("");
			rightstring = numberarr.slice(indexmult + 1).join("");
			console.log(leftstring);
			console.log(rightstring);
			final = leftstring * rightstring;
			numberarr = [final];
			console.log(numberarr);
			$("#calc_number").text(final);
			$("#calc_tracker").text("");
		}

		var indexsub = numberarr.indexOf("-");
		if(indexsub !== -1) {
			leftstring = numberarr.slice(0, indexsub).join("");
			rightstring = numberarr.slice(indexsub + 1).join("");
			console.log(leftstring);
			console.log(rightstring);
			final = leftstring - rightstring;
			numberarr = [final];
			console.log(numberarr);
			$("#calc_number").text(final );
			$("#calc_tracker").text("");
		}

		var indexadd = numberarr.indexOf("+");
		if(indexadd !== -1) {
			leftstring = numberarr.slice(0, indexadd).join("");
			rightstring = numberarr.slice(indexadd + 1).join("");
			console.log(leftstring);
			console.log(rightstring);
			final = +leftstring + +rightstring;
			numberarr = [final];
			console.log(numberarr);
			$("#calc_number").text(final);
			$("#calc_tracker").text("");
		}


		if(indexdiv !== -1) {
			leftstring = numberarr.slice(0, indexdiv).join("");
			rightstring = numberarr.slice(indexdiv + 1).join("");
			console.log(leftstring);
			console.log(rightstring);
			final = leftstring/rightstring;
			numberarr = [final,"÷"];
			console.log(numberarr);
			$("#calc_number").text(final + "÷");
			$("#calc_tracker").text("");
			indexdiv = 1;
		}  else {
		$("#calc_number").append("÷");
		$("#calc_tracker").append("÷");
		numberarr.push("÷");
		}



		
	});

	$("#calc_multiply").click(function() {
		var indexdiv = numberarr.indexOf("÷");

		if(indexdiv !== -1) {
			leftstring = numberarr.slice(0, indexdiv).join("");
			rightstring = numberarr.slice(indexdiv + 1).join("");
			console.log(leftstring);
			console.log(rightstring);
			final = leftstring/rightstring;
			numberarr = [final];
			console.log(numberarr);
			$("#calc_number").text(final);
			$("#calc_tracker").text("");
			indexdiv = 1;
		}

		var indexsub = numberarr.indexOf("-");
		if(indexsub !== -1) {
			leftstring = numberarr.slice(0, indexsub).join("");
			rightstring = numberarr.slice(indexsub + 1).join("");
			console.log(leftstring);
			console.log(rightstring);
			final = leftstring - rightstring;
			numberarr = [final];
			console.log(numberarr);
			$("#calc_number").text(final );
			$("#calc_tracker").text("");
		}

		var indexadd = numberarr.indexOf("+");
		if(indexadd !== -1) {
			leftstring = numberarr.slice(0, indexadd).join("");
			rightstring = numberarr.slice(indexadd + 1).join("");
			console.log(leftstring);
			console.log(rightstring);
			final = +leftstring + +rightstring;
			numberarr = [final];
			console.log(numberarr);
			$("#calc_number").text(final);
			$("#calc_tracker").text("");
		}

		var indexmult = numberarr.indexOf("*");
		if(indexmult !== -1) {
			leftstring = numberarr.slice(0, indexmult).join("");
			rightstring = numberarr.slice(indexmult + 1).join("");
			console.log(leftstring);
			console.log(rightstring);
			final = leftstring * rightstring;
			numberarr = [final,"*"];
			console.log(numberarr);
			$("#calc_number").text(final + "*");
			$("#calc_tracker").text("");
		} else {

		$("#calc_number").append("*");
		$("#calc_tracker").append("*");
		numberarr.push("*");
		}
	});

	$("#calc_add").click(function() {
		
		var indexdiv = numberarr.indexOf("÷");

		if(indexdiv !== -1) {
			leftstring = numberarr.slice(0, indexdiv).join("");
			rightstring = numberarr.slice(indexdiv + 1).join("");
			console.log(leftstring);
			console.log(rightstring);
			final = leftstring/rightstring;
			numberarr = [final];
			console.log(numberarr);
			$("#calc_number").text(final);
			$("#calc_tracker").text("");
			indexdiv = 1;
		}

		var indexsub = numberarr.indexOf("-");
		if(indexsub !== -1) {
			leftstring = numberarr.slice(0, indexsub).join("");
			rightstring = numberarr.slice(indexsub + 1).join("");
			console.log(leftstring);
			console.log(rightstring);
			final = leftstring - rightstring;
			numberarr = [final];
			console.log(numberarr);
			$("#calc_number").text(final );
			$("#calc_tracker").text("");
		}

		var indexmult = numberarr.indexOf("*");
		if(indexmult !== -1) {
			leftstring = numberarr.slice(0, indexmult).join("");
			rightstring = numberarr.slice(indexmult + 1).join("");
			console.log(leftstring);
			console.log(rightstring);
			final = leftstring * rightstring;
			numberarr = [final];
			console.log(numberarr);
			$("#calc_number").text(final);
			$("#calc_tracker").text("");
		}


		var indexadd = numberarr.indexOf("+");
		if(indexadd !== -1) {
			leftstring = numberarr.slice(0, indexadd).join("");
			rightstring = numberarr.slice(indexadd + 1).join("");
			console.log(leftstring);
			console.log(rightstring);
			final = +leftstring + +rightstring;
			numberarr = [final,"+"];
			console.log(numberarr);
			$("#calc_number").text(final + "+");
			$("#calc_tracker").text("");
		} else {
			$("#calc_number").append("+");
			$("#calc_tracker").append("+");
			numberarr.push("+");
		}
	});

	$("#calc_subtract").click(function() {
		var indexmult = numberarr.indexOf("*");
		if(indexmult !== -1) {
			leftstring = numberarr.slice(0, indexmult).join("");
			rightstring = numberarr.slice(indexmult + 1).join("");
			console.log(leftstring);
			console.log(rightstring);
			final = leftstring * rightstring;
			numberarr = [final];
			console.log(numberarr);
			$("#calc_number").text(final);
			$("#calc_tracker").text("");
		}

		var indexdiv = numberarr.indexOf("÷");

		if(indexdiv !== -1) {
			leftstring = numberarr.slice(0, indexdiv).join("");
			rightstring = numberarr.slice(indexdiv + 1).join("");
			console.log(leftstring);
			console.log(rightstring);
			final = leftstring/rightstring;
			numberarr = [final];
			console.log(numberarr);
			$("#calc_number").text(final);
			$("#calc_tracker").text("");
			indexdiv = 1;
		}

		var indexadd = numberarr.indexOf("+");
		if(indexadd !== -1) {
			leftstring = numberarr.slice(0, indexadd).join("");
			rightstring = numberarr.slice(indexadd + 1).join("");
			console.log(leftstring);
			console.log(rightstring);
			final = +leftstring + +rightstring;
			numberarr = [final];
			console.log(numberarr);
			$("#calc_number").text(final);
			$("#calc_tracker").text("");
		}


		var indexsub = numberarr.indexOf("-");
		if(indexsub !== -1) {
			leftstring = numberarr.slice(0, indexsub).join("");
			rightstring = numberarr.slice(indexsub + 1).join("");
			console.log(leftstring);
			console.log(rightstring);
			final = leftstring - rightstring;
			numberarr = [final,"-"];
			console.log(numberarr);
			$("#calc_number").text(final + "-");
			$("#calc_tracker").text("");
		} else {

		$("#calc_number").append("-");
		$("#calc_tracker").append("-");
		numberarr.push("-");
	}
	});

	$("#calc_dot").click(function() {
		$("#calc_number").append(".");
		$("#calc_tracker").append(".");
		numberarr.push(".");
	});

	$("#calc_equals").click(function() {
		var indexdiv = numberarr.indexOf("÷");
		if(indexdiv !== -1) {
			leftstring = numberarr.slice(0, indexdiv).join("");
			rightstring = numberarr.slice(indexdiv + 1).join("");
			console.log(leftstring);
			console.log(rightstring);
			final = leftstring/rightstring;
			numberarr = [final];
			console.log(numberarr);
			$("#calc_number").text(final);
			$("#calc_tracker").text("");
		}

		var indexmult = numberarr.indexOf("*");
		if(indexmult !== -1) {
			leftstring = numberarr.slice(0, indexmult).join("");
			rightstring = numberarr.slice(indexmult + 1).join("");
			console.log(leftstring);
			console.log(rightstring);
			final = leftstring * rightstring;
			numberarr = [final];
			console.log(numberarr);
			$("#calc_number").text(final);
			$("#calc_tracker").text("");
		}

		var indexadd = numberarr.indexOf("+");
		if(indexadd !== -1) {
			leftstring = numberarr.slice(0, indexadd).join("");
			rightstring = numberarr.slice(indexadd + 1).join("");
			console.log(leftstring);
			console.log(rightstring);
			final = +leftstring + +rightstring;
			numberarr = [final];
			console.log(numberarr);
			$("#calc_number").text(final);
			$("#calc_tracker").text("");
		}

		var indexsub = numberarr.indexOf("-");
		if(indexsub !== -1) {
			leftstring = numberarr.slice(0, indexsub).join("");
			rightstring = numberarr.slice(indexsub + 1).join("");
			console.log(leftstring);
			console.log(rightstring);
			final = leftstring - rightstring;
			numberarr = [final];
			console.log(numberarr);
			$("#calc_number").text(final);
			$("#calc_tracker").text("");
		}
	})

	$("#calc_clear").click(function() {
		$("#calc_number").text("");
		$("#calc_tracker").text("");
		numberarr = [];
	});
});