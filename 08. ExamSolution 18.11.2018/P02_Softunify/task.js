class SoftUniFy {
    constructor() {
        this.allSongs = {};
    }

    downloadSong(artist, song, lyrics) {
        if (!this.allSongs[artist]) {
            this.allSongs[artist] = {rate: 0, votes: 0, songs: []}
        }

        this.allSongs[artist]['songs'].push(`${song} - ${lyrics}`);

        return this;
    }

    playSong(song) {
        let songArtists = Object.keys(this.allSongs).reduce((acc, cur) => {

            let songs = this.allSongs[cur]['songs']
                .filter((songInfo) => songInfo
                    .split(/ - /)[0] === song);

            if(songs.length > 0){
                acc[cur] = songs;
            }

            return acc;
        }, {});

        let arr = Object.keys(songArtists);
        let output = "";

        if(arr.length > 0){

            arr.forEach((artist) => {
                output += `${artist}:\n`;
                output += `${songArtists[artist].join('\n')}\n`;
            });

        } else {
            output = `You have not downloaded a ${song} song yet. Use SoftUniFy's function downloadSong() to change that!`
        }

        return output;
    }

    get songsList() {
        let songs = Object.values(this.allSongs)
            .map((v) => v['songs'])
            .reduce((acc, cur) => {
                return acc.concat(cur);
            }, []);

        let output;

        if (songs.length > 0) {
            output = songs.join('\n');
        } else {
            output = 'Your song list is empty';
        }

        return output;

    }

    rateArtist() {
        let artistExist = this.allSongs[arguments[0]];
        let output;

        if (artistExist) {

            if (arguments.length === 2) {
                artistExist['rate'] += +arguments[1];
                artistExist['votes'] += 1;
            }

            let currentRate = (+(artistExist['rate'] / artistExist['votes']).toFixed(2));
            isNaN(currentRate) ? output = 0 : output = currentRate;

        } else {
            output = `The ${arguments[0]} is not on your artist list.`
        }

        return output;
    }
}


let assert = require('chai').assert;

describe('SoftUniFy general tests', () => {
    let testedClass;
    beforeEach(() => {
        testedClass = new SoftUniFy();
    });
    describe('general tests', () => {
        it('should have property allSongs', () => {
            assert.isTrue(testedClass.hasOwnProperty('allSongs'));
        });
    })
  
    describe('downloadSong tests', () => {
        it('downloadSong(artist, song, lyrics) adds the given information to the allSongs in format: artist: {rate: 0, votes: 0, songs: []}.', 
        () =>{
            testedClass.downloadSong('pesho', 'pesen', 'gotino');
            let songs = testedClass.allSongs;
            assert.isTrue(songs.hasOwnProperty('pesho'));
            assert.isTrue(songs['pesho'].rate === 0);
            assert.isTrue(songs['pesho'].votes === 0);
            assert.isTrue(Array.isArray(songs['pesho'].songs));
            assert.isTrue(songs['pesho'].songs.length === 1);
        });
    
        it('songs property, should contain all songs from the current artist in format:[song1 - song1Lyrics, song2 - song2Lyrics....]', () =>{
            let allSongs = testedClass.allSongs;
            
            testedClass.downloadSong('pesho', 'pesen', 'gotino');
            testedClass.downloadSong('pesho', 'pesen dve', 'gotino');
            let expected = 'pesen - gotino, pesen dve - gotino';
            let result = allSongs['pesho'].songs.join(', ');
            assert.equal(expected, result);
        });
    
        it('should return the enitre class', () => {
            let result = testedClass.downloadSong('pesho', 'pesen', 'gotino');
            assert.isTrue(result instanceof SoftUniFy);
        });
    });
    describe('playsong(song) tests', () => {
        it('searches all already downloaded songs and returns them in format', () => {

        });

        it('If we do not have at least one downloaded song returns correct', () => {
            let song = 'kvo staa';
            let result = testedClass.playSong(song);
            let expected = `You have not downloaded a ${song} song yet. Use SoftUniFy's function downloadSong() to change that!`
            assert.equal(result, expected);
        });
    });

    describe('songList() tests', () => {
        it('returns correct if empty', () => {
            let expected = `Your song list is empty`;
            let result = testedClass.songsList;
            assert.equal(expected, result);
        });
        it('returns correct if not empty', () => {
            testedClass.downloadSong('pesho', 'songa', 'liriki');
            testedClass.downloadSong('tesho', 'songa2', 'liriki2');
            testedClass.downloadSong('sesho', 'songa3', 'liriki3');

            let expected = `songa - liriki`;
            expected += '\nsonga2 - liriki2';
            expected += '\nsonga3 - liriki3';

            let result = testedClass.songsList;
            assert.equal(expected, result);
        })
    });

    describe('rateArtist() tests', () => {
        it('sums the values of all votes on the current artist and return the average rate', () => {
            testedClass.downloadSong('pesho', 'first', 'lir');
            testedClass.downloadSong('pesho', 'first', 'lir');
            let result = testedClass.rateArtist('pesho', 5);

            assert.equal(5, result);
        });
        it('returns correct if artist doesnt exist', () => {
            let result = testedClass.rateArtist('fesho');
            let expected = 'The fesho is not on your artist list.';

            assert.equal(result, expected);
        });
    });
});