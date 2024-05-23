import React, { useState } from 'react';

interface AuthModalProps {
    onClose: () => void;
}

const AuthModal: React.FC<AuthModalProps> = ({ onClose }) => {
    const [isRegistering, setIsRegistering] = useState(true);
    const [isLogin, setIsLogin] = useState(true);
    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('');

    // const handleSubmit = async (event: React.FormEvent) => {
    //     event.preventDefault();
    //     const endpoint = isLogin ? '/api/Auth/login' : '/api/Auth/register';
    //     const response = await fetch(`https://localhost:7245${endpoint}`, {
    //         method: 'POST',
    //         headers: {
    //             'Content-Type': 'application/json',
    //         },
    //         body: JSON.stringify({ login, password }),
    //     });

    //     if (response.ok) {
    //         alert('Registration successful');
    //         onClose();
    //     } else {
    //         const errorText = await response.text();
    //         alert('Error: ' + errorText);
    //     }
    // };

    const handleSubmit = async (event: React.FormEvent) => {
        event.preventDefault();

        if (isLogin) {
            try {
                const response = await fetch('https://localhost:7245/api/Auth/login', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({ login, password }),
                });
    
                if (response.ok) {
                    alert('Login successful');
                } else {
                    const errorText = await response.text();
                    alert('Error: ' + errorText);
                }
            } catch (error) {
                console.error('Error:', error);
                alert('Error: ');
            }
        }
        else {
            try {
                const response = await fetch('https://localhost:7245/api/Auth/register', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({ login, password }),
                });
    
                if (response.ok) {
                    alert('Registration successful');
                } else {
                    const errorText = await response.text();
                    alert('Error: ' + errorText);
                }
            } catch (error) {
                console.error('Error:', error);
                alert('Error: ');
            }
        }        
    };

    return (
        <div className="auth-modal-overlay">
            <div className="auth-modal">
                <button className="close-button" onClick={onClose}>X</button>
                <h2>{isLogin ? 'Вход' : 'Регистрация'}</h2>
                <form onSubmit={handleSubmit}>
                    <input
                        type="text"
                        placeholder="Логин"
                        value={login}
                        onChange={(e) => setLogin(e.target.value)}
                        required
                    />
                    <input
                        type="password"
                        placeholder="Пароль"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                    <button type="submit">{isLogin ? 'Войти' : 'Зарегистрироваться'}</button>
                </form>
                <button onClick={() => setIsLogin(!isLogin)}>
                    {isLogin ? 'Нет аккаунта? Регистрация' : 'Есть аккаунт? Вход'}
                </button>
            </div>
        </div>
    );
};

export default AuthModal;
