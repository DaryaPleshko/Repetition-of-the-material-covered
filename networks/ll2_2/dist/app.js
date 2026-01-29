"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const posts = [];
const setupForm = () => {
    document.getElementById('publish-post').onclick = publishPost;
    const textarea = document.getElementById('post-content');
    textarea.oninput = () => document.getElementById('char-count').textContent = textarea.value.length.toString();
    textarea.dispatchEvent(new Event('input'));
};
const publishPost = () => __awaiter(void 0, void 0, void 0, function* () {
    const title = document.querySelector('input').value.trim();
    const body = document.getElementById('post-content').value.trim();
    if (!title || !body)
        return alert('Заполните все поля');
    try {
        const response = yield fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ title, body, userId: 1 })
        });
        const result = yield response.json();
        addPost({ title, body, id: result.id || posts.length + 1, time: new Date().toLocaleTimeString() });
        alert('Пост опубликован!');
    }
    catch (_a) {
        alert('Пост не опубликован..');
    }
    document.querySelector('input').value = '';
    document.getElementById('post-content').value = '';
});
const addPost = (post) => {
    posts.push(post);
    renderPost(post);
    updateCounter();
};
const renderPost = (post) => {
    let container = document.getElementById('posts-container');
    if (!container) {
        container = document.createElement('div');
        container.id = 'posts-container';
        container.className = 'posts-list';
        document.querySelector('.main-content').appendChild(container);
    }
    container.innerHTML = `<div class="post-item"><h3>${post.title}</h3><p>${post.body}</p><div class="post-meta"><span>ID: ${post.id}</span><span>Время: ${post.time}</span></div></div>` + container.innerHTML;
};
const updateCounter = () => {
    document.getElementById('posts-counter').textContent = posts.length.toString();
};
document.addEventListener('DOMContentLoaded', () => {
    setupForm();
    updateCounter();
    posts.forEach(post => renderPost(post));
});
