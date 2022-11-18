// №1

// function js_style(){
//     const text = document.getElementById('text');
//     text.style = 'font-size: 48px; color: red; background-color: green; width: 300px; border: 3px solid black; border-radius: 15px; padding: 10px;'
//     const screenWidth = window.screen.width;
//     console.log('Ширина экрана: ', screenWidth);
//     const screenHeight = window.screen.height;
//     console.log('Высота экрана: ', screenHeight);
//     const paragraph = document.createElement('p');
// }


// №2

// function getFormvalue(){
//     event.preventDefault();
//     let form = document.querySelector('#form1');
//     let paragraph = document.createElement('p');
//     paragraph.innerHTML = form.fname.value + ' ';
//     paragraph.innerHTML += form.lname.value;
//     document.getElementById('form1').appendChild(paragraph);
// }

// №3

// function getAttributes(){
//     event.preventDefault();

//      get_p = document.querySelector('#w3r');

//     href = document.createElement('p');
//     href.innerHTML = get_p.href;
//     document.body.appendChild(href);


//     hreflang = document.createElement('p');
//     hreflang.innerHTML = get_p.hreflang;
//     document.body.appendChild(hreflang);
    

//     rel = document.createElement('p');
//     rel.innerHTML = get_p.rel;
//     document.body.appendChild(rel);
 

//     target = document.createElement('p');
//     target.innerHTML = get_p.target;
//     document.body.appendChild(target);


//     type = document.createElement('p');
//     type.innerHTML = get_p.type;
//     document.body.appendChild(type);

//     arr = []
//     arr.push(href,hreflang,rel,target,type);
//     for (let i = 0; i < arr.length; i++){
//        arr[i].classList.add(`style${i}`)
//     }
// }

// №4

// function insert_Row(){
//     const table = document.querySelector('#sampleTable');
//     elem = document.createElement('tr')
//     elem.innerHTML = '<td>Row1 cell1</td><td>Row1 cell2</td>'
//     table.appendChild(elem)
// }

// №5

// function changeContent(){
//     const tr = parseInt(prompt('Введите количество строк: '));
//     const td = parseInt(prompt('Введите количество столбиков: '));
//     const text = prompt('Введите новый текст: ');
//     const table = document.querySelector('table').querySelectorAll('tr')[tr-1].querySelectorAll('td')[td-1].innerHTML = text;

// }

// №6

// function createTable(){
//     select = document.querySelector('#myTable');
//     count = parseInt(prompt('Введите кол-во строчек'));
//     count_2 = parseInt(prompt('Введите кол-во столбцев'));
//     for (let i = 0; i < count; i++){
//         let row = document.createElement('tr');
//         for (let j = 0; j < count_2; j++){
//            let table = document.createElement('td');
//            table.innerHTML = `Row${i} cell${j}`;
//            row.appendChild(table); 
//         }
//         select.appendChild(row);
//     }
// }

// №7

// function removecolor(){
//     const select = document.querySelector('#colorSelect');
//     const remove = select[select.selectedIndex].innerHTML;

//     const get_p = document.createElement('P');
//     document.body.appendChild(get_p);
//     get_p.innerHTML = `${remove} удален`

//     select.remove(select.selectedIndex);
// }

// №8

// function getOptions(){
//     const select = document.querySelector('select')
//     alert(select.length)
//     for (let i = 0; i < select.length; i++) {
//         alert(select[i].innerHTML)
//     }
// }

// №9

