function Courses({ courses }) {
  return (
    <div>
      <h1 style={{ color: "green" }}>Authorization Successful</h1>
      <div style={{ display: "flex", flexWrap: "wrap", gap: "20px" }}>
        {courses.length > 0 ? (
          courses.map((course) => (
            <div
              key={course.id}
              style={{
                border: "1px solid #ccc",
                padding: "15px",
                borderRadius: "10px",
                width: "300px",
                boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
              }}
            >
              <h2>{course.title}</h2>
              <p>{course.description}</p>
              <p>
                <strong>Instructor:</strong> {course.instructor_name}
              </p>
              <span
                style={{
                  display: "inline-block",
                  backgroundColor: course.badge_color || "#ddd",
                  color: "white",
                  padding: "5px 10px",
                  borderRadius: "5px",
                  fontSize: "12px",
                }}
              >
                {course.badge_text}
              </span>
            </div>
          ))
        ) : (
          <p>No courses available</p>
        )}
      </div>
    </div>
  );
}

export default Courses;
