import React from 'react'
import styled from "styled-components"

function Detail() {
  return (
    <Container>
      <Background>
        <img src="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/568A70A0FCFC78ECDAACF5206A6BBC677CCF1D70CA0E7AFB9DC97BEFB9F51832/scale?width=1440&aspectRatio=1.78&format=jpeg" />
      </Background>
      <ImageTitle>
        <img src="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/55AE4EC95D846A9CF7EA97B970AD5A3A0BF2F6B8E68E631DB6D91D85A6790C2E/scale?width=1440&aspectRatio=1.78&format=png" />
      </ImageTitle>
      <Controls>
        <PlayButton>
          <img src="/images/play-icon-black.png" />
          <span>PLAY</span>
        </PlayButton>
        <TrailerButton>
          <img src="/images/play-icon-white.png" />
          <span>Trailer</span>
        </TrailerButton>

        <AddButton>
          <span>+</span>
        </AddButton>
        <GroupWatchButton>
          <img src="/images/group-icon.png" />
        </GroupWatchButton>
        
      </Controls>
      <Subtitle>
        Science Fiction, Comedy, Super Hero, Action-Adventure
      </Subtitle>
      <Description>
      Scott Lang grapples with his choices as both a Super Hero and a father. As he struggles to balance his home life with his responsibilities as Ant-Man, he’s confronted with an urgent new mission and must once again put on the suit and fight alongside the Wasp.
      </Description>
    </Container>
  )
}

export default Detail
const Container = styled.div`
  min-height: calc(100vh - 70px);
  padding: 0 calc(3.5vw + 5px);
  position: relative;
`
const Background = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  z-index: -1;
  opacity: 0.8;
 
  img {
    width: 100%;
    height: 100%;    
    object-fit: cover;
  
  }
`
const ImageTitle = styled.div`
  height: 30vh;
  min-height: 170px;
  width: 35vw;
  min-widht: 200px;
  margin-top: 200px;
  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }

`
const Controls = styled.div`
  display: flex;
  align-items: center;
`

const PlayButton = styled.button`
  border-radius: 4px;
  font-size: 15px;
  padding: 0px 24px;
  margin-right: 22px;
  display: flex;
  align-items: center;
  height: 56px;
  background: rgb(249, 249,249);
  border: none;
  letter-spacing: 1.8px;
  cursor: pointer;

  &:hover {
    background: rgb(198, 198,198);
  }
`

const TrailerButton = styled(PlayButton)`
  background: rgb(0,0,0,0.3);
  border: 1px solid rgb(249, 249, 249);
  color: rgb(249, 249, 249);
  text-transform: uppercase;

`

const AddButton = styled.button`
  margin-right: 16px;
  width: 44px;
  height: 44px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  border: 2px solid white;
  background-color: rgba(0,0,0,0.6);
  cursor: pointer;
  span {
    font-size: 30px;
    color:white;
  }
`

const GroupWatchButton = styled(AddButton)`
  background: black;
`
const Subtitle = styled.div`
  color: rgb(249, 249, 249);
  font-size: 15px;
  min-height: 20px;
  margin-top: 26px;
`
const Description = styled.div`
  line-height: 1.4;
  font-size: 20px;
  margin-top: 16px;
  color: rgb(249, 249, 249);
  max-width: 760px;

`