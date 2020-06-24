(function (exports) {

    function NoteList(){
      this.notes = []
    };

    NoteList.prototype.getNotes = function() {
      return this.notes
    }

    NoteList.prototype.addNote = function(text) {
    var newNote = new Note(text); 
    this.notes.push(newNote);
    }

  exports.NoteList = NoteList;
})(this);