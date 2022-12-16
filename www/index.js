const SPOOK_WAIT_TIME_MS = 750;
const DEF_DELAY = 500;

function search()
{	
	var search_box = document.getElementById("search-box");
	var search_text = search_box.value;
	const base_url = "https://www.google.com/search";
	const query = base_url + "?q=" + encodeURIComponent(search_text);
	window.location.href = query;
}

function sleep(ms)
{
	return new Promise(resolve => setTimeout(resolve, ms || DEF_DELAY));
}

async function spook()
{
	var search_elem = document.getElementById("search-container");
	search_elem.hidden=true;
	search_elem.style.display="none";
	var spoopy_elem = document.getElementById("spoopy-scare");
	spoopy_elem.hidden=false;
	await sleep(SPOOK_WAIT_TIME_MS);
}

async function spoopy_search()
{
	var delay_time_ms = Math.floor(Math.random() * 10000); // 0 to 9 sec wait
	await sleep(delay_time_ms);
	await spook();
	search();
}

/* Eyeball tracking */
document.querySelector("body").addEventListener("mousemove", eyeball);

function eyeball() {
    const eye = document.querySelectorAll(".eyes");
    eye.forEach(followEye);
}

function followEye(eye) {
    console.log(eye);
    let x = eye.getBoundingClientRect().left + eye.clientWidth / 2;
    let y = eye.getBoundingClientRect().top + eye.clientHeight / 2;

    let radian = Math.atan2(event.pageX - x, event.pageY - y);
    let rotate = -1 * radian * (180 / Math.PI) + 270;
    eye.style.transform = "rotate(" + rotate + "deg)";
}
