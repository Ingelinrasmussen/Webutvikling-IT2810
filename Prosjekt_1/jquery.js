//jQuery to change color of dog in SVG

//Dog head
$(document).on('click', '#dog_head', function() { 
    if ($(this).attr("fill") == "khaki"){
        $(this).attr("fill", "lawngreen");
    } 
    else {
        $("#dog_head").attr("fill", "khaki");
    } 
});

//Dog body
$(document).on('click', '#dog_body', function() { 
    if ($(this).attr("fill") == "khaki"){
        $(this).attr("fill", "lawngreen");
    } 
    else {
        $("#dog_body").attr("fill", "khaki");
    } 
});

//Right ear
$(document).on('click', '#right_ear', function() { 
    if ($(this).attr("fill") == "burlywood"){
        $(this).attr("fill", "lawngreen");
    } 
    else {
        $("#right_ear").attr("fill", "burlywood");
    } 
});

//Left ear
$(document).on('click', '#left_ear', function() { 
    if ($(this).attr("fill") == "burlywood"){
        $(this).attr("fill", "lawngreen");
    } 
    else {
        $("#left_ear").attr("fill", "burlywood");
    } 
});

//jQuery for showing/hiding documentation section

$(document).on('click', '#doc_button', function() { 
    $( "#documentation").toggle(); 
});

