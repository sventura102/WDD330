const list = document.querySelector('ul');
      const input = document.querySelector('input');
      const button = document.querySelector('button');
//on click, button will display item.
      button.onclick = function() {
        let myItem = input.value;
        input.value = '';

        const listItem = document.createElement('li');
        const listText = document.createElement('span');
        const listBtn = document.createElement('button');

        listItem.appendChild(listText);
        listText.textContent = myItem;
        listItem.appendChild(listBtn);
        listBtn.textContent = '❌';
        list.appendChild(listItem);
//On Click, delete button will remove item.
        listBtn.onclick = function(e) {
          list.removeChild(listItem);
        }

        input.focus();
      }