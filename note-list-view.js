(function (exports) {

  function NoteListView(list) {
    this.noteList = list
  };

  NoteListView.prototype.getsNoteList = function() {
    return this.noteList
  };

  NoteListView.prototype.convertNote = function() {
    var array = []  
    var notes = this.noteList.getNotes()
    if (notes.length === 0) {
      return `<ul><li><div>No Notes</div></li></ul>`
    } else {
      notes.forEach( note => {
        array.push(`<ul><li><a href='#note/${note.id}'><div>${note.showText().substr(0, 20)}</div></a></li></ul>`)
  
      })
    
      return array.join("")
    }
  }

  exports.NoteListView = NoteListView;
})(this);

// console.log(str.substr(1, 2));