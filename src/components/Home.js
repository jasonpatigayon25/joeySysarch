import React from "react";
import {useNavigate} from "react-router-dom";
import {
  MDBContainer,
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarNav,
  MDBNavbarItem,
  MDBNavbarLink,
  MDBFooter,
} from "mdb-react-ui-kit";


function Home() {
 
  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate("/");
  };
  
  const handleButtonSingup = () => {
    navigate("/change");
  };

  const handleDelete = () => {
    navigate("/delete");
  };

  const handleUpdate = () => {
    navigate("/books");
  };

  const backgroundStyle = {
    backgroundImage: 'url("https://www.columbusfamilylaw.org/wp-content/uploads/2019/05/shutterstock_344348006.jpg")',
    backgroundSize: "cover",
    backgroundPosition: "center",
    height: "calc(100vh - 60px)", 
    backgroundColor: "yellow",
  };

  return (
    <div className="homepage">
      <MDBNavbar expand="lg" dark bgColor="dark">
        <MDBContainer>
          <MDBNavbarBrand href="/">Div-ide App</MDBNavbarBrand>
          <MDBNavbarNav className="justify-content-end">
            <MDBNavbarItem>
              <MDBNavbarLink onClick={handleDelete}>Delete Account</MDBNavbarLink>
            </MDBNavbarItem>
            <MDBNavbarItem>
            <MDBNavbarLink onClick={handleButtonSingup}>Update Account</MDBNavbarLink>
            </MDBNavbarItem>
            <MDBNavbarItem>
              <MDBNavbarLink onClick={handleUpdate}>Div-ide</MDBNavbarLink>
            </MDBNavbarItem>
            <MDBNavbarItem>
              <MDBNavbarLink onClick={handleButtonClick}>Logout</MDBNavbarLink>
            </MDBNavbarItem>
          </MDBNavbarNav>
        </MDBContainer>
      </MDBNavbar>

      <div style={backgroundStyle}>
      </div>

      <MDBFooter backgroundColor="light" className="text-center py-3">
        <MDBContainer>
          <p className="mb-0">
            &copy; 2023 Div-ide App. All rights reserved. 
          </p>
        </MDBContainer>
      </MDBFooter>
    </div>
  );
}

export default Home;
