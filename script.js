let success = 'Successfully done';
let error = 'Error occurred';
let invalid = 'Invalid input';
function showToast(msg) {
    const toasts = document.querySelector('.toasts');
    const toast = document.createElement('div');
    toast.classList.add('toast');
    toast.innerText = msg;
    toasts.appendChild(toast);

    setTimeout(() => {
        toast.remove();
    }, 3000);
}
