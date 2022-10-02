import Navigation from "../Component/Navigation";
import Link from "next/link";
import styles from "../../styles/practice.module.css";
import "antd/dist/antd.css";
import Image from "next/image";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import banner1 from "../../public/practicebaner1.png";
import banner2 from "../../public/practicebaner2.png";
import list1 from "../../public/list1.png";
import list2 from "../../public/list2.png";
import list3 from "../../public/list3.png";
import list4 from "../../public/list4.png";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import * as React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Divider from "@mui/material/Divider";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import profile1 from "../../public/sayedtabish.png"
import profile2 from "../../public/abiha.jpeg"
import profile3 from "../../public/profilepic2.jpeg"


const Item = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(),
  textAlign: "center",
}));
const Practice = () => {
  return (
    <>
      <Navigation />
      <div className={styles.head}>
        <Box sx={{ flexGrow: 0 }}>  
          <Grid container spacing={1}>
            <Grid item xs={9}>
              <Item>
                <Container className={styles.Container} xs>
                  <Row>
                    <Col>
                      <Image
                        className={styles.banner1}
                        src={banner1}
                        alt="banner1"
                      />
                    </Col>
                    <Col>
                      <Image
                        className={styles.banner2}
                        src={banner2}
                        alt="banner2"
                      />
                    </Col>
                  </Row>
                  <Row>
                    <Col className={styles.Col} sm>
                      <figure>
                        <Image
                          className={styles.list}
                          src={list1}
                          alt="list1"
                        />
                      </figure>
                      <p className={styles.listtitle}>SQL Study Plan</p>
                    </Col>
                    <Col className={styles.Col} sm>
                      <Image className={styles.list} src={list2} alt="list2" />
                      <p className={styles.listtitle}>Ultimate DP Study Plan</p>
                    </Col>
                    <Col className={styles.Col} sm>
                      <Image className={styles.list} src={list3} alt="list3" />
                      <p className={styles.listtitle}>
                        Programming Skills Study Plan
                      </p>
                    </Col>
                    <Col className={styles.Col} sm>
                      <Image className={styles.list} src={list4} alt="list4" />
                      <p className={styles.listtitle}>
                        Graph Theory Study Plan
                      </p>
                    </Col>
                  </Row>
                </Container>
              </Item>
            </Grid>
            <Grid item xs={3}>
              <Item>
                <div className={styles.MUlist}>
                  <List
                    sx={{
                      width: "100%",
                      maxWidth: 360,
                      bgcolor: "background.paper",
                    }}
                  >
                    <ListItem alignItems="flex-start">
                      <ListItemAvatar>
                        <Avatar
                          alt="Sayed Tabish"
                          src={profile1}
                        />
                      </ListItemAvatar>
                      <ListItemText
                        primary="thought of the day!"
                        secondary={
                          <React.Fragment>
                            <Typography
                              sx={{ display: "inline" }}
                              component="span"
                              variant="body2"
                              color="text.primary"
                            >
                              Sayed Tabish
                            </Typography>
                            {
                              " — Experience is the name everyone gives to their mistakes.…"
                            }
                          </React.Fragment>
                        }
                      />
                    </ListItem>
                    <Divider variant="inset" component="li" />
                    <ListItem alignItems="flex-start">
                      <ListItemAvatar>
                        <Avatar
                          alt="MD asif"
                          src="/static/images/avatar/2.jpg"
                        />
                      </ListItemAvatar>
                      <ListItemText
                        primary="Code it.."
                        secondary={
                          <React.Fragment>
                            <Typography
                              sx={{ display: "inline" }}
                              component="span"
                              variant="body2"
                              color="text.primary"
                            >
                              MD.Asif
                            </Typography>
                            {" — In order to be irreplaceable, one must always be different…"}
                          </React.Fragment>
                        }
                      />
                    </ListItem>
                    <Divider variant="inset" component="li" />
                    <ListItem alignItems="flex-start">
                      <ListItemAvatar>
                        <Avatar
                          alt="Abiha"
                          src="/static/images/avatar/3.jpg"
                        />
                      </ListItemAvatar>
                      <ListItemText
                        primary="Random thought"
                        secondary={
                          <React.Fragment>
                            <Typography
                              sx={{ display: "inline" }}
                              component="span"
                              variant="body2"
                              color="text.primary"
                            >
                              Abiha
                            </Typography>
                            {
                              " — Java is to JavaScript what car is to Carpet…"
                            }
                          </React.Fragment>
                        }
                      />
                    </ListItem>
                  </List>
                </div>
              </Item>
            </Grid>
          </Grid>
        </Box>
      </div>
    </>
  );
};

export default Practice;
