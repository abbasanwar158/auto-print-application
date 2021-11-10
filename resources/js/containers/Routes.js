import Layout from "../hoc/Layout";
import '../App.css';
import Login from "../containers/Login";
import Signup from "../containers/Signup";
import Navbar from "../containers/Navbar";
import Dashboard from "../containers/Dashboard";
import ViewAttendance from "../containers/Attendance/ViewAttendance";
import NewAttendance from "../containers/Attendance/ManageAttendance";
import AttendanceReport from "../containers/Attendance/AttendanceReport";
import UploadAttendance from "../containers/Attendance/UploadAttendance";
import EmailAttendance from "../containers/Attendance/EmailAttendance";
import EditAttendace from "../containers/Attendance/EditAttendance"
import ViewLeaves from "../containers/Leaves/ViewLeaves";
import ApplyLeaves from "../containers/Leaves/ApplyLeave";
import NewLeaves from "../containers/Leaves/NewLeave";
import LeavesReport from "../containers/Leaves/LeavesReport";
import LeavesWBS from "../containers/Leaves/LeavesWBS";
import EditLeave from "../containers/Leaves/EditLeave"
import UploadLeaves from "../containers/Leaves/UploadLeaves";
import ViewEmployees from "../containers/Employees/AllEmployees";
import ActiveEmployees from "../containers/Employees/ActiveEmployees";
import EditEmployeeStatus from "../containers/Employees/EditEmployeeStatus";
import NewEmployee from "../containers/Employees/NewEmployee";
import EditEmployee from "../containers/Employees/EditEmployee";
import UploadEmployeeData from "../containers/Employees/UploadEmployeeData";
import EmployeesReport from "../containers/Employees/EmployeesReport";
import ReviewDate from "../containers/Employees/ReviewDate";
import ReviewDateEdit from "../containers/Employees/ReviewDateEdit";
import ViewHolidays from "../containers/Holidays/ViewHolidays";
import AddHoliday from "../containers/Holidays/AddHoliday";
import EditHoliday from "../containers/Holidays/EditHoliday";
import ManageUsers from "../containers/Users/ManageUsers";
import EditUser from "../containers/Users/EditUser";
import pageNotFound from "../pageNotFound";
import RootContext from "../context/RootContext";
import ProtectedRoute from "../hoc/ProtectedRoute";
import UnProtectedRoute from "../hoc/UnProtectedRoute";
import Restpassword  from "./ResetPassword";


import { Route, Redirect, BrowserRouter, Switch } from 'react-router-dom';

function Routes() {
  return (
    <RootContext>
      <BrowserRouter>
        <Navbar />
        <Switch>
          <Route exact path="/login">
            <Login />
          </Route>
          <Route exact path="/signup">
            <Signup />
          </Route>
          <Route exact path="/reset">
            <Restpassword />
          </Route>
          <Route exact path="/dashboard">
            <Layout>
              <Dashboard />
            </Layout>
          </Route>
          <Route exact path="/attendance">
            <Layout>
              <ViewAttendance />
            </Layout>
          </Route>
          <Route exact path="/attendance/new">
            <Layout>
              <NewAttendance />
            </Layout>
          </Route>
          <Route exact path="/attendance/report">
            <Layout>
              <AttendanceReport />
            </Layout>
          </Route>
          <Route exact path="/attendance/upload">
            <Layout>
              <UploadAttendance />
            </Layout>
          </Route>
          <Route exact path="/attendance/email">
            <Layout>
              <EmailAttendance />
            </Layout>
          </Route>
          <Route exact path="/attendance/edit">
            <Layout>
              <EditAttendace />
            </Layout>
          </Route>
          <Route exact path="/leaves">
            <Layout>
              <ViewLeaves />
            </Layout>
          </Route>
          <Route exact path="/leaves/apply">
            <Layout>
              <ApplyLeaves />
            </Layout>
          </Route>
          <Route exact path="/leaves/edit">
            <Layout>
              <EditLeave />
            </Layout>
          </Route>
          <Route exact path="/leaves/new">
            <Layout>
              <NewLeaves />
            </Layout>
          </Route>
          <Route exact path="/leaves/report">
            <Layout>
              <LeavesReport />
            </Layout>
          </Route>
          <Route exact path="/leaves/schedule">
            <Layout>
              <LeavesWBS />
            </Layout>
          </Route>
          <Route exact path="/leaves/upload">
            <Layout>
              <UploadLeaves />
            </Layout>
          </Route>
          <Route exact path="/employees">
            <Layout>
              <ViewEmployees />
            </Layout>
          </Route>
          <Route exact path="/employees/active">
            <Layout>
              <ActiveEmployees />
            </Layout>
          </Route>
          <Route exact path="/employees/edit_status">
            <Layout>
              <EditEmployeeStatus />
            </Layout>
          </Route>
          <Route exact path="/employees/edit">
            <Layout>
              <EditEmployee />
            </Layout>
          </Route>
          <Route exact path="/employee/new">
            <Layout>
              <NewEmployee />
            </Layout>
          </Route>
          <Route exact path="/employees/upload">
            <Layout>
              <UploadEmployeeData />
            </Layout>
          </Route>
          <Route exact path="/employees/review_date">
            <Layout>
              <ReviewDate />
            </Layout>
          </Route>
          <Route exact path="/employees/review_date/edit">
            <Layout>
              <ReviewDateEdit />
            </Layout>
          </Route>
          <Route exact path="/employees/report">
            <Layout>
              <EmployeesReport />
            </Layout>
          </Route>
          <Route exact path="/holidays">
            <Layout>
              <ViewHolidays />
            </Layout>
          </Route>
          <Route exact path="/holiday/edit">
            <Layout>
              <EditHoliday />
            </Layout>
          </Route>
          <Route exact path="/holiday/new">
            <Layout>
              <AddHoliday />
            </Layout>
          </Route>
          <Route exact path="/users/new">
            <Layout>
              <ManageUsers />
            </Layout>
          </Route>
          <Route exact path="/user/edit">
            <Layout>
              <EditUser />
            </Layout>
          </Route>
          <Redirect from="/" exact to="/login" />
          <Route component={pageNotFound} />
        </Switch>
      </BrowserRouter >
    </RootContext>
  );
}

export default Routes;

