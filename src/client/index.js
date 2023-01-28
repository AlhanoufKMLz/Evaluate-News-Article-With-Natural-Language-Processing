import { handleSubmit } from './js/formHandler';

// include scss files
import './styles/resets.scss';
import './styles/footer.scss';
import './styles/form.scss';
import './styles/base.scss';
import './styles/header.scss';

// export as module
export{
	validURL,
	handleSubmit
}

// add event listener 
document.getElementById('btn-submit').addEventListener('click', function(){
	handleSubmit();
});

export { handleSubmit }