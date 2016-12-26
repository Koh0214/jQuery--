var fruits = ['apple', 'apricot', 'avocado', 'blueberry', 'cherry', 'coconut', 'cranberry', 'dragonfruit', 'durian', 'grape', 'grapefruit', 'guava', 'kiwi fruit', 'lemon', 'lime', 'lychee', 'mango', 'melon', 'watermelon', 'miracle fruit', 'orange', 'bloodorange','clementine','mandarine','tangerine','papaya','passionfruit','peach','pear','persimmon','physalis','plum/prune','pineapple','pomegranate','raspberry','rambutan','star fruit','strawberry'];

$(function() { 
  var list = $("#list");
  var preWord;

  function appendList(word) {
    var item = $('<li class="list">').append(word); //シングルクオーテーションじゃないと動かない。
    list.append(item);
  }

  function editElement(element){
    var result = "^" + element;
    return result;
  }

  $("#keyword").on("keyup", function() {
    var input     = $("#keyword").val();
    var inputs    = input.split(" ").filter(function(e) { return e; });
    var newinputs = inputs.map(editElement);
    var word      = newinputs.join("|")
    var reg       = RegExp(word)

    $(".list").remove();

    if (word != preWord && input.length !== 0){
      $.each(fruits, function(i, fruit){
      // i は配列のindex番号を示している。
        if(fruit.match(reg)){
          appendList(fruit);
        }
      });

      if($(".list").length === 0) {
        appendList("一致するものが見つかりません");
      }
    }

    // preWord = word;

  });

 });