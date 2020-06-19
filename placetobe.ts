

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
        return `<div class="col-lg-4 sm-6 md-6 xs-12 mb-0 ">
        <div class="card mb-3" style="width: 18rem; min-height: 353px">
        <img src="${this.img}" class="card-img-top" alt="">
        <div class="card-body">
          <p class="card-text"><span class="font-weight-bold">${this.name} </span><hr>
          <address>
          <svg class="bi bi-geo-alt" width="1.3em" height="1.3em" viewBox="0 0 20 20" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
  <path fill-rule="evenodd" d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>
</svg>
        ${this.address}<br>${this.zipCode} ${this.city}</p>
        </address>
        </div>
        </div>
        </div>`
    } 

}
let kahl = new placetobe ('Kahlenberg', 'Vienna', 1190, 'Kahlenbergergasse 5', 'img/Kahlenberg.jpeg' );
let lobau = new placetobe ('Lobau', 'Vienna', 1220, 'Nationalpark Lobau', 'img/lobau.jpg');
let nasch = new placetobe ('Naschmarkt', 'Vienna', 1050, 'Nachmarkt 1', 'img/naschmarkt.jpg');



for (let i=0; i<arr.length; i++) {
    document.getElementById('row-places').innerHTML += arr[i].displayPlaces();
}

let arrtwo = [];
class restaurants extends placetobe {
    telefon:string;
    type: string;
    webpage:string;

    constructor(a,b,c,d,e,f,g,h) {
        super(a,b,c,d,e);
        this.telefon = f;
        this.type = g;
        this.webpage= h;
        arrtwo.push(this);
    }
    // displayRestaurants() {
    //     super.displayRestaurants()
    // }
    displayRestaurants(){
        return `<div class="col-lg-4 sm-6 md-6 xs-12 mb-0 ">
        <div class="card mb-3" style="width: 18rem; min-height: 353px">
        <img src="${this.img}" class="card-img-top" alt="">
        <div class="card-body">
          <p class="card-text"><span class="font-weight-bold">${this.name}</span> ${this.type}
          <hr>${this.address}
          <br>${this.zipCode} ${this.city} 
          <br>${this.telefon} | ${this.webpage} 
          </p>
        </div>
        </div>
        </div>`
}
}

let ansari = new restaurants ('Ansari', 'Vienna', 1020, 'Praterstraße 15', 'img/ansari.jpeg','+43 1 276 51 02','georgisch' ,'cafeansari.at' );
let deli = new restaurants ('Deli', 'Vienna', 1040, 'naschmarkt stand 421-436', 'img/deli.jpg','+43 1 585 08 23','orientalisch', 'naschmarkt-deli.at' );
let uic = new restaurants ('United in Cycling', 'Vienna', 1220, 'Sonnenallee 35', 'img/uic.jpeg','0670 6040410','Cafe & Kuchen', 'unitedincycling.com' );

for (let i=0; i<arrtwo.length; i++) {
    document.getElementById('row-rest').innerHTML += arrtwo[i].displayRestaurants();
}
