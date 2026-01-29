type Post = { id: number; title: string; body: string; time: string; };

const posts: Post[] = [];

const setupForm = () => {
    document.getElementById('publish-post')!.onclick = publishPost;
    const textarea = document.getElementById('post-content') as HTMLTextAreaElement;
    textarea.oninput = () => document.getElementById('char-count')!.textContent = textarea.value.length.toString();
    textarea.dispatchEvent(new Event('input'));
};

const publishPost = async () => {
    const title = (document.querySelector('input') as HTMLInputElement).value.trim();
    const body = (document.getElementById('post-content') as HTMLTextAreaElement).value.trim();
    if (!title || !body) return alert('Заполните все поля');
    
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ title, body, userId: 1 })
        });
        const result = await response.json();
        addPost({title, body, id: result.id || posts.length + 1, time: new Date().toLocaleTimeString()});
        alert('Пост опубликован!');
    } catch {
        alert('Пост не опубликован..');
    }
    (document.querySelector('input') as HTMLInputElement).value = '';
    (document.getElementById('post-content') as HTMLTextAreaElement).value = '';
};

const addPost = (post: Post) => {
    posts.push(post);
    renderPost(post);
    updateCounter();
};

const renderPost = (post: Post) => {
    let container = document.getElementById('posts-container');
    if (!container) {
        container = document.createElement('div');
        container.id = 'posts-container';
        container.className = 'posts-list';
        document.querySelector('.main-content')!.appendChild(container);
    }
    container.innerHTML = `<div class="post-item"><h3>${post.title}</h3><p>${post.body}</p><div class="post-meta"><span>ID: ${post.id}</span><span>Время: ${post.time}</span></div></div>` + container.innerHTML;
};

const updateCounter = () => {
    document.getElementById('posts-counter')!.textContent = posts.length.toString();
};

document.addEventListener('DOMContentLoaded', () => {
    setupForm();
    updateCounter();
    posts.forEach(post => renderPost(post));
});