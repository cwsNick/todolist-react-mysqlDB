# To Do List Client

## Technology
React
Node.js

## Function
### Home Page
view Task
![App Home Page](./client/README/home_page.png)
### Add Task Page
Add Task
![App Add Task Page](./client/README/add_task_page.png)
### Edit Page
Edit Task
![App Edit Page](./client/README/edit_page.png)
### View Page
View Task
![App View Page](./client/README/view_page.png)


---

# To Do List Server

## Technology
Node.js
Mysql

## Get All Task
Method: GET
URL:
http://localhost:3001/api/task

```
[{"id":2,"task":"Buy product","detail":"Apple","note":"Red"},{"id":3,"task":"Do Homework ","detail":"School","note":"20 page"},{"id":4,"task":"Assignment","detail":"personal","note":"Charper 3"}]
```

## Get One Task
Method: GET

URL:
http://localhost:3001/api/task/ + task id

Example
http://localhost:3001/api/task/2


```
[{"id":2,"task":"Buy product","detail":"Apple","note":"Red"}]
```

## Add Task
Method: POST

Requests json data format
| Key    | Value       | Value Data type |
| ------ | ----------- | --------------- |
| task   | task name   | String          |
| detail | task detail | String          |
| note   | task note   | String          |

URL:
http://localhost:3001/api/task/


## Update Task
Method: PUT

Requests json data format
| Key    | Value       | Value Data type |
| ------ | ----------- | --------------- |
| task   | task name   | String          |
| detail | task detail | String          |
| note   | task note   | String          |

URL:
http://localhost:3001/api/task/

## Delete Task
Method: DELETE

URL:
http://localhost:3001/api/task/ + task id

Example
http://localhost:3001/api/task/2