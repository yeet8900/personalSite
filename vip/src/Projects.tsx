import React from "react";
import { Card, CardContent, CardMedia, Typography } from "@mui/material";
import memeImage from "./memeImage.jpg";
const Projects = () => {
  const n = 1000;
  let x = (
    <Card sx={{ maxWidth: 10000 }}>
      <CardMedia
        style={{ height: 0, paddingTop: "56%" }}
        image={memeImage}
        sx={{ height: 140 }}
      />
      <CardContent>
        This is project 1
        <Typography>
          This is a type with a <a href="https://www.google.com">link</a>
        </Typography>
      </CardContent>
    </Card>
  );
  let rows: React.JSX.Element[] = [];
  for (let a = 0; a < n; a++) {
    rows.push(x);
  }
  return (
    <div>
      <h1>These are my projects</h1>
      <div className="Projects">{rows}</div>
    </div>
  );
};
export default Projects;
