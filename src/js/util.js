(function(app){

  app.util = {
    storage : {
          load: function () {
            console.log('storage.load()');
            return JSON.parse(localStorage.getItem(app.storageKey) || "[]");
          },
          save: function (event, data) {
            console.log('storage.save()');
            localStorage.setItem(app.storageKey, JSON.stringify(data));
          }
        },
    requirements : {
        fullScreen : function(event){
          if (screenfull.enabled) {
            screenfull.request();
          }
        },
        newNote : function(event){
          model.view.setVal("");
        },
        saveNote : function(event){
          app.util.storage.save(event,model.view.getVal());
          alert("저장완료");
        },
        noteDownload : function(event){
          var blob = new Blob([model.view.getVal()], {type: "text/plain;charset=utf-8"});
          saveAs(blob, "memo.txt");
        },
        showAboutApplication : function(event){
          model.view.show();
          app.util.requirements.animateValue(3, 0, 3000);
          setTimeout(model.view.close,3000);
        },
        close : function(event){
          model.view.close()
        },
        animateValue : function (start, end, duration) {
            var range = end - start;
            var current = start;
            var increment = end > start? 1 : -1;
            var stepTime = Math.abs(Math.floor(duration / range));
            var obj = document.getElementById("count");
            var timer = setInterval(function() {
                current += increment;
                obj.innerHTML = current;
                if (current == end) {
                    clearInterval(timer);
                }
            }, stepTime);
        }
    }
  }


})(control);
