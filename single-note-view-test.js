function singleNoteViewTest() {
    var note = new Note('test');
    var viewnote = new SingleNoteView(note)
    assert.isTrue(viewnote.convertSingleNote() === "<div>test</div>")
};

singleNoteViewTest()
