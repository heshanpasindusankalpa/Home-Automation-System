import React, { useState } from 'react';

const UserForm = () => {
    const [id, setId] = useState(0);
    const [name, setName] = useState('');

    const handleIdChange = (e) => {
        setId(e.target.value);
    };

    const handleNameChange = (e) => {
        setName(e.target.value);
    };

    const handleSubmit = () => {
        console.log('Form Submitted:', { id, name });
    };

    return (
        <div
            style={{
                backgroundColor: '#ffffff',
                marginBottom: '30px',
                padding: '20px',
                borderRadius: '8px',
                boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
            }}
        >
            <h1 style={{ color: '#000000', textAlign: 'center' }}>UserForm</h1>

            <div style={{ marginBottom: '20px', display: 'flex', alignItems: 'center' }}>
                <label
                    htmlFor="id"
                    style={{
                        color: '#000000',
                        marginRight: '20px',
                        fontSize: '16px',
                        width: '100px',
                        textAlign: 'right',
                    }}
                >
                    Id:
                </label>
                <input
                    type="number"
                    id="id"
                    name="id"
                    style={{
                        width: '400px',
                        padding: '8px',
                        border: '1px solid #ccc',
                        borderRadius: '4px',
                    }}
                    value={id}
                    onChange={handleIdChange}
                />
            </div>

            <div style={{ marginBottom: '20px', display: 'flex', alignItems: 'center' }}>
                <label
                    htmlFor="name"
                    style={{
                        color: '#000000',
                        marginRight: '20px',
                        fontSize: '16px',
                        width: '100px',
                        textAlign: 'right',
                    }}
                >
                    Name:
                </label>
                <input
                    type="text"
                    id="name"
                    name="name"
                    style={{
                        width: '400px',
                        padding: '8px',
                        border: '1px solid #ccc',
                        borderRadius: '4px',
                    }}
                    value={name}
                    onChange={handleNameChange}
                />
            </div>

            <div style={{ textAlign: 'center' }}>
                <button
                    style={{
                        backgroundColor: '#00c6e6',
                        color: '#000000',
                        padding: '10px 20px',
                        border: 'none',
                        borderRadius: '4px',
                        cursor: 'pointer',
                        fontSize: '16px',
                    }}
                    onMouseOver={(e) => (e.target.style.opacity = '0.7')}
                    onMouseOut={(e) => (e.target.style.opacity = '1')}
                    onClick={handleSubmit}
                >
                    Submit
                </button>
            </div>
        </div>
    );
};

export default UserForm;
