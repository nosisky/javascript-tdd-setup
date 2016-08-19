// NotesApplication class
var Note = require('../lib/notes.js');

module.exports = function(note) {

        this.notes = [note] || [];
    /**
    * Creates a new note
    * @param {object} note - contains values for an author and his note
    */
    this.create_notes = function(note){
        if(note instanceof Note){
            this.notes.push(note);
        }
    }
    /**
    * Retrieves all notes in a particular format.
    */
    this.list_notes = function(){
        for(var count = 0; count < this.notes.length; count++){
            console.log("Note ID: " + count);
            console.log("[" + this.notes[count].note_content + "]");
            console.log("By Author [" + this.notes[count].author + "]")
        }// nd for
    }// end of list_notes 
    
    /**
    * Gets a specific note with it's note ID
    * @param {number} note_id - The ID of the note 
    */
    this.get = function(note_id){
        if(this.notes.hasOwnProperty(note_id)){ //checks to see if the notes id is an index of 
            return this.notes[note_id].note_content;
        }// end if
        else console.log("ID is invalid");
    }// end of get
    
    /**
    * Used to search for occurences of a search parameter in all notes on the system
    * @param {string} search_text - the parameter you're searching for an occurnce of
    */
    this.search = function(search_text){
        console.log("Showing results for search \‘[<search_text>]\’");
        for(var count = 0; count< this.notes.length; count++){
            if(this.notes[count].note_content.indexOf(search_text) !== -1){
                console.log("Note ID: " + count);
                console.log("[" + this.notes[count].note_content + "]");
            }// end if
        }// end for
        console.log("No other results found");
    }//end of search
    
    /**
    * Editing content at a particular index
    * @param {number} note_id - Index to edit content at
    */
    this.edit = function(note_id, new_content){
        if(this.notes.hasOwnProperty(note_id)) this.notes[note_id].note_content = new_content;
        else console.log("ID is invalid");
    }// end of edit
    
    /**
    * Deleting content at a particular index
    * @param {number} note_id - Index to delete
    */
    this.delete = function(note_id){
        if(this.notes.hasOwnProperty(note_id)) this.notes.splice(note_id,1);
        else console.log("ID is invalid");
    }//end of delete
}


function add (a) {
    return 2 + a
}

add()