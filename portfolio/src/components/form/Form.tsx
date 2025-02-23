import React, { useState } from 'react';
import SocialIcons from '../social-icons/SocialIcons';

const Form = () => {
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    mensagem: '',
  });

  const [errors, setErrors] = useState({
    nome: '',
    email: '',
    mensagem: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const validateForm = () => {
    const newErrors = { nome: '', email: '', mensagem: '' };

    if (!formData.nome) newErrors.nome = 'Nome é obrigatório';
    if (!formData.email) newErrors.email = 'Email é obrigatório';
    else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Email inválido';
    if (!formData.mensagem) newErrors.mensagem = 'Mensagem é obrigatória';

    setErrors(newErrors);
    return Object.values(newErrors).every((error) => !error);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      console.log('Form enviado', formData);
      // Aqui você pode adicionar a lógica para enviar os dados (exemplo: via API)
    }
  };

  return (
    <form onSubmit={handleSubmit} className="form-container">
        <h2>Contact ME</h2>
      <div className="form-field">
        <label htmlFor="nome">Nome</label>
        <input
          type="text"
          id="nome"
          name="nome"
          value={formData.nome}
          onChange={handleChange}
          placeholder="Digite seu nome"
        />
        {errors.nome && <p className="error-message">{errors.nome}</p>}
      </div>

      <div className="form-field">
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Digite seu e-mail"
        />
        {errors.email && <p className="error-message">{errors.email}</p>}
      </div>

      <div className="form-field">
        <label htmlFor="mensagem">Mensagem</label>
        <textarea
          id="mensagem"
          name="mensagem"
          value={formData.mensagem}
          onChange={handleChange}
          placeholder="Digite sua mensagem"
        />
        {errors.mensagem && <p className="error-message">{errors.mensagem}</p>}
      </div>

      <button type="submit" className="submit-button">Enviar</button>
      <SocialIcons githubUrl="" linkedinUrl="" whatsappUrl="" gmailUrl=""/>
    </form>
  );
};

export default Form;
