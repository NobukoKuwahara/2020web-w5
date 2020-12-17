const customName = document.getElementById('customname');
const randomize = document.querySelector('.randomize');
const story = document.querySelector('.story');

function randomValueFromArray(array){
  const random = Math.floor(Math.random()*array.length);
  return array[random];
}

//let storyText = 'It was 94 fahrenheit outside, so :insertx: went for a walk. When they got to :inserty:, they stared in horror for a few moments, then :insertz:. Bob saw the whole thing, but was not surprised — :insertx: weighs 300 pounds, and it was a hot day.';
let storyText = '気温 華氏86度で外はとても暑かった。:insertx: は歩いて出かけた。 :inserty:に着いたとき、:insertz:。体重90ポンドの:insertx:は驚いたが、Bobは驚かなかった。:inserty:ではよくあることだった。';
let insertX = ['アンパンマン','ドラえもん','ミッキーマウス'];
let insertY = ['小平市','村','ディズニーランド'];
let insertZ = ['人がたくさんいて混雑していた','雷がなっていた','奇妙な動物に遭遇した'];

randomize.addEventListener('click', result);

function result() {
  let newStory = storyText;

  let xItem = randomValueFromArray(insertX);
  let yItem = randomValueFromArray(insertY);
  let zItem = randomValueFromArray(insertZ);

  newStory = newStory.replace(':insertx:',xItem);
  newStory = newStory.replace(':insertx:',xItem);
  newStory = newStory.replace(':inserty:',yItem);
  newStory = newStory.replace(':inserty:',yItem);
  newStory = newStory.replace(':insertz:',zItem);

  if(customName.value !== '') {
    const name = customName.value;
    newStory = newStory.replace('Bob',name);
  }

  if(document.getElementById("日本").checked) {
    const weight = Math.round(90/2.2024) + 'kg';
    const temperature = '摂氏' + Math.round((86-32) * 5 / 9);
    newStory = newStory.replace('華氏86',temperature);
    newStory = newStory.replace('90ポンド',weight);
  }

  story.textContent = newStory;
  story.style.visibility = 'visible';
}
