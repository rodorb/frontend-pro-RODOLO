import { getGames } from './utils/api-handler.js'
import { generateGameSnippet } from './utils/render-functions.js'
import 'bootstrap';
import './styles/styles.scss';
async function drawListGames() {
    let games = await getGames();

    const newDiv = document.createElement('div');
    newDiv.setAttribute('id', 'games-list');
    newDiv.setAttribute('class', 'row');

    document.getElementById('games')
        .appendChild(newDiv);

    let i = 0;
    for (i; i < games.length; i++) {
        const snippetContainer = document.createElement('div');
        snippetContainer.setAttribute('class', 'col-6 col-sm-3');
        document.getElementById('games-list')
            .appendChild(snippetContainer).innerHTML = generateGameSnippet(games[i]);
    }
}



(async() => {
    await drawListGames();
    console.log('dd');
})();