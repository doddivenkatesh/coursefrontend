import React, { useEffect, useState } from 'react';

const UserForm = ({ onSubmit, initialData }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  useEffect(() => {
    if (initialData) {
      setName(initialData.name);
      setEmail(initialData.email);
    } else {
      setName('');
      setEmail('');
    }
  }, [initialData]);

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ name, email });
    setName('');
    setEmail('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input 
        type="text" 
        placeholder="Name"
        value={name}
        onChange={e => setName(e.target.value)}
        required
      />
      <input 
        type="email" 
        placeholder="Email"
        value={email}
        onChange={e => setEmail(e.target.value)}
        required
      />
      <button type="submit">{initialData ? 'Update' : 'Create'}</button>
    </form>
  );
};

export default UserForm;
