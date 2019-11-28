export default function toggleNotifications(){
    let notification = document.getElementById('notification');
    if(!notification.classList.contains('showNotification')){
        notification.classList.add('showNotification');
        setTimeout(() => {
            notification.classList.remove('showNotification');
        }, 4800);
    } else{ 
        return false
    }
}