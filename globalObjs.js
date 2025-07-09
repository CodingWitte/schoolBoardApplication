const mainElms = {
    container: document.getElementsByClassName('container')[0],
    popup: document.getElementById('popup'),
    head: document.querySelector('head'),
    body: document.querySelector('body'),
    html: document.querySelector('html'),
    pelms: document.querySelectorAll('p'),
    imgelms: document.querySelectorAll('img')
}
const descendants = {
    popup: new Set(mainElms.popup ? mainElms.popup.querySelectorAll('*') :[]),
    head: new Set(mainElms.head ? mainElms.head.querySelectorAll('*') : [])
}
descendants.popup.add(mainElms.popup);
descendants.head.add(mainElms.head);

const elms = {
    controleButtons: {
        prev: document.getElementById('prevButton'),
        done: document.getElementById('doneButton'),
        next: document.getElementById('nextButton')
    },
    fileUpload: document.getElementById('fileUpload'),
    fontSize:document.getElementById('fontSize'),
    forImgs: document.getElementById('forImg'),
    forText: document.getElementById('forText'),
    editElmsArr:[...mainElms.pelms,...mainElms.imgelms],
    
    prevImg: document.getElementById('prevImg'),
    textArea1: document.getElementById('textArea1'),

    

}
elms.editElmsArr = elms.editElmsArr.filter(el =>    
    !descendants.popup.has(el)
)
const varObj = {
    fileName: '',
    popupOpen: false,
    selectedElm: '',
    pArrLen(){
        return elms.editElmsArr.length;
    },
    dragpopup: false,
    offsetX: 0,
    offsetY:0,
}

