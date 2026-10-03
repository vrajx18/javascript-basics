async function APITEST() {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts')

    const users = await response.json()

    const data = document.getElementById
    ("data")

    data.innerHTML = users.map(post => `<div> ${post.id}</div>
        <h3> ${post.title} </h3>`)
}
