import React from "react"
import Sidebar from "./components/Sidebar"
import Editor from "./components/Editor"
import Split from "react-split"
import { onSnapshot, doc, addDoc, deleteDoc, setDoc } from "firebase/firestore"
import { notesCollection, db } from "../firebase"


export default function App() {
    const [notes, setNotes] = React.useState([])
    const [currentNote, setCurrentNote] = React.useState({})
    const [tempNoteText, setTempNoteText] = React.useState("")

    // const currentNote = notes.find(note => note.id === currentNoteId) || notes[0];
    const sortedNotes = [...notes.sort((a,b) => b.updatedAt - a.updatedAt)];

    // Create the onSnapshot eventListener 
    React.useEffect(() => {
        const unsubscribe = onSnapshot(notesCollection, (snapshot) => {
            const notesArr = snapshot.docs.map((doc) => ({
                ...doc.data(),
                id: doc.id
            }))
         
            setNotes(notesArr)
        })
        return unsubscribe
    },[])

    

    React.useEffect(() => {
        if (!currentNote) {
            setCurrentNote(notes[0])
        }
    }, [notes])

    
    React.useEffect(() => {
        if (currentNote) {
            setTempNoteText(currentNote.body)
        }
    }, [currentNote])

 
    React.useEffect(() => {
        const timeoutId = setTimeout(() => {
            if (tempNoteText !== currentNote.body) {
                console.log("called")
                updateNote(tempNoteText)
            }
        }, 500)
        return () => clearTimeout(timeoutId)
    },[tempNoteText])


// Create a new note
    async function createNewNote() {
        console.log('Add note called')
        const newNote = {
            body: "# Type your markdown note's title here",
            createdAt: Date.now(),
            updatedAt: Date.now()
        };
        const docRef = await addDoc(notesCollection, newNote);
        setCurrentNote(newNote)
    }
    
// Update note
    async function updateNote(text) {
        const docRef = doc(db, "notes", currentNote.id)
        await setDoc(docRef, { 
            body: text,
            updatedAt: Date.now() 
        }, { merge: true})
    }
    
// Delete note
    async function deleteNote(noteId) {
        const docRef = doc(db, "notes", noteId);
        try {
            await deleteDoc(docRef);
            console.log("Document successfully deleted");
        } catch (error) {
            console.error("Error deleting document:", error);
        }
    }
    

    return (
        <main>
        {
            notes.length > 0 
            ?
            <Split 
                sizes={[30, 70]} 
                direction="horizontal" 
                className="split"
            >
                <Sidebar
                    notes={sortedNotes}
                    currentNote={currentNote}
                    setCurrentNote={setCurrentNote}
                    newNote={createNewNote}
                    deleteNote={deleteNote}
                />
                <Editor 
                    tempNoteText={tempNoteText} 
                    setTempNoteText={setTempNoteText} 
                />
            </Split>
            :
            <div className="no-notes">
                <h1>You have no notes</h1>
                <button 
                    className="first-note" 
                    onClick={createNewNote}
                >
                    Create one now
                </button>
            </div>
            
        }
        </main>
    )
}
