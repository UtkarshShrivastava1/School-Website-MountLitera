import React, { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import { Box, Container, Grid, Paper } from "@mui/material";
import "./SchoolCalendar.css"; // Ensure custom CSS exists

const SchoolCalendar = () => {
  const [date, setDate] = useState(new Date());

  const handleDateChange = (newDate) => {
    setDate(newDate);
  };

  return (
    <Box className="school-calendar-section" py={5} bgcolor="#f5f5f5">
      <Container>
        <Grid container spacing={4}>
          {/* Calendar Section */}
          <Grid item xs={12} md={6}>
            <Paper className="calendar-paper">
              <h2>School Calendar</h2>
              <Calendar onChange={handleDateChange} value={date} />
            </Paper>
          </Grid>

          {/* Info Section */}
          <Grid item xs={12} md={6}>
            <Paper className="info-paper">
              <h3>Selected Date Information</h3>
              <p>
                <strong>Date:</strong> {date.toLocaleDateString()}
              </p>
              <p>
                <strong>Day of the Week:</strong>{" "}
                {date.toLocaleString("default", { weekday: "long" })}
              </p>

              {/* Thought of the Day */}
              <h4>Thought of the Day</h4>
              <p>
                "The only way to do great work is to love what you do." - Steve
                Jobs
              </p>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default SchoolCalendar;
