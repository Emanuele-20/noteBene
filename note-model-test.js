function saveTextTest() {
    var note = new Note("My favourite language is JavaScript");
    assert.isTrue(note.text === "My favourite language is JavaScript")
};

function showTextTest() {
    var note = new Note("text whatever");
    assert.isTrue(note.showText() === "text whatever");
}
saveTextTest();
showTextTest();