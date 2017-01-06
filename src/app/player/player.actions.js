export const initPlayer = (playerWidget) => ({
    type: 'PLAYER_INIT',
    playerWidget
});

export const loadSong = (song) => {
    if (song.length) {
        localStorage.setItem('lastPlayed', song);
        return {
            type: 'PLAYER_LOAD',
            song
        };
    }
};

export const pausePlayer = () => ({
    type: 'PLAYER_PAUSE'
});

export const togglePlayer = () => ({
    type: 'PLAYER_TOGGLE'
});

export const seekPlayer = (seekTo) => ({
    type: 'PLAYER_SEEK',
    seekTo
});
