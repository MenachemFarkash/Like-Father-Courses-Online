import '../CSS/CoursesPreviewCard.css';
import BG from '../Images/CookingBG.jpg';
import CookingBanner from '../Images/CokingBanner.jpg';
import additionalPhoto from '../Images/additionlPhoto.jpg';

const CoursePreviewCard = () => {
    return (
        <>
            <div className="previewContainer">
                <img className="backgroundImage" src={BG}></img>
                <div className="cardContainer">
                    <img className="courseImage" src={CookingBanner} />
                    <h1 className="courseName">How To Cook Like Father</h1>
                    <p className="courseDescription">
                        Learn from the greatest of all time as they dig into their craft in a never-ending
                        search for perfection.
                    </p>
                    <div className="sellInfo">
                        <button className="startCourseButton">Start Course</button>
                        <div>
                            <button className="previewButton">Preview</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="additionalInformation">
                <div className="additionalInformation1">
                    <img className="additionalPhoto" src={additionalPhoto}></img>
                    <h2>this is some extra information about this course and its nice to have it</h2>
                </div>
                <div className="additionalInformation2">
                    <img className="additionalPhoto" src={additionalPhoto}></img>
                    <h2>this is some extra information about this course and its nice to have it</h2>
                </div>
                <div className="additionalInformation3">
                    <img className="additionalPhoto" src={additionalPhoto}></img>
                    <h2>this is some extra information about this course and its nice to have it</h2>
                </div>
            </div>
        </>
    );
};

export default CoursePreviewCard;
