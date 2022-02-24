import { getGameById, getCommentsOfGame } from './utils/api-handler.js'
import { generateCommentSnippet } from './utils/render-functions.js'
import $ from 'jquery';
import './styles/styles.scss';

async function drawGame(gameId) {
    let game = await getGameById(gameId);
    document.getElementById('game-name-title').innerHTML = game.name;
    // TODO: #5 breadcrumb???? Let's use jQuery!!
    $('.breadcrumb span').html(`Game ${game.name}`);
    document.getElementById('game-image').src = game.image;
    document.getElementById('game-image').alt = game.name;

    document.getElementById('metacritic-score').innerHTML = game.scores.metacritic;
    document.getElementById('user-score').innerHTML = game.scores.userScore;

    document.getElementById('summary').innerHTML = game.summary;

    document.getElementById('platform').innerHTML = game.platform;
    document.getElementById('release-date').innerHTML = game.relaseDate;

}

// DONE: #2 Pedir ayuda para generateCommentSnippet
async function drawComments(gameId)  {
    console.log(gameId)
    let comments = await getCommentsOfGame(gameId);
    document.getElementById('comments')
        .appendChild(document.createElement('ul'))
        .setAttribute('id', 'comments-list');
    var i = 0;
    for (i; i < comments.length; i++) {
        document.getElementById('comments-list')
            .appendChild(document.createElement('li')).innerHTML = generateCommentSnippet(comments[i]);
    }
}



(async() => {
    const gameId = parseInt((new URLSearchParams(window.location.search)).get('id'));
    await drawGame(gameId);
    await drawComments(gameId);
})();