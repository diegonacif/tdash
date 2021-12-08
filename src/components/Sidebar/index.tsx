import { useState } from 'react';

import { LogoContent } from "../LogoContent";
import { Container } from "./styles";
import { FaSearch } from "react-icons/fa";

import TextField from '@material-ui/core/TextField';
import AdapterDateFns from '@material-ui/lab/AdapterDateFns';
import LocalizationProvider from '@material-ui/lab/LocalizationProvider';
import DatePicker from '@material-ui/lab/DatePicker';


export function Sidebar() {
  const [value, setValue] = useState<Date | null>(null);


  return (
    <Container>
      <LogoContent />
      <div className="filtersBackground">
        <div className="filtersTitle">
        <h3>Filtros</h3>
        <FaSearch />
        </div>
        <TextField
          fullWidth
          id="outlined-size-small"
          label="Cliente" size="small"
          margin="dense"
          color="success"
        />
        <TextField
          fullWidth
          id="outlined-size-small"
          label="Equipamento"
          size="small"
          margin="dense"
          color="success"
        />
        <TextField
          fullWidth
          id="outlined-size-small"
          label="Status"
          size="small"
          margin="dense"
          color="success"
        />
        <TextField
          fullWidth
          id="outlined-size-small"
          type="date"
          InputLabelProps={{ shrink: true }}
          label="Data Inicial"
          size="small"
          margin="dense"
          color="success"
        />
        <TextField
          fullWidth
          id="outlined-size-small"
          type="date"
          InputLabelProps={{ shrink: true }}
          label="Data Final"
          size="small"
          margin="dense"
          color="success"
        />

        {/* <LocalizationProvider dateAdapter={AdapterDateFns}>
          <DatePicker
            className="initialDatePickerInput"
            label="Data Inicial"
            value={value}
            onChange={(newValue) => {
              setValue(newValue);
            }}
            renderInput={(params) => <TextField {...params} />}
          />
        </LocalizationProvider> */}

      </div>
    </Container>
  )
};