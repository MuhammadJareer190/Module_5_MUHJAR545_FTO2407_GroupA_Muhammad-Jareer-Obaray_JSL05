// Array of song objects. Add at least 5 songs with title, artist, and genre properties.
const songs = [
    { title: "Hooked on a Feeling", artist: "Blue Swede", genre: "Pop" },
    { title: "Moonage Daydream", artist: "David Bowie", genre: "Rock" },
    { title: "I Want You Back", artist: "The Jackson 5", genre: "Pop" },
    { title: "Spirit in the Sky", artist: "Norman Greenbaum", genre: "Rock" },
    { title: "Cherry Bomb", artist: "The Runaways", genre: "Rock" },
    { title: "Escape (The Piña Colada Song)", artist: "Rupert Holmes", genre: "Pop" },
    { title: "O-O-H Child", artist: "The Five Stairsteps", genre: "R&B" },
    { title: "Ain't No Mountain High Enough", artist: "Marvin Gaye & Tammi Terrell", genre: "R&B" },
    { title: "Come and Get Your Love", artist: "Redbone", genre: "Rock" },
    { title: "I'm Not in Love", artist: "10cc", genre: "Pop" },
    { title: "Fooled Around and Fell in Love", artist: "Elvin Bishop", genre: "Rock" },
    // Feel free to add even more songs
];


// Object containing each Guardian's preferred genre
const guardians = {
    "Star-Lord": "Rock",
    "Gamora": "Pop",
    // Add preferences for Drax, Rocket, and Groot
    "Drax": "R&B",
    "Rocket": "Rock",
    "Groot": "Pop",
};

// Function to generate playlist based on preferred genre
function generatePlaylist(guardians, songs) {
    // Use the map() function to create playlists for each Guardian
    // Your code here
    const playlistsDiv = document.getElementById('playlists');

    // USE MAP TO ITERATE OVER GUARDIANS
    Object.keys(guardians).map(guardian => {
        const preferredGenre = guardians[guardian];
        const playlist = songs.filter(song => song.genre === preferredGenre);

        //CREATE PLAYLIST DIV
        const playlistDiv = document.createElement('div');
        playlistDiv.classList.add('playlist');

        // ADD GUARDIAN'S NAME AS THE PLAYLIST TITLE
        const guardianTitle = document.createElement('h2');
        guardianTitle.textContent = `${guardian}'s Playlist`;
        playlistDiv.appendChild(guardianTitle);


        // USE MAP TO CREATE SONG ELEMENTS
        const songElements = playlist.map(song => {
            const songDiv = document.createElement('div');
            songDiv.classList.add('song');

            const songTitle = document.createElement('a');
            songTitle.classList.add('song-title');
            songTitle.textContent = song.title;
            songTitle.href = "#"; 
            songDiv.appendChild(songTitle);

            const artist = document.createElement('p');
            artist.textContent = `by ${song.artist}`;
            songDiv.appendChild(artist);

            return songDiv; // RETURN THE SONG DIV
        });
         // APPEND EACH SONG ELEMENT TO THE playlistDiv
         songElements.forEach(songDiv => playlistDiv.appendChild(songDiv));

         // ADD THE PLAYLIST TO THE MAIN PLAYLIST DIV
         playlistsDiv.appendChild(playlistDiv);
    })
}

// Call generatePlaylist and display the playlists for each Guardian
generatePlaylist(guardians, songs);

 

