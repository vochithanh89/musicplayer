let data = [
    {
        id: 0,
        singer: "Masew, Huyền Tâm Môn",
        song: "Phố Đã Lên Đèn",
        ["img-cd"]: "https://photo-resize-zmp3.zadn.vn/w240_r1x1_jpeg/cover/9/7/8/d/978d12830c18df95c26e93e658019166.jpg",
        ["audio-scr"]: "./assets/musics/Phố Đã Lên Đèn.mp3"
    },

    {
        id: 1,
        singer: "JSOL",
        song: "Giá Như Em Nhìn Lại",
        ["img-cd"]: "https://photo-resize-zmp3.zadn.vn/w240_r1x1_jpeg/cover/3/f/0/a/3f0a8d23baee0c632d2a06221726cc53.jpg",
        ["audio-scr"]: "./assets/musics/GIÁ NHƯ EM NHÌN LẠI.mp3"
    },

    {
        id: 2,
        singer: "MONSTAR",
        song: "có hẹn với thanh xuân",
        ["img-cd"]: "https://photo-resize-zmp3.zadn.vn/w240_r1x1_jpeg/cover/e/2/3/f/e23ff2faaa64eebfc57e0acde247f0db.jpg",
        ["audio-scr"]: "./assets/musics/có hẹn với thanh xuân.mp3"
    },

    {
        id: 3,
        singer: "Da LAB",
        song: "Từ Ngày Em Đến",
        ["img-cd"]: "https://i.ytimg.com/vi/AmvA-XJF0j8/maxresdefault.jpg",
        ["audio-scr"]: "./assets/musics/Từ Ngày Em Đến.mp3"
    },

    {
        id: 4,
        singer: "Da LAB",
        song: "Thanh Xuân",
        ["img-cd"]: "https://kenh14cdn.com/2018/12/16/thanhxuan-cover-1544915818312881281206.jpg",
        ["audio-scr"]: "./assets/musics/Thanh Xuân.mp3"
    },

    {
        id: 5,
        singer: "Soobin Hoàng Sơn",
        song: "Nếu Ngày Ấy",
        ["img-cd"]: "https://photo-resize-zmp3.zadn.vn/w240_r1x1_jpeg/cover/2/9/b/f/29bf1c15a2aeacf72a2fa1e84d92f3e9.jpg",
        ["audio-scr"]: "./assets/musics/NẾU NGÀY ẤY.mp3"
    },

    {
        id: 6,
        singer: "Hoàng Dũng",
        song: "Tôi Là Ai Trong Em",
        ["img-cd"]: "https://data.chiasenhac.com/data/cover/137/136512.jpg",
        ["audio-scr"]: "./assets/musics/Tôi Là Ai Trong Em.mp3"
    },

    {
        id: 7,
        singer: "Hoàng Dũng",
        song: "Vùng Ký Ức",
        ["img-cd"]: "https://i.scdn.co/image/ab67616d0000b2730d9d8dbbf23b4dfdad685982",
        ["audio-scr"]: "./assets/musics/Vùng Ký Ức.mp3"
    },

    {
        id: 8,
        singer: "Thế Bảo - Hoàng Dũng",
        song: "Về Phía Mưa",
        ["img-cd"]: "https://avatar-ex-swe.nixcdn.com/song/2018/08/21/2/7/e/5/1534818562411_640.jpg",
        ["audio-scr"]: "./assets/musics/Về Phía Mưa.mp3"
    },

    {
        id: 9,
        singer: "Phương Ly",
        song: "Anh Là Ai",
        ["img-cd"]: "https://photo-resize-zmp3.zadn.vn/w240_r1x1_jpeg/cover/0/8/0/6/0806ea1c463042079f3fc0316d2032b0.jpg",
        ["audio-scr"]: "./assets/musics/Anh Là Ai.mp3"
    },

    {
        id: 10,
        singer: "Phương Ly, JustaTee",
        song: "Mặt Trời Của Em",
        ["img-cd"]: "https://photo-resize-zmp3.zadn.vn/w240_r1x1_jpeg/covers/1/9/19c8d9340b18111044e084d806335fd9_1509176983.jpg",
        ["audio-scr"]: "./assets/musics/Mặt Trời Của Em.mp3"
    },

    {
        id: 11,
        singer: "JustaTee, Phương Ly",
        song: "Thằng Điên",
        ["img-cd"]: "https://photo-resize-zmp3.zadn.vn/w240_r1x1_jpeg/cover/9/d/5/c/9d5c56a277a06a48ec7956a4fd17e4c1.jpg",
        ["audio-scr"]: "./assets/musics/THẰNG ĐIÊN.mp3"
    },
]

let $ = document.querySelector.bind(document);
let $$ = document.querySelectorAll.bind(document);
let audio = $('.audio');
let pausePlayBtn = $('.pause-play-btn');
let cd = $('.cd');

let app = $('.app-container');

let progress = $('.progress');
let fill = $('.fill');
let thumb = $('.thumb');

let loopBtn = $('.loop-btn');
let shuffleBtn = $('.shuffle-btn');
let statusBtn = $('.status-btn');

let isRandom = false;



let cdAnimation = cd.animate([
    {
        transform: 'rotate(0)'
    },
    {
        transform: 'rotate(359deg)'
    }
],
    {
        duration: 10000,
        iterations: Infinity 
    }
);

cdAnimation.pause();
audio.volume = 0.3;

start();

function start() {
    renderPlaylist(data);
    loadMusicToPlayer(data[0]);
    scrollPlaylist();
    playPauseMusic();
    clickProgress();
    dragAndDropProgress();
    volumeChange()
    statusMusic();
    nextMusicBtn();
    previousMusicBtn();
    selectMusic();
}

function renderPlaylist(data) {
    let playList = $('.playlist');
    let htmls = data.map(element => {
        return `
            <div class="playlist-item" id-audio="${element.id}">
                <p class="song-number">${element.id + 1}</p>
                <div class="cd-item" style="background-image: url('${element["img-cd"]}')">
                    <div class="cd-animation"></div>
                </div>
                <div class="title-item">
                    <p class="song-item">${element.song}</p>
                    <p class="singer-item">${element.singer}</p>
                </div>
            </div>
        `   
    });
    playList.innerHTML = htmls.join('');
}


function loadMusicToPlayer(musicData) {
    $('.cd-thumb').style.backgroundImage = `url(${musicData["img-cd"]})`;
    $('.song').innerText = musicData.song;
    $('.singer').innerText = musicData.singer;
    audio.src = musicData["audio-scr"];
    audio.setAttribute('id-audio', musicData.id);
    audio.addEventListener('loadedmetadata', function() {
        $('.time-song').innerText = secondToTime(audio.duration);
    });
    loadSongWave(musicData.id);
}

function loadSongWave(id) {
    let playListItems = $$('.playlist-item');
    if ($('.playlist-item.active')) {
        $('.playlist-item.active').classList.remove('active');
    }
    playListItems.forEach(function(playListItem) {
        if (playListItem.getAttribute('id-audio') == id) {
            playListItem.classList.add('active');
        }
    });
}

function scrollPlaylist() {
    let scrollTop;
    let appContainer = $('.app-container');
    let cd = $('.cd');
    let cdWidth = cd.offsetWidth;
    //Mouse
    appContainer.onscroll = (e) => {
        scrollTop = cdWidth - e.srcElement.scrollTop;
        if (scrollTop < 0) {
            scrollTop = 0;
        }
        else if (scrollTop > cdWidth) {
            scrollTop = cdWidth;
        }
        cd.style.width = scrollTop + 'px';
        cd.style.opacity = scrollTop / cdWidth;
    }
    //Touch
    document.onscroll = (e) => {
        scrollTop = cdWidth - e.srcElement.scrollingElement.scrollTop;
        if (scrollTop < 0) {
            scrollTop = 0;
        }
        else if (scrollTop > cdWidth) {
            scrollTop = cdWidth;
        }
        cd.style.width = scrollTop + 'px';
        cd.style.opacity = scrollTop / cdWidth;
    }
}

function secondToTime(second) {
    second = Math.round(second);
    return new Date(second * 1000).toISOString().substr(14, 5);
}

function playPauseMusic() {
    let isPlaying = false;
    audio.onplaying = () => {
        isPlaying = true;
    }
    audio.onpause = () => {
        isPlaying = false;
    }
    pausePlayBtn.onclick = function() {
        isPlaying = !isPlaying;
        if(isPlaying) {
            playMusic();
        }
        else {
            pauseMusic();
        }
    }
}

function updateProgress() {
    audio.addEventListener('timeupdate', () => {
        $('.time-progress').innerText = secondToTime(audio.currentTime);
        fill.style.width = 100 / audio.duration * audio.currentTime + '%';
        thumb.style.left = 100 / audio.duration * audio.currentTime + '%';
        if (audio.ended) {
            pauseMusic();
            checkStatus(statusBtn.getAttribute('status'));
        }
    });
}

function clickProgress() {
    progress.onclick = e => {
        let percent = 100 / progress.offsetWidth * e.offsetX;
        fill.style.width = percent + '%';
        thumb.style.left = percent + '%';       
        audio.currentTime = audio.duration / 100 * percent;
    } 
}

function dragAndDropProgress() {
    let dragging = false;
    //Mouse event
    thumb.onmousedown = e => {
        dragging = true;
    }
    document.onmousemove = e => {
        if (dragging) {
            let appLeft = app.offsetLeft + 16;
            let percent = 100 / progress.offsetWidth * (e.clientX - appLeft);
            if (percent < 0) {
                percent = 0;
            }
            if(percent > 100) {
                    percent = 100;
                }
                fill.style.width = percent + '%';
                thumb.style.left = percent + '%';
                audio.currentTime = audio.duration / 100 * percent;
            }
        }
    document.onmouseup = e => {
        dragging = false;
    }
    // Touch Event    
    document.ontouchmove = function(e) {
        if (dragging) {
            let appLeft = app.offsetLeft + 16;
            let percent = 100 / progress.offsetWidth * (e.touches[0].clientX - appLeft);
            if (percent < 0) {
                percent = 0;
            }
            if(percent > 100) {
                percent = 100;
            }
            fill.style.width = percent + '%';
            thumb.style.left = percent + '%';
            thumb.style['box-shadow'] = '0 0 0 10px rgba(100, 148, 237, 0.2)';
            audio.currentTime = audio.duration / 100 * percent;
        }
    }

    thumb.ontouchstart = function() {
        dragging = true;
        scrolling(false);
    }
    
    document.ontouchend = function() {
        thumb.style['box-shadow'] = '0 0 0 6px rgba(100, 148, 237, 0.2)';
        dragging = false;
        scrolling(true);
    }

}

function scrolling(isScrolling=true) {
    let body = $('body');
    if (isScrolling) {
        body.style.overflow = 'initial';
    }
    else {
        body.style.overflow = 'hidden';
    }
}

function playMusic() {
    pausePlayBtn.classList.remove('pause');
    pausePlayBtn.classList.add('play');
    audio.play();
    updateProgress();
    cdAnimation.play();
    let playingItem = $('.playlist-item.active .cd-animation');
    playingItem.style.backgroundImage = `url('https://github.com/vochithanh89/musicplayer/blob/main/img/icon-playing.gif?raw=true')`;
}

function pauseMusic() {
    pausePlayBtn.classList.remove('play');
    pausePlayBtn.classList.add('pause');
    audio.pause();
    cdAnimation.pause();
    let playingItem = $('.playlist-item.active .cd-animation');
    playingItem.style.backgroundImage = `url('https://github.com/vochithanh89/musicplayer/blob/main/img/images.png?raw=true')`;
}


function nextMusicBtn() {
    let nextBtn = $('.next-btn');
    nextBtn.onclick = () => {
        let id;
        if (isRandom) {
            id = randomId();
        }
        else {
            id = Number(audio.getAttribute('id-audio')) + 1;
        }
        nextMusic(id);
    };
}

function nextMusic(id) {
    if (id < data.length) {
        loadMusicToPlayer(data[id]);
        playMusic();
    }
}

function previousMusicBtn() {
    let nextBtn = $('.previous-btn');
    nextBtn.onclick = () => {
        let id;
        if (isRandom) {
            id = randomId();
        }
        else {
            id = Number(audio.getAttribute('id-audio')) - 1;
        }
        previousMusic(id);
    };
}

function previousMusic(id) {
    if (id >= 0) {
        loadMusicToPlayer(data[id]);
        playMusic();
    }
}

function statusMusic() {
    statusBtn.onclick = function() {
        let status = $('.status-btn').getAttribute('status');
        switch (status) {
            case 'no-loop':
                statusBtn.setAttribute('status', 'loop');
                isRandom = false;
                break;
            case 'loop':
                statusBtn.setAttribute('status', 'shuffle');
                isRandom = true;
                break;
            case 'shuffle':
                statusBtn.setAttribute('status', 'no-loop');
                isRandom = false;
                break;
        }
    }
}

function checkStatus(status) {
    switch (status) {
        case 'no-loop':
            noLoopMusic();
            break;
        case 'loop':
            loopMusic();
            break;
        case 'shuffle':
            shuffleMusic();
            break;    
    }
}

function loopMusic() {
    playMusic();
}

function shuffleMusic() {
    nextMusic(randomId());
}

function randomId() {
    let randomId;
    let idAudio = audio.getAttribute('id-audio');
    do {
        randomId = Math.floor(Math.random()*data.length);
    }
    while (randomId == idAudio);
    return randomId;
}

function noLoopMusic() {
    let id = Number(audio.getAttribute('id-audio')) + 1;
    nextMusic(id);
}


function selectMusic() {
    let playListItems = $$('.playlist-item');
    playListItems.forEach(function(playListItem) {
        playListItem.onclick = () => {
            let id = playListItem.getAttribute('id-audio');
            loadMusicToPlayer(data[id]);
            playMusic();
        }
    })
}

function volumeChange() {
    let volumeBtn = $('.volume-btn');
    volumeBtn.onclick = () => {
        if(volumeBtn.classList.contains('mute')) {
            volumeBtn.classList.remove('mute');
            audio.volume = 0.2;
        }
        else {
            volumeBtn.classList.add('mute');
            audio.volume = 0;
        }
    }
}