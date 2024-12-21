     //  google map

 // Initialize the map
 var map = L.map('map').setView([23.6850, 90.3563], 7);
 map.on('click', function (e) {
   alert(`আপনি ক্লিক করেছেন: ল্যাটিটিউড ${e.latlng.lat}, লংটিটিউড ${e.latlng.lng}`);
});

 // Add OpenStreetMap tiles
//  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
//      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
//  }).addTo(map);

 // Add marker for Dhaka
 L.marker([23.8103, 90.4125]).addTo(map)
     .bindPopup("<b>ঢাকা</b><br>বাংলাদেশের রাজধানী.");
L.circle([23.8103, 90.4125], {
   color: 'red',
   fillColor: '#f03',
   fillOpacity: 0.5,
   radius: 5000 // রেডিয়াস (মিটারে)
}).addTo(map)
//    .bindPopup("ঢাকা সার্কেল");

fetch('bangladesh.json') // GeoJSON ফাইলের পাথ দিন
.then(response => response.json())
.then(data => {
    L.geoJSON(data, {
        // প্রতিটি পয়েন্টকে বৃত্ত হিসেবে রেন্ডার করার জন্য
        pointToLayer: (feature, latlng) => {
            return L.circle(latlng, {
                radius: 500, // রেডিয়াস মিটার এ
                color: '#000',
                size: 100, // বৃত্তের সীমানার রঙ
                fillColor: '#f03', // বৃত্তের ভেতরের রঙ
                fillOpacity: 0.5 // বৃত্তের ভেতরের স্বচ্ছতা
            });
        },
        onEachFeature: (feature, layer) => {
            // প্রতিটি ফিচারের জন্য পপআপ যোগ করুন
            layer.bindPopup(`<b>${feature.properties.name_bn}</b>`);
        }
    }).addTo(map);
});
