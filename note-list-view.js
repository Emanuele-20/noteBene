(function (exports) {

  function NoteListView(list) {
    this.noteList = list
  };

  NoteListView.prototype.getsNoteList = function() {
    return this.noteList
  };

  exports.NoteListView = NoteListView;
})(this);