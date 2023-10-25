export const API_URL = import.meta.env.PUBLIC_API_URL

export const API_ROUTES =  {
    GET_ABOUT: `${API_URL}/about`,
    GET_ABOUT_BY_ID: `${API_URL}/about/:id`,
    GET_PROJECTS: `${API_URL}/projects`,
    LOGIN: `${API_URL}/admin/login`
}