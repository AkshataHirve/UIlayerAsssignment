$(document).ready(function() {
    var ul = $('<ul></ul>');
    $("#btn").click(function() {
        const lang = $("#lang").val();
        $(ul).append('<li>' + lang + '</li>');
        $("#root").html(ul);
    });
});