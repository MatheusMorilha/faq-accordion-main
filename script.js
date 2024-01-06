const acordions = document.querySelectorAll('.acordion');

acordions.forEach(acordion => {
    acordion.addEventListener('click', e => {
        acordion.classList.toggle('active');
        const button = acordion.querySelector('.button');
        button.classList.toggle('active');

        acordions.forEach(otherAcordion => {
            if (otherAcordion !== acordion) {
                otherAcordion.classList.remove('active');
                const otherButton = otherAcordion.querySelector('.button');
                otherButton.classList.remove('active');
            }
        });
    });
});
