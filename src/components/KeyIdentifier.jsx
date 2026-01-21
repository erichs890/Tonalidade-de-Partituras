
import React, { useState, useEffect } from 'react';
import { getMusicData } from '../data/musicData';

const KeyIdentifier = ({ onIdentify }) => {
    const [type, setType] = useState(null); // 'sharp' or 'flat'
    const [count, setCount] = useState('');

    useEffect(() => {
        if (type && count !== '') {
            const num = parseInt(count);
            if (!isNaN(num) && num >= 0 && num <= 7) {
                const result = getMusicData(type, num);
                if (result) {
                    onIdentify(result);
                }
            } else {
                onIdentify(null);
            }
        }
    }, [type, count, onIdentify]);

    return (
        <div className="identifier-container">
            <p className="section-title">Ou descubra pela armadura de clave</p>
            <p style={{ marginBottom: '1rem', color: 'var(--text-secondary)' }}>Sua partitura apresenta sustenidos ou bemóis?</p>

            <div className="radio-group">
                <label className="radio-label">
                    <input
                        type="radio"
                        name="accidental"
                        value="sharp"
                        checked={type === 'sharp'}
                        onChange={() => setType('sharp')}
                    />
                    Sustenidos (#)
                </label>
                <label className="radio-label">
                    <input
                        type="radio"
                        name="accidental"
                        value="flat"
                        checked={type === 'flat'}
                        onChange={() => setType('flat')}
                    />
                    Bemóis (b)
                </label>
            </div>

            {type && (
                <div className="fade-in" style={{ maxWidth: '300px', margin: '0 auto' }}>
                    <p style={{ marginBottom: '0.5rem' }}>Quantos {type === 'sharp' ? 'sustenidos' : 'bemóis'}?</p>
                    <input
                        type="number"
                        min="0"
                        max="7"
                        placeholder="0 a 7"
                        value={count}
                        onChange={(e) => setCount(e.target.value)}
                    />
                </div>
            )}
        </div>
    );
};

export default KeyIdentifier;
