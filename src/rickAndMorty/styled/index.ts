import styled from 'styled-components';
import { up } from 'styled-breakpoints';

const itemSize = '250px';
const borderRadius = '8px';

export const AppContainer = styled.div`
  background-color: #3a373b;
  font-family: Verdana, Helvetica, sans-serif;
  min-height: 100vh;
  padding: 1rem;
`;

export const ListStyled = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(${itemSize}, 1fr));
  grid-auto-rows: ${itemSize};
  grid-gap: 1rem;
  list-style: none;
  padding: 0;

  ${up('tablet')} {
    grid-template-columns: repeat(auto-fit, minmax(${itemSize}, 400px));
    place-content: center;
  }
`;

const seasonColors = ['#97ce4c', '#49beb7', '#ff5959', '#a56cc1'];

interface ItemStyledProps {
  imgSrc: string;
  season: number;
}
export const ItemStyled = styled.li`
  background: url(${(props: ItemStyledProps) => props.imgSrc}) 50% no-repeat;
  background-size: cover;
  border-radius: ${borderRadius};
  box-shadow: rgba(0, 0, 0, 0.2) 0px 3px 3px -2px, rgba(0, 0, 0, 0.14) 0px 3px 4px 0px,
    rgba(0, 0, 0, 0.12) 0px 1px 8px 0px;

  display: flex;
  flex-direction: column-reverse;
  position: relative;
  text-decoration: none;

  & > div {
    align-items: center;
    background: rgba(0, 0, 0, 0.75);
    border-radius: 0 0 ${borderRadius} ${borderRadius};
    display: flex;
    justify-content: space-between;

    p {
      color: ${props => seasonColors[props.season - 1]};
      margin: 0;
      padding: 1rem 0.5rem;
      overflow: hidden;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }

    & > div {
      background-color: ${props => seasonColors[props.season - 1]};
      color: #fff;
      padding: 0 0.5rem;
      height: 100%;
      display: flex;
      flex-direction: column;
      justify-content: center;

      div:first-child {
        font-weight: 700;
      }
    }
  }

  svg {
    position: absolute;
    right: 0.5rem;
    top: 0.5rem;
    width: 26px;
    height: auto;
    cursor: pointer;
  }
`;

export const ContainerCenter = styled.div`
  width: 100vw;
  height: 100vh;
  display: grid;
  place-items: center;
`;
