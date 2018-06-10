import styled from 'styled-components';

const ArticleWrapper = styled.div`
  border-bottom: 1px solid rgb(234, 234, 234);
  padding: 50px 0px 40px;
  transition: background 200ms;

  &:first-of-type {
    border-top: 1px solid rgb(234, 234, 234);
  }

  &::last-of-type {
    border-bottom: 0;
  }

  &:hover {
    background: rgb(250, 250, 250);
  }
`;

export default ArticleWrapper;
