import React, {useState, useEffect} from 'react'
import styled from 'styled-components'
import Profile from './Profile'
import axios from 'axios';

const ProfilesContainer = styled.div`
    width: 100%;
    height: 100%;
    padding: 25px;
    max-width: 900px;
    margin: 40px auto;
`;

const HeaderTitle = styled.h1`
    color: #8A99C0;
`


const Profiles = () => {

    const [isLoading, setIsLoading] = useState(true)
    const [profiles, setProfiles] = useState({})

    useEffect(() => {
        setIsLoading(true);
        const fetchData = async () => {
            try {
                const { data } = await axios.get('https://json-placeholder-api.now.sh/api/profiles')
                setProfiles(data.default)
                setIsLoading(false)
                
            } catch (error) {
                console.log(error);
            }
        }

        fetchData();
        
        
    }, [])


    let loadingProfiles = [];

    for (let i = 0; i < 10; i++) {
        loadingProfiles.push(<Profile loading={true} key={i} />)
    }

    if (isLoading) {
        return (
            <ProfilesContainer>
                <HeaderTitle>Profiles</HeaderTitle>
                {loadingProfiles}
            </ProfilesContainer>
        )
    }

    return (
        <ProfilesContainer>
            <HeaderTitle>Profiles</HeaderTitle>
            {profiles.profiles.map(profile => (
                <Profile data={profile} key={profile.id} />
            ))}
        </ProfilesContainer>
    )
}

export default Profiles
