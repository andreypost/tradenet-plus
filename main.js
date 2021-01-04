$(document).ready(function () {
    $.ajax({
        url: "https://get.geojs.io/v1/ip/geo.js",
        dataType: "jsonp",
        jsonpCallback: "geoip"
        // success: function(data) {
        //   console.log("IP: "+data.ip);
        //   console.log("Country: "+data.country);
        //   console.log("Country Code: "+data.country_code);
        // }
    })
        .done(function (geo) {
            $.getJSON('./codes.json', function (data) {
                $.each(data.countries, function (key, val) {
                    $('#connectForm select').append(`<option value="${val.name}" data-code="${val.code}">${val.name}</option>`)
                    if (geo.country === val.name) {
                        $('#connectForm select').val(val.name)
                        $('#connectForm input[name=phone]').val(val.code)
                    }
                });
            })
            $('#connectForm select').change(function () {
                $('#connectForm input[name=phone]').val($(this).find(':selected').data('code'))
            })
            // $.getJSON("./phone.json", function (data) {
            //     $.each(data, function (key, val) {
            //         if (geo.country_code === key) {
            //             console.log( geo.country_code,  geo.country);
            //             $('#connectForm select').val(geo.country)
            //             $('#connectForm input[name=phone]').val(val)
            //         }
            //         // jQuery.inArray(geo.country, val.name)
            //         // items.push("<li id='" + key + "'>" + val + "</li>")
            //     });
            //     // $("<ul/>", {
            //     // "class": "my-new-list",
            //     // html: items.join("")
            //     // }).appendTo("body");
            // })

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

    var data = new FormData()

    $('#connectForm').submit(function (e) {
        e.preventDefault()
        $(this.elements).each(function () {
            this.value ? data.set(this.name, this.value) : null
            // console.log(this.value)
        })
        $('.connect_form').fadeTo('fast', 0, function() {
            $(this).css('z-index', '-99999')

            // console.log($('.connect_quiz').height(), $('.connect_quiz').outerHeight())
            $('.connect_quiz').fadeTo('fast', 1, function() {
                $('body,html').animate({scrollTop: $('.connect').offset().top},200)
                $('.connect').height($(this).outerHeight())
            })
        })     
        // for (let pare of data.entries()) {
            // console.log((pare[0], pare[1]))
        // }
    })

    $('.quize_go').click(function () {
        $('.connect_quiz').fadeTo('fast', 0, function() {
            $(this).css('z-index', '-99999')
            $('.quest_01').fadeTo('fast', 1)
        })
    })



    $('.connect_question button').click(function () {
        var parent = $(this).closest('.connect_question')
        $(parent).fadeTo('fast', 0, function() {
            $(parent).prev().fadeTo('fast', 1, function() {
                // console.log($(`${parent} button`) )
                
            })
            $(parent).css('z-index', '-99999')
        })
    })

    





    // form.onsubmit = (e) => {
    //     e.preventDefault()
    //     for (let elem of form.elements) {
    //         elem.value ? data.set(elem.name, elem.value) : null
    //     }
    // }

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


});







// 
// console.log(Intl.DateTimeFormat().resolvedOptions(), navigator.languages)

