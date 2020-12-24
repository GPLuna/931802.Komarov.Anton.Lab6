const showLeft = () => {
  document.getElementById('left-column').style.width = '855px';
  document.getElementById('right-column').style.width = '45px';

  document.getElementById('left-image').style.display = 'block';
  document.getElementById('left-image').style.width = '632px';

  document.getElementById('right-image').style.display = 'none';
};

const showRight = () => {
  document.getElementById('right-column').style.width = '855px';
  document.getElementById('left-column').style.width = '45px';

  document.getElementById('right-image').style.display = 'block';
  document.getElementById('right-image').style.width = '632px';

  document.getElementById('left-image').style.display = 'none';
};

const showBoth = () => {
  const leftCol = document.getElementById('left-column');
  const leftImage = document.getElementById('left-image');
  const rightCol = document.getElementById('right-column');
  const rightImage = document.getElementById('right-image');

  leftCol.style.width = '50%';
  rightCol.style.width = '50%';

  rightImage.style.display = 'block';
  rightImage.style.padding = '10px';
  rightImage.style.width = '410px';
  rightImage.style.margin = '0 auto';

  leftImage.style.display = 'block';
  leftImage.style.padding = '10px';
  leftImage.style.width = '410px';
  leftImage.style.margin = '0 auto'
};