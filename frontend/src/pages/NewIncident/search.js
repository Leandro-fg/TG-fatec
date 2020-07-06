import React, { useState, useEffect } from "react";
import Api from '../../services/api';

import "./styles.css";

export default function Search() {
    const [incidents, setIncidents] = useState([]);
    const [loading, setLoading] = useState(false);
    const [search, setSearch] = useState("");
    const [filteredCountries, setFilteredCountries] = useState([]);
    const ongId = localStorage.getItem('ongID');

    useEffect(() => {
        Api.get('profile', {
            headers: {
                Authorization: ongId,
            }
        }).then(res => {
            setIncidents(res.data);
            setLoading(false);
        })
    }, [ongId]);

    useEffect(() => {
        setFilteredCountries(
            incidents.filter(incident => (incident.date).includes(search.toLowerCase()))
        );
    }, [search, incidents]);

    if (loading) {
        return <p>Loading countries...</p>;
    }

    return (
        <div className="App">
            <input
                type="text"
                placeholder="Search Countries"
                onChange={e => setSearch(e.target.value)}
            />
            
        </div>
    );

}

