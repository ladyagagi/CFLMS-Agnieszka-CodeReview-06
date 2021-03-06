

interface placetobeInVienna {
    name: string;
    city: string;
    zipCode: number;
    address: string;
    img ?;
    // restaurant();
    // event();
}
let arr = [];
class placetobe implements placetobeInVienna{
    name: string = ""
    city: string = "";
    zipCode;
    address: string = "";
    img ?;

    constructor (a,b,c,d,e) {
        this.name = a
        this.city = b;
        this.zipCode = c;
        this.address = d;
        this.img = e;
        arr.push(this);
    }
    displayPlaces() {
        return `<div class="col mx-auto col-lg-3 md-4 sm-12 xs-12 d-flex flex-wrap">
             <div class="card mb-3" style="width: 18rem;">
              <img src="${this.img}" class="card-img-top d-none d-md-block" alt="img">
              <div class="card-body">
                 <p class="card-text"><span class="font-weight-bold">${this.name} </span>
                 <hr>
                <address>
                <svg class="bi bi-geo-alt" width="1.3em" height="1.3em" viewBox="0 0 20 20" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>
                </svg>
                <span style="font-size: 1rem;">${this.zipCode} ${this.city},
                ${this.address}</span></p>
                </address>
             </div>
            </div>
        </div>`
    } 

}
let kahl = new placetobe ('Kahlenberg', 'Vienna', 1190, 'Kahlenbergerg. 5', 'img/Kahlenberg.jpeg' );
let lobau = new placetobe ('Lobau', 'Vienna', 1220, 'Nationalpark Lobau', 'img/lobau.jpg');
let nasch = new placetobe ('Naschmarkt', 'Vienna', 1050, 'Nachmarkt 1', 'img/naschmarkt.jpg');
let schoen = new placetobe ('Schönbrunn', 'Vienna', 1140, 'Schnönbrunn', 'img/schoen.jpeg');


for (let i=0; i<arr.length; i++) {
    document.getElementById('row-places').innerHTML += arr[i].displayPlaces();
}

// restaurant class ---------------------------------

let arrtwo = [];
class restaurants extends placetobe {
    telefon:string;
    type: string;
    webpage:string;
    webpageShort:string;

    constructor(a,b,c,d,e,f,g,h,i) {
        super(a,b,c,d,e);
         this.telefon = f;
        this.type = g;
        this.webpageShort = h
        this.webpage= i;
        arrtwo.push(this);
    }
    // displayRestaurants() {
    //     super.displayRestaurants()
    // }
    displayRestaurants(){
        return `<div class="col mx-auto col-lg-3 md-4 sm-12 xs-12 d-flex flex-wrap">
        <div class="card mb-3" style="width: 18rem;">
        <img src="${this.img}" class="card-img-top d-none d-md-block" alt="img">
        <div class="card-body">
          <p class="card-text"><span class="font-weight-bold">${this.name}</span>  -<span class="font-italic font-weight-lighter italic">${this.type}
          <hr> 
          <address><svg class="bi bi-geo-alt" width="1.3em" height="1.3em" viewBox="0 0 20 20" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
          <path fill-rule="evenodd" d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>
        </svg><span style="font-size: 1rem;">${this.zipCode} ${this.city},
        ${this.address}</span>
          <br><i class="fa fa-phone aria-hidden="true"></i><span style="font-size: 12px;"> ${this.telefon} | <a href="${this.webpage}" target="_blank">${this.webpageShort}</a></span>
          <address>
          </p>
        </div>
        </div>
        </div>`
}
}

let ansari = new restaurants ('Ansari', 'Vienna', 1020, 'Praterstraße 15', 'img/ansari.jpeg','+43 1 276 51 02','georgisch' ,'cafeansari.at', 'https://cafeansari.at/de/' );
let deli = new restaurants ('Deli', 'Vienna', 1040, 'Naschmarkt 421', 'img/deli.jpg','+43 1 585 08 23','orientalisch', 'naschmarkt-deli.at', 'https://www.naschmarkt-deli.at/' );
let uic = new restaurants ('United in Cycling', 'Vienna', 1220, 'Sonnenallee 35', 'img/uic.jpg','0670 6040410','Cafe & Bike', 'unitedincycling.com', 'https://unitedincycling.com/' );
let palme = new restaurants ('Palmenhaus', 'Vienna', 1010, ' Burggarten 1', 'img/palmenhaus.jpg','+43 1 533 10 33','Cafe', 'palmenhaus.at', 'https://www.palmenhaus.at/' );

for (let i=0; i<arrtwo.length; i++) {
    document.getElementById('row-rest').innerHTML += arrtwo[i].displayRestaurants();
}

// class events --------------------------------------

// name: string;
// city: string;
// zipCode: number;
// address: string;
// img ?;

let arrthree = [];
class events extends placetobe {
    eventName:string;
    eventDate:string;
    eventTime: string;

    constructor(a,b,c,d,e,i,j,k) {
        super(a,b,c,d,e,);
        this.eventName = i;
        this.eventDate = j;
        this.eventTime = k;
        
        arrthree.push(this);
    }
    // displayRestaurants() {
    //     super.displayRestaurants()
    // }
    displayEvents(){
        return `<div class="col mx-auto col-lg-3 md-4 sm-12 xs-12 d-flex flex-wrap">
                    <div class="card mb-3" style="width: 18rem;">
                    <img src="${this.img}" class="card-img-top d-none d-md-block" alt="img">
                    <div class="card-body">
                    <p class="card-text"><span class="font-weight-bold">${this.name}</span><br>
                    ${this.eventName}
                    <hr> 
                    <address><svg class="bi bi-geo-alt" width="1.3em" height="1.3em" viewBox="0 0 20 20" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>
                    </svg><span style="font-size: 1rem;">${this.zipCode} ${this.city},
                    ${this.address}</span>
                    <br><span class="d-block text-right text-white p-1 bg-dark" style="font-size: 12px;"> <i class="fa fa-clock-o" aria-hidden="true"></i> created: ${this.eventDate} | ${this.eventTime}</span>
                    <address>
                    </p>
                    </div>
                    </div>
        </div>`
}
}

let camo = new events ('Konzerthaus', 'Vienna', 1030, 'Lothringerstr. 20', 'img/camo.jpg','Camo & Krooked','02.02.2020','20:00' );
let event2 = new events ('WUK', 'Vienna', 1090, 'Währingerstr. 59', 'img/polica.jpg','Polica', '29.02.2020','20:00' );
let event3 = new events ('Preikestolen', 'Norway', '', 'Preikestolen', 'img/einmusik.jpeg','Einmusik', '06.09.2019', '15:00' );
let event4 = new events ('Werksalon', 'Vienna', '', 'Stadlau', 'img/werksalon.jpeg','Möbelbau', '12.06.2018', '16:00' );

for (let i=0; i<arrthree.length; i++) {
    document.getElementById('row-events').innerHTML += arrthree[i].displayEvents();
}
