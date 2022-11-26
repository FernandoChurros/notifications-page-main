const btn = document.querySelector('[data-btn]');
const wrapperNotify = document.querySelectorAll('.notify__user');
const paragraph = document.querySelectorAll('.user__notify');
const spanTitle = document.querySelector('.title__span');

	// Verifica quantos elementos tem a classe 'icon__notify', e faz uma contagem para exibir o número de notificações não lidas.
let count = 0;
const notifyNumber = function() {
	for (let p of paragraph) {
		const validation = p.lastChild.classList.contains('icon__notify');

		if (validation) {
			count++;
		}
	}
	spanTitle.textContent = count;
}
notifyNumber();

const removeStatus = function() {
	for (let user of wrapperNotify) {
		const isClassExist = user.classList.contains('view');

		if (!isClassExist) {
			user.classList.add('view');
		}
	}

	for (let p of paragraph) {
		const isClassExist = p.lastChild.classList.contains('icon__notify');

		if (isClassExist) {
			p.lastChild.classList.remove('icon__notify');
		}
	}

	spanTitle.textContent = 0;
}

btn.addEventListener('click', removeStatus);
