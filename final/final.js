const page = document.querySelector('.page');
const limit = document.querySelector('.limit');
const textP= document.querySelector('.text-p');
const textL = document.querySelector('.text-l');
const butt = document.querySelector('.butt');
const content = document.querySelector('.content');

const useRequest = (url) => {
	
	return fetch(url)
	  .then((response) => {
		console.log('response', response);
		return response.json();
	  })
	  .then((json) => { return json; })
	  .catch(() => { console.log('error') });

	  
  }
  

const displayResult = (apiData) => {
	let pics = '';
	
    if( ! +page.value || page.value  > 10 || page.value < 1 ) {
		
		textP.innerHTML = 'Номер страницы вне диапазона от 1 до 10';
		setTimeout(() => {
			textP.innerHTML = ' ';
		}, 3000);
	
	}else if(! +limit.value || limit.value  > 10 || limit.value < 1) {	
		    
		textL.innerHTML = 'Лимит вне диапазона от 1 до 10';
		setTimeout(() => {
			textL.innerHTML = ' ';
		}, 3000);
	
	}else {
		apiData.forEach(item => {
		let picBlock = `
			  <div class="pic">
				<img
				  src="${item.download_url}"
				  class="pic-image" style='width:${page.value}px; height:${limit.value}px;' 
				/>
			  </div>
			`;
			pics = pics + picBlock;
		});
		content.innerHTML = pics;
	};
  }

  const randomNum = Math.floor(Math.random() * 2);
 
  butt.addEventListener('click', async () => {
	
	let requestResult = await useRequest(`https://picsum.photos/v2/list?page=${randomNum}&limit=${randomNum}`);

	let displayR = await displayResult(requestResult );
    let requsJ = JSON.stringify(requestResult);
	let strJson = localStorage.setItem('myJSON',requsJ);
  });
 
  document.addEventListener("DOMContentLoaded", async () => {

	let myJSON = localStorage.getItem('myJSON');
	let obiJ = JSON.parse(myJSON);
	
	console.log(obiJ); 
	let pics = '';
		obiJ.forEach(item => {
			let picBlock = `
				  <div class="pic">
					<img
					  src="${item.download_url}"
					  class="pic-image" style='width: 30vw; height: auto;' 
					/>
				  </div>
				`;
				pics = pics + picBlock;
				
			});
		content.innerHTML = pics;
	});