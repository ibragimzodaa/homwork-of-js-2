const i = document.querySelector('.i');
const b = document.querySelector('.b');
b.onclick = () => {
    if(input.value == ""){
        alert('Please enter a value');
    }
    else{
        let result = Math.pow(input.value,2)
        alert(result)
    }
}