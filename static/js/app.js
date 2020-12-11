function PopWindowOpen() {
    $(".overlay").show(200);
    $(".pop-window").show(300);
}
function PopWindowClose(){
    $(".pop-window").hide(200);
    $(".overlay").hide(300);
}

function AddCard(area_name,cardName,updateMethod){
    if(area_name=="side"){
        let area = $("#side-card-area");
        let card = $('<div class="side-card"><div class="card-header"><h2>' + cardName +'</h2></div><div class="card-control"><button class="all-btn control-btn clear-btn" onclick="RemoveCard(this);"><img src="static/img/clear_btn1.svg" /></button></div><div class="card-content"><ul class="book-list-small"><li><div class="book-cover"></div></li></ul></div></div></div');
        area.append(card);
        updateMethod(card)
    }
    else if(area_name=="main"){
        let main = $("#main-card-area");
        let card = $('<div class="card"><div class="card-header"><h2>' + cardName +'</h2></div><div class="card-control"><button class="all-btn control-btn clear-btn" onclick="RemoveCard(this);"><img src="static/img/clear_btn1.svg" /></button></div><div class="card-content"><ul class="book-list-big"><li><div class="book-cover"></div></li></ul></div></div></div');
        main.append(card);
    }
    
}
function RemoveCard(thisCard){
    let card = $(thisCard.parentNode.parentNode);
    card.fadeOut(300,()=>{card.remove();});
}

$(function() {
    $(".avator-ul>li:first-child>a").click(PopWindowOpen);
    $(".overlay").click(PopWindowClose);
    AddCard("main","最近浏览",historyCardUpdate);
    AddCard("side","最新入库",historyCardUpdate);
    // $(".card-control .clear-btn").click((obj) => {
    //     let card = obj.target.parentNode.parentNode.parentNode;
    //     card.parentNode.removeChild(card);
    // });
});

function historyCardUpdate(cardObj) {
    let loading = $("<div class='loading-circle'></div>");
    cardObj.append(loading);
    $.getJSON("/v1/book/list",{
        order: "lastread",
        limit: 100
    }).done((data)=>{
        console.log(data);
        loading.remove();
    });
}
