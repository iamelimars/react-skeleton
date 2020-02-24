import React from 'react'
import styled from 'styled-components'

import { Skeleton } from '../LoadingSkeletons'


const Container = styled.div`
    display: flex;
    flex-direction: row;
    margin: 40px 0px;
    

`

const TextWrapper = styled.div`
    
`

const ImageContainer = styled.div`
  width: 50px;
  height: 50px;
  margin-right: 20px;
`;

const Name = styled.div`
  width: 300px;
  height: 20px;
  color: #8A99C0;
`;

const Username = styled.div`
  width: 300px;
  height: 20px;
  margin-top: 5px;
  color: #a5a5a5;
`;

const Email = styled.div`
  width: 300px;
  height: 20px;
  margin-top: 5px;
  color: #a5a5a5;
`;

const Image = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 25px;
  box-shadow: 0px 2px 6px -1px rgba(0, 0, 0, 0.31);
`


const Profile = ({loading, data}) => {
  if (loading === true) {
    return (
      <Container>
          <ImageContainer>
              <Skeleton borderRadius={25} />
          </ImageContainer>
          <TextWrapper>
              <Name><Skeleton borderRadius={20} /></Name>
              <Username><Skeleton borderRadius={20} /></Username>
              <Email><Skeleton borderRadius={20} /></Email>
          </TextWrapper>
      </Container>

      )
  }
  if (data) {
    return (
        <Container>
            <ImageContainer>
                <Image src={data.picture} />
            </ImageContainer>
            <TextWrapper>
                <Name>{data.name}</Name>
                <Username>{data.username}</Username>
                <Email>{data.email}</Email>
            </TextWrapper>
        </Container>
    )
  }

  return null;
}

export default Profile
