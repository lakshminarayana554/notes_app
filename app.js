
const notes = require('./notes.js');
const chalk = require('chalk');
const yargs = require('yargs');

yargs.command({
    command:'add',
    describe:'Add a new note',
    builder:{
        title:{
            describe:'Note title',
            demandOption:true,
            type:'string'
        },
        body:{
            describe:"Note body",
            demandOption:true,
            type:'string'
        }
    },
    handler:(argv)=>{
       notes.addNote(argv.title,argv.body)
    }
});

yargs.command({
    command:'remove',
    describe:'removing a note',
    builder:{
        title:{
            describe:'Note title',
            demandOption:true,
            type:'string'
        },
        body:{
            describe:"Note body",
            demandOption:true,
            type:'string'
        }
    },
    handler:(argv)=>{
        notes.removeNote(argv.title)
    }
})

yargs.command({
    command:'list',
    describe:'list out notes!',
    handler:()=>{
        console.log("listing out notes")
    }
});

yargs.command({
    command:'read',
    describe:'read a note',
    handler:()=>{
        console.log("reading the note!")
    }

})



yargs.parse()

// console.log(yargs.argv)



// const fs = require('fs')
// fs.writeFileSync('notes.txt','iam LN.')
// fs.appendFileSync('notes.txt',' i am level 54') 