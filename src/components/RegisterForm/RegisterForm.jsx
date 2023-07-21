import React from 'react';

const RegistrationForm = () => {
  return (
    <form>
      <input type="text" placeholder="Имя" />
      <input type="email" placeholder="Email" />
      <input type="password" placeholder="Пароль" />
      {/* Другие поля для регистрации */}
      <button type="submit">Зарегистрироваться</button>
    </form>
  );
};

export default RegistrationForm;
