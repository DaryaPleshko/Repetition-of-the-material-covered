# Educational Platform

Монорепозиторий образовательной платформы Hschool.

## Структура проекта

```
educational-platform/
├── frontend/     # React + Vite (клиентская часть)
├── backend/      # Node.js + TypeScript (серверная часть) 
├── .gitignore
└── README.md
```

## Frontend

**Стек:** React, react-router-dom, Vite, SCSS modules, localStorage.

```bash
cd frontend
npm install
npm run dev
```
### Возможности frontend

- Страницы: Home, Login, SignUp, Courses, CourseDetail, Statistics, StudentDashboard
- Аутентификация (демо) через localStorage
- Личный кабинет студента с прогрессом обучения
- Расписание, материалы, фильтрация уроков

## Backend

**Стек:** Node.js, Express, TypeScript, PostgreSQL, JWT, bcrypt, CORS.

**Архитектура:** MVC (Model-View-Controller) с разделением на слои:
Controllers - обработка HTTP запросов
Services - бизнес-логика
Repositories - работа с базой данных
Models - TypeScript интерфейсы и DTO

**База данных:** PostgreSQL с таблицами:
users - пользователи
courses - курсы обучения
lessons - уроки
student_progress - прогресс студентов

```bash
cd backend
npm install
npm run dev
```
**Настройка:**
Создайте базу данных PostgreSQL educational_platform
Выполните SQL скрипт schema.sql
Настройте .env файл с параметрами подключения к БД

**API Endpoints:**
POST /api/auth/reg - регистрация
POST /api/auth/auth - авторизация
GET /api/users - получить всех пользователей
GET /api/users/:id - получить пользователя по ID
PUT /api/users/:id - обновить пользователя
DELETE /api/users/:id - удалить пользователя
GET /api/courses - получить все курсы
GET /api/courses/:id - получить курс по ID
POST /api/courses - создать курс
PUT /api/courses/:id - обновить курс
DELETE /api/courses/:id - удалить курс
GET /api/lessons/course/:courseId - получить уроки курса
GET /api/lessons/:id - получить урок по ID
POST /api/lessons - создать урок
PUT /api/lessons/:id - обновить урок
DELETE /api/lessons/:id - удалить урок
GET /api/progress/user/:userId - получить прогресс пользователя
POST /api/progress - создать запись прогресса
PUT /api/progress/:id - обновить прогресс
PATCH /api/progress/user/:userId/lesson/:lessonId/toggle - переключить статус завершения

### Возможности backend
RESTful API для всех сущностей
Аутентификация и авторизация с JWT
Хеширование паролей с bcrypt
CRUD операции для пользователей, курсов, уроков, прогресса
Транзакции для целостности данных
CORS для связи с фронтендом
Валидация данных на уровне сервиса