## Remarks

### FrontEnd

1. ReactJS
2. Redux & Redux Thunk
3. Tailwind Css
4. MUI

```
$ cd frontend
$ npm install
$ npm start
```

### BackEnd

1. Flask
2. sqlite

```
$ cd backend
$ python3 server/server.py
```

## To run both backend & frontend

1. Modify the run.sh script

In place of username write your system username

```
gnome-terminal --working-directory=/home/username/Remarks/backend/ -- bash run_backend.sh
gnome-terminal --working-directory=/home/username/Remarks/frontend/ -- bash run_frontend.sh
```

2. Use below command to get your username

```
whoami
```

3. After the modification save the file and run the shell script.

```
bash run.sh
```
