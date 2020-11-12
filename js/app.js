function PopWindowOpen() {
    $(".overlay").show();
    $(".pop-window").show();
}
function PopWindowClose(){
    $(".pop-window").hide();
    $(".overlay").hide();
}

AddCard(){
    let main = $("#main");
    main.append("");
}

$(".avator-ul>li:first-child>a").click(PopWindowOpen);
$(".overlay").click(PopWindowClose);
$(".card-control .clear-btn").click(()=>{
    
})
