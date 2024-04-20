import { Outlet } from "react-router-dom";
import NavBar from "../components/NavBar";
import { Grid, GridItem } from "@chakra-ui/react";
import Sidebar from "../components/SideBar";
export default function RootLayout() {
  return (
    <Grid templateColumns="repeat(6, 1fr)" bg="gray.100" minH="100vh">
      <GridItem
        as="aside"
        colSpan={{ base: 6, lg: 2, xl: 1 }}
        bg="brand.600"
        minHeight={{ lg: "100vh" }}
        p={{ base: "20px", xl: "30px" }}
      >
        <Sidebar />
      </GridItem>
      <GridItem as="main" colSpan={{ base: 6, lg: 4, xl: 5 }} p="40px">
        <NavBar />
        <Outlet />
      </GridItem>
    </Grid>
  );
}
