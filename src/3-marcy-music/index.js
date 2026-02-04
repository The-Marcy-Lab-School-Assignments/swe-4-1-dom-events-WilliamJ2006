const playlists = [
  {
    title: 'Chill Vibes',
    image: './img/playlist-chill.jpg',
    description: 'A playlist for chill vibes',
  },
  {
    title: 'Focus',
    image: './img/playlist-focus.jpg',
    description: 'A playlist for focus',
  },
  {
    title: 'Late Night',
    image: './img/playlist-late-night.jpg',
    description: 'A playlist for late night',
  },
  {
    title: 'Love Songs',
    image: './img/playlist-love.jpg',
    description: 'A playlist for love songs',
  },
  {
    title: 'Oldies',
    image: './img/playlist-oldies.jpg',
    description: 'A playlist for oldies',
  },
  {
    title: 'Sad',
    image: './img/playlist-sad.jpg',
    description: 'A playlist for sad songs',
  },
];

const playlistsGrid = document.querySelector('#playlists-grid');

playlists.forEach(playlist => {
  const li = document.createElement('li');
  const img = document.createElement('img');
  const p = document.createElement('p');

  li.classList.add('playlist-card');
  li.dataset.title = playlist.title;

  img.src = playlist.image;
  img.alt = `${playlist.title} playlist cover`;

  p.textContent = playlist.title;

  li.append(img, p);
  playlistsGrid.append(li);
});

const playlistCards = playlistsGrid.querySelectorAll('.playlist-card');
const nowPlaying = document.querySelector('#now-playing-title');

playlistsGrid.addEventListener(('click'), (playlist) => {
    playlistCards.forEach(playlist => playlist.classList.remove('selected'));
    const clickedLi = playlist.target.closest('li');
    clickedLi.classList.add('selected');
    nowPlaying.textContent = clickedLi.dataset.title;
})



