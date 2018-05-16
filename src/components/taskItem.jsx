import React from "react";

export default class TaskItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isCompleted: false
        };
    }

    render() {
        const { task } = this.props;
        const { isCompleted } = this.state;
        console.log(this.props);
        return (
            <div className="task__item">
                <div className="cell">
                    <button
                        aria-label="Mark task as completed"
                        className="task__item-button"
                        type="button"
                        onClick={() => {
                            this.setState({
                                isCompleted: !this.state.isCompleted
                            });
                        }}
                    >
                        <i
                            className={
                                isCompleted
                                    ? "fas fa-check task__fa-active"
                                    : "fas fa-check task__fa"
                            }
                        />
                    </button>
                </div>
                <div className="cell">
                    <div
                        className={
                            isCompleted ? "task-active" : "task__item-title"
                        }
                    >
                        {task.message}
                    </div>
                </div>

                <div className="cell">
                    <button
                        aria-label="Edit task title"
                        className="task__item-button"
                        type="button"
                    >
                        <i className="fas fa-pencil-alt task__fa" />
                    </button>

                    <button
                        aria-label="Delete task"
                        className="task__item-button"
                        type="button"
                    >
                        <i className="fas fa-trash-alt task__fa" />
                    </button>
                </div>
            </div>
        );
    }
}
