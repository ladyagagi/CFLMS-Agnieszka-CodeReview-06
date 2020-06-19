var arr = [];
var placetobe = /** @class */ (function () {
    function placetobe(a, b, c, d, e) {
        this.name = "";
        this.city = "";
        this.address = "";
        this.name = a;
        this.city = b;
        this.zipCode = c;
        this.address = d;
        this.img = e;
        arr.push(this);
    }
    placetobe.prototype.displayPlaces = function () {
        return "<div class=\"col-lg-4 xs-1 mb-3\">\n        <div class=\"card text-center\" style=\"width: 15rem;\">\n        <img src=\"" + this.img + "\" class=\"card-img-top\" alt=\"\">\n        <div class=\"card-body\">\n          <p class=\"card-text\">" + this.name + " <br> " + this.zipCode + " " + this.city + " <br> " + this.address + "</p>\n        </div>\n        </div>\n        </div>\n        ";
    };
    return placetobe;
}());
var kahl = new placetobe('Kahlenberg', 'Vienna', 1190, 'Kahlenbergergasse 5', 'jk');
var lobau = new placetobe('Lobau', 'Vienna', 1220, 'Nationalpark Lobau', 'kk');
var nasch = new placetobe('Naschmarkt', 'Vienna', 1050, 'Nachmarkt 1', 'mm');
// console.log(arr);
for (var i = 0; i < arr.length; i++) {
    document.getElementById('row-places').innerHTML += arr[i].displayPlaces();
}
// arr.forEach(function(place){
//     
// });
// 
// let ansari = new placetobe ( 'Vienna', '1020', 'Praterstraße 15'  "https://cafeansari.at/de/")
