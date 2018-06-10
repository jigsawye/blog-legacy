import styled from 'styled-components';

const ArchiveWrapper = styled.div`
  border-bottom: 1px solid rgb(234, 234, 234);
  padding: 30px 0px;

  &::last-of-type {
    border-bottom: 0;
  }

  &:hover {
    background: rgb(250, 250, 250);
  }
`;

export default ArchiveWrapper;
