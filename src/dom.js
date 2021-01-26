export default class DOM {
    constructor(userName, password) {
        const titl = () => {
            VanillaTilt.init(document.querySelector("header"), {
                max: 3,
                speed: 200,
                reverse: true
            });
        }
        titl()

        let keydownSwitchActive = true;
        const loginResult = () => {
            const enteredUserName = document.querySelector('.form__user>input').value;
            const enteredPassword = document.querySelector('.form__password>input').value;
            if (enteredUserName === userName && enteredPassword === password) {
                const loginSection = document.querySelector('.section-login');
                const appSection = document.querySelector('.section-app');

                loginSection.style.animation = '.4s hideSection linear both';
                setTimeout(() => {
                    loginSection.style.display = 'none';
                    appSection.style.display = 'flex';
                    appSection.style.animation = '.4s showSection linear both';
                }, 300)
                keydownSwitchActive = false;
            } else {
                alert('Niepoprawna nazwa użytkownika lub hasło');
                document.querySelector('.form__user>input').value = '';
                document.querySelector('.form__password>input').value = '';
            }
        }

        let counter = 0;
        setInterval(() => {
            const wrapper = document.querySelector('.wrapper');
            wrapper.style.filter = `hue-rotate(${++counter}deg)`
        }, 500);

        this.render = () => {
            const button = document.querySelector('.form__button');
            button.addEventListener('click', loginResult);
            window.addEventListener('keydown', e => {
                if (e.keyCode === 13 && keydownSwitchActive) {
                    loginResult();
                }
            })
        }

    }
}