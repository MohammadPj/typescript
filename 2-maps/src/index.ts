import {User} from "./User";
import {Company} from "./Company";

const user = new User()
const company = new Company()

console.log("user", user)
console.log("company", company)

const companyLocation = company.location
const userLocation = user.loacation

// @ts-ignore
var map = L.map('map').setView([companyLocation.lat, companyLocation.lng], 3);

// @ts-ignore
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '© OpenStreetMap'
}).addTo(map);

// @ts-ignore
var marker = L.marker([companyLocation.lat, companyLocation.lng]).addTo(map);
// @ts-ignore
var marker = L.marker([userLocation.lat, userLocation.lng]).addTo(map);