import React from "react";
import TaskItem from "./taskItem";

export default class Tasks extends React.Component {
    constructor() {
        super();
        this.state = {
            tasks: [
                {
                    id: "xjh",
                    message: "Успешно пройти React-интенсив компании Lectrum",
                    important: true
                },
                {
                    id: "xjr",
                    message: "Взять автограф у Джареда Лето",
                    important: true
                },
                {
                    id: "xrh",
                    message: "Зарегестрировать бабушку в Твиче",
                    important: false
                },
                {
                    id: "rjh",
                    message: "Записать собаку на груминг",
                    important: false
                },
                {
                    id: "xph",
                    message: "Научиться играть на барабанах",
                    important: true
                }
            ]
        };
    }

    // componentDidMount() {
    //     fetch("https://lab.lectrum.io/hw/todo/api/")
    //         .then(response => {
    //             return response.json();
    //         })
    //         .then(data => {
    //             this.setState({
    //                 tasks: data
    //             });
    //             {
    //                 console.log(data);
    //             }
    //         });
    // }

    render() {
        const { tasks } = this.state;
        console.log(tasks);
        const importantTasks = tasks.filter(task => task.important);

        const listOfTasks = importantTasks.map(task => {
            return (
                <div key={task.id}>
                    <TaskItem task={task} />
                </div>
            );
        });

        return <div>{listOfTasks}</div>;
    }
}
