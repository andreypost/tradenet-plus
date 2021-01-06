$(document).ready(function () {
    $.ajax({
        url: "https://get.geojs.io/v1/ip/geo.js",
        dataType: "jsonp",
        jsonpCallback: "geoip"
    })
        .done(function (geo) {
            $.getJSON('./codes.json', function (data) {
                $.each(data.countries, function (key, val) {
                    $('#connectForm select').append(`<option value="${val.name}" data-code="${val.code}">${val.name}</option>`)
                    if (geo.country === val.name) {
                        $('#connectForm select').val( val.name )
                        $('#connectForm input[name=phone]').val( val.code )
                    }
                });
            })
            $('#connectForm select').change(function () {
                $('#connectForm input[name=phone]').val( $(this).find(':selected').data('code') )
            })
        })

    var data = null
    $('#connectForm').submit(function (e) {
        e.preventDefault()
        data = new FormData(this)
        $('.connect_form').fadeTo('fast', 0, function() {
            $(this).css('z-index', '-99999')
            $('.connect_quiz').fadeTo('fast', 1, function() {
                $('body,html').animate({scrollTop: $('.connect').offset().top},200)
                $('.connect').addClass('connect_height')
            })
        })
    })
    $('.goNext').click(function() {
        $('.connect').addClass('question_height')
        $(this).closest('.nextTo')
        .css('z-index', '-99999')
        .fadeTo('fast', 0)
        .prev().fadeTo('fast', 1)
        if ($(this).data('question')) {
            data.append($(this).data('question'), $(this).text().trim())
        }
        if ($(this).closest('.nextTo').data('send')) {
            for (let pare of data.entries()) {
                console.log(pare)
            }
            fetch('', {
                method: 'POST',
                body: data
              })
              .then(response => response.json())
              .then(result => console.log(result))
              .catch(error => console.log(error))
        }
    })
});