document.querySelectorAll('.card.locked').forEach(card => {
    card.addEventListener('click', () => {
        alert("This semester is locked!");
    });
});

// Handle clicks on semester cards
function viewSemester(semester) {
    if (semester === 'Honours') {
        alert('Viewing Honours details...');
    } else {
        alert('Viewing details for Semester ' + semester);
    }
}
