const chatBtn = document.querySelector('.chat__button');

chatBtn.addEventListener('click', sendChatMessage);
chatBtn.addEventListener('click', function handleClick(event) {
    // 👇️ if you are submitting a form (prevents page reload)
    event.preventDefault();
    const input = document.querySelector('.chat__text');
    input.value = '';
});


async function sendChatMessage() {
    const message = document.querySelector('.chat__text').value;
    const response = await fetch('/api/chat', {
        method: 'POST',
        body: JSON.stringify({message}),
        headers: {
            'Accept': 'application/json',
            'Content-type': 'application/json'
        }
    });
    if (response.ok) {
        /*const data = await response.json();*/
        document.querySelector('.chat__response').innerHTML = "Sent successfully.<mbr>Thank you!";
    }
}

/*async function refreshChatData() {
    const data = await (await fetch('/api/chat')).json();
    document.querySelector('.chat__response').innerText = data.data;
}*/

document.querySelector('.chat__refresh').addEventListener('click', refreshChatData);

refreshChatData();