const { default: chalk } = require('chalk')
const fs=require('fs')

const getNotes =() => {
    return 'your notes..'
}

const addNote=(title,body)=>{

    const notes = loadNotes()
    const duplicateNote = notes.find((note)=>note.title ===title)

    if (!duplicateNote){
        notes.push( {
            title:title,
            body:body   
        })
        saveNotes(notes)
        console.log(chalk.green.inverse("new note added!"))
    }else{
        console.log(chalk.red.inverse("note taken already!"))
    }

    }
    const removeNote=(title)=>{
        const notes=loadNotes()
    
    const notesToKeep = notes.filter((note)=>{(note.title !== title)
    })
    if(notes.length > notesToKeep.length){
        console.log(chalk.green.inverse("Note removed!"))
        saveNotes(notesToKeep)
    }else{
        console.log(chalk.red.inverse(" No note found!"))
    }
    
}

const saveNotes = (notes)=>{
    const dataJSON=JSON.stringify(notes)
    fs.writeFileSync("notes.json",dataJSON)
}

const loadNotes = ()=>{


    try{
        const dataBuffer = fs.readFileSync('notes.json')
    const dataJson  = dataBuffer.toString()
    return JSON.parse(dataJson)
    }catch(e){
        return []
    }
    
}




module.exports = {
    getNotes:getNotes,
    addNote:addNote,
    removeNote:removeNote
    
} 