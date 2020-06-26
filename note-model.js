(function (exports){

    var idcounter = 0;
function Note(text){
    this.text = text;
    this.id = idcounter++;
};

Note.prototype.showText = function() {
    return this.text;
}

// Note.prototype.idGenerator = function() {
//     this.id
// }

    exports.Note = Note;
})(this);

// (function() {
//     var idcounter = 0;

//    function Member(name){
//         this.id = idcounter++;
//         this.getName = function(){
//             return lastName;
//         };

//         this.setName = function(_name){
//             name = _name;
//         };
//    }

//    yournamespace.Member = Member;
// }()); 