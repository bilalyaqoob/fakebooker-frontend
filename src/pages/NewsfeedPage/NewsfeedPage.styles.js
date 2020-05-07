import styled from "styled-components";

export const InfoContainer = styled.div`
  display: flex;
  height: 100%;
  width: 100%;
  justify-content: flex-end;
  padding-top: 8px;
  font-family: Roboto;
`;

export const PostContainer = styled.div`
  display: flex;
  flex-basis: 75%;
  padding: 0 32px;
  justify-content: center;

  @media only screen and (max-width: 992px) {
    flex-basis: 100%;
    padding: 0;
    width: 100%;
  }
`;
export const PostsSection = styled.div`
  width: 680px;
  @media only screen and (max-width: 767px) {
    width: 100%;
    margin: 0 8px;
  }
`;

export const ContactsSidebar = styled.div`
  display: none;
  @media only screen and (min-width: 992px) {
    display: flex;
    flex-basis: 25%;
    margin-top: 50px;
    max-width: 320px;
  }
`;
export const ContactsContainer = styled.div`
  position: fixed;
  max-width: 320px;
  width: 320px;
  @media only screen and (max-width: 1250px) {
    width: 250px;
  }
`;

export const ContactsHeader = styled.div`
  display: flex;
  margin-right: 18px;
  margin-bottom: 16px;
`;

export const ContactsHeading = styled.h1`
  font-size: 1.7rem;
  font-weight: medium;
  margin-right: auto;
  color: ${(props) => props.theme.tertiaryText};
`;

export const ContactsBody = styled.div`
  display: flex;
  align-items: center;
  margin-right: 8px;
  padding: 8px;
  border-radius: 8px;
  cursor: pointer;

  &&:hover {
    background-color: ${(props) => props.theme.secondaryBackground};
  }
  &&:active {
    background-color: ${(props) => props.theme.secondaryHoverBackground};
  }
`;

export const ContactAvatar = styled.img`
  width: 36px;
  height: 36px;
  border-radius: 100%;
  object-fit: cover;
`;

export const ContactFullName = styled.h1`
  font-size: 1.5rem;
  margin-left: 12px;
  color: ${(props) => props.theme.secondaryText};
  font-weight: medium;
`;

export const NavbarSkeleton = styled.div`
  display: flex;

  svg {
    width: 100%;
    height: 58px;
    rect {
      width: 100%;
      height: 50px;
    }
  }
`;

export const PostSkeleton = styled.div`
  display: flex;
  margin-top: 20px;
  background: #fff;
  border-radius: 8px;
  padding: 13px;
  svg {
    width: 100%;
    height: 100%;
  }
`;

export const ContactSkeleton = styled.div`
  padding: 8px;
`;