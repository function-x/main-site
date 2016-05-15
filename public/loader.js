(function () {
    var title = 'Welcome to Function-X';
    var src = 'app.js';
    // clear the body
    document.body.innerHTML = '';
    {
        var container = document.createElement('div');
        container.style.height = window.innerHeight + 'px';
        container.style.position = 'fixed';
        container.style.display = 'flex';
        container.style.alignItems = 'center';
        container.style.justifyContent = 'center';
        container.style.width = '100%';
        container.style.textAlign = 'center';
        container.style.margin = '0 auto';
        container.style.transition = 'opacity 0.3s ease';

        {

            var aDiv = document.createElement('div');
            aDiv.style.width = '80%';
            {
                var header = document.createElement('h1');
                header.innerText = title;
                header.style.fontFamily = 'Courier New';
                aDiv.appendChild(header);
            }
            {
                var barBackGround = document.createElement('div');

                barBackGround.style.backgroundColor = 'rgb(189, 189, 189)';
                barBackGround.style.width = '100%';
                barBackGround.style.height = '4px';
                {
                    var bar = document.createElement('div');

                    bar.style.backgroundColor = 'rgb(0, 188, 212)';
                    bar.style.width = '0%';
                    bar.style.height = '4px';
                    bar.style.transition = 'width 0.1s ease';

                    barBackGround.appendChild(bar);
                }

                aDiv.appendChild(barBackGround);
            }
            {
                var text = document.createElement('p');
                text.style.fontFamily = 'Courier New';
                aDiv.appendChild(text);
            }

            container.appendChild(aDiv);
        }

        document.body.appendChild(container);
    }

    var request = new XMLHttpRequest();
    request.open('get', src);
    request.onprogress = function (event) {
        bar.style.width = '' + (event.loaded / event.total) * 100 + '%';
        text.innerText = event.loaded + '/' + event.total;
    }
    request.onload = function (event) {
        container.style.opacity = 0;
        setTimeout(function () {
            document.body.removeChild(container);
            eval(event.target.response);
        }, 300);
    }
    request.send();
})();