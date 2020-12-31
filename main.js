// document.addEventListener("DOMContentLoaded", () => {

$.ajax({
    url: "https://get.geojs.io/v1/ip/geo.js",
    dataType: "jsonp",
    jsonpCallback: "geoip"
    // success: function(data) {
    // //   console.log("IP: "+data.ip);
    //   console.log("Country: "+data.country);
    // //   console.log("Country Code: "+data.country_code);
    // }
}).done(function (geo) {
    // console.log(geo, "second success")

   /* $.getJSON("./codes.json", function (data) {
        // var items = [];
        $.each(data.countries, function (key, val) {
            if (geo.country == val.name) {
                console.log(val.code, val.name)
            }
            // jQuery.inArray(geo.country, val.name)
            // items.push("<li id='" + key + "'>" + val + "</li>")
        });
        // $("<ul/>", {
            // "class": "my-new-list",
            // html: items.join("")
        // }).appendTo("body");
    })*/


    $.getJSON("./phone.json", function (data) {
        // var items = [];
        $.each(data, function (key, val) {
            console.log(key, val)
            if (geo.country == val.name) {
                console.log(val.code, val.name)
            }
            // jQuery.inArray(geo.country, val.name)
            // items.push("<li id='" + key + "'>" + val + "</li>")
        });
        // $("<ul/>", {
            // "class": "my-new-list",
            // html: items.join("")
        // }).appendTo("body");
    })

})


//   var jqxhr = $.getJSON( "./codes.json", function() {
//     console.log( "success" );
//   })
//     .done(function(data) {
//         console.log( data, "second success" )

//     })
//     .fail(function() {
//       console.log( "error" );
//     })
//     .always(function() {
//       console.log( "complete" );
//     });


let form = document.getElementById('connectForm')

form.onsubmit = (e) => {
    e.preventDefault()

}


    // fetch('./codes.json')
    //     .then(response => console.log(response))
    //     .catch(error => console.log(error))


    // console.log(Intl.DateTimeFormat().resolvedOptions().timeZone, Intl)





// })
