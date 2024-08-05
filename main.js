// question 43 // continue with question 42// make array copy// unchanged magician
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var magician = ["Harry potter", "Hermoine Granger", "Ron weasley", "Albus Dumbledore"];
function copyArray(arr) {
    return __spreadArray([], arr, true);
}
function make_great(magicianArray) {
    for (var i = 0; i < magicianArray.length; i++) {
        magicianArray[i] = "the great " + magicianArray[i];
    }
}
function show_magician(magician) {
    magician.forEach(function (element) {
        console.log(element);
    });
}
var copyMagicianArray = copyArray(magician);
make_great(copyMagicianArray);
console.log("\n\nThis is my oeiginal array:");
show_magician(magician);
console.log("\n\nThis is my modified copy of the array:");
show_magician(copyMagicianArray);
