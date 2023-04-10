import React, { useState } from 'react';
import { people } from "../data/Users";
import '../styles/SearchApp.css'


function SearchApp() {
    const [searchTerm, setSearchTerm] = useState('');

    const handleSearchTermChange = (event) => {
        setSearchTerm(event.target.value);
    };

    const filteredProfiles = people.filter(profile => {
        const fullName = `${profile.firstName} ${profile.lastName}`;
        return fullName.toLowerCase().includes(searchTerm.toLowerCase());
    });


    return (
        <>
            <div className='searchBar'>
                <input type="text" placeholder="Search by name..." value={searchTerm} onChange={handleSearchTermChange} className='Bar' />
            </div>

            <div className='profile'>

                {filteredProfiles.map(profile => (
                    <div key={profile.id}>
                        <div className='profileDisplay'>

                            <div className='userImage'>
                                <img src={profile.picture} alt={profile.firstName} />
                            </div>
                            <div className='userInfo'>
                                <p>{profile.id} <br /> <b>{profile.title + '.'}  {profile.firstName} {profile.lastName}</b></p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

        </>
    );
}

export default SearchApp;