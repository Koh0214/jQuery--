$(function() { 
  var fruits = ['apple', 'apricot', 'avocado', 'blueberry', 'cherry', 'coconut', 'cranberry', 'dragonfruit', 'durian', 'grape', 'grapefruit', 'guava', 'kiwi fruit', 'lemon', 'lime', 'lychee', 'mango', 'melon', 'watermelon', 'miracle fruit', 'orange', 'bloodorange','clementine','mandarine','tangerine','papaya','passionfruit','peach','pear','persimmon','physalis','plum/prune','pineapple','pomegranate','raspberry','rambutan','star fruit','strawberry'];

  $("#submit").on("click", function() {
    var input = $("#keyword").val();  // val()の左で指定したやつのバリューを取得する
    $.each(fruits, function(i, fruit){
      // i は配列のindex番号を示している。
      if(input === fruit){
        $("#list").text(input);
        return false; //見つかったら繰り返しを終了する。
      } else {
        $("#list").text("一致するものが見つかりません");
      }
    })
    
  });

 });