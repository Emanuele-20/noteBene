
// Stores an array of note models.
// Has a method that will return all the note models stored in the array.
// Has a method that creates and stores a new single note model. This function takes as an argument a string that will be the value of the text property of the note e.g. "Favourite drink: seltzer".

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
