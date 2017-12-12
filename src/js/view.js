(function(model){

  model.view = {
    memo : document.getElementById('memo'),
    modal : document.querySelector('.modal'),
    setVal : function(text){
      model.view.memo.value = text;
    },
    getVal : function(){
      return model.view.memo.value;
    },
    close : function(){
      model.view.modal.style.height = "0";
    },
    show : function(){
      model.view.modal.style.height = "300px";
    }

  }

})(model)
