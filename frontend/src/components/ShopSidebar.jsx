import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Button,
  Checkbox,
  Divider,
  FormControlLabel,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Radio,
  RadioGroup,
  Rating,
  Slider,
  Typography,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { useEffect, useState } from "react";
import { formatFunction, genreFunction, makeUrl } from "../helper/shopHelper";
import { useDispatch, useSelector } from "react-redux";
import {
  getAllBookAuthors,
  getAllFormats,
  getAllGenres,
} from "../actions/bookActions";
import { useLocation, useNavigate } from "react-router-dom";

function valuetext(value) {
  return `BDT ${value}`;
}

const ShopSidebar = () => {
  const [expanded, setExpanded] = useState(false);
  const [checked, setChecked] = useState([]);
  const [selectedAuthorIndex, setSelectedAuthorIndex] = useState(null);
  const [selectedFormatIndex, setSelectedFormatIndex] = useState(null);
  const [valuePrice, setValuePrice] = useState([400, 700]);
  const [review, setReview] = useState(null);
  const [selectedPublisherIndex, setSelectedPublisherIndex] = useState(null);

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();

  const { genres: bookGenre } = useSelector((state) => state.genreList);
  const genreItem = genreFunction(bookGenre.genres);
  const { bookAuthors } = useSelector((state) => state.bookAuthorList);
  const { authors } = bookAuthors;
  const { formats: bookFormat } = useSelector((state) => state.formatList);
  const formatItem = formatFunction(bookFormat.formats);

  // Accordion expand
  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  // Category checkbox check
  const handleToggle = (value) => () => {
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    setChecked(newChecked);

    const params = new URLSearchParams(location.search);
    const genres = newChecked.join(",");
    console.log(genres);
    params.set("genre", genres);

    if (newChecked.length !== 0) {
      navigate({
        pathname: location.pathname,
        search: `?${params.toString()}`,
      });
    }

    // if (newChecked.length > 0) {
    //   if (location.search) {
    //     if (!location.search.includes("genre")) {
    //       navigate(`/shop/${location.search}&genre=${newChecked}`);
    //     } else {
    //       navigate(
    //         `/shop/${location.search.split("genre")[0]}genre=${newChecked}`
    //       );
    //     }
    //   } else {
    //     navigate(`/shop/?genre=${newChecked}`);
    //   }
    // } else {
    //   navigate(`/shop/${location.search.replace(/(\?|&)genre=[^&]+/, "")}`);
    // }
  };

  // set current author
  const handleAuthorClick = (event, index, id) => {
    setSelectedAuthorIndex(index);
    const params = new URLSearchParams(location.search);
    params.set("author", id);
    navigate({
      pathname: location.pathname,
      search: `?${params.toString()}`,
    });
    // searchParams.append('author', id)
    // if (location.search) {
    //   if (location.search.includes("author")) {
    //     navigate(`/shop/${location.search.split("author")[0]}author=${id}`);
    //   } else {
    //     navigate(`/shop/${location.search}&author=${id}`);
    //   }
    // } else {
    //   navigate(`/shop/?author=${id}`);
    // }
  };

  // set current format
  const handleFormatClick = (event, index, formatType) => {
    setSelectedFormatIndex(index);
    const params = new URLSearchParams(location.search);
    params.set("format", formatType);
    navigate({
      pathname: location.pathname,
      search: `?${params.toString()}`,
    });
    // if (location.search) {
    //   if (location.search.includes("format")) {
    //     navigate(
    //       `/shop/${location.search.split("format")[0]}format=${formatType}`
    //     );
    //   } else {
    //     navigate(`/shop/${location.search}&format=${formatType}`);
    //   }
    // } else {
    //   navigate(`/shop/?format=${formatType}`);
    // }
  };

  const handlePriceChange = (event, newValue) => {
    setValuePrice(newValue);
  };

  const handlePriceFilter = () => {
    console.log(valuePrice);
  };

  const handleReview = (event) => {
    setReview(event.target.value);
  };

  // set current publisher
  const handlePublisherClick = (event, index) => {
    setSelectedPublisherIndex(index);
  };

  useEffect(() => {
    dispatch(getAllGenres());
    dispatch(getAllBookAuthors());
    dispatch(getAllFormats());
  }, [dispatch]);

  window.addEventListener("load", (event) => {
    navigate("/shop");
  });

  return (
    <div>
      <Accordion
        expanded={expanded === "panel1"}
        onChange={handleChange("panel1")}
        sx={{ boxShadow: "none", p: 1 }}
      >
        <AccordionSummary
          expandIcon={expanded === "panel1" ? <RemoveIcon /> : <AddIcon />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
        >
          <Typography
            variant="h6"
            sx={{ width: "33%", flexShrink: 0, textAlign: "left" }}
          >
            Genres
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <List
            sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}
          >
            {Object.entries(genreItem).map(([key, value], idx) => {
              const labelId = `checkbox-list-label-${key}`;

              return (
                <ListItem key={idx} disablePadding>
                  <ListItemButton
                    role={undefined}
                    onClick={handleToggle(key)}
                    dense
                  >
                    <ListItemIcon>
                      <Checkbox
                        edge="start"
                        checked={checked.indexOf(key) !== -1}
                        tabIndex={-1}
                        disableRipple
                        inputProps={{ "aria-labelledby": labelId }}
                      />
                    </ListItemIcon>
                    <ListItemText
                      id={labelId}
                      primary={`${key}    (${value})`}
                    />
                  </ListItemButton>
                </ListItem>
              );
            })}
          </List>
        </AccordionDetails>
      </Accordion>

      <Divider />

      <Accordion
        expanded={expanded === "panel2"}
        onChange={handleChange("panel2")}
        sx={{ boxShadow: "none", p: 1 }}
      >
        <AccordionSummary
          expandIcon={expanded === "panel2" ? <RemoveIcon /> : <AddIcon />}
          aria-controls="panel2bh-content"
          id="panel2bh-header"
        >
          <Typography
            variant="h6"
            sx={{ width: "33%", flexShrink: 0, textAlign: "left" }}
          >
            Authors
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <List
            sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}
          >
            {authors &&
              authors.map(({ _id, name, totalBooks }, idx) => {
                return (
                  <ListItem key={idx} disablePadding>
                    <ListItemButton
                      selected={selectedAuthorIndex === idx}
                      onClick={(event) => handleAuthorClick(event, idx, _id)}
                    >
                      <ListItemText primary={`${name}    (${totalBooks})`} />
                    </ListItemButton>
                  </ListItem>
                );
              })}
          </List>
        </AccordionDetails>
      </Accordion>

      <Divider />

      <Accordion
        expanded={expanded === "panel3"}
        onChange={handleChange("panel3")}
        sx={{ boxShadow: "none", p: 1 }}
      >
        <AccordionSummary
          expandIcon={expanded === "panel3" ? <RemoveIcon /> : <AddIcon />}
          aria-controls="panel3bh-content"
          id="panel3bh-header"
        >
          <Typography
            variant="h6"
            sx={{ width: "33%", flexShrink: 0, textAlign: "left" }}
          >
            Format
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <List
            sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}
          >
            {formatItem &&
              Object.entries(formatItem).map(([key, value], idx) => {
                return (
                  <ListItem key={idx} disablePadding>
                    <ListItemButton
                      selected={selectedFormatIndex === idx}
                      onClick={(event) => handleFormatClick(event, idx, key)}
                    >
                      <ListItemText primary={`${key}    (${value})`} />
                    </ListItemButton>
                  </ListItem>
                );
              })}
          </List>
        </AccordionDetails>
      </Accordion>

      <Divider />

      <Accordion
        expanded={expanded === "panel4"}
        onChange={handleChange("panel4")}
        sx={{ boxShadow: "none", p: 1 }}
      >
        <AccordionSummary
          expandIcon={expanded === "panel4" ? <RemoveIcon /> : <AddIcon />}
          aria-controls="panel4bh-content"
          id="panel4bh-header"
        >
          <Typography
            variant="h6"
            sx={{ width: "70%", flexShrink: 0, textAlign: "left" }}
          >
            Filter by Price
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Box sx={{ width: "100%" }}>
            <Slider
              getAriaLabel={() => "Price range"}
              value={valuePrice}
              onChange={handlePriceChange}
              valueLabelDisplay="auto"
              getAriaValueText={valuetext}
              min={100}
              max={2000}
            />
            <Button
              variant="contained"
              onClick={handlePriceFilter}
              sx={{ bgcolor: "#2c698d", mt: 2, borderRadius: 0 }}
            >
              Filter
            </Button>
          </Box>
        </AccordionDetails>
      </Accordion>

      <Divider />

      <Accordion
        expanded={expanded === "panel5"}
        onChange={handleChange("panel5")}
        sx={{ boxShadow: "none", p: 1 }}
      >
        <AccordionSummary
          expandIcon={expanded === "panel5" ? <RemoveIcon /> : <AddIcon />}
          aria-controls="panel5bh-content"
          id="panel5bh-header"
        >
          <Typography
            variant="h6"
            sx={{ width: "50%", flexShrink: 0, textAlign: "left" }}
          >
            By Review
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <RadioGroup
            aria-labelledby="demo-controlled-radio-buttons-group"
            name="review"
            value={review}
            onChange={handleReview}
          >
            <FormControlLabel
              value="4.5"
              control={<Radio />}
              label={
                <Box
                  component="div"
                  sx={{ display: "flex", alignItems: "center" }}
                >
                  <Rating
                    name="half-rating-read"
                    defaultValue={4.5}
                    precision={0.5}
                    readOnly
                    sx={{ fontSize: "20px" }}
                  />
                  <Typography component="span" sx={{ fontSize: "15px", ml: 1 }}>
                    4.5 & up (100){" "}
                  </Typography>
                </Box>
              }
            />
            <FormControlLabel
              value="4.0"
              control={<Radio />}
              label={
                <Box
                  component="div"
                  sx={{ display: "flex", alignItems: "center" }}
                >
                  <Rating
                    name="half-rating-read"
                    defaultValue={4.0}
                    precision={0.5}
                    readOnly
                    sx={{ fontSize: "20px" }}
                  />
                  <Typography component="span" sx={{ fontSize: "15px", ml: 1 }}>
                    4.0 & up (100){" "}
                  </Typography>
                </Box>
              }
            />
            <FormControlLabel
              value="3.5"
              control={<Radio />}
              label={
                <Box
                  component="div"
                  sx={{ display: "flex", alignItems: "center" }}
                >
                  <Rating
                    name="half-rating-read"
                    defaultValue={3.5}
                    precision={0.5}
                    readOnly
                    sx={{ fontSize: "20px" }}
                  />
                  <Typography component="span" sx={{ fontSize: "15px", ml: 1 }}>
                    3.5 & up (100){" "}
                  </Typography>
                </Box>
              }
            />
            <FormControlLabel
              value="3.0"
              control={<Radio />}
              label={
                <Box
                  component="div"
                  sx={{ display: "flex", alignItems: "center" }}
                >
                  <Rating
                    name="half-rating-read"
                    defaultValue={3.0}
                    precision={0.5}
                    readOnly
                    sx={{ fontSize: "20px" }}
                  />
                  <Typography component="span" sx={{ fontSize: "15px", ml: 1 }}>
                    3.0 & up (100){" "}
                  </Typography>
                </Box>
              }
            />
            <FormControlLabel
              value="2.0"
              control={<Radio />}
              label={
                <Box
                  component="div"
                  sx={{ display: "flex", alignItems: "center" }}
                >
                  <Rating
                    name="half-rating-read"
                    defaultValue={2.0}
                    precision={0.5}
                    readOnly
                    sx={{ fontSize: "20px" }}
                  />
                  <Typography component="span" sx={{ fontSize: "15px", ml: 1 }}>
                    2.0 & up (100){" "}
                  </Typography>
                </Box>
              }
            />
          </RadioGroup>
        </AccordionDetails>
      </Accordion>

      <Divider />

      <Accordion
        expanded={expanded === "panel6"}
        onChange={handleChange("panel6")}
        sx={{ boxShadow: "none", p: 1 }}
      >
        <AccordionSummary
          expandIcon={expanded === "panel6" ? <RemoveIcon /> : <AddIcon />}
          aria-controls="panel6bh-content"
          id="panel6bh-header"
        >
          <Typography
            variant="h6"
            sx={{ width: "33%", flexShrink: 0, textAlign: "left" }}
          >
            Publishers
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <List
            sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}
          >
            {["Batighar", "Sheba", "Bloomsberry", "Chirkut"].map(
              (value, idx) => {
                return (
                  <ListItem key={idx} disablePadding>
                    <ListItemButton
                      selected={selectedPublisherIndex === idx}
                      onClick={(event) => handlePublisherClick(event, idx)}
                    >
                      <ListItemText primary={`${value}    (10)`} />
                    </ListItemButton>
                  </ListItem>
                );
              }
            )}
          </List>
        </AccordionDetails>
      </Accordion>
    </div>
  );
};

export default ShopSidebar;
