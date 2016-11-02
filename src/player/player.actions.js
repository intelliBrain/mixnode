
export const initPlayer = (playerWidget) => ({
    type: 'INIT_PLAYER',
    playerWidget
});

/**
 * Loads a song into a Mixcloud widget
 * @param {string} song - String of type '/artist-name/song-name/'
 */
export const loadSong = (song) => {
    if (!song) {
        return {};
    }
    return {
        type: 'LOAD_SONG',
        song
    };
};
