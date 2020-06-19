
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
        return `<div class="col-lg-4 xs-1 mb-3">
        <div class="card text-center" style="width: 15rem;">
        <img src="${this.img}" class="card-img-top" alt="">
        <div class="card-body">
          <p class="card-text">${this.name} <br> ${this.zipCode} ${this.city} <br> ${this.address}</p>
        </div>
        </div>
        </div>
        `
    }

}
let kahl = new placetobe ('Kahlenberg', 'Vienna', 1190, 'Kahlenbergergasse 5', 'jk' );
let lobau = new placetobe ('Lobau', 'Vienna', 1220, 'Nationalpark Lobau', 'kk');
let nasch = new placetobe ('Naschmarkt', 'Vienna', 1050, 'Nachmarkt 1', 'mm');


// console.log(arr);
for (let i=0; i<arr.length; i++) {
    document.getElementById('row-places').innerHTML += arr[i].displayPlaces();
}

// arr.forEach(function(place){
//     
// });
// 



// let ansari = new placetobe ( 'Vienna', '1020', 'Praterstraße 15'  "https://cafeansari.at/de/")