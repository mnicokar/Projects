
function toggleEvenColor() {
    let spanElements = document.querySelectorAll('#numbers span:nth-child(2n)');
    spanElements.forEach(function(item) {
        item.style.backgroundColor = item.style.backgroundColor !== 'yellow' ? 'yellow' : 'transparent';
    });
    }
    