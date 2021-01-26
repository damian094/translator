export default class App {
    constructor(wordsList) {
        const words = wordsList;
        const wordInput = document.querySelector('.form__word>input');
        const resultsContainer = document.querySelector('.resultsContainer');

        const search = () => {
            resultsContainer.innerHTML = '';
            const checkedOption = document.querySelector('input[name="translateFrom"]:checked').id;
            const text = wordInput.value.toLowerCase();
            if (text.length > 1) {
                let findWords;

                checkedOption === 'fromEng' ? findWords = words.filter(word => word.english.includes(text)) : undefined;

                checkedOption === 'fromPl' ? findWords = words.filter(word => word.polish.includes(text)) : undefined;

                for (let i = 0; i < findWords.length; i++) {
                    const newParagraph = document.createElement('p');
                    newParagraph.textContent = `${checkedOption==='fromPl'?findWords[i].polish:findWords[i].english} - ${checkedOption==='fromPl'?findWords[i].english:findWords[i].polish}`;
                    resultsContainer.appendChild(newParagraph);
                }
            }
        }
        wordInput.addEventListener('input', search);

        const radioInputs = document.querySelectorAll('input[name="translateFrom"]');
        radioInputs.forEach(input => {
            input.addEventListener('click', () => {
                wordInput.value = '';
                resultsContainer.innerHTML = '';
            })
        })
    }
}