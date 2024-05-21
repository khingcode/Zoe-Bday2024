const button = document.querySelector('.on');
        button.addEventListener('click', () => {
            document.body.classList.toggle('hide-gradient');
            document.getElementById("button").style.display ="none";
        });
        