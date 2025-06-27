# 🦊 MetaSign dApp

Простое Web3-приложение на React + TypeScript для подключения Metamask и подписания сообщений.

## 🚀 Возможности

- Подключение к кошельку Metamask
- Отображение выбранного адреса
- Ввод произвольного сообщения
- Подпись сообщения (`personal_sign`)
- Отображение подписи

## 🛠️ Стек

- [Vite](https://vitejs.dev/)
- [React](https://react.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [ethers.js](https://docs.ethers.org/v6/)

## 🧰 Установка


1. **Клонируйте проект:**

   ```bash
   git clone https://github.com/your-username/metasign.git
   cd metasign
   ```


2. **Установите зависимости:**
    
   ```bash
   npm install
   ```


3. **Запустите dev-сервер:**

   ```bash
   npm run dev
   ```


4. **Откройте в браузере:**

   ```bash
   http://localhost:5173
   ```


## 🎨 Структура проекта

```cpp
src/
  components/
    ConnectButton.tsx   // Кнопка подключения
    SignMessage.tsx     // Подпись сообщения
  services/
    ethereum.ts         // Логика работы с Metamask
  App.tsx               // Главная страница
```
