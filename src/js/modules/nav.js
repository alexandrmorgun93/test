module.exports = (btn, nav) => {
    btn.addEventListener('click', function () {
        this.classList.toggle('active');
        nav.classList.toggle('active');
    })
};