document.addEventListener('DOMContentLoaded', function(){
    var columns = document.querySelectorAll('.dev'),
        sequence = '1234',
        order = [],
        reset = function(){
          order = [];
          columns[3].style.backgroundColor = "rgb(255,0,0)";
          columns[0].style.backgroundColor = "rgb(255,127,0)";
          columns[1].style.backgroundColor = "rgb(255,255,0)";
          columns[4].style.backgroundColor = "rgb(0,255,0)";
          columns[2].style.backgroundColor = "rgb(0,0,255)";
          columns[6].style.backgroundColor = "rgb(75,0,130)";
          columns[5].style.backgroundColor = "rgb(148,0,211)";
          
        };
  
    columns.forEach(function(column){
      column.addEventListener('click', function(){
        var data = this.dataset,
            index = order.indexOf(data.index),
            bgColor = index > -1 ? '' : 'grey';
  
        if(index > -1){
          order.splice(index, 1);
        }else{
          order.push(data.index);
        }
  
        this.style.backgroundColor = bgColor;
  
        if(order.length === sequence.length){          
          if(order.join('') === sequence){
            alert('You guessed the correct order!');
          }else{
            alert('Please try again!')
          }
  
          reset();
        }
      });
    });
  });