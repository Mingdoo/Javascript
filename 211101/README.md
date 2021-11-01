# javascript

## axios를 사용한 동기처리

```html
<script src="https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js"></script>
<script>
    const API_URL = 'https://jsonplaceholder.typicode.com/posts'
    const btn = document.querySelector('button')
    btn.addEventListener('click', function (){
        axios.get(API_URL)
            .then((response) => {
            console.log(response)
            return response.data
        	})
            .then(response => {
            const posts = response
            const ul = document.querySelector('ul')
            posts.forEach((post)=>{
                const li = document.createElement('li')
                li.innerText = post.title
                ul.append(li)
            })
        })
    })
</script>
```

api 서버에 호출하고, 이를 ul태그의 자식태그인 li에 append하는 과정입니다.

> 누가 먼저될진 나도 몰라~ 근데 되는대로 다 해! (하나씩 불러온다면)

