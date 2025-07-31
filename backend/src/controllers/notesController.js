import Note from "../models/Note.js"

// GET request
export async function getAllNotes(req, res){
  try
  {
    const notes = await Note.find().sort({createdAt: -1}); //-1 shows latest note first. finds all notes but can apply filter as well
    res.status(200).json(notes);
  }
  catch(error)
  {
    console.error("Error in getAllNotes controller", error);
    res.status(200).json({message:"You just fetched the notesInternal server error"});
  }
  
};

// GET request by ID
export async function getNoteById(req, res){
try
  {
    const note = await Note.findById(req.params.id); //finds note by id
     if(!note) return res.status(404).json({message: "Note not found"});
    res.json(note);
  }
  catch(error)
  {
    console.error("Error in getNoteById controller", error);
    res.status(500).json({message:"You just fetched the notesInternal server error"});
  }
}

// Post Request
export async function createNote(req, res) {
  try
  {
    const {title, content} = req.body;
    const note = new Note({title, content});

    const savedNote= await note.save();

    res.status(201).json(savedNote);
  }
  catch(error)
  {
    console.error("Error in createNotes controller", error);
    res.status(500).json({message:"You just fetched the notesInternal server error"});
  }
  
};

// PUT request
export async function updateNote(req, res) {
  try
  {
    const {title, content} = req.body;
    await Note.findByIdAndUpdate(req.params.id, {title, content},{new: true,});
    if(!updateNote) return res.status(404).json({message: "Note not found"});
    res.status(200).json({message:"Note updated sucessfully"});
  }
  catch(error)
  {
    console.error("Error in updateNotes controller", error);
    res.status(500).json({message:"You just fetched the notesInternal server error"});
  }
};

// DELETE request
export async function deleteNote(req, res) {
   try
  {
    const deletedNote = await Note.findByIdAndDelete(req.params.id);
    if(!deletedNote) return res.status(404).json({message: "Note not found"});
    res.status(200).json({message:"Note deleted sucessfully"});
  }
  catch(error)
  {
    console.error("Error in deleteNotes controller", error);
    res.status(500).json({message:"You just fetched the notesInternal server error"});
  }
};