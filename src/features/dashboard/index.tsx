import React, { useEffect } from 'react';
import {
  dashboardActions,
  selectDashboardLoading,
  selectDashboardStatistics,
  selectHighestStudentList,
  selectLowestStudentList,
  selectRankingByCity,
} from './dashboardSlice';
import { useAppDispatch, useAppSelector } from 'app/hooks';

interface Props {}

export default function Dashboard({}: Props) {
  const dispatch = useAppDispatch();
  const loading = useAppSelector(selectDashboardLoading);
  const statistics = useAppSelector(selectDashboardStatistics);
  const highestStudentList = useAppSelector(selectHighestStudentList);
  const lowestStudentList = useAppSelector(selectLowestStudentList);
  const rankingByCityList = useAppSelector(selectRankingByCity);

  console.log({
    loading,
    statistics,
    highestStudentList,
    lowestStudentList,
    rankingByCityList,
  });

  useEffect(() => {
    dispatch(dashboardActions.fetchData());
  }, [dispatch]);
  return <div>Dashboard</div>;
}
