function PopWindowOpen() {
    $(".overlay").show();
    $(".pop-window").show();
}
function PopWindowClose(){
    $(".pop-window").hide();
    $(".overlay").hide();
}

function AddCard(){
    let main = $("#main");
    main.append('<div class="card-header"><h2>最近浏览</h2></div><div class="card-control"><button class="all-btn control-btn clear-btn"><img src="img/clear_btn1.svg" /></button></div><div class="card-content"><ul class="book-list"><li><div class="book-cover"></div></li></ul></div></div>');
}

$(".avator-ul>li:first-child>a").click(PopWindowOpen);
$(".overlay").click(PopWindowClose);
$(".card-control .clear-btn").click(()=>{
    
})
