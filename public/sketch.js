const margin = 50;
const padding = 20;
const menuTopPadding = 30;
const menuRightPadding = 20;
const menuWidth = 200;
const borderRadius = 20;
const rowHeight = 10;

function setup() {
    var cnv = createCanvas(windowWidth - margin, windowHeight - margin);
    cnv.style('display', 'block');
}

function draw() {
    background('#87ceeb');

    let menuX = width - menuWidth - padding;

    fill('#87ceeb');
    rect(menuX, padding, menuWidth, height - 2 * padding, borderRadius);

    fill('black');
    for (let i in players) {
        text(players[i].nickname, menuX + menuRightPadding, padding + menuTopPadding + i * rowHeight);
    }
}

function windowResized() {
    resizeCanvas(windowWidth - margin, windowHeight - margin);
}