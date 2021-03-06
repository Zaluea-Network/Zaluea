const form = document.querySelector('form');
const input = document.getElementById('input_search');

form.addEventListener('submit', async event => {
    let load = document.getElementById('preloader');
    let background = document.getElementById('background');
    let bar = document.getElementById('bar');
    let msg = document.getElementById('msg');
    background.style.display = 'initial';
    bar.style.display = 'none';
    msg.style.display = 'initial';
    load.style.display = 'initial';
    event.preventDefault();
    window.navigator.serviceWorker.register('./sw.js', {
        scope: __uv$config.prefix
    }).then(() => {
        let url = input.value.trim();
        if (!isUrl(url)) url = 'https://www.google.com/search?q=' + url;
        else if (!(url.startsWith('https://') || url.startsWith('http://'))) url = 'http://' + url;


        window.location.href = __uv$config.prefix + __uv$config.encodeUrl(url);
    });
});

function quickLink(url1) {
    let load = document.getElementById('preloader');
    let background = document.getElementById('background');
    let bar = document.getElementById('bar');
    let msg = document.getElementById('msg');
    background.style.display = 'initial';
    bar.style.display = 'none';
    msg.style.display = 'initial';
    load.style.display = 'initial';
    window.location.href = __uv$config.prefix + url1;
}

function isUrl(val = ''){
    if (/^http(s?):\/\//.test(val) || val.includes('.') && val.substr(0, 1) !== ' ') return true;
    return false;
};