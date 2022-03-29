const mobileNavButton=document.querySelector('.mobile-nav-button');

const mobileNavIcon=document.querySelector('.mobile-nav-button__icon');

const mobileNav=document.querySelector('.mobile-nav');


mobileNavButton.addEventListener('click',()=>{
    mobileNavIcon.classList.toggle('active');
    mobileNav.classList.toggle('active');
    document.body.classList.toggle('no-scroll');
})


const videoBtn=document.querySelector('#video-story-button');
const videoBtnIcon=document.querySelector('#video-story-btn-icon');

const videoFile=document.querySelector('#video-story');

const playBtn=document.querySelector('.play-button');

const videOverlay=document.querySelector('.story-video');

videoFile.addEventListener('click',()=>{
   
    const toggleOverlay=(e)=>{
        if(e.type==='mouseleave'){
            videoBtnIcon.classList.add('none');
            videOverlay.classList.add('hidden');
        }
        else{

            videoBtnIcon.classList.remove('none');
        videOverlay.classList.remove('hidden');
        }
    }
    
    if(videoFile.paused){
        videoFile.play();
        videoBtnIcon.src='./img/home/story/pause-white.svg';

        videOverlay.onmouseleave=toggleOverlay;
        videOverlay.onmouseenter=toggleOverlay;

    }
    else{

    videoFile.pause();
    videoBtnIcon.src='./img/home/story/play-white.svg';
    videOverlay.onmouseleave=null;
    videOverlay.onmouseenter=null;
    }
    
})