(function (exports) {

    function NoteList(){
      this.notes = []
    };

    NoteList.prototype.getNotes = function() {
      return this.notes
    }

    //NoteList.prototype.addNote = function() {
    //   new Note
    // }

  exports.NoteList = NoteList;
})(this);