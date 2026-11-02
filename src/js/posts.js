window.onload = function() {
    //fetch('https://6ae86dcd1a7b15aaa50f120e.mockapi.io/posts')
    fetch('posts.json')
        .then((response) => response.json())
        .then(json => {
            console.log(json);
            let postsdiv = document.getElementsByClassName('posts')[0];
            for (let i = 0; i < json.length; i++) {
                let post = document.createElement('article');
                postsdiv.appendChild(post);

                let postHeader = document.createElement('div');
                post.appendChild(postHeader);
                postHeader.className = 'postheader';

                let userDiv = document.createElement('div');
                postHeader.appendChild(userDiv);
                userDiv.className = "user";

                let pfp = document.createElement('img');
                userDiv.appendChild(pfp);
                pfp.src = 'res/images/me.png';
                pfp.alt = 'Profile picture';
                pfp.className = 'logo';

                let username = document.createElement('p');
                userDiv.appendChild(username);
                username.innerText = json[i].author;

                let date = document.createElement('p');
                postHeader.appendChild(date);
                date.innerText = json[i].date;

                let imgsrc = json[i].image;
                if (imgsrc != null) {
                    let img = document.createElement('img');
                    post.appendChild(img);
                    //img.src = 'res/' + imgsrc;
                    img.src = imgsrc;
                }

                let p = document.createElement('p');
                p.innerText = json[i].text;
                post.appendChild(p);

                let likeDiv = document.createElement('div');
                post.appendChild(likeDiv);
                likeDiv.className = "likes";

                let likeButton = document.createElement('button');
                likeDiv.appendChild(likeButton);
                likeButton.className = "likebutton";

                let likeImg = document.createElement('img');
                likeButton.appendChild(likeImg);
                likeImg.src = 'res/images/like.png';
                likeImg.alt = 'Like button';
                likeImg.className = 'logo';

                let likeText = document.createElement('p');
                likeDiv.appendChild(likeText);
                likeText.innerText = json[i].likes;
            }
        })
}