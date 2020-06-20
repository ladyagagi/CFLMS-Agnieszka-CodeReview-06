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
        return "<div class=\"col mx-auto col-lg-3 md-4 sm-12 xs-12 d-flex flex-wrap\">\n             <div class=\"card mb-3\" style=\"width: 18rem;\">\n              <img src=\"" + this.img + "\" class=\"card-img-top d-none d-md-block\" alt=\"img\">\n              <div class=\"card-body\">\n                 <p class=\"card-text\"><span class=\"font-weight-bold\">" + this.name + " </span>\n                 <hr>\n                <address>\n                <svg class=\"bi bi-geo-alt\" width=\"1.3em\" height=\"1.3em\" viewBox=\"0 0 20 20\" fill=\"currentColor\" xmlns=\"http://www.w3.org/2000/svg\">\n                <path fill-rule=\"evenodd\" d=\"M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 0 0-6 3 3 0 0 0 0 6z\"/>\n                </svg>\n                <span style=\"font-size: 1rem;\">" + this.zipCode + " " + this.city + ",\n                " + this.address + "</span></p>\n                </address>\n             </div>\n            </div>\n        </div>";
    };
    return placetobe;
}());
var kahl = new placetobe('Kahlenberg', 'Vienna', 1190, 'Kahlenbergerg. 5', 'img/Kahlenberg.jpeg');
var lobau = new placetobe('Lobau', 'Vienna', 1220, 'Nationalpark Lobau', 'img/lobau.jpg');
var nasch = new placetobe('Naschmarkt', 'Vienna', 1050, 'Nachmarkt 1', 'img/naschmarkt.jpg');
var schoen = new placetobe('Schönbrunn', 'Vienna', 1140, 'Schnönbrunn', 'img/schoen.jpeg');
for (var i = 0; i < arr.length; i++) {
    document.getElementById('row-places').innerHTML += arr[i].displayPlaces();
}
// restaurant class ---------------------------------
var arrtwo = [];
var restaurants = /** @class */ (function (_super) {
    __extends(restaurants, _super);
    function restaurants(a, b, c, d, e, f, g, h, i) {
        var _this = _super.call(this, a, b, c, d, e) || this;
        _this.telefon = f;
        _this.type = g;
        _this.webpageShort = h;
        _this.webpage = i;
        arrtwo.push(_this);
        return _this;
    }
    // displayRestaurants() {
    //     super.displayRestaurants()
    // }
    restaurants.prototype.displayRestaurants = function () {
        return "<div class=\"col mx-auto col-lg-3 md-4 sm-12 xs-12 d-flex flex-wrap\">\n        <div class=\"card mb-3\" style=\"width: 18rem;\">\n        <img src=\"" + this.img + "\" class=\"card-img-top d-none d-md-block\" alt=\"img\">\n        <div class=\"card-body\">\n          <p class=\"card-text\"><span class=\"font-weight-bold\">" + this.name + "</span>  -<span class=\"font-italic font-weight-lighter italic\">" + this.type + "\n          <hr> \n          <address><svg class=\"bi bi-geo-alt\" width=\"1.3em\" height=\"1.3em\" viewBox=\"0 0 20 20\" fill=\"currentColor\" xmlns=\"http://www.w3.org/2000/svg\">\n          <path fill-rule=\"evenodd\" d=\"M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 0 0-6 3 3 0 0 0 0 6z\"/>\n        </svg><span style=\"font-size: 1rem;\">" + this.zipCode + " " + this.city + ",\n        " + this.address + "</span>\n          <br><i class=\"fa fa-phone aria-hidden=\"true\"></i><span style=\"font-size: 12px;\"> " + this.telefon + " | <a href=\"" + this.webpage + "\" target=\"_blank\">" + this.webpageShort + "</a></span>\n          <address>\n          </p>\n        </div>\n        </div>\n        </div>";
    };
    return restaurants;
}(placetobe));
var ansari = new restaurants('Ansari', 'Vienna', 1020, 'Praterstraße 15', 'img/ansari.jpeg', '+43 1 276 51 02', 'georgisch', 'cafeansari.at', 'https://cafeansari.at/de/');
var deli = new restaurants('Deli', 'Vienna', 1040, 'Naschmarkt 421', 'img/deli.jpg', '+43 1 585 08 23', 'orientalisch', 'naschmarkt-deli.at', 'https://www.naschmarkt-deli.at/');
var uic = new restaurants('United in Cycling', 'Vienna', 1220, 'Sonnenallee 35', 'img/uic.jpg', '0670 6040410', 'Cafe & Bike', 'unitedincycling.com', 'https://unitedincycling.com/');
var palme = new restaurants('Palmenhaus', 'Vienna', 1010, ' Burggarten 1', 'img/palmenhaus.jpg', '+43 1 533 10 33', 'Cafe', 'palmenhaus.at', 'https://www.palmenhaus.at/');
for (var i = 0; i < arrtwo.length; i++) {
    document.getElementById('row-rest').innerHTML += arrtwo[i].displayRestaurants();
}
// class events --------------------------------------
// name: string;
// city: string;
// zipCode: number;
// address: string;
// img ?;
var arrthree = [];
var events = /** @class */ (function (_super) {
    __extends(events, _super);
    function events(a, b, c, d, e, i, j, k) {
        var _this = _super.call(this, a, b, c, d, e) || this;
        _this.eventName = i;
        _this.eventDate = j;
        _this.eventTime = k;
        arrthree.push(_this);
        return _this;
    }
    // displayRestaurants() {
    //     super.displayRestaurants()
    // }
    events.prototype.displayEvents = function () {
        return "<div class=\"col mx-auto col-lg-3 md-4 sm-12 xs-12 d-flex flex-wrap\">\n                    <div class=\"card mb-3\" style=\"width: 18rem;\">\n                    <img src=\"" + this.img + "\" class=\"card-img-top d-none d-md-block\" alt=\"img\">\n                    <div class=\"card-body\">\n                    <p class=\"card-text\"><span class=\"font-weight-bold\">" + this.name + "</span><br>\n                    " + this.eventName + "\n                    <hr> \n                    <address><svg class=\"bi bi-geo-alt\" width=\"1.3em\" height=\"1.3em\" viewBox=\"0 0 20 20\" fill=\"currentColor\" xmlns=\"http://www.w3.org/2000/svg\">\n                    <path fill-rule=\"evenodd\" d=\"M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 0 0-6 3 3 0 0 0 0 6z\"/>\n                    </svg><span style=\"font-size: 1rem;\">" + this.zipCode + " " + this.city + ",\n                    " + this.address + "</span>\n                    <br><span class=\"d-block text-right text-white p-1 bg-dark\" style=\"font-size: 12px;\"> <i class=\"fa fa-clock-o\" aria-hidden=\"true\"></i> created: " + this.eventDate + " | " + this.eventTime + "</span>\n                    <address>\n                    </p>\n                    </div>\n                    </div>\n        </div>";
    };
    return events;
}(placetobe));
var camo = new events('Konzerthaus', 'Vienna', 1030, 'Lothringerstr. 20', 'img/camo.jpg', 'Camo & Krooked', '02.02.2020', '20:00');
var event2 = new events('WUK', 'Vienna', 1090, 'Währingerstr. 59', 'img/polica.jpg', 'Polica', '29.02.2020', '20:00');
var event3 = new events('Preikestolen', 'Norway', '', 'Preikestolen', 'img/einmusik.jpeg', 'Einmusik', '06.09.2019', '15:00');
var event4 = new events('Werksalon', 'Vienna', '', 'Stadlau', 'img/werksalon.jpeg', 'Möbelbau', '12.06.2018', '16:00');
for (var i = 0; i < arrthree.length; i++) {
    document.getElementById('row-events').innerHTML += arrthree[i].displayEvents();
}
