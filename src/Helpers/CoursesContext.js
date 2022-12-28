import { createContext, useState } from 'react';
export const CoursesContext = createContext();

const CoursesContextProvider = (props) => {
    const { children } = props;
    const [courseName, setCourseName] = useState('Courses');

    return <CoursesContext.Provider value={{ courseName }}>{children}</CoursesContext.Provider>;
};

export default CoursesContextProvider;
