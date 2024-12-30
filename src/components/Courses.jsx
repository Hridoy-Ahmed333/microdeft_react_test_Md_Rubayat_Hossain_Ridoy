import "./Courses.css";

function Courses({ courses }) {
  return (
    <div className="courses-container">
      <div className="courses-grid">
        {courses.length > 0 ? (
          courses.map((course) => (
            <div className="course-card" key={course.id}>
              <div className="course-image-wrapper">
                <img
                  src={course.image || "https://via.placeholder.com/300"}
                  alt={course.title}
                  className="course-image"
                />
                <span
                  style={{
                    backgroundColor: course.badge_color || "#ddd",
                  }}
                  className="course-badge"
                >
                  {course.badge_text}
                </span>
              </div>
              <div className="course-content">
                <h2 className="title">{course.title}</h2>
                <p className="course-description">{course.description}</p>
                <p className="course-instructor">
                  <strong>Instructor:</strong> {course.instructor_name}
                </p>
                <button className="course-button">View Detail</button>
              </div>
            </div>
          ))
        ) : (
          <p className="no-courses">No courses available</p>
        )}
      </div>
    </div>
  );
}

export default Courses;
