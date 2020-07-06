import React, { useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import Api from '../../services/api';
import './styles.css';
import Logo from '../../assets/logo.svg';
import { FiPower, FiTrash2 } from 'react-icons/fi';
import Search from '../NewIncident/search'

export default function Profile() {
    const [incidents, setIncidents] = useState([]);
    const ongId = localStorage.getItem('ongID');
    const ongName = localStorage.getItem('ongName');

    const history = useHistory();

    useEffect(() => {
        Api.get('profile', {
            headers: {
                Authorization: ongId,
            }
        }).then(res => {
            setIncidents(res.data);
        })
    }, [ongId]);

    async function handleDeleteIncident(id) {
        try {
            await Api.delete(`incidents/${id}`, {
                headers: {
                    Authorization: ongId,
                }
            });

            setIncidents(incidents.filter(incident => incident.id !== id));

        } catch (err) {
            alert('Erro ao deletar o caso, tente novamente.');
        }
    }

    function handleLogout() {
        localStorage.clear();

        history.push('/');
    }


    function maior() {
        const finaldate = incidents.map(incident => (incident.date))
        const array1 = incidents.map(incident => (incident))[0]
        const array2 = incidents.map(incident => (incident))[1]
        const id = incidents.map(incident => (incident.id))
        const maior = finaldate.reverse()
        // console.log(array1.date)
        // console.log(array2.date);
        // console.log(finaldate)
        // var principal = document.getElementsByClassName("list-item")[0]; // div principal
        // var lista = principal.getElementsByClassName("teste")[0]; // pega os itens da lista
        // var lista2 = principal.getElementsByClassName("teste")[1];
        // console.log(lista.value(lista))
        // console.log(lista2)
        // // let teste = lista.innerHtml

        if (array1.date < array2.date) {
            console.log('ta no grau')
            var principal = document.getElementsByTagName("li"); // div principal
            console.log(principal)
            // var lista = principal.getElementsByClassName("teste")[0]; 
            // var lista2 = principal.getElementsByClassName("teste")[1]; 
            // lista.insertBefore(lista2, lista.childNodes[1])
        } else {
            console.log('que c ta fazendo poha?')
        }
    }

    function menor() {
        const finaldate = incidents.map(incident => (incident.date))
        const menor = finaldate.sort()

        console.log(menor, 'menor')
        // console.log(finaldate.join(), 'normal')
        // if (menor.length > 0) {
        //     console.log('tem')
        //     let lista = document.getElementsByTagName('ul')[0];
        //     var itens = lista.getElementsByTagName('li');
        //     lista.removeChild(itens[2])
        // } else {
        //     console.log('nao tem')
        // }

    }



    return (
        <div className="container-profile">
            <header>
                <img src={Logo} alt="Be The Hero" />
                <span>Bem vinda, {ongName}</span>

                <Link className="button" to="/incidents/new">Cadastrar novo caso</Link>
                <button onClick={handleLogout} type="button">
                    <FiPower size={18} color="#00cc66" />
                </button>

                {/* <button onClick={() => maior()} type="button">
                    maior
                </button>

                <button onClick={() => menor()} type="button">
                    menor
                </button> */}
            </header>

            <h1>Casos cadastrados</h1>

            {/* <Search/> */}

            <ul>
                {incidents.map(incident => (
                    <li className="list-item" key={incident.id}>
                        console.({incident.id})
                        <strong>CASO:</strong>
                        <p>{incident.title}</p>

                        <strong>DESCRIÇÂO:</strong>
                        <p>{incident.description}</p>

                        <strong>VALOR:</strong>
                        <p>{Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(incident.value)}</p>

                        <strong>DATA INICIAL:</strong>
                        <p>{incident.created_at}</p>

                        <strong>DATA FINAL:</strong>
                        <p className="teste">{incident.date}</p>

                        <button onClick={() => handleDeleteIncident(incident.id)} type="button">
                            <FiTrash2 size={20} color="#a8a8b3" />
                        </button>
                    </li>
                ))
                }
            </ul>
        </div>
    )
}