import {
  Avatar,
  Box,
  Button,
  Card,
  CardContent,
  Chip,
  Divider,
  Grid,
  Link,
  TextField,
  Typography,
} from "@mui/material";
import BlogHeader from "../components/BlogHeader";
import BlogSidebar from "../components/BlogSidebar";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ForumOutlinedIcon from "@mui/icons-material/ForumOutlined";

const BlogDetails = () => {
  const handleSubmit = () => {};

  return (
    <Box component="div">
      <BlogHeader title="Lizard" imgPath="/images/static/blog.jpg" />

      <Box component="div" sx={{ mx: 5 }}>
        <Grid container spacing={2}>
          <Grid item md={9} sm={12} xs={12}>
            <Box component="div" sx={{ mr: 5, mt: 8 }}>
              <Box
                component="div"
                sx={{
                  position: "relative",
                  marginBottom: "20px",
                  backgroundImage: 'url("/images/static/carousal/1.jpg")',
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  height: "500px",
                  color: "white",
                  borderRadius: 0,
                }}
              />

              <Typography
                variant="subtitle2"
                textAlign="left"
                color="error"
                fontWeight="bold"
              >
                Classic, Romace
              </Typography>

              <Typography
                variant="h3"
                textAlign="left"
                fontWeight="bold"
                fontFamily="Roboto"
                sx={{ my: 3, fontSize: "40px", letterSpacing: "1.5px", color: "#272643" }}
              >
                Lizard
              </Typography>

              <Divider />

              <Typography
                variant="subtitle2"
                textAlign="left"
                sx={{ my: 1, color: "#9B908A", fontWeight: "bold" }}
              >
                March 20, 2023
              </Typography>

              <Typography variant="body2" textAlign="justify" sx={{ my: 3 }}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque,
                iure assumenda modi repellendus deleniti eveniet eaque
                doloremque consectetur? Accusantium alias dolorem ut minus
                suscipit cumque, voluptatum fugiat illo maiores animi
                dignissimos neque dolore at debitis voluptas perspiciatis error?
                Impedit commodi illo, debitis ipsa explicabo atque cumque at
                similique, odio pariatur voluptates dolores et? Praesentium
                exercitationem aliquid accusantium, ratione obcaecati porro,
                quaerat fuga ipsa numquam veritatis tenetur molestias accusamus
                rerum? Iste cumque earum error voluptatem mollitia nulla sint
                veniam saepe repellat molestias, aperiam rem dolorum, dolor enim
                assumenda voluptas sequi iusto itaque, dicta nobis optio
                temporibus repellendus possimus. Velit, ipsa harum! Lorem ipsum
                dolor, sit amet consectetur adipisicing elit. Voluptatum
                reiciendis eum rerum perspiciatis id sit error alias cum ratione
                nulla neque quasi culpa, nam incidunt dolor doloribus adipisci
                perferendis officiis ex, rem, repudiandae minima! At laudantium
                magni fugit quasi repellendus, reiciendis soluta? Ea, voluptas
                odit sint repellat earum corrupti nihil harum quasi quod!
                Debitis sapiente delectus nobis distinctio eius velit sit
                praesentium iste, natus, cum fuga. Dolor sed nihil at
                exercitationem mollitia ea delectus unde provident omnis earum
                iure blanditiis, velit deserunt nisi perferendis? Necessitatibus
                hic omnis repellendus magnam eveniet sequi doloremque. Error
                sint hic aspernatur assumenda quod doloribus deleniti.
                Exercitationem quis quia in dolore laborum placeat deserunt
                sequi et, soluta quam iusto eligendi unde. Error, nostrum veniam
                eos suscipit voluptatem voluptate aliquid animi odio minus aut
                aperiam esse tempora, ullam temporibus, repellat tempore atque
                consequatur vitae deserunt hic ea! Asperiores, molestiae animi
                quia aperiam repellendus ex incidunt commodi quae tempore, quo
                eius quasi? Ducimus voluptate tenetur quae doloribus, dolores
                pariatur nihil consequatur repudiandae dolorem! Vero rerum
                pariatur perspiciatis libero laboriosam, reprehenderit, eum
                dolore ad assumenda similique unde, suscipit ipsa dignissimos
                vel molestias voluptatum voluptatibus? Dolorum, nostrum ipsa
                amet excepturi dolorem earum quae saepe! Commodi eum dolores
                aliquid totam atque.
              </Typography>

              <Box component="div" sx={{ mx: 1, mt: 6, mb: 3 }}>
                <Grid container spacing={1}>
                  <Grid item>
                    <Link sx={{ textDecoration: "none" }} href="/#">
                      <Chip
                        label="Chip Filled"
                        variant="outlined"
                        color="primary"
                      />
                    </Link>
                  </Grid>
                  <Grid item>
                    <Link sx={{ textDecoration: "none" }}>
                      <Chip
                        label="Chip Filled"
                        variant="outlined"
                        color="primary"
                      />
                    </Link>
                  </Grid>
                  <Grid item>
                    <Link sx={{ textDecoration: "none" }}>
                      <Chip
                        label="Chip Filled"
                        variant="outlined"
                        color="primary"
                      />
                    </Link>
                  </Grid>
                  <Grid item>
                    <Link sx={{ textDecoration: "none" }}>
                      <Chip
                        label="Chip Filled"
                        variant="outlined"
                        color="primary"
                      />
                    </Link>
                  </Grid>
                </Grid>
              </Box>

              <Divider />

              <Grid container spacing={3} justifyContent="space-between">
                <Grid item>
                  <Button
                    variant="body2"
                    sx={{ px: 2, py: 1.5, textTransform: "capitalize" }}
                  >
                    <FavoriteBorderIcon sx={{ mr: 1 }} /> 4 people like this
                  </Button>
                </Grid>
                <Grid item>
                  <Typography variant="body2" sx={{ py: 1.5, px: 2 }}>
                    2 Comments
                  </Typography>
                </Grid>
              </Grid>

              <Box component="div" sx={{ mb: 8 }}>
                <Typography
                  variant="h6"
                  textAlign="left"
                  sx={{ px: 2, py: 1.5, my: 3 }}
                >
                  <ForumOutlinedIcon /> Comments
                </Typography>

                <Card sx={{ my: 3, ml: 3, boxShadow: "none" }}>
                  <CardContent>
                    <Grid container spacing={2}>
                      <Grid item md={2}>
                        <Avatar
                          alt="Remy Sharp"
                          src="/images/authors/14.jpg"
                          sx={{ height: 100, width: 100 }}
                        />
                      </Grid>
                      <Grid item md={10}>
                        <Typography variant="body2" textAlign="left">
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Est impedit, laudantium distinctio id culpa quis
                          sequi iste suscipit quae cum sed velit nihil deserunt
                          quos. Aliquid tempora corporis magni magnam, dolor,
                          ipsa, blanditiis tenetur velit cum laborum quis in! Ab
                          itaque sapiente veritatis totam corporis laudantium
                          tempora, animi excepturi perferendis minima hic vitae
                          sint eaque voluptatem dicta, aliquid nam, fugit
                          quibusdam aliquam? Amet id tempore aliquid,
                          perferendis blanditiis provident ut magnam delectus
                          nostrum, modi fugit debitis itaque, expedita vitae
                          velit ducimus neque praesentium esse nulla quos
                          eveniet! Veritatis sint corporis, exercitationem
                          accusamus inventore debitis doloribus obcaecati sed ea
                          ipsum vel.
                        </Typography>
                        <Box component="div" sx={{ mt: 2, textAlign: "left" }}>
                          <Typography variant="body2" fontWeight="bold">
                            John Doe
                            <Typography
                              variant="body2"
                              component="span"
                              sx={{ ml: 5 }}
                            >
                              {" "}
                              March 13, 2023
                            </Typography>
                          </Typography>
                        </Box>
                      </Grid>
                    </Grid>
                  </CardContent>
                </Card>

                <Card sx={{ my: 3, ml: 3, boxShadow: "none" }}>
                  <CardContent>
                    <Grid container spacing={2}>
                      <Grid item md={2}>
                        <Avatar
                          alt="Remy Sharp"
                          src="/images/authors/14.jpg"
                          sx={{ height: 100, width: 100 }}
                        />
                      </Grid>
                      <Grid item md={10}>
                        <Typography variant="body2" textAlign="left">
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Est impedit, laudantium distinctio id culpa quis
                          sequi iste suscipit quae cum sed velit nihil deserunt
                          quos. Aliquid tempora corporis magni magnam, dolor,
                          ipsa, blanditiis tenetur velit cum laborum quis in! Ab
                          itaque sapiente veritatis totam corporis laudantium
                          tempora, animi excepturi perferendis minima hic vitae
                          sint eaque voluptatem dicta, aliquid nam, fugit
                          quibusdam aliquam? Amet id tempore aliquid,
                          perferendis blanditiis provident ut magnam delectus
                          nostrum, modi fugit debitis itaque, expedita vitae
                          velit ducimus neque praesentium esse nulla quos
                          eveniet! Veritatis sint corporis, exercitationem
                          accusamus inventore debitis doloribus obcaecati sed ea
                          ipsum vel.
                        </Typography>
                        <Box component="div" sx={{ mt: 2, textAlign: "left" }}>
                          <Typography variant="body2" fontWeight="bold">
                            John Doe
                            <Typography
                              variant="body2"
                              component="span"
                              sx={{ ml: 5 }}
                            >
                              {" "}
                              March 13, 2023
                            </Typography>
                          </Typography>
                        </Box>
                      </Grid>
                    </Grid>
                  </CardContent>
                </Card>
              </Box>

              <Divider />

              <Box component="div" sx={{ mt: 2 }}>
                <Typography
                  variant="h5"
                  textAlign="left"
                  sx={{ m: 2 }}
                  fontFamily="Roboto"
                >
                  Leave a Comment
                </Typography>

                <Box
                  component="form"
                  onSubmit={handleSubmit}
                  sx={{ mt: 4, mx: 2, mb: 10 }}
                >
                  <TextField
                    margin="normal"
                    required
                    fullWidth
                    multiline
                    rows={8}
                    id="message"
                    label="Message"
                    name="message"
                  />
                  <Grid container spacing={2}>
                    <Grid item md={6} sm={12} xs={12}>
                      <TextField
                        margin="normal"
                        required
                        fullWidth
                        id="name"
                        label="Name"
                        name="name"
                        size="small"
                      />
                    </Grid>
                    <Grid item md={6} sm={12} xs={12}>
                      <TextField
                        margin="normal"
                        required
                        fullWidth
                        id="email"
                        label="Email"
                        name="email"
                        size="small"
                      />
                    </Grid>
                  </Grid>
                  <TextField
                    margin="normal"
                    required
                    fullWidth
                    id="subject"
                    label="Subject"
                    name="subject"
                    size="small"
                  />

                  <Button
                    type="submit"
                    variant="contained"
                    sx={{ mt: 2, bgcolor: "#272643" }}
                    size="large"
                    fullWidth
                  >
                    Send
                  </Button>
                </Box>
              </Box>

            </Box>
          </Grid>
          <Grid item md={3} sm={9} xs={12}>
            <BlogSidebar />
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default BlogDetails;
