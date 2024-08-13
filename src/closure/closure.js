function greeting() {
    let username = 'Oscar';
    
    function displayUserName(txt) {
        return `Hello ${username} ${txt}`;
    }

    return displayUserName;
}

const g = greeting();
console.log(g);
console.log(g('algo mas'));