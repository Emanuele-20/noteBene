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
        array.push(`<ul><li><div>${note.showText()}</div></li></ul>`)
      })
      return array.join("")
    }
  }

  exports.NoteListView = NoteListView;
})(this);