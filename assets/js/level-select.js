let linkButtonMode = false;
function customizeLink() {
    // undo level limitation
    if (sessionStorage.getItem('levels')) {
        sessionStorage.clear('levels');
        window.location.replace(window.location.pathname);
        return;
    }

    if (linkButtonMode) {
        copyLink();
        return;
    }
    linkButtonMode = true;

    let button = this.event.target;
    button.innerText = button.getAttribute('data-click-text');
        
    let levels = document.getElementsByClassName('level-list');
    Array.from(levels).forEach((elem, i)=> {
        elem.setAttribute('data-href', elem.href);
        elem.href = "";

        elem.insertAdjacentHTML("beforeend",
            `<input type="checkbox" id="${i}">`
        )
    });
}

function copyLink() {
    let levelString = "";
    
    let inputs = document.querySelectorAll('.level-list input');
    Array.from(inputs).forEach((elem, i)=> {
        if (elem.checked) levelString += i+1;
    });

    const link = window.location.href + '?levels=' + levelString;
    navigator.clipboard.writeText(link);
    const textElem = document.getElementById('copy-text');
    textElem.innerText = textElem.getAttribute('data-text') + link;
}