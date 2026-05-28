function ExecuteScript(strId)
{
  switch (strId)
  {
      case "6eQW575oZKl":
        Script1();
        break;
      case "5nSFIIch9YH":
        Script2();
        break;
      case "68RELLT8hyE":
        Script3();
        break;
      case "6hmzLhKXXf2":
        Script4();
        break;
      case "6nnZIk9yEeq":
        Script5();
        break;
      case "5qXAPZYs5ru":
        Script6();
        break;
      case "5gcIyYpwiXg":
        Script7();
        break;
      case "5cM0SBN1YfK":
        Script8();
        break;
      case "68ANxlHHe3H":
        Script9();
        break;
      case "5tQmLfhbaXs":
        Script10();
        break;
      case "60a0eSp9UtN":
        Script11();
        break;
      case "6lJtK1tCVW5":
        Script12();
        break;
      case "5d5GhrG6xH7":
        Script13();
        break;
      case "6P1FAevq6aK":
        Script14();
        break;
      case "6DJIdUUjyJY":
        Script15();
        break;
      case "5dpPwMbisF8":
        Script16();
        break;
  }
}

window.InitExecuteScripts = function()
{
var player = GetPlayer();
var object = player.object;
var addToTimeline = player.addToTimeline;
var setVar = player.SetVar;
var getVar = player.GetVar;
window.Script1 = function()
{
  const target = object('6Gdzm5p2guA');
const duration = 750;
const easing = 'ease-out';
const id = '5i3p5UZhma8';
const pulseAmount = 0.07;
player.addForTriggers(
id,
target.animate([
{ scale: '1' }, { scale: `${1 + pulseAmount}` },
{ scale: '1' }, { scale: `${1 + pulseAmount}` },
{ scale: '1' }
],
  { fill: 'forwards', duration, easing }
)
);
}

window.Script2 = function()
{
  player.once(() => {
const target = object('5yVKZ9P4bTx');
const duration = 8500;
const easing = 'ease-out';
const id = '6auSHpOJqC3';
const growAmount = 0.3;
const delay = 1000;
addToTimeline(
target.animate([
{ scale: `${1 + growAmount}` }
],
  { fill: 'forwards', delay, duration, easing }
), id
);
});
}

window.Script3 = function()
{
  const target = object('6IMQoFOeQAR');
const duration = 1000;
const easing = 'ease-out';
const id = '5uSUw5TcUzN';
const growAmount = 0.3;
player.addForTriggers(
id,
target.animate([
{ scale: `${1 + growAmount}` }
],
  { fill: 'forwards', duration, easing }
)
);
}

window.Script4 = function()
{
  const target = object('620aDBSMfmY');
const duration = 1000;
const easing = 'ease-out';
const id = '5uSUw5TcUzN';
const growAmount = 0.3;
player.addForTriggers(
id,
target.animate([
{ scale: `${1 + growAmount}` }
],
  { fill: 'forwards', duration, easing }
)
);
}

window.Script5 = function()
{
  const target = object('6fwxaPUJ3Iw');
const duration = 1000;
const easing = 'ease-out';
const id = '5uSUw5TcUzN';
const growAmount = 0.3;
player.addForTriggers(
id,
target.animate([
{ scale: `${1 + growAmount}` }
],
  { fill: 'forwards', duration, easing }
)
);
}

window.Script6 = function()
{
  const target = object('5cnyYps47l6');
const duration = 1000;
const easing = 'ease-out';
const id = '5uSUw5TcUzN';
const growAmount = 0.3;
player.addForTriggers(
id,
target.animate([
{ scale: `${1 + growAmount}` }
],
  { fill: 'forwards', duration, easing }
)
);
}

window.Script7 = function()
{
  player.once(() => {
const target = object('6XuS1sgNHZb');
const duration = 6000;
const easing = 'ease-out';
const id = '68yjYWP6q9t';
const growAmount = 0.1;
const delay = 1014;
addToTimeline(
target.animate([
{ scale: `${1 + growAmount}` }
],
  { fill: 'forwards', delay, duration, easing }
), id
);
});
}

window.Script8 = function()
{
  player.once(() => {
const target = object('6j1pphHOAI3');
const duration = 9000;
const easing = 'ease-out';
const id = '6KZLQvlYnet';
const growAmount = 0.2;
const delay = 9406;
addToTimeline(
target.animate([
{ scale: `${1 + growAmount}` }
],
  { fill: 'forwards', delay, duration, easing }
), id
);
});
}

window.Script9 = function()
{
  player.once(() => {
const target = object('5lLzgvelWGQ');
const duration = 4500;
const easing = 'ease-out';
const id = '6JDdBZYgoy5';
const growAmount = 0.2;
const delay = 20500;
addToTimeline(
target.animate([
{ scale: `${1 + growAmount}` }
],
  { fill: 'forwards', delay, duration, easing }
), id
);
});
}

window.Script10 = function()
{
  player.once(() => {
const target = object('6rC7duytRcO');
const duration = 250;
const easing = 'ease-out';
const id = '5yNohJH4D57';
const pulseAmount = 0.03;
const delay = 16646;
addToTimeline(
target.animate([
{ scale: '1' }, { scale: `${1 + pulseAmount}` },
{ scale: '1' }, { scale: `${1 + pulseAmount}` },
{ scale: '1' }
],
  { fill: 'forwards', delay, duration, easing }
), id
);
});
}

window.Script11 = function()
{
  player.once(() => {
const target = object('5eSWGPPDPZC');
const duration = 3000;
const easing = 'ease-out';
const id = '6CF7Ajbuaa4';
const growAmount = 0.3;
const delay = 12000;
addToTimeline(
target.animate([
{ scale: `${1 + growAmount}` }
],
  { fill: 'forwards', delay, duration, easing }
), id
);
});
}

window.Script12 = function()
{
  player.once(() => {
const target = object('6R7zUJKncCn');
const duration = 3000;
const easing = 'ease-out';
const id = '64DaBozzBuC';
const growAmount = 0.3;
const delay = 12500;
addToTimeline(
target.animate([
{ scale: `${1 + growAmount}` }
],
  { fill: 'forwards', delay, duration, easing }
), id
);
});
}

window.Script13 = function()
{
  player.once(() => {
const target = object('63DIpbDnnyq');
const duration = 3000;
const easing = 'ease-out';
const id = '6cnH9fjulRC';
const growAmount = 0.3;
const delay = 12750;
addToTimeline(
target.animate([
{ scale: `${1 + growAmount}` }
],
  { fill: 'forwards', delay, duration, easing }
), id
);
});
}

window.Script14 = function()
{
  player.once(() => {
const target = object('600zg1HFoJr');
const duration = 3000;
const easing = 'ease-out';
const id = '5wWXZKI4aff';
const growAmount = 0.3;
const delay = 12000;
addToTimeline(
target.animate([
{ scale: `${1 + growAmount}` }
],
  { fill: 'forwards', delay, duration, easing }
), id
);
});
}

window.Script15 = function()
{
  player.once(() => {
const target = object('6nEU25Q599b');
const duration = 3000;
const easing = 'ease-out';
const id = '5yNVt5uUvhB';
const growAmount = 0.3;
const delay = 12500;
addToTimeline(
target.animate([
{ scale: `${1 + growAmount}` }
],
  { fill: 'forwards', delay, duration, easing }
), id
);
});
}

window.Script16 = function()
{
  player.once(() => {
const target = object('6XPFah8ja8l');
const duration = 3000;
const easing = 'ease-out';
const id = '5iHBUycFhxk';
const growAmount = 0.3;
const delay = 13000;
addToTimeline(
target.animate([
{ scale: `${1 + growAmount}` }
],
  { fill: 'forwards', delay, duration, easing }
), id
);
});
}

};
