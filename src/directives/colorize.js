export default {
    update(el, binding) {
        if (binding.value > 100) {
            el.classList.add('bg-red', 'fg-white');
        } else {
            el.classList.remove('bg-red', 'fg-white');
        }
    }
}