const API_BASE_URL = "https://react-interview.crd4lc.easypanel.host/api";

const apiRequest = async (endpoint, method, body, token = null) => {
  const headers = {
    "Content-Type": "application/json",
    Accept: "application/json",
  };

  if (token) {
    headers.Authorization = `Bearer ${token}`;
  }

  try {
    const response = await fetch(`${API_BASE_URL}${endpoint}`, {
      method,
      headers,
      body: body ? JSON.stringify(body) : null,
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message || "An error occurred");
    }

    return await response.json();
  } catch (error) {
    console.error("API Error:", error.message || error);
    return { error: error.message || "An unexpected error occurred" };
  }
};

// Login function
export const login = async (data) => {
  return await apiRequest("/login", "POST", data);
};

export const register = async (data) => {
  return await apiRequest("/register", "POST", data);
};

export const submitCourse = async (courseData, token) => {
  return await apiRequest("/course", "POST", courseData, token);
};

// Fetch courses API
export const fetchCoursesAPI = async (token) => {
  try {
    const response = await fetch(`${API_BASE_URL}/course`, {
      method: "GET",
      headers: {
        Accept: "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message || "Failed to fetch courses");
    }

    const data = await response.json();
    return {
      courses: data.courses || [],
      isAuthorized: true,
      error: null,
    };
  } catch (error) {
    console.error("Authorization Error:", error.message);
    return {
      courses: [],
      isAuthorized: false,
      error: error.message || "An unexpected error occurred",
    };
  }
};
