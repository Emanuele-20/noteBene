
function noteListTest() {
    var list = new NoteList();
    assert.isTrue(list)
};

function noteListTest2() {
    var list = new NoteList();
    assert.isTrue(Array.isArray(list.getNotes()))

};

function addNoteTest() {
    var list = new NoteList();
    list.addNote("pizza")
    console.log(list.getNotes()[0].showText())
    assert.isTrue(list.getNotes()[0] instanceof Note)
    assert.isTrue(list.getNotes()[0].showText() === "pizza")

};

noteListTest();
noteListTest2();
addNoteTest();
