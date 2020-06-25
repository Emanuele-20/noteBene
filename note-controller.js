(function(exports) {
    function NoteController(listModel) {
        this.listModel = listModel;
        this.listModel.addNote("Favourite drink: seltzer");
        this.noteListView = new NoteListView(this.listModel)
    }

    NoteController.prototype.addNotesToPage = function() {
        var html = this.noteListView.convertNote()
        document.getElementById("app").innerHTML = html
    }

    exports.NoteController = NoteController
})(this)