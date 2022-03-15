import React from "react";
import { Chip, Container, Stack } from "@mui/material";

interface ChipData {
  key: number;
  label: string;
  active: boolean;
}

function FilterItems() {
  const [chipData, setChipData] = React.useState<ChipData[]>([
    { key: 0, label: "Angular", active: false },
    { key: 1, label: "jQuery", active: false },
    { key: 2, label: "Polymer", active: false },
    { key: 3, label: "React", active: false },
    { key: 4, label: "Vue.js", active: false },
    { key: 5, label: "Meteor.js", active: false },
    { key: 6, label: "Svelte", active: false },
    { key: 7, label: "Apollo", active: false },
    { key: 8, label: "Graph QL", active: false },
    { key: 9, label: "Next js", active: false },
    { key: 10, label: "Nuxt", active: false },
  ]);

  const handleDelete = (key: number) => () => {
    setChipData((chips) => chips.filter((chip) => chip.key !== key));
  };

  const handleClick = (data: ChipData) => {
    setChipData((prevState) =>
      prevState
        .map((el) =>
          el.key === data.key
            ? { key: el.key, label: el.label, active: !data.active }
            : { ...el }
        )
        .sort((a, b) => {
          if (a.active !== b.active) {
            return a.active ? -1 : 1;
          }
          return 1;
        })
    );
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
              variant={data.active ? "filled" : "outlined"}
              color="primary"
              label={data.label}
              style={{ margin: "5px" }}
              onClick={() => handleClick(data)}
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
