var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
        return "<div class=\"col-lg-4 sm-6 md-6 xs-12 mb-0 \">\n        <div class=\"card mb-3\" style=\"width: 18rem; min-height: 353px\">\n        <img src=\"" + this.img + "\" class=\"card-img-top\" alt=\"\">\n        <div class=\"card-body\">\n          <p class=\"card-text\"><span class=\"font-weight-bold\">" + this.name + " </span><hr>\n          <address>\n          <svg class=\"bi bi-geo-alt\" width=\"1.3em\" height=\"1.3em\" viewBox=\"0 0 20 20\" fill=\"currentColor\" xmlns=\"http://www.w3.org/2000/svg\">\n  <path fill-rule=\"evenodd\" d=\"M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 0 0-6 3 3 0 0 0 0 6z\"/>\n</svg>\n        " + this.address + "<br>" + this.zipCode + " " + this.city + "</p>\n        </address>\n        </div>\n        </div>\n        </div>";
    };
    return placetobe;
}());
var kahl = new placetobe('Kahlenberg', 'Vienna', 1190, 'Kahlenbergergasse 5', 'img/Kahlenberg.jpeg');
var lobau = new placetobe('Lobau', 'Vienna', 1220, 'Nationalpark Lobau', 'img/lobau.jpg');
var nasch = new placetobe('Naschmarkt', 'Vienna', 1050, 'Nachmarkt 1', 'img/naschmarkt.jpg');
for (var i = 0; i < arr.length; i++) {
    document.getElementById('row-places').innerHTML += arr[i].displayPlaces();
}
var arrtwo = [];
var restaurants = /** @class */ (function (_super) {
    __extends(restaurants, _super);
    function restaurants(a, b, c, d, e, f, g, h) {
        var _this = _super.call(this, a, b, c, d, e) || this;
        _this.telefon = f;
        _this.type = g;
        _this.webpage = h;
        arrtwo.push(_this);
        return _this;
    }
    // displayRestaurants() {
    //     super.displayRestaurants()
    // }
    restaurants.prototype.displayRestaurants = function () {
        return "<div class=\"col-lg-4 sm-6 md-6 xs-12 mb-0 \">\n        <div class=\"card mb-3\" style=\"width: 18rem; min-height: 353px\">\n        <img src=\"" + this.img + "\" class=\"card-img-top\" alt=\"\">\n        <div class=\"card-body\">\n          <p class=\"card-text\"><span class=\"font-weight-bold\">" + this.name + "</span> " + this.type + "\n          <hr>" + this.address + "\n          <br>" + this.zipCode + " " + this.city + " \n          <br>" + this.telefon + " | " + this.webpage + " \n          </p>\n        </div>\n        </div>\n        </div>";
    };
    return restaurants;
}(placetobe));
var ansari = new restaurants('Ansari', 'Vienna', 1020, 'Praterstraße 15', 'img/ansari.jpeg', '+43 1 276 51 02', 'georgisch', 'cafeansari.at');
var deli = new restaurants('Deli', 'Vienna', 1040, 'naschmarkt stand 421-436', 'img/deli.jpg', '+43 1 585 08 23', 'orientalisch', 'naschmarkt-deli.at');
var uic = new restaurants('United in Cycling', 'Vienna', 1220, 'Sonnenallee 35', 'img/uic.jpeg', '0670 6040410', 'Cafe & Kuchen', 'unitedincycling.com');
for (var i = 0; i < arrtwo.length; i++) {
    document.getElementById('row-rest').innerHTML += arrtwo[i].displayRestaurants();
}
