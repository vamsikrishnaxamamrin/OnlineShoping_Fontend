import React, { useState } from 'react';
import styled from 'styled-components';
import Header from './Header.jsx';
import VideoPlayer from './VideoPlayer.jsx';
import VideoList from './VideoList.jsx';
import https from '../../shared/services/https';
import { YOUTUBE_SEARCH_API } from '../../shared/url';
import { KEY } from '../../shared/constant';
import { apiAction } from '../../shared/store/actions';
import axios from 'axios';
const Container = styled.div`
  display: block;
`;

const VieoContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const PlayerFlex = styled.div`
  flex-basis: 100%;
  height: 40vh;
  @media screen and (min-width: 768px) {
    flex: 3 3 70%;
    height: 60vh;
  }
`;

const PlayerListFlex = styled.div`
  flex-basis: 100%;
  @media screen and (min-width: 768px) {
    flex: 1 1 30%;
  }
`;

const YoutubeHomePage = () => {
  const [searchItems, setSearchItems] = useState([]);
  const onSearchTextChange = async (serchText) => {
    const data = {
      client: 'firefox',
      ds: 'yt',
      q: 'car',
    };
    const result = await https({
      url: 'http://suggestqueries.google.com/complete/search',
      method: 'POST',
      data,
    });

    console.log('result', result.json());
    // //setSearchItems(result?.data?.)
    // apiAction.set({ payload: result.data, apiName: 'search' });
    // console.log('result', result);
  };
  return (
    <React.Fragment>
      <Container>
        <Header
          onSearchTextChange={onSearchTextChange}
          searchItems={searchItems}
        />
        <VieoContainer>
          <PlayerFlex>
            <VideoPlayer />
          </PlayerFlex>
          <PlayerListFlex>
            <VideoList />
          </PlayerListFlex>
        </VieoContainer>
      </Container>
    </React.Fragment>
  );
};

export default YoutubeHomePage;
