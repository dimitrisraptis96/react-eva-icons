import React from "react";
import styled from "styled-components";

import SearchInput, { createFilter } from "react-search-input";

import Cards from "./Cards/Cards";
import Header from "../../UI/Header";

const Wrapper = styled.div`
  margin: 4em 2em;
`;

const SearchWrapper = styled(SearchInput)`
  margin: 1em;
  height: 52px;
  position: relative;

  :before {
    content: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA8AAAAPCAYAAAA71pVKAAAAAXNSR0IArs4c6QAAAQJJREFUKBWVkr2uQUEUhf3ET6GRaC5aFRoJKrf1BKpb8SwqovYGXkCj00k0QnRKEYkILYobvpUYmeMMyVnJl7P3mjN7Zu9zwiGv2qRFyMMSRrAFp6JPN8XzBj+wgDkUYAg7WINTYdwpDECxrRLJHeq2accdkgm8bzTvNAg2EDOGeUYI1KNO1gkuzTA1g8T7ojbn4ONQWPuHPWgeHmnzCqoe15tkSNPgPEAn68oVcOmA2XMtGK9FoE/VhOTTVNExqLCGZnxCv2pYauEC6lF0oQxX6IOvb7yX9NPEQafan+aPXDdQC18LsO6Tip5BBY6gIQaSbnMCFRCBZRcIvFkbsvCr4AFGOCxQy+JdGQAAAABJRU5ErkJggg==");
    display: block;
    position: absolute;
    width: 15px;
    z-index: 3;
    height: 15px;
    font-size: 20px;
    top: 7px;
    left: 16px;
    line-height: 32px;
    opacity: 0.6;
  }

  > input {
    width: 100%;
    border-radius: 16px;
    box-shadow: 0 20px 24px -18px rgba(0, 0, 0, 0.31);
    font-size: 18px;
    border: none;
    line-height: 22px;
    padding: 5px 10px 5px 45px;
    height: 45px;
    position: relative;
  }

  input:focus {
    outline: none;
  }
`;

const KEYS_TO_FILTERS = ["name"];

class PreviewIcons extends React.Component {
  state = {
    searchTerm: "",
  };

  searchUpdated = (searchTerm) =>
    this.setState({ isChanged: true, searchTerm });

  render() {
    const { isChanged, searchTerm } = this.state;
    const { icons, config } = this.props;

    const filteredIcons = isChanged
      ? []
      : icons.filter(createFilter(searchTerm, KEYS_TO_FILTERS));

    if (isChanged) this.setState({ isChanged: false });

    return (
      <Wrapper>
        <Header> Available Icons </Header>
        <SearchWrapper onChange={this.searchUpdated} />
        <Cards icons={filteredIcons} config={config} />
      </Wrapper>
    );
  }
}

export default PreviewIcons;
