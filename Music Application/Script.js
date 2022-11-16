console.log("Welocome to Music Discover");
// Initialize the Variables
let songIndex = 0;
let audioElement = new Audio('songs/1.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif');
let masterSongName = document.getElementById('masterSongName');
let songItems = Array.from(document.getElementsByClassName('songItem'));

let songs=[
    {songsName:"Let me love you -Justin-Beiber",filePath:"songs/1.mp3",coverPath:"covers/1.jpg"},
    {songsName:"Made In India - Guru-Randhawa",filePath:"songs/2.mp3",coverPath:"covers/2.jpg"},
    {songsName:"Jee Karda Official VarunDhawan",filePath:"songs/3.mp3",coverPath:"covers/3.jpg"},
    {songsName:"Satisfya - Imran_____Khan.....",filePath:"songs/4.mp3",coverPath:"covers/4.jfif"},
    {songsName:"Serena-Safari Birds_of_Prey...",filePath:"songs/5.mp3",coverPath:"covers/5.jpg"},
    {songsName:"Keshariya _Bramashtra Arijit S.",filePath:"songs/6.mp3",coverPath:"covers/6.jfif"},
    {songsName:"PSY-Gangnam Style -M/V Most ...",filePath:"songs/7.mp3",coverPath:"covers/7.png"},
    {songsName:"Faded- _Song__ ...Alan_Walker.. ",filePath:"songs/8.mp3",coverPath:"covers/8.jfif"},
    {songsName:"Takdaa Rawaan _Sachet ParamPara",filePath:"songs/9.mp3",coverPath:"covers/9.jpg"},
    {songsName:"Cartoon On_&_On -Justin-Bieber.",filePath:"songs/9.mp3",coverPath:"covers/10.jpg"},

]
songItems.forEach((element, i)=>{ 
    element.getElementsByTagName("img")[0].src = songs[i].coverPath; 
    element.getElementsByClassName("songName")[0].innerText=songs[i].songsName; 
})
//let audioElement=new('1.mp3');
// Handle play/pause click
masterPlay.addEventListener('click', ()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        gif.style.opacity = 1;
    }
    else{
        audioElement.pause();
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-circle');
        gif.style.opacity = 0;
    }
})
// Listen to Events
audioElement.addEventListener('timeupdate', ()=>{ 
    // Update Seekbar
    progress = parseInt((audioElement.currentTime/audioElement.duration)* 100); 
    myProgressBar.value = progress;
})

myProgressBar.addEventListener('change', ()=>{
    audioElement.currentTime = myProgressBar.value * audioElement.duration/100;
})
const makeAllPlays = ()=>{
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
        element.classList.remove('fa-pause-circle');
        element.classList.add('fa-play-circle');
    })
}
Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
    element.addEventListener('click', (e)=>{ 
        makeAllPlays();
        songIndex = parseInt(e.target.id);
        e.target.classList.remove('fa-play-circle');
        e.target.classList.add('fa-pause-circle');
        audioElement.src = `songs/${songIndex+1}.mp3`;
        masterSongName.innerText = songs[songIndex].songsName;
        audioElement.currentTime = 0;
        audioElement.play();
        gif.style.opacity = 1;
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
    })
})
document.getElementById('next').addEventListener('click',()=>{
    if(songIndex>=9){
        songIndex = 0
    }
    else{
        songIndex += 1;
    }
    audioElement.src = `songs/${songIndex+1}.mp3`;
    masterSongName.innerText = songs[songIndex].songsName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');

})
document.getElementById('previous').addEventListener('click', ()=>{
    if(songIndex<=0){
        songIndex = 0;
    }
    else{
        songIndex -= 1;
    }
    audioElement.src = `songs/${songIndex+1}.mp3`;
    masterSongName.innerText = songs[songIndex].songsName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
})