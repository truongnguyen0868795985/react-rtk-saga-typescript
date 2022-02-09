import { Box, Typography } from '@material-ui/core';
import { Link, useParams } from 'react-router-dom';
import React, { useEffect, useState } from 'react';

import { ChevronLeft } from '@material-ui/icons';
import { Student } from 'models';
import studentApi from 'api/studentApi';

export default function AddEdit() {
  const { studentId } = useParams<{ studentId: string }>();
  const isEdit = Boolean(studentId);

  const [student, setStudent] = useState<Student>();

  useEffect(() => {
    if (!studentId) return;

    (async () => {
      try {
        const response: Student = await studentApi.getById(studentId);
        setStudent(response);
      } catch (error) {}
    })();
  }, [studentId]);

  console.log('Found student', student);

  return (
    <Box>
      <Link to="/admin/students">
        <Typography variant="caption">
          <ChevronLeft />
          &nbsp; Back to students page
        </Typography>
      </Link>

      <Typography variant="h4">
        {isEdit ? 'Update student information' : 'Add new student'}
      </Typography>
    </Box>
  );
}
