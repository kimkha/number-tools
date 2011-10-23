
function convert(text) {
	var result = parseInt(text);
	if (text.indexOf("0b") == 0) {
		result = parseInt(text.substr(2), 2);
	}
	var pageText =
		result.toString(10)
        + " 0x" + result.toString(16)
        + " 0" + result.toString(8)
        + " 0b" + result.toString(2);
}

function toHex(num) {
	if (num >=0) {
		return "0x" + num.toString(16);
	} else {
		return "-0x" + num.toString(16).substring(1);
	}
}

function toOct(num) {
	if (num >=0) {
		return "0" + num.toString(8);
	} else {
		return "-0" + num.toString(8).substring(1);
	}
}

function toDate(num) {
	if (num < 0) {
		return "Not a valid date";
	} else {
		return (new Date(num)).toLocaleString();
	}
}







