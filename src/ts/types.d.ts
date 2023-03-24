export type Div = HTMLDivElement | null;
export type Header = HTMLHeadElement | null;
export type Button = HTMLButtonElement | null;

export type ButtonNodes = NodeListOf<HTMLButtonElement>;
export type DivNodes = NodeListOf<HTMLDivElement>;

export type ProjectAndTodosObj = {
	project: { projectName: string; projectColour: string };
	todos: {
		todoName: string;
		todoDescription: string;
		todoDueDate: string;
		todoPriority: string;
	}[];
};

export type TodosArr = {
	todoName: string;
	todoDescription: string;
	todoDueDate: string;
	todoPriority: string;
}[];

export type Todos = {
	todoName: string;
	todoDescription: string;
	todoDueDate: string;
	todoPriority: string;
};
