function noteControlllerTest() {
    var noteList = new NoteList()
    var controller = new NoteController(noteList);
    controller.addNotesToPage()
    assert.isTrue(document.getElementById("app").innerHTML === "<ul><li><div>Favourite drink: sel</div></li></ul>")
};

noteControlllerTest()