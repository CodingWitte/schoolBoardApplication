

// important

elms.fontSize.addEventListener('change',()=>{
    if(varObj.selectedElm){
        if(varObj.selectedElm.tagName === 'P'){
            varObj.selectedElm.style.fontSize = `${elms.fontSize.value}vh`;
            varObj.selectedElm.classList.remove('selected');
            const html = document.documentElement.outerHTML;
            html.getElementById('popup').classList.add('DN');
            console.log(html.getElementById('popup'));
            writeHTML(html);
            varObj.selectedElm.classList.add('selected');
        }
    }
});
elms.textArea1.addEventListener('keydown',(e) => {
    console.log(e.key)
    if(e.key === 'Enter'){
        e.preventDefault(); // prevent default newline
        const cursorPos = elms.textArea1.selectionStart;
        const text = elms.textArea1.value;
        
        // Insert <br> at cursor position
        const before = text.substring(0, cursorPos);
        const after = text.substring(cursorPos);
        elms.textArea1.value = before + '<br>' + after;

        // Move cursor after the inserted <br>
        elms.textArea1.selectionStart = elms.textArea1.selectionEnd = cursorPos + 4;
    }
});
elms.fontSize.addEventListener('mousedown',(e)=>{
    e.stopPropagation();
});
elms.textArea1.addEventListener('mousedown',(e)=>{
    e.stopPropagation();
    e.stopImmediatePropagation();
});
elms.textArea1.addEventListener('mousedown',(e)=>{
    e.stopPropagation();
    e.stopImmediatePropagation();
});
elms.textArea1.addEventListener('mousemove',(e)=>{
    e.stopPropagation();
    e.stopImmediatePropagation();
});
elms.textArea1.addEventListener('keydown',(e)=>{
    e.stopPropagation();
});
document.addEventListener('keydown',(e)=>{
    if(e.key === 'ArrowRight' && (varObj.popupOpen)){
        console.log('->buttonPresed');
        nextEdit();
    }
});
elms.controleButtons.prev.addEventListener('click',()=>{
    prevEdit();
});
elms.controleButtons.done.addEventListener('click',()=>{
    doneEditing();
});
elms.controleButtons.next.addEventListener('click',()=>{
    nextEdit();
});
       
document.addEventListener('keydown',(e)=>{
    if(e.key === 'Enter' && varObj.popupOpen){
        doneEditing();
    }
    if(e.key === 'ArrowLeft' && varObj.popupOpen){
        prevEdit();
    }
    if(e.ctrlKey && e.key.toLowerCase() === 'e'){
        e.preventDefault();
        mainElms.popup.classList.toggle('DN');
        if(varObj.popupOpen){
            if(varObj.selectedElm){
                varObj.selectedElm.classList.remove('selected');
                varObj.selectedElm = null;
            }
            varObj.popupOpen = false;
        }else{varObj.popupOpen = true;}
        
    }
});        
elms.fileUpload.addEventListener('change',()=>{
    varObj.filename = elms.fileUpload.value.split('\\')[2];
    elms.prevImg.src = 'images/'+varObj.filename;

});
elms.editElmsArr.forEach(elm =>{
    
        elm.addEventListener('click',(e)=>{
            e.stopPropagation();
            if(varObj.popupOpen){
                editElm(elm);
            }
        });
    
});
mainElms.popup.addEventListener('mousedown',(e)=>{
    e.preventDefault();
    varObj.offsetX = e.clientX - mainElms.popup.offsetLeft;
    varObj.offsetY = e.clientY - mainElms.popup.offsetTop;
    varObj.dragpopup = true;   
});
document.addEventListener('mouseup',()=>{
    varObj.dragpopup = false;
});
document.addEventListener('mousemove',(e)=>{
    if(varObj.dragpopup){
        mainElms.popup.style.left = `${e.clientX-varObj.offsetX}px`;
        mainElms.popup.style.top = `${e.clientY-varObj.offsetY}px`;
    }
});
