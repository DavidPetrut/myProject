$('#BUTTON').click(function() {

    $.ajax({
        url: "libs/php/getCountryInfo.php",
        type: 'POST',
        dataType: 'json',
        data: {
            country: $('#country').val(),
            lang: $('#lang').val()
        },
        success: function(result) {

            console.log(result);

            if (result.status.name == "ok") {

                $('#currencyCode').html(result['data'][0]['currencyCode']);
                $('#txtCapital').html(result['data'][0]['capital']);
                $('#txtPopulation').html(result['data'][0]['population']);
                $('#languages').html(result['data'][0]['languages']);
                $('#fipsCode').html(result['data'][0]['fipsCode']);

            }
        
        },
        error: function(jqXHR, textStatus, errorThrown) {
            // your error code
        }
    }); 


});

