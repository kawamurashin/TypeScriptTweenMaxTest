let button = document.getElementById("button");
button.addEventListener("click" , () =>
{
    this.clickHandler();
});
function clickHandler() {
    TweenMax.set(".box", {rotation: 0,y: 0});
    TweenMax.to(".box", 1, {rotation: 360, y: 100, stagger: 0.5});
}