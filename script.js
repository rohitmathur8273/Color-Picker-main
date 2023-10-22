const colorchange = () => {
    let _red = document.getElementById('red').value;
    let _green = document.getElementById('green').value;
    let _blue = document.getElementById('blue').value;
    let _answer = document.getElementById('answer');
    let _colorBox = document.querySelector('.color-box');

    _colorBox.style.backgroundColor = `rgb(${_red}, ${_green},${_blue})`
    _answer.innerHTML = `rgb(${_red}, ${_green}, ${_blue})`;
}
