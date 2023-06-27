//function =>
document.addEventListener('DOMContentLoaded', () => {
    document.querySelector('select').onchange = function() {
        document.querySelector('#cc').style.color = this.value;
    }
});

// 8:46.25 Time