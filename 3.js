function useRequest(url, callback) {
	var xhr = new XMLHttpRequest();
	xhr.open('GET', url, true);
	

	xhr.onerror = function() {
	  console.log('Ошибка! ', xhr.status);
	};
	
	xhr.send();
  }; 
  
  const resultNode = document.querySelector('.error');
  const btnNode = document.querySelector('.btn-request');
  const value = document.querySelector('input');
  

  function displayResult(apiData) {
	let pics = '';
	
	if( ! Number(value.value) || Number(value.value)  > 10 || Number(value.value) < 1 ) {
		resultNode.innerHTML = 'число вне диапазона от 1 до 10';
	}else {
        apiData.forEach(item => {
			const picsBlock = `
			  <div class="pics">
				<img
				  src="${item.download_url}"
				  class="pics-image"
				/>
				<p>${item.author}</p>
			  </div>
			`;
			pics = pics + picsBlock;
		  });
		  resultNode.innerHTML = pics;
	}
  }

  btnNode.addEventListener('click', () => {
	useRequest(`https://picsum.photos/v2/list/?limit=${value.value}`, displayResult);
	useRequest(`https://picsum.photos/v2/list/?limit=${parseInt(value.value)}`, displayResult);
  });