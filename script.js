let success = '<i class="fa-solid fa-circle-check"></i>Successfully done';
let error = '<i class="fa-solid fa-circle-xmark"></i>Error occurred';
let invalid = '<i class="fa-solid fa-triangle-exclamation"></i>Invalid input';
function showToast(msg) {
    const toasts = document.querySelector('.toasts');
    const toast = document.createElement('div');
    toast.classList.add('toast');
    toast.innerHTML = msg;
    toasts.appendChild(toast);

    if (msg.includes('Successfully done')) {
        toast.classList.add('success');
    } else if (msg.includes('Error occurred')) {
        toast.classList.add('error');
    } else if (msg.includes('Invalid input')) {
        toast.classList.add('invalid');
    }

    setTimeout(() => {
        toast.remove();
    }, 5000);
}
