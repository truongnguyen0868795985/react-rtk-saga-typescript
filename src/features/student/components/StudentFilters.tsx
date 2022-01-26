import { Box, FormControl, Grid, InputLabel, OutlinedInput } from '@material-ui/core';
import { City, ListParams } from 'models';

import { ChangeEvent } from 'react';
import { Search } from '@material-ui/icons';

type Props = {
  filter: ListParams;
  cityList: { [key: string]: City };
  onSearchChange: (newSearch: ListParams) => void;
};

export default function StudentFilters({ filter, onSearchChange }: Props) {
  const handleSearchChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (!onSearchChange) return;
    const newFilter = {
      ...filter,
      name_like: e.target.value,
    };

    onSearchChange(newFilter);
  };
  return (
    <Box>
      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <FormControl fullWidth variant="outlined" size="small">
            <InputLabel htmlFor="searchByName">Search</InputLabel>
            <OutlinedInput
              id="searchByName"
              label="search"
              endAdornment={<Search />}
              onChange={handleSearchChange}
            />
          </FormControl>
        </Grid>
      </Grid>
    </Box>
  );
}
