import {
  Avatar,
  Button,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";

import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import EmailIcon from "@mui/icons-material/Email";
import HeroImage from "../components/HeroImage";

const About = () => {
  return (
    <Box component="div" sx={{ mx: {md: 6, sm: 2, xs: 0} }}>
      {/* <Card
        sx={{
          position: "relative",
          marginBottom: "20px",
          backgroundImage: 'url("images/static/about.jpg")',
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "300px",
          color: "white",
          borderRadius: 0,
        }}
      >
        <Box
          position="absolute"
          top={0}
          left={0}
          width="100%"
          height="100%"
          zIndex={1}
          bgcolor="rgba(0, 0, 0, 0.6)"
        />

        <CardContent>
          <Typography
            variant="h2"
            position="absolute"
            top="40%"
            left="20%"
            right="20%"
            zIndex={2}
            fontFamily="Roboto"
            letterSpacing={3}
          >
            About
          </Typography>
        </CardContent>
      </Card> */}
      <HeroImage title="About Us" imgPath="/images/static/about.jpg" />

      <Box component="div" sx={{ mx: 8, my: 5 }}>
        <Typography
          variant="h3"
          sx={{ textAlign: "left", fontFamily: "Roboto" }}
        >
          Our Story
        </Typography>
        <Typography
          variant="body2"
          sx={{ textAlign: "left", my: 3, color: "#505350" }}
        >
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ab omnis
          adipisci, ipsam earum quam qui, maxime aliquam exercitationem aut
          nostrum excepturi enim recusandae! Magnam vero distinctio neque alias
          iure totam, deserunt dolor quam non incidunt omnis repellat at
          ducimus? Quia animi inventore ab, excepturi, enim minima rerum, ut nam
          molestiae accusantium consequatur veniam tenetur ratione explicabo non
          natus beatae sapiente eligendi culpa id reiciendis officiis fuga
          facere! Accusamus ratione deleniti quaerat libero delectus nam eius
          distinctio quisquam iusto quod sequi dolore, voluptates, sint error
          nostrum. Suscipit ipsam unde doloremque consequatur. Animi quas rerum
          dignissimos recusandae soluta commodi voluptas quo veniam.
        </Typography>
        <Typography
          variant="body2"
          sx={{ textAlign: "left", my: 3, color: "#505350" }}
        >
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ab omnis
          adipisci, ipsam earum quam qui, maxime aliquam exercitationem aut
          nostrum excepturi enim recusandae! Magnam vero distinctio neque alias
          iure totam, deserunt dolor quam non incidunt omnis repellat at
          ducimus? Quia animi inventore ab, excepturi, enim minima rerum, ut nam
          molestiae accusantium consequatur veniam tenetur ratione explicabo non
          natus beatae sapiente eligendi culpa id reiciendis officiis fuga
          facere! Accusamus ratione deleniti quaerat libero delectus nam eius
          distinctio quisquam iusto quod sequi dolore, voluptates, sint error
          nostrum. Suscipit ipsam unde doloremque consequatur. Animi quas rerum
          dignissimos recusandae soluta commodi voluptas quo veniam.
        </Typography>
      </Box>

      <Box component="div" sx={{ mx: 10, mb: 8, mt: 15 }}>
        <Typography
          variant="h3"
          sx={{ textAlign: "left", fontFamily: "Roboto" }}
        >
          Our Goal
        </Typography>
        <Typography
          variant="body2"
          sx={{ textAlign: "left", my: 3, color: "#505350" }}
        >
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ab omnis
          adipisci, ipsam earum quam qui, maxime aliquam exercitationem aut
          nostrum excepturi enim recusandae! Magnam vero distinctio neque alias
          iure totam, deserunt dolor quam non incidunt omnis repellat at
          ducimus? Quia animi inventore ab, excepturi, enim minima rerum, ut nam
          molestiae accusantium consequatur veniam tenetur ratione explicabo non
          natus beatae sapiente eligendi culpa id reiciendis officiis fuga
          facere! Accusamus ratione deleniti quaerat libero delectus nam eius
          distinctio quisquam iusto quod sequi dolore, voluptates, sint error
          nostrum. Suscipit ipsam unde doloremque consequatur. Animi quas rerum
          dignissimos recusandae soluta commodi voluptas quo veniam.
        </Typography>
        <Typography
          variant="body2"
          sx={{ textAlign: "left", my: 3, color: "#505350" }}
        >
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ab omnis
          adipisci, ipsam earum quam qui, maxime aliquam exercitationem aut
          nostrum excepturi enim recusandae! Magnam vero distinctio neque alias
          iure totam, deserunt dolor quam non incidunt omnis repellat at
          ducimus? Quia animi inventore ab, excepturi, enim minima rerum, ut nam
          molestiae accusantium consequatur veniam tenetur ratione explicabo non
          natus beatae sapiente eligendi culpa id reiciendis officiis fuga
          facere! Accusamus ratione deleniti quaerat libero delectus nam eius
          distinctio quisquam iusto quod sequi dolore, voluptates, sint error
          nostrum. Suscipit ipsam unde doloremque consequatur. Animi quas rerum
          dignissimos recusandae soluta commodi voluptas quo veniam.
        </Typography>
      </Box>

      <Box component="div" sx={{ mx: 10, mb: 10, mt: 15 }}>
        <Typography
          variant="h3"
          sx={{ fontFamily: "Roboto", textAlign: "left", mb: 5 }}
        >
          About Our Team
        </Typography>
        <Grid container spacing={10}>
          <Grid item md={4} sm={6} xs={false}>
            <Card
              sx={{
                boxShadow: "0px 0px 0px 0px rgba(0,0,0,0.3)",
                "&:hover": {
                  bgcolor: "#fff",
                },
              }}
            >
              <CardActionArea>
                <CardMedia
                  component="img"
                  alt="blog"
                  height="350"
                  image="/images/authors/14.jpg"
                />
                <Box
                  component="div"
                  sx={{
                    backgroundColor: "rgba(255, 255, 255, 0.5)",
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    opacity: 0,

                    transition: "opacity 0.2s ease-in-out",
                    "&:hover": {
                      opacity: 1,
                    },
                  }}
                >
                  <Button
                    size="small"
                    sx={{ color: "#e3f6f5", my: 2 }}
                    href="#"
                  >
                    <Avatar
                      sx={{
                        bgcolor: "#2c698d",
                        "&:hover": { bgcolor: "#1565C0" },
                      }}
                    >
                      <FacebookOutlinedIcon />
                    </Avatar>
                  </Button>
                  <Button
                    size="small"
                    href="#"
                    sx={{ color: "#e3f6f5", my: 2 }}
                  >
                    <Avatar
                      sx={{
                        bgcolor: "#2c698d",
                        "&:hover": { bgcolor: "#1565C0" },
                      }}
                    >
                      <InstagramIcon />
                    </Avatar>
                  </Button>
                  <Button
                    size="small"
                    href="#"
                    sx={{ color: "#e3f6f5", my: 2 }}
                  >
                    <Avatar
                      sx={{
                        bgcolor: "#2c698d",
                        "&:hover": { bgcolor: "#1565C0" },
                      }}
                    >
                      <TwitterIcon />
                    </Avatar>
                  </Button>
                  <Button
                    size="small"
                    href="#"
                    sx={{ color: "#e3f6f5", my: 2 }}
                  >
                    <Avatar
                      sx={{
                        bgcolor: "#2c698d",
                        "&:hover": { bgcolor: "#1565C0" },
                      }}
                    >
                      <EmailIcon />
                    </Avatar>
                  </Button>
                </Box>
              </CardActionArea>
              <CardContent>
                <Typography
                  variant="h5"
                  sx={{
                    my: 2,
                    fontFamily: "Roboto",
                    fontWeight: "bolder",
                  }}
                >
                  John Doe
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  CEO
                </Typography>
              </CardContent>
            </Card>
          </Grid>

          <Grid item md={4} sm={6} xs={false}>
            <Card
              sx={{
                boxShadow: "0px 0px 0px 0px rgba(0,0,0,0.3)",
                "&:hover": {
                  bgcolor: "#fff",
                },
              }}
            >
              <CardActionArea>
                <CardMedia
                  component="img"
                  alt="blog"
                  height="350"
                  image="/images/authors/14.jpg"
                />
                <Box
                  component="div"
                  sx={{
                    backgroundColor: "rgba(255, 255, 255, 0.5)",
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    opacity: 0,
                    transition: "opacity 0.2s ease-in-out",
                    "&:hover": {
                      opacity: 1,
                    },
                  }}
                >
                  <Button
                    size="small"
                    sx={{ color: "#e3f6f5", my: 2 }}
                    href="#"
                  >
                    <Avatar
                      sx={{
                        bgcolor: "#2c698d",
                        "&:hover": { bgcolor: "#1565C0" },
                      }}
                    >
                      <FacebookOutlinedIcon />
                    </Avatar>
                  </Button>
                  <Button
                    size="small"
                    href="#"
                    sx={{ color: "#e3f6f5", my: 2 }}
                  >
                    <Avatar
                      sx={{
                        bgcolor: "#2c698d",
                        "&:hover": { bgcolor: "#1565C0" },
                      }}
                    >
                      <InstagramIcon />
                    </Avatar>
                  </Button>
                  <Button
                    size="small"
                    href="#"
                    sx={{ color: "#e3f6f5", my: 2 }}
                  >
                    <Avatar
                      sx={{
                        bgcolor: "#2c698d",
                        "&:hover": { bgcolor: "#1565C0" },
                      }}
                    >
                      <TwitterIcon />
                    </Avatar>
                  </Button>
                  <Button
                    size="small"
                    href="#"
                    sx={{ color: "#e3f6f5", my: 2 }}
                  >
                    <Avatar
                      sx={{
                        bgcolor: "#2c698d",
                        "&:hover": { bgcolor: "#1565C0" },
                      }}
                    >
                      <EmailIcon />
                    </Avatar>
                  </Button>
                </Box>
              </CardActionArea>
              <CardContent>
                <Typography
                  variant="h5"
                  sx={{
                    my: 2,
                    fontFamily: "Roboto",
                    fontWeight: "bolder",
                  }}
                >
                  John Doe
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  CEO
                </Typography>
              </CardContent>
            </Card>
          </Grid>

          <Grid item md={4} sm={6} xs={false}>
            <Card
              sx={{
                boxShadow: "0px 0px 0px 0px rgba(0,0,0,0.3)",
                "&:hover": {
                  bgcolor: "#fff",
                },
              }}
            >
              <CardActionArea>
                <CardMedia
                  component="img"
                  alt="blog"
                  height="350"
                  image="/images/authors/14.jpg"
                />
                <Box
                  component="div"
                  sx={{
                    backgroundColor: "rgba(255, 255, 255, 0.5)",
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    opacity: 0,
                    transition: "opacity 0.2s ease-in-out",
                    "&:hover": {
                      opacity: 1,
                    },
                  }}
                >
                  <Button
                    size="small"
                    sx={{ color: "#e3f6f5", my: 2 }}
                    href="#"
                  >
                    <Avatar
                      sx={{
                        bgcolor: "#2c698d",
                        "&:hover": { bgcolor: "#1565C0" },
                      }}
                    >
                      <FacebookOutlinedIcon />
                    </Avatar>
                  </Button>
                  <Button
                    size="small"
                    href="#"
                    sx={{ color: "#e3f6f5", my: 2 }}
                  >
                    <Avatar
                      sx={{
                        bgcolor: "#2c698d",
                        "&:hover": { bgcolor: "#1565C0" },
                      }}
                    >
                      <InstagramIcon />
                    </Avatar>
                  </Button>
                  <Button
                    size="small"
                    href="#"
                    sx={{ color: "#e3f6f5", my: 2 }}
                  >
                    <Avatar
                      sx={{
                        bgcolor: "#2c698d",
                        "&:hover": { bgcolor: "#1565C0" },
                      }}
                    >
                      <TwitterIcon />
                    </Avatar>
                  </Button>
                  <Button
                    size="small"
                    href="#"
                    sx={{ color: "#e3f6f5", my: 2 }}
                  >
                    <Avatar
                      sx={{
                        bgcolor: "#2c698d",
                        "&:hover": { bgcolor: "#1565C0" },
                      }}
                    >
                      <EmailIcon />
                    </Avatar>
                  </Button>
                </Box>
              </CardActionArea>
              <CardContent>
                <Typography
                  variant="h5"
                  sx={{
                    my: 2,
                    fontFamily: "Roboto",
                    fontWeight: "bolder",
                  }}
                >
                  John Doe
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  CEO
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default About;
