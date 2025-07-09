

function show (text){
    if(!elms.forImgs.classList.contains('DN')){
        elms.forImgs.classList.add('DN');
    }
    console.log(window.getComputedStyle(varObj.selectedElm).fontSize);
    elms.fontSize.value = pxToVh(window.getComputedStyle(varObj.selectedElm).fontSize);
    elms.forText.classList.remove('DN');
    
    elms.textArea1.value = text;
}

function showImg (elm){
    if(!elms.forText.classList.contains('DN')){
        elms.forText.classList.add('DN');
    }
    elms.forImgs.classList.remove('DN');
    console.log('images/'+elm.src.split('/').at(-1));
    (elms.prevImg.src = elm.src);
}
function selectElm(elm){
    if(elm.classList.contains('selected')){
        elm.classList.remove('selected');
        varObj.selectedElm = null;
        elms.textArea1.value = '';
        elms.forImgs.src = '';
    }else{
        if(varObj.selectedElm){
            varObj.selectedElm.classList.remove('selected');
        }
        elm.classList.add('selected');
        varObj.selectedElm = elm;
    }
}
function editElm(elm){
    selectElm(elm);
    if(varObj.selectedElm){
        switch (elm.tagName) {
            case 'IMG':
                showImg(elm);
                break;
            case 'P':
                show(elm.innerHTML);
                break;
            default:
                break;
        }
    }
    
    
}
function pxToVh (px){
    if(typeof(px)==='string'){
        px = parseFloat(px.replace('px',''));
    }
    return Math.round(px/window.innerHeight*1000000)/10000;

}

function doneEditing (){
    if(varObj.selectedElm){
        if(varObj.selectedElm.tagName === 'IMG'){
            varObj.selectedElm.src = 'images/'+varObj.filename;
        }
        if(varObj.selectedElm.tagName === 'P'){
            if(varObj.popupOpen){
                varObj.selectedElm.innerHTML = textArea1.value;
            }else if(addActivated){
                varObj.selectedElm.innerHTML = textArea1.value;
            }
        }
    }
    html = document.documentElement.outerHTML;
    writeHTML(html);
}
function prevEdit(){
    let x = elms.editElmsArr;
    if(x.indexOf(varObj.selectedElm)-1 > -1){
        console.log(x.indexOf(varObj.selectedElm)-1)
        editElm(x[x.indexOf(varObj.selectedElm)-1]);
    }else{
        editElm(x[x.length-1]);
    }
    
}
function nextEdit(){
    let x = elms.editElmsArr;
    if(x.indexOf(varObj.selectedElm)+1 !== x.length){
        editElm(x[x.indexOf(varObj.selectedElm)+1]);
    }else{
        editElm(x[0]);
    }
    
}


// important
    //ration must always be 15.88 10 otherwise the layout wont look good