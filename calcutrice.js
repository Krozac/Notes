function Click(val) {
    document.getElementById("text").value += val;
}

function Signe() {
    Calcul();
    document.getElementById("text").value = -document.getElementById("text").value;
}

function Inverse() {
    Calcul();
    document.getElementById("text").value = 1 / document.getElementById("text").value;
}

function Parent() {
    document.getElementById("text").value = '(' + document.getElementById("text").value + ')';
}

function Square() {
    Calcul();
    document.getElementById("text").value = document.getElementById("text").value * document.getElementById("text").value;
}

function Racine() {
    Calcul();
    let texte = document.getElementById("text").value;
    texte = Math.sqrt(texte);
    if (isNaN(texte)) {
        alert('enfoiré!');
    }
    else {
        document.getElementById("text").value = texte;
    }
}

function Reset() {
    document.getElementById("text").value = '';
}

function Calcul() {
    let texte = document.getElementById("text").value;
    texte = texte.replaceAll('x', '*');
    texte = texte.replaceAll('^', '**');
    texte = texte.replaceAll('²', '**2');
    try {
        eval(texte);
    }
    catch (e) {
        alert(e.message);
        document.getElementById("text").value = '';
    }
    document.getElementById("text").value = eval(texte);
}