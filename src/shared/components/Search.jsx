import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import { isEmpty } from '../common/globalValidations';
import Loader from '../../lib/Loader';

const ParentDiv = styled.div`
  width: 50%;
`;

const SearchDiv = styled.div`
  display: block;
`;

const Label = styled.label`
  display: block;
  font-size: 20px;
  font-weight: bold;
`;

const Input = styled.input`
  width: -webkit-fill-available;
  font-size: 20px;
  padding: 10px;
`;

const List = styled.ul`
  list-style: none;
  outline: 1px solid #000;
  padding-inline-start: 0px;
`;

const Item = styled.li``;

const ItemDiv = styled.div`
  padding: 10px;
`;

const Title = styled.span`
  font-size: 18px;
  display: block;
`;

const Description = styled.span`
  font-size: 15px;
`;

const AnchorTag = styled.a`
  text-decoration-line: none;
  color: #000;
`;

const Separator = styled.div`
  background-color: #000000;
  height: 1px;
`;

const Search = () => {
  const [searchText, setSearchText] = useState('');
  const [debouncedSearchText, setDebouncedSearchText] = useState(searchText);
  const [searchItems, setSearchItems] = useState([]);
  const [showLoader, setShowLoader] = useState(false);

  useEffect(() => {
    const timeOutId = setTimeout(() => {
      setDebouncedSearchText(searchText);
    }, 1000);
    return () => {
      clearTimeout(timeOutId);
    };
  }, [searchText]);

  useEffect(() => {
    if (!debouncedSearchText) {
      setSearchItems([]);
      return;
    }
    (async () => {
      setShowLoader(true);
      const { data } = await axios.get('https://en.wikipedia.org/w/api.php', {
        params: {
          action: 'query',
          list: 'search',
          origin: '*',
          prop: 'info',
          srlimit: '5',
          format: 'json',
          srsearch: debouncedSearchText,
        },
      });
      if (!data) searchItems([]);
      setSearchItems(data?.query?.search);
      setShowLoader(false);
    })();
  }, [debouncedSearchText]);

  const onSearchChange = (e) => {
    setSearchText(e.target.value);
  };

  const LoadSearchItems = () => {
    if (isEmpty(searchItems)) return null;
    return (
      <List>
        {searchItems.map((x) => {
          return (
            <Item key={x.pageid}>
              <ItemDiv>
                <Title onClick={() => onTitleClick(pageid)}>
                  <AnchorTag
                    href={`https://en.wikipedia.org?curid=${x.pageid}`}
                  >
                    {x.title}
                  </AnchorTag>
                </Title>
                <Description dangerouslySetInnerHTML={{ __html: x.snippet }} />
              </ItemDiv>
              <Separator />
            </Item>
          );
        })}
      </List>
    );
  };

  return (
    <React.Fragment>
      <ParentDiv>
        <SearchDiv>
          <Label>Enter something!</Label>
          <Input
            placeholder="Search here..."
            onChange={(e) => onSearchChange(e)}
            value={searchText}
          />
        </SearchDiv>
        {showLoader ? <Loader /> : null}
        <LoadSearchItems />
      </ParentDiv>
    </React.Fragment>
  );
};

export default Search;
