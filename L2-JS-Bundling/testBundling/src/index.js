// import 'styles';

document.getElementById('lazy-button').addEventListener('click', () => {
    import('styles').then(styles => {
        styles.default()
    });
    import('lazyMod').then(lazy => {
        lazy.default()
    });
});

const lazy1 = () => import('lazyMod1');
document.getElementById('lazy-button1').addEventListener('click', () => {
    lazy1().then(lazy => {
        lazy.default()
    });
});

console.log('Hello from index.js')