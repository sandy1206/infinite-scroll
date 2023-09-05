const container = document.querySelector('.container');
const url = 'https://random.imagecdn.app/1000/150';


function loadImages(numImages = 10) {
	let i = 0;
	while (i < numImages) {
		const img = document.createElement('img')
		img.src = `${url}`;
		container.appendChild(img);
		i++;
	}
}

loadImages();

window.addEventListener('scroll', () => {
	if (window.scrollY + window.innerHeight >= document.documentElement.scrollHeight) {
		loadImages();
	}
})
