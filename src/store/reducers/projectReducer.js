const initState = {
  projects: [
    {
      id: "1",
      title: "help me find peach",
      content: "bla bla bla"
    },
    {
      id: "2",
      title: "collect all the stars",
      content: "bla bla bla"
    },
    {
      id: "3",
      title: "egg hunt with yosh",
      content: "bla bla bla"
    }
  ]
};

function projectReducer(state = initState, action){
  switch (action.type) {
    case "CREATE_PROJECT":
    return('created project', action.project)

  default:
  return state;
}
}
export default projectReducer;
