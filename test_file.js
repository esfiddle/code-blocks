_ = (sel) => (e = document.querySelectorAll(sel), e.length > 1 ? e :e[0])
if (localStorage.getItem('previous-page') == 'home') {
    _('.transition').classList.add('to-left');
    setTimeout(function() {
        _('.transition').classList.remove('to-left');
        _('.transition').classList.remove('show');
    }, 500)
} else {
    _('.transition').classList.remove('show');
}
localStorage.setItem('previous-page', 'login')

_("#login-form").addEventListener('submit', function(e) {
    e.preventDefault();
    var username = _('#username').value,
        password = _('#password').value;

    // Do some submit logic here!
    // Okay by now the user is verified.

    _('.transition').classList.add('show');
    _('.transition').classList.add('from-left');
    setTimeout(function() {window.location.href = 'home'}, 500)
})
