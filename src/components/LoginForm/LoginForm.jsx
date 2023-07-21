import React from 'react';

const LoginForm = () => {
  return (
    <form>
      <input type="email" placeholder="Email" />
      <input type="password" placeholder="Пароль" />
      {/* Другие поля для входа */}
      <button type="submit">Войти</button>
    </form>
  );
};

export default LoginForm;