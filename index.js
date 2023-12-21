// selectors
const watermelon = document.querySelector("#watermelon");
const card = document.querySelector(".card");
const player = document.querySelector("#player")
const snow = document.querySelector(".snowflakes")
const shareButton = document.querySelector('.share')

//listeners
watermelon.addEventListener('click', openCard);
shareButton.addEventListener('click', share);

//functions
function openCard() {
    card.classList.toggle("open");
    player.play();
    snow.style.display = "block";

}

function share() {
    navigator.share({
        title: 'تبریک شب یلدا',
        text: 'ایرانی کدرز',
        url: location.href,
      })
        .then(() => console.log('Shared successfully'))
        .catch((error) => console.error('Sharing failed:', error));
    
}