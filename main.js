// document.addEventListener("DOMContentLoaded", () => {

$.ajax({
    url: "https://get.geojs.io/v1/ip/geo.js",
    dataType: "jsonp",
    jsonpCallback: "geoip"
    // success: function(data) {
    //   console.log("IP: "+data.ip);
    //   console.log("Country: "+data.country);
    //   console.log("Country Code: "+data.country_code);
    // }
}).done(function (geo) {
    // console.log(geo, "second success")

    $.getJSON("./codes.json", function (data) {
        $.each(data.countries, function (key, val) {
            if (geo.country === val.name) {
                $('#connectForm select').val(val.name)
                $('#connectForm input[name=phone]').val(val.code)
            }
            // jQuery.inArray(geo.country, val.name)
            // items.push("<li id='" + key + "'>" + val + "</li>")
        });
        // $("<ul/>", {
        // "class": "my-new-list",
        // html: items.join("")
        // }).appendTo("body");
    })


    $.getJSON("./phone.json", function (data) {
        // var items = [];
        $.each(data, function (key, val) {
            // console.log( geo.country)
            if (geo.country == val.name) {
                // console.log(val.code, val.name)
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




let form = document.getElementById('connectForm'),
    data = new FormData()

form.onsubmit = (e) => {
    e.preventDefault()
    for (let elem of form.elements) {
        elem.value ? data.set(elem.name, elem.value) : null
    }
}

const addValue = (key, value) => {
    data.set(key, value)

    for (let pare of data.entries()) {
        // console.log((pare[0], pare[1]))
    }


    // fetch('', {
    //     method: 'POST',
    //     body: data
    // })
    // .then(response => console.log(response.json()))
    // .catch(error => {
    //     // console.log(error)
    // })

}

addValue()







// 
// console.log(Intl.DateTimeFormat().resolvedOptions(), navigator.languages)





// })
