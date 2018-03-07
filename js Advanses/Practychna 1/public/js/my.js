'use strict'

$(document).ready(function(){
    
    $('#Send').on('click', function(){
        $.ajax({
            url: 'http://localhost:8000/test',
            success: function(html){
                $('#Res').append(html);
            },
            error: function(){
                alert('Failed');
            }
        })
    })
    
});



// протоколи
// ip v4 127.0.0.1
// ip v6 127.0.0.0.0.1
// http
// https
// ws

// http запити
// get
// Post
// Put
// Delete
// дізнатись всі http запити