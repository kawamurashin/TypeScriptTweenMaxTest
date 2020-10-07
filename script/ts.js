var _this = this;
var button = document.getElementById("button");
button.addEventListener("click", function () {
    _this.clickHandler();
});
function clickHandler() {
    TweenMax.set(".box", { rotation: 0, y: 0 });
    TweenMax.to(".box", 1, { rotation: 360, y: 100, stagger: 0.5 });
}
//# sourceMappingURL=ts.js.map