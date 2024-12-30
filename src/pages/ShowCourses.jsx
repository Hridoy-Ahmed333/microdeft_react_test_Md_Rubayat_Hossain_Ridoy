import { useState, useEffect } from "react";
import { fetchCoursesAPI } from "../api/api";
import ErrorOverlay from "../components/ErrorOverlay";
import Courses from "../components/Courses";
import "./addCourse.css";

function ShowCourses() {
  const [courses, setCourses] = useState([]);
  const [isAuthorized, setIsAuthorized] = useState(false);
  const [loading, setLoading] = useState(true);

  const token = localStorage.getItem("authToken") || "";

  useEffect(() => {
    const fetchCourses = async () => {
      setLoading(true);
      const { courses, isAuthorized, error } = await fetchCoursesAPI(token);
      if (error) {
        console.error("Error fetching courses:", error);
      }
      setCourses(courses.data);
      setIsAuthorized(isAuthorized);
      setLoading(false);
    };

    fetchCourses();
  }, [token]);

  return (
    <div style={{ position: "relative", minHeight: "100vh", padding: "20px" }}>
      {!isAuthorized && !loading && <ErrorOverlay />}
      {loading ? (
        <p>Loading...</p>
      ) : isAuthorized ? (
        <Courses courses={courses} />
      ) : null}
    </div>
  );
}

export default ShowCourses;
