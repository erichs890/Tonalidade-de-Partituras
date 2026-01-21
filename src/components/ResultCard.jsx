
import React from 'react';

const ResultCard = ({ data }) => {
    if (!data) return null;

    return (
        <div className="card fade-in">
            <div className="card-content">
                <div className="card-header">
                    <h2 className="title-key">{data.major}</h2>
                    <span className="subtitle-key">{data.minor}</span>
                </div>

                <div className="data-grid">
                    <div className="data-box">
                        <span className="data-label">Acidentes</span>
                        <div className="data-value-large flex-center">
                            <span className="accidentals-count">{data.accidentals}</span>
                            <span className="accidentals-type">{data.type === 'sharp' ? '♯' : '♭'}</span>
                        </div>
                        <div className="accidentals-list">
                            {data.accidentals === 0 ? 'Naturais' : data.list.join(' • ')}
                        </div>
                    </div>
                </div>

                <div className="sections-container">
                    <div className="section-block">
                        <span className="section-label">Escala</span>
                        <div className="scale-visual">
                            {data.scale.map((note, index) => (
                                <div key={index} className="note-group">
                                    <span className="note-name">{note}</span>
                                    <span className="note-cifra">{data.scaleCifra[index]}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="section-block harmonic-field-block">
                        <span className="section-label">Campo Harmônico</span>
                        <div className="chords-visual">
                            {data.harmonicField.map((chord, index) => (
                                <div key={index} className="chord-badge">
                                    <span className="degree-label">{['I', 'ii', 'iii', 'IV', 'V', 'vi', 'vii°'][index]}</span>
                                    <span className="chord-name">{chord}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ResultCard;
