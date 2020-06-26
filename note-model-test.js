function saveTextTest() {
    var note = new Note("My favourite language is JavaScript");
    assert.isTrue(note.text === "My favourite language is JavaScript")
};

function showTextTest() {
    var note = new Note("text whatever");
    assert.isTrue(note.showText() === "text whatever");
}

function idGenerator1(){
    var note = new Note ("test generator");
    // console.log(note.id)
    assert.isTrue(note.id === 2)
}

function idGenerator2(){
    var note = new Note ("test generatorX");
    // console.log(note.id)
    var note2 = new Note ("test generatorY");
    // console.log(note2.id)
    assert.isTrue(note2.id === 4)
}

saveTextTest();
showTextTest();
idGenerator1();
idGenerator2();