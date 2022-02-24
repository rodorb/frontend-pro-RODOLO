//DONE: #1 implementar api (getGames(), getGameById()). Mirar en la documentación de json-server
const FQDN = 'http://localhost:3033';
const apiEndPoints = {
    comments: `${FQDN}/comments`,
    users: `${FQDN}/users`,
    games: `${FQDN}/games`
};

export const getGames = async() => {
    const games = await fetch(apiEndPoints.games);
    return games.json();
}

export const getGameById = async(id) => {
    const game = await fetch(`${apiEndPoints.games}/${id}`);
    return game.json();
}


export const getCommentsOfGame = async(gameId) => {
    //expand a una petición a json server hace que saque mas informacion relacionada con el user (o el campo que queramos expandir que tenga relacion con el endpoint que accedemos)
    const comment = await fetch(`${apiEndPoints.games}/${gameId}/comments?_expand=user`);
    return comment.json();
}