import React, { useEffect } from "react";
import styled from "styled-components";
import { Outlet, NavLink, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import WidgetsSharpIcon from '@mui/icons-material/WidgetsSharp';
import TocSharpIcon from '@mui/icons-material/TocSharp';
import GroupSharpIcon from '@mui/icons-material/GroupSharp';
import LogoutSharpIcon from '@mui/icons-material/LogoutSharp';


const Dashboard = () => {
    const navigate = useNavigate();
    const auth = useSelector((state) => state.auth);


    useEffect(() => {
        if (!auth.isAdmin) return navigate('/not-found');
        document.title = "Tableau de bord"
    })


    return (
        <StyledDashboard>
            <SideNav>
                {/* <NavLink
                    className={({ isActive }) =>
                        isActive ? "link-active" : "link-inactive"
                    }
                    to="/admin/summary"
                >
                    <h3>
                        <WidgetsSharpIcon fontSize="small" />
                        Dashboard
                    </h3>
                </NavLink> */}

                <a href="/admin/summary" style={{ borderBottomColor: 'red' }}>

                    <h3>Dashboard</h3>
                </a>

                <span style={{ color: "white", marginBottom: '1.5rem' }}>{auth.email}</span>

                <div style={{ borderBottom: '2px solid red', marginBottom: '1.45rem' }}></div>
                <NavLink
                    className={({ isActive }) =>
                        isActive ? "link-active" : "link-inactive"
                    }
                    to="/admin/products"
                >
                    <WidgetsSharpIcon fontSize="small" />&nbsp;
                    Produits
                </NavLink>
                <NavLink
                    className={({ isActive }) =>
                        isActive ? "link-active" : "link-inactive"
                    }
                    to="/admin/orders"
                >
                    <TocSharpIcon fontSize="small" />&nbsp;
                    Commandes
                </NavLink>
                <NavLink
                    className={({ isActive }) =>
                        isActive ? "link-active" : "link-inactive"
                    }
                    to="/admin/categories"
                >
                    <TocSharpIcon fontSize="small" />&nbsp;
                    Categories
                </NavLink>
                <NavLink
                    className={({ isActive }) =>
                        isActive ? "link-active" : "link-inactive"
                    }
                    to="/admin/users"
                >
                    <GroupSharpIcon fontSize="small" /> &nbsp;
                    Clients
                </NavLink>
                <NavLink
                    className={({ isActive }) =>
                        isActive ? "link-active" : "link-inactive"
                    }
                    to="/admin/marks"
                >
                    <GroupSharpIcon fontSize="small" /> &nbsp;
                    Marques
                </NavLink>
                <div style={{ borderBottom: '2px solid red', marginBottom: '1.45rem' }}></div>

                <a href="/" style={{ borderBottomColor: 'red' }}>
                    <LogoutSharpIcon fontSize="small" />&nbsp;
                    Retourner au site
                </a>

            </SideNav>

            <Content>
                <Outlet />

            </Content>
        </StyledDashboard>
    );
};

export default Dashboard;

const StyledDashboard = styled.div`
  display: flex;
  height: 100%;
`;

const SideNav = styled.div`
  border-right: 1px solid gray;
  height: calc(100vh - 70px);
  position: fixed;
  overflow-y: auto;
  width: 200px;
  display: flex;
  flex-direction: column;
  background-color: #000000;
  padding: 1rem;
  h3 {
    margin: 0 0 1rem 0;
    padding: 0;
    text-transform: uppercase;
    font-size: 17px;
    color: rgb(255, 255, 255);
  }
  a {
    text-decoration: none;
    margin-bottom: 1rem;
    font-size: 14px;
    color: rgb(255, 255, 255);
  }

  a:hover{
      background-color: red;
      transition: all 0.5s 
  }
`;

const Content = styled.div`
  margin-left: 200px;
  padding: 2rem 3rem;
  width: 100%;
`;