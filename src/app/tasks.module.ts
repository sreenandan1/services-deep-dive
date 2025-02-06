
export type TasksStatus = 'OPEN' | 'IN_PROGRESS' | 'DONE';


export interface Task {
    id:string,
    title:string;
    description:string;
    status:TasksStatus;
}
