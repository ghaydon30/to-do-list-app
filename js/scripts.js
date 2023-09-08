// jQuery Method
function newItem() {

    //1. Add new item to the list:
      let li = $('<li></li>');
      let inputValue = $('#input').val();
      li.append(inputValue);
    
      if (inputValue === '') {
        alert("You must write something!");
      } else {
        $('#list').append(li);
      }
    
      //2. Cross an item out:
      li.on("dblclick", function crossOut() {
        li.toggleClass("strike");
      });

    //3. Add a delete button
      let deleteButton = $('<deleteButton></deleteButton>');
    deleteButton.append(document.createTextNode('X'));
    li.append(deleteButton);

    deleteButton.on("click", deleteListItem);
    function deleteListItem(){
 		li.addClass("delete")
    }
    $('#list').sortable();
}
