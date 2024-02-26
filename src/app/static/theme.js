var observer = new MutationObserver(function (mutations) {
    mutations.forEach(function (mutation) {
        if (document.getElementById('stars') === null) {
            var pages = document.getElementsByClassName('CorePage')
            var page = pages[0]
            page.insertBefore(document.createElement('div'), page.firstChild).setAttribute('id', 'stars')
            page.insertBefore(document.createElement('div'), page.firstChild).setAttribute('id', 'stars2')
            page.insertBefore(document.createElement('div'), page.firstChild).setAttribute('id', 'stars3')
        }
    });
});

observer.observe(document.body, {childList: true, subtree: true});
