import makeSongUrl from '../utils/songUrl';

export function loadSong (song) {
    if (!song) {
        return {};
    }
    return {
        type: 'LOAD_SONG',
        song: makeSongUrl(song)
    };
}
