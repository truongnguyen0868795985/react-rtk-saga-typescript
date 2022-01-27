import {
  Box,
  Button,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  OutlinedInput,
  Select,
} from '@material-ui/core';
import { ChangeEvent, useRef } from 'react';
import { City, ListParams } from 'models';

import { Search } from '@material-ui/icons';

type Props = {
  filter: ListParams;
  cityList: City[];
  onChange: (newSearch: ListParams) => void;
  onSearchChange: (newSearch: ListParams) => void;
};

export default function StudentFilters({ filter, cityList, onChange, onSearchChange }: Props) {
  const searchRef = useRef<HTMLInputElement>();

  const handleSearchChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (!onSearchChange) return;
    const newFilter = {
      ...filter,
      _page: 1,
      name_like: e.target.value,
    };

    onSearchChange(newFilter);
  };

  const handleCityChange = (
    e: ChangeEvent<{
      name?: string | undefined;
      value: unknown;
    }>
  ) => {
    if (!onChange) return;

    const newFilter = {
      ...filter,
      _page: 1,
      city: e.target.value || undefined,
    };

    onChange(newFilter);
  };

  const handleSortChange = (
    e: ChangeEvent<{
      name?: string | undefined;
      value: unknown;
    }>
  ) => {
    if (!onChange) return;

    const value = e.target.value;
    const [_sort, _order] = (value as String).split('.');

    const newFilter = {
      ...filter,
      _page: 1,
      _sort: _sort || undefined,
      _order: (_order as 'asc' | 'desc') || undefined,
    };

    onChange(newFilter);
  };

  const handleClearFilter = () => {
    if (!onChange) return;

    const newFilter: ListParams = {
      _page: 1,
      _limit: 15,
    };

    onChange(newFilter);

    if (searchRef.current) {
      searchRef.current.value = '';
    }
  };

  return (
    <Box>
      <Grid container spacing={3}>
        <Grid item xs={12} md={3}>
          <FormControl fullWidth variant="outlined" size="small">
            <InputLabel htmlFor="searchByName">Search</InputLabel>
            <OutlinedInput
              id="searchByName"
              label="search"
              endAdornment={<Search />}
              onChange={handleSearchChange}
              inputRef={searchRef}
            />
          </FormControl>
        </Grid>

        <Grid item xs={12} md={3}>
          <FormControl variant="outlined" size="small" fullWidth>
            <InputLabel id="demo-simple-select-outlined-label">Filter by city</InputLabel>
            <Select
              labelId="demo-simple-select-outlined-label"
              id="demo-simple-select-outlined"
              label="Filter by city"
              onChange={handleCityChange}
              value={filter.city || ''}
            >
              <MenuItem value="">
                <em>All</em>
              </MenuItem>

              {cityList.map((city: City) => (
                <MenuItem key={city.code} value={city.code}>
                  {city.name}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Grid>

        <Grid item xs={12} md={3}>
          <FormControl variant="outlined" size="small" fullWidth>
            <InputLabel id="demo-simple-select-outlined-label">Sort</InputLabel>
            <Select
              labelId="demo-simple-select-outlined-label"
              id="demo-simple-select-outlined"
              label="Filter by city"
              onChange={handleSortChange}
              value={`${filter._sort}.${filter._order}`}
            >
              <MenuItem value="">
                <em>No sort</em>
              </MenuItem>

              <MenuItem value="name.asc">Name ASC</MenuItem>
              <MenuItem value="name.desc">Name DESC</MenuItem>
              <MenuItem value="mark.asc">Mark ASC</MenuItem>
              <MenuItem value="mark.desc">Mark DESC</MenuItem>
            </Select>
          </FormControl>
        </Grid>

        <Grid item xs={12} md={3}>
          <Button variant="outlined" color="primary" fullWidth onClick={handleClearFilter}>
            Clear
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
}
