import { useState } from "react";
import { submitCourse } from "../api/api";

function AddCourse() {
  const [token, setToken] = useState(localStorage.getItem("authToken") || "");
  const [courseData, setCourseData] = useState({
    title: "",
    description: "",
    badge_text: "",
    badge_color: "",
    instructor_name: "",
  });

  const [errorMessage, setErrorMessage] = useState("");

  const handleCourseSubmit = async (e) => {
    e.preventDefault();
    if (!token) {
      setErrorMessage("Log in to submit the course");
      return;
    }
    try {
      const data = await submitCourse(courseData, token);
      console.log("Course Submission Success:", data);
      setErrorMessage("");
    } catch (error) {
      console.error(
        "Course Submission Error:",
        error.response?.data || error.message
      );
    }
  };

  return (
    <div className="background-container">
      <div className="course-container">
        <h1 className="course-title2">Add Course</h1>
        <form className="course-form" onSubmit={handleCourseSubmit}>
          <div className="course-input-group">
            <input
              type="text"
              placeholder="Title"
              value={courseData.title}
              onChange={(e) =>
                setCourseData({ ...courseData, title: e.target.value })
              }
            />
          </div>
          <div className="course-input-group">
            <input
              type="text"
              placeholder="Description"
              value={courseData.description}
              onChange={(e) =>
                setCourseData({ ...courseData, description: e.target.value })
              }
            />
          </div>
          <div className="course-input-group">
            <input
              type="text"
              placeholder="Badge Text"
              value={courseData.badge_text}
              onChange={(e) =>
                setCourseData({ ...courseData, badge_text: e.target.value })
              }
            />
          </div>
          <div className="course-input-group">
            <input
              type="text"
              placeholder="Badge Color"
              value={courseData.badge_color}
              onChange={(e) =>
                setCourseData({ ...courseData, badge_color: e.target.value })
              }
            />
          </div>
          <div className="course-input-group">
            <input
              type="text"
              placeholder="Instructor Name"
              value={courseData.instructor_name}
              onChange={(e) =>
                setCourseData({
                  ...courseData,
                  instructor_name: e.target.value,
                })
              }
            />
          </div>
          <button type="submit" className="course-btn" disabled={!token}>
            Submit Course
          </button>
        </form>
        {!token && <p className="course-error">Log in to submit the course</p>}
      </div>
    </div>
  );
}

export default AddCourse;
