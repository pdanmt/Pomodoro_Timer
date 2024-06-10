import styled from 'styled-components'

export const CounterStyles = styled.div`
  font-family: 'Roboto Mono', monospace;
  gap: 1rem;

  .numberOfCounter {
    width: 8rem;
    height: 12.375rem;
    background-color: ${(props) => props.theme.gray5};
    font-size: 10rem;
    border-radius: 8px;
    color: ${(props) => props.theme.gray1};
  }

  .pointsOfCounter {
    width: 4rem;
    height: 12.375rem;
    font-size: 10rem;
    margin: 0 auto;
    color: ${(props) => props.theme.green2};
  }

  @media (max-width: 780px) {
    gap: 5px;

    .numberOfCounter {
      font-size: 4rem;
      width: 3rem;
      height: 5rem;
    }

    .pointsOfCounter {
      font-size: 4rem;
      width: 2rem;
      height: 5rem;
    }
  }
`