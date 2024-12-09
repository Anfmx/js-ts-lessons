interface Task{
    id: number; 
    title: string; 
    completed: boolean; 
}



class TaskManager{
    private tasks: Task[] = []
    addTask(title:string):void{
        const id = this.tasks.length + 1;
        const newTask:Task = {id, title, completed: false};
        this.tasks.push(newTask);
        console.log(`Задача "${title}" добавлена с ID ${id}.`);
    }

    removeTask(id:number):void{
        const index = this.tasks.findIndex(task => task.id === id);
        if(index !== -1){
            const removedTask = this.tasks.splice(index,1);
            console.log(`Задача "${removedTask[0].title}" удалена`);
        } else{
            console.log(`Задача с ID ${id} не найдена`);
        }
    }
    markCompleteTask(id:number):void{
        const task = this.tasks.find(task => task.id === id);
        if(task){
            task.completed = true;
            console.log('Успешно отмечено');
        } else{
            console.log('Задача не найдена');
        }
    }
    listTasks(): void{
        if(this.tasks.length === 0){
            console.log('Список задач пуст');
            return;
        }
        console.log('Список задач: ')
        this.tasks.forEach(task => {
            const status = task.completed ? 'выполнено' : 'не выполнено';
            console.log(`${task.id}: ${task.title} [${status}]`);
        })
    }
}

const tasks = new TaskManager();
tasks.addTask('Выполнить упражнение')
tasks.listTasks();
tasks.markCompleteTask(1)
tasks.listTasks();
tasks.removeTask(0);
tasks.listTasks();
tasks.addTask('Тест')
tasks.listTasks()