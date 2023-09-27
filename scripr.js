var x = "Andsirdaarrevarariarewbutovearrmararan"
var b = "ar"

function testRegExp(s, sub_s) {
    var regVal = new RegExp(sub_s, "g");
    var str = Array();
    do{
        let lastIndex = regVal.exec(s);
        (lastIndex == null) ? str : str = str.concat(lastIndex);
    } while (regVal.lastIndex != 0);
    return str.toString();
}

console.log(testRegExp(x, b));