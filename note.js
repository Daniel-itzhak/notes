let noteM = document.querySelector('#myArea');
let noteD = document.querySelector('#myDate');
let noteT = document.querySelector('#myTime');
let postNote = document.querySelector('.notes');
let count=0;
let arr=[];
class note{
    constructor(M,D,T){
        this.message = M;
        this.date = D;
        this.time = T;
    }
};
window.onload=()=>{
     let arrIn = JSON.parse(localStorage.getItem('notes'));
     if(arrIn!=null){
        for(let i=0; i<arrIn.length; i++){
            postNote.innerHTML += noteToHtml(arrIn[i].message,arrIn[i].date,arrIn[i].time);
            arr.push(arrIn[i])
         }
     }
}
function addNote(){
    postNote.innerHTML += noteToHtml(noteM.value,noteD.value,noteT.value);
    let newNote = new note(noteM.value,noteD.value,noteT.value);
    arr.push(newNote);
    let tempArr=[];
    for(let i=0; i<arr.length; i++){
        if(arr[i]!=null){
            tempArr.push(arr[i]);
        }
    }
    localStorage.setItem('notes',JSON.stringify(tempArr));
}

function noteToHtml(a,b,c){
    return `
        <div class='notePost' id='note_${count}'>
            <button class='btnExit' onclick='deleteNote(${count++})'>X</button>
            <span>${a}</span><br><br><br>
            <span>${b}</span><br><span>${c}</span>
        </div>`;
}

function deleteNote(id){
    document.querySelector(`#note_${id}`).remove();
    arr[id]=null;
    let tempArr=[];
    for(let i=0; i<arr.length; i++){
        if(arr[i]!=null){
            tempArr.push(arr[i]);
        }
    }
    localStorage.setItem('notes',JSON.stringify(tempArr));
}

function clearAllStorage(){
    localStorage.clear();
    let x=document.querySelectorAll(`.notePost`);
    let len= x.length;
    for(let i=len-1; i>=0 ; i--){
        x[i].remove();
        console.log(i,len);
    }
    arr.splice(0,arr.length);
}





