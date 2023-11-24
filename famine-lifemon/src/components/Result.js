import React, { useEffect, useState } from 'react';
import { Paper } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';
import { db } from '../database/firebase';
import { collection, getDocs } from 'firebase/firestore';

const charitySymbol = "🔥";
const happySymbol = "😄";

const newRow = (id, numMembers, happiness, charity, total) => {
  return { id, numMembers, happiness, charity, total };
}

const renderRows = (rows) => {
  return rows.map(row => {
    return newRow(
      row.id,
      row.numMembers,
      happySymbol.repeat(row.happiness),
      charitySymbol.repeat(row.charity),
      row.total
    );
  });
}

const Result = () => {
  const [rows, setRows] = useState([]);

  useEffect(() => {
    const calcGroupTotal = async () => {
      const usersSnapshot = await getDocs(collection(db, 'users'));
      const groups = [...Array(10).keys()].map(i => {
        return newRow(i + 1, 0, 0, 0, 0);
      });
      usersSnapshot.docs.forEach(doc => {
        const data = doc.data();
        const group = data.group - 1;
        groups[group].numMembers++;
        groups[group].happiness += data.happiness;
        groups[group].charity += data.charity;
      });
      groups.forEach((group, i) => {
        groups[i].total = group.charity * 60 + group.happiness * 40;
      });
      setRows(renderRows(groups));
    }
    calcGroupTotal();
  }, []);

  return (
    <Paper elevation={6} style={{ background: 'linear-gradient(45deg, #FFE078 10%, #FFC14F 100%)' }} >
      <DataGrid
        columns={[
          { field: 'id', headerName: 'Group', flex: 2 },
          { field: 'numMembers', headerName: 'Members', flex: 2 },
          { field: 'happiness', headerName: 'Happiness', flex: 3 },
          { field: 'charity', headerName: 'Charity', flex: 3 },
          { field: 'total', headerName: 'Total', flex: 2 },
        ]}
        rows={rows}
        getRowHeight={() => 'auto'}
        sx={{
          '&.MuiDataGrid-root--densityStandard .MuiDataGrid-cell': {
            py: '15px'
          },
        }}
        hideFooter
      />
    </Paper>
  )
}

export default Result;
