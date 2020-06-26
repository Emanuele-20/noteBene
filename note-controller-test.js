function noteControlllerTest() {
    var noteList = new NoteList()
    var controller = new NoteController(noteList);
    controller.addNotesToPage()
    assert.isTrue(document.getElementById("app").innerHTML === '<ul><li><a href="#note/9"><div>Favourite drink: sel</div></a></li></ul>')
};

function pageShowsNoteTextOnHashchange() {
    var noteList = new NoteList()
    var controller = new NoteController(noteList);
    controller.makeUrlCHangeSHowNoteForCurrentPage();
    assert.isTrue(document.getElementById("app").innerHTML === "Favourite drink: seltzer")
}

noteControlllerTest()
pageShowsNoteTextOnHashchange();