// add custom js in this file
document.querySelectorAll('.project-card').forEach(card => {
    card.addEventListener('click', function () {
        // window.open(`/projects/${title.toLowerCase()}`, '_blank');
    });
});

document.querySelectorAll('.excerpt').forEach(excerpt => {
    excerpt.addEventListener('click', function () {
        const link = this.querySelector('.post_link').querySelector('a');
        window.location.assign(`${link.href}`, '_blank');
    });
});