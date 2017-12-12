console.log('my-note app.js');

try {
    var isFileSaverSupported = !!new Blob;
} catch (e) {
  console.log("don't run");
}

var clickBts = {
  newNoteBtn : document.querySelector('.btn-newnote'),
  saveNoteBtn : document.querySelector('.btn-savenote'),
  noteDownloadBtn : document.querySelector('.btn-notedownload'),
  aboutBtn : document.querySelector('.btn-about'),
  fullScreenBtn : document.querySelector('.btn-fullscreen')
}

clickBts.newNoteBtn.addEventListener('click',control.util.requirements.newNote,false);
clickBts.saveNoteBtn.addEventListener('click',control.util.requirements.saveNote,false);
clickBts.aboutBtn.addEventListener('click',control.util.requirements.showAboutApplication,false);
clickBts.fullScreenBtn.addEventListener('click',control.util.requirements.fullScreen,false);
clickBts.noteDownloadBtn.addEventListener('click',control.util.requirements.noteDownload,false);
model.view.modal.addEventListener('click',control.util.requirements.close,false);



window.onload = onloadFunction;
function onloadFunction(e){
  if (localStorage.length != 0) {
    var data = localStorage.getItem(control.storageKey)
    model.view.setVal(data.substring(1,data.length-1));
  }
}
