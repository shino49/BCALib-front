function PopWindowOpen() {
    $(".overlay").show(200);
    $(".pop-window").show(300);
}
function PopWindowClose(){
    $(".pop-window").hide(200);
    $(".overlay").hide(300);
}

function AddCard(){
    let main = $("#main");
    let cardName = prompt("Enter the card name");
    main.append('<div class="card"><div class="card-header"><h2>' + cardName +'</h2></div><div class="card-control"><button class="all-btn control-btn clear-btn" onclick="RemoveCard(this);"><img src="img/clear_btn1.svg" /></button></div><div class="card-content"><ul class="book-list"><li><div class="book-cover"></div></li></ul></div></div></div');
    console.log(main.children().first());
}
function RemoveCard(thisCard){
    let card = $(thisCard.parentNode.parentNode);
    card.fadeOut(300,()=>{card.remove();});
}

$(function() {
    $(".avator-ul>li:first-child>a").click(PopWindowOpen);
    $(".overlay").click(PopWindowClose);
    // $(".card-control .clear-btn").click((obj) => {
    //     let card = obj.target.parentNode.parentNode.parentNode;
    //     card.parentNode.removeChild(card);
    // });
});

function UpdateCard(cardObj) {

}
