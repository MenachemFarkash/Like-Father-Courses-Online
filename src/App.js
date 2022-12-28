import logo from './logo.svg';
import './App.css';
import { useContext } from 'react';
import { UserContext } from './Helpers/UserContext';
import { AdminContext } from './Helpers/AdminContext';
import { CoursesContext } from './Helpers/CoursesContext';
import CoursePreviewCard from './Components/coursePreviewCard';
import VideoTest from './Components/ViseoText';
import Header from './Components/Header';
function App() {
    const { userName } = useContext(UserContext);
    const { adminName } = useContext(AdminContext);
    const { courseName } = useContext(CoursesContext);

    return (
        <>
            <Header />
            <CoursePreviewCard />
        </>
    );
}

export default App;
