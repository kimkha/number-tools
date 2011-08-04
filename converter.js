
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
	return "0x" + num.toString(16);
}







