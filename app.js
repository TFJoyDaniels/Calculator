const screen = document.querySelector('.screen');
const buttons = document.querySelectorAll('.btn');

buttons.forEach(button =>{
    button.addEventListener('click', ()=>{
        if (screen.textContent == '0') {
            screen.textContent = button.id
        } else if (button.id == 'C') {
            screen.textContent = '0';
        } else if (button.id == '←') {
            let temp = screen.textContent.toString();
            screen.textContent = temp.substr(0, temp.length - 1);
        } else if (screen.textContent != '0' && button.id == '=') {
            screen.textContent = eval(screen.textContent);
        } else {
            screen.textContent += button.id;
        }
    });
});