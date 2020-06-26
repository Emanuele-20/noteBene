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

    NoteController.prototype.makeUrlCHangeSHowNoteForCurrentPage = function() {
        window.addEventListener("hashchange", showTextForCurrentPage());
    }

    NoteController.prototype.showTextForCurrentPage = function() {
        showTextOnPage(getIdFromUrl(window.location));
    }



    exports.NoteController = NoteController
})(this)