import SceneHandler from './components/sceneHandler.js';
import { difficultyScene } from './scenes/difficultyScene.js';

const sceneList = [difficultyScene];

const sceneHandler = new SceneHandler(document.getElementById('main-scene'), sceneList);

const difficultyForm = document.forms.difficultyForm;

difficultyForm.addEventListener('submit', (event) => {
    let formData = new FormData(difficultyForm);

    let difficulty = formData.get('difficulty');
    console.log(difficulty);

    event.preventDefault();
});
