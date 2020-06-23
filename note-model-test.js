function saveTextTest() {
    var note = new Note("My favourite language is JavaScript");
    assert.isTrue(note.text === "My favourite language is JavaScript")
};
saveTextTest();