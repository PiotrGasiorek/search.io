export default function toggleNotifications(information){
    let notification = document.getElementById('notification');
    if(!notification.classList.contains('showNotification')){
        document.querySelector('#notification p').textContent = information;
        notification.classList.add('showNotification');
        setTimeout(() => {
            notification.classList.remove('showNotification');
        }, 4800);
    } else{ 
        return false
    }
}