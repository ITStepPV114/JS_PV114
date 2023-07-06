// jQuery or $

// jQuery(document).ready(function () {
//     //code
// });

$(document).ready(function () {
    //code
    $('.block').addClass('active');
    $('.block').append($("<h1></h1>").text("my text"));
    $('.block').append("<h1>text</h1>");
});

//short variant
$(function () {
    $('.block').append($("<div/>").addClass("block").addClass("active"));
});


$(() => {
    $('body').append("<h1>text short usring function</h1>");
    // $('.block').attr("title","this is div block");
    $('div').attr("title", "this is div block");
    let count_div = $('div').length;
    console.log(count_div);
    let rezTag = $('.block').html();
    let item1 = $('h1:even')[0];
    // console.dir(item1);
    $('.block').find(item1).css('color', 'green');
    $('.block').find(item1).css({ 'text-align': 'center', 'font-size': "48px" });
    $("h1:even").each(function () {
        $(this).css('text-transform', 'uppercase');
    });

    console.log(rezTag);
    $('.block').html(rezTag + "<h2>add text by jQuery</h2>");
    let btnUser = $("<input/>");

    // btnUser.attr("type","button");
    // btnUser.attr("data-userid",3);
    // btnUser.attr("value","Show info Robert");

    // btnUser.attr("type", "button")
    //     .attr("data-userid", 3)
    //     .attr("value", "Show info Robert");

    btnUser.attr({
        "type": "button",
        "data-userid": 3,
        "value": "Show info Robert"
    });

    //analog addEventListener
    btnUser.bind("click", () => {
        alert("CLICK BTN");
    });
    $('body').append(btnUser);

    let gitHubUser = "https://api.github.com/users/TSShrol";
    $(() => {
        $.ajax({
            url: gitHubUser,
            dataType: "json",
            success: function(data){
                //code manipulation with data
                console.log(data);
                console.log(typeof data);
            },
            error: function(){
                console.log("error from result");
            }
        }
        );
    }
    );

}
);

