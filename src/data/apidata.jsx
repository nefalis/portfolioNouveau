import projects from "./projectData"

const getAllProject = () => {
    return projects
};

const getOneProject = async (id) => {
    return await logements.find((logement) => logement.id === id);
}

export { getAllProject, getOneProject}