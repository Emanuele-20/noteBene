// Uses the constructor and prototype pattern to define a note list view object that can be instantiated.
// Takes a note list model upon instantiation.
// Has a method that, when called, returns a string of HTML that represents the note list model. For example: <ul><li><div>Favourite food: pesto</div></li><li><div>Favourite drink: seltzer</div></li></ul>.
// Handles a note list model that has no notes, one note or several notes.

function testNoteListView() {
  var noteListView = new NoteListView();
  assert.isTrue(noteListView);
};

function testNoteListView2() {
  var noteList = new NoteList
  var nlv = new NoteListView(noteList)
  assert.isTrue(nlv.getsNoteList() === noteList)
};

function testNoteListView3(){
  var noteList = new NoteList
  noteList.addNote('Favourite food: pesto')
  var nlv = new NoteListView(noteList)
  assert.isTrue(nlv.convertNote() === "<ul><li><div>Favourite food: pest</div></li></ul>"
)
}

function testNoteListView4(){
  var noteList = new NoteList
  var nlv = new NoteListView(noteList)
  assert.isTrue(nlv.convertNote() === "<ul><li><div>No Notes</div></li></ul>"
)
}

function testNoteListView5(){
  var noteList = new NoteList
  noteList.addNote('Favourite food: pesto')
  noteList.addNote('Favourite food: pizza')
  var nlv = new NoteListView(noteList)
  assert.isTrue(nlv.convertNote() === "<ul><li><div>Favourite food: pest</div></li></ul><ul><li><div>Favourite food: pizz</div></li></ul>"
)
}

testNoteListView();
testNoteListView2();
testNoteListView3();
testNoteListView4();
testNoteListView5();