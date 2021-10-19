var yahooStock = ["^GSPC"];
var yahooStockName = ["S&P 500"];

$(document).ready(function () {
  var j = i;
  for (var i = 0; i < yahooStock.length; i++) {
    var url =
      "https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20yahoo.finance.quotes%20where%20symbol%3D%22" +
      yahooStock[i] +
      "%22&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys&callback=";

    $.getJSON(url, function (data) {
      var sym = data.query.results.quote.Symbol;
      var fullName = "S&P 500";
      var stockString = '<div id="stockwrapper"><div></div>';
      stockString += "<h4>" + fullName + " </h4>";
      stockString +=
        '<span class="stockPrice"> Price: $' +
        data.query.results.quote.LastTradePriceOnly +
        " <br></span>";
      stockString +=
        '<span class="stockOpen"> Open: $' +
        data.query.results.quote.Open +
        "<br> </span>";
      stockString +=
        '<span class="stockClose"> Close: $' +
        data.query.results.quote.PreviousClose +
        "<br></span>";
      stockString += "</div>";
      $("#stockTick").prepend(stockString);
    });
  }
});

/* 

$(function(){
    $('.categories a').click(function(e){
    	$('.categories ul li').removeClass('active');
    	$(this).parent('li').addClass('active');
    	var itemSelected = $(this).attr('data-filter');
    	$('.portfolio-item').each(function(){
    		if (itemSelected == '*'){
    			$(this).removeClass('filtered').removeClass('selected');
    			return;
    		} else if($(this).is(itemSelected)){
    			$(this).removeClass('filtered').addClass('selected');
    		} else{
    			$(this).removeClass('selected').addClass('filtered');
    		}
    	});
    });
});

*/
