import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import Api from '../../services/api';
import { FiArrowLeft } from 'react-icons/fi';
import './styles.css';
import Logo from '../../assets/logo.svg';

export default function Newincident() {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [value, setValue] = useState('');
    const [creation_date, setCreation] = useState('');
    const [date, setDate] = useState('');

    const ongId = localStorage.getItem('ongID');

    const history = useHistory();

    async function HandleNewIncident(e) {
        e.preventDefault();

        console.log(HandleNewIncident)

        const data = {
            title,
            description,
            value,
            creation_date,
            date
        };

        try {
            await Api.post('incidents', data, {
                headers: {
                    Authorization: ongId,
                }
            })
            history.push('/profile');
        } catch (err) {
            alert('erro ao criar um novo caso, tente novamente.')
        }
    }

    return (
        <div className="container-new-incident">
            <div className="content">
                <section>
                    <img src={Logo} alt="Be The Hero" />

                    <h1>Cadastrar novo caso</h1>
                    <p>Descreva o caso detalhadamente para encontrar um herói para resolver isso.</p>

                    <Link className="back-link" to="/profile">
                        <FiArrowLeft size={16} color='#00cc66' />
                        Voltar para home
                    </Link>
                </section>
                <form onSubmit={HandleNewIncident}>
                    <input
                        placeholder="Titulo do caso"
                        value={title}
                        onChange={e => setTitle(e.target.value)}
                    />
                    <textarea
                        placeholder="Descrição"
                        value={description}
                        onChange={e => setDescription(e.target.value)}
                    />
                    <input
                        placeholder="Valor em reais"
                        value={value}
                        onChange={e => setValue(e.target.value)}
                    />
                    <div className="checboxContainer" >
                        <span >Deseja definir uma data final?</span>
                        <input 
                            type="checkbox"
                            onChange={e => setCheckbox(!checkbox)}
                        />
                    </div>
                    {checkbox ? 
                    <input
                        type="date"
                        placeholder="Data final"
                        value={dataFinal}
                        onChange={e => setDate(e.target.value)}
                    />
                    : null }   

                    <button className="button" type="submit">Cadastrar</button>
                </form>
            </div>
        </div>
    )
}