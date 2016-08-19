'use strict'

var chai = require('chai');
var assert = chai.assert;

var NotesApplication = require('./lib/notesapplication.js');
var Note = require('./lib/notes.js');

describe("Note creation works properly", function() {
    it("assigns author based on the parameter supplied in the constructor", function() {
        var note = new Note({new_content : "Hello world", author : "Dealwap"});
        assert(note.author == "Dealwap")
    })
})

describe("Notes application increments number of notes as notes are added", function() {
    it("increments the note list as notes are added", function() {
        var note = new Note({new_content : "Hello world", author : "Dealwap"});
        var noteapp = new NotesApplication(note);
        assert(noteapp.notes.length,  1)
        var note = new Note("Hello from me", "murphy");
        noteapp.create_notes(note)
        assert(noteapp.notes.length, 2)
        
    })
})

describe("Testing if the delete function is working", function() {
    it("increments the note list as notes are added", function() {
       var note = new Note({new_content : "Hello world", author : "Dealwap"});
        noteapp = new NotesApplication(note);
        noteapp.delete("1")
        assert(noteapp.notelist.length == 0)
        
    })
})

describe("Testing if the search function is working properly", function() {
    it("Tests the search function", function() {
        note = new Note("Hello world", "Dealwap");
        noteapp = new NotesApplication("Dealwap");
        assert.match(this.note[count].note_content)
        noteapp.search(note)
        assert(Dealwap)
    })
})

describe("Testing if the get function is working", function() {
    it("tests the get function", function() {
        note = new Note("Hello world", "Dealwap");
        noteapp = new NotesApplication("Dealwap");
        noteapp.get(0)
        assert("Hello world")
    })
})

describe("Testing if the list_notes function is working", function() {
    it("lists all the notes", function() {
        note = new Note("Hello world", "Dealwap");
        noteapp = new NotesApplication("hello world", "Dealwap");
        noteapp.list_notes(0)
        assert("Hello world")
    })
})

describe("Testing if the edit function is working", function() {
    it("tests the edit function", function() {
        note = new Note("Hello world", "Dealwap");
        noteapp = new NotesApplication("hello world", "Dealwap");
        noteapp.edit(notes_id, new_content)
        assert("1", new Testing)
    })
})

describe("Testing the list_notes function", function() {
    it("tests the list_notes function", function() {
        note = new Note("Hello world", "Dealwap");
        noteapp = new NotesApplication("hello world", "Dealwap");
        noteapp.create_notes(note)
        noteapp.list_notes()
        assert(notes)
    })
})

describe("Testing if the value passed through get is a number", function() {
    it("tests the type of data passed through  the get function", function() {
        note = new Note("Hello world", "Dealwap");
        noteapp = new NotesApplication("hello world", "Dealwap");
        noteapp.create_notes(note)
        noteapp.list_notes()
        assert(notes)
    })
})