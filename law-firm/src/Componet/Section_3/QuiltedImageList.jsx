import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from "@mui/material/ImageListItemBar";
import Image1 from '../../Assets/img6.png';
import Image2 from '../../Assets/img5.png';
import Image3 from '../../Assets/img4.png';
import Image4 from '../../Assets/img3.png';
import Image5 from '../../Assets/img2.png';
import Image6 from '../../Assets/img1.png';

function srcset(image, size, rows = 1, cols = 1) {
  return {
    src: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format`,
    srcSet: `${image}?w=${size * cols}&h=${
      size * rows
    }&fit=crop&auto=format&dpr=2 2x`,
  };
}

export default function QuiltedImageList() {
  return (
    <ImageList
      sx={{ height: "100%", width: "100%" }}
      variant="quilted"
      cols={3}
      rows={3}
      rowHeight={30}
      gap={"30px"}
    >
      {itemData.map((item) => (
        <ImageListItem
          key={item.img}
          cols={item.cols || 1}
          rows={item.rows || 1}
          sx={{ position: "relative" }}
        >
          <img
            {...srcset(item.img, 121, item.rows, item.cols)}
            alt={item.title}
            loading="lazy"
            style={{ borderRadius: "14px" }}
          />
          <ImageListItemBar
            position="center"
            title={item.title}
            sx={{
              position: "absolute",
              bottom: 0,
              left: "50%",
              transform: "translateX(-50%)",
              textAlign: "center",
              backgroundColor: "rgba(0, 0, 0, 0)",
              fontSize: "24px",
              fontWeight: "600",
            }}
          />
        </ImageListItem>
      ))}
    </ImageList>
  );
}

const itemData = [
  {
    img: Image1,
    title: "BUSINESS LAW",
    rows: 1,
    cols: 2,
  },
  {
    img: Image2,
    title: "Partnership",
  },
  {
    img: Image3,
    title: "REAL ESTATE LAW",
    rows: 1,
    cols: 1,
  },
  {
    img: Image4,
    title: "BUSINESS LAW",
    cols: 2,
  },
  {
    img: Image5,
    title: "LANDLORD DISPUTES",
    cols: 2,
    rows: 1,
  },
  {
    img: Image6,
    title: "ELDER ABUSE",

    rows: 1,
    cols: 1,
  },
];
