import React from "react";
import { Chip, Container, Stack } from "@mui/material";

interface ChipData {
  key: number;
  label: string;
}

function FilterItems() {
  const handleClick = () => {
    console.info("You clicked the Chip.");
  };

  const [chipData, setChipData] = React.useState<readonly ChipData[]>([
    { key: 0, label: "Angular" },
    { key: 1, label: "jQuery" },
    { key: 2, label: "Polymer" },
    { key: 3, label: "React" },
    { key: 4, label: "Vue.js" },
    { key: 5, label: "Vue.js" },
    { key: 6, label: "Vue.js" },
    { key: 7, label: "Vue.js" },
    { key: 8, label: "Vue.js" },
    { key: 9, label: "Vue.js" },
    { key: 10, label: "Vue.js" },
    { key: 11, label: "Vue.js" },
    { key: 12, label: "Vue.js" },
    { key: 13, label: "Vue.js" },
    { key: 14, label: "Vue.js" },
    { key: 15, label: "Vue.js" },
    { key: 16, label: "Vue.js" },
    { key: 17, label: "Vue.js" },
    { key: 18, label: "Vue.js" },
    { key: 19, label: "Vue.js" },
    { key: 20, label: "Vue.js" },
    { key: 21, label: "Vue.js" },
    { key: 22, label: "Vue.js" },
    { key: 23, label: "Vue.js" },
    { key: 24, label: "Vue.js" },
    { key: 25, label: "Vue.js" },
    { key: 26, label: "Vue.js" },
    { key: 27, label: "Vue.js" },
    { key: 28, label: "Vue.js" },
    { key: 29, label: "Vue.js" },
  ]);

  const handleDelete = (key: number) => () => {
    setChipData((chips) => chips.filter((chip) => chip.key !== key));
  };

  return (
    <Container>
      <Stack
        direction="row"
        justifyContent="center"
        alignItems="center"
        spacing={2}
        flexWrap="wrap"
      >
        {chipData.map((data) => {
          return (
            <Chip
              key={data.key}
              color="primary"
              label={data.label}
              style={{ margin: "5px" }}
              onClick={handleClick}
              onDelete={
                data.label === "React" ? undefined : handleDelete(data.key)
              }
            />
          );
        })}
      </Stack>
    </Container>
  );
}

export default FilterItems;
