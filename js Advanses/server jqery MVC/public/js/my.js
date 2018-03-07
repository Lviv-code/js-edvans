'use strict'

$(document).ready(function () {


    $('#Take').on('click', function () {
        $.ajax({
            url: 'http://localhost:8000/test',
            success: function (html) {
                $("#Res").append(html);
            },
            error: function () {
                alert('Failed!');
            }
        })

    })




})