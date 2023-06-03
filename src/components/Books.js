import React from 'react';
import { MDBFooter, MDBContainer, MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavbarItem, MDBNavbarLink } from "mdb-react-ui-kit";

function Books() {
  const backgroundStyle = {
    backgroundImage: "url ('https://media.istockphoto.com/id/545456068/photo/family-court.jpg?s=612x612&w=0&k=20&c=zmUsRHj-IGx486EZmj_DTbG_v1z4JcbVT4agl2CNOGk=')",
    backgroundSize: "cover",
    backgroundPosition: "center",
    minHeight: "100vh",
    backgroundColor: "yellow",
    fontFamily: "Roboto, sans-serif",
  };

  const footerStyle = {
    backgroundColor: "white",
  };

  return (
    <div style={backgroundStyle}>
      <MDBNavbar expand="lg" light bgColor="white">
        <MDBContainer>
          <MDBNavbarBrand href="#">
            Div-ide Store
          </MDBNavbarBrand>
          <MDBNavbarNav className="justify-content-end">
            <MDBNavbarItem>
              <MDBNavbarLink href="/home">Home</MDBNavbarLink>
            </MDBNavbarItem>
            <MDBNavbarItem>
              <MDBNavbarLink href="">Account</MDBNavbarLink>
            </MDBNavbarItem>
          </MDBNavbarNav>
        </MDBContainer>
      </MDBNavbar>
      
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <img src="https://imgv2-2-f.scribdassets.com/img/word_document/224266636/original/432x574/151d1d578c/1677507992?v=1" alt="Placeholder Image" />
          </div>
          <div className="col-md-6">
            <h1>About This Div-ide App</h1>
            <p style={{ height: 'auto', width: '400px' }}>
             The first step towards reaching out for support is accepting that you need it. And there is absolutely no shame in it. Everyone needs help at some point. By building a support system, you know it will be there when you need it.
            </p>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <img src="https://imgv2-1-f.scribdassets.com/img/word_document/470660518/original/432x574/bdfb32381a/1684158681?v=1" alt="Placeholder Image" />
          </div>
          <div className="col-md-6">
            <h1>About This Div-ide App</h1>
            <p style={{ height: 'auto', width: '400px' }}>
            Separating from your partner can be an emotional and traumatic time and can be hard on your finances. You may feel overwhelmed as there are many things to resolve. Divide provides you guidance and a step-by-step approach to enable you to financially separate without the use of lawyers.            </p>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <img src="https://imgv2-1-f.scribdassets.com/img/word_document/644543816/original/432x574/db305518fa/1684505897?v=1" alt="Placeholder Image" />
          </div>
          <div className="col-md-6">
            <h1>About This Div-ide App</h1>
            <p style={{ height: 'auto', width: '400px' }}>
            We have helped and empowered many clever couples who see the benefit of not having their shared wealth disappear in expensive, ongoing and unnecessary legal fees.
            If at any time during the process you need assistance resolving parenting matters we can provide you with the appropriate contacts as we can not provide you with legal advice in this regard. If you are parents, it is important to understand how you will provide and afford to care for a child / children of the relationship. Likewise, if you need emotional support, we can provide you with the appropriate contacts, for you to consider.
            </p>
          </div>
        </div>
      </div>
      <MDBFooter className="text-center py-3" style={footerStyle}>
        <MDBContainer>
          <p className="mb-0">
            &copy; 2023 Div-ide App. All rights reserved.
          </p>
        </MDBContainer>
      </MDBFooter>
    </div>
  );
}

export default Books;
