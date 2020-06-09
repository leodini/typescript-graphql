# GraphQl & Sequelize project

## Getting the database set up

you will need Docker in order to install containerised MySql dev environment. After getting docker, run the following command anywhere:

```sh
docker run /
    -p 0.0.0.0:7999:3307 /
    --name gsd-db /
    -e MYSQL_ROOT_PASSWORD=password /
    -e MYSQL_USER=gsd-dev /
    -e MYSQL_PASSWORD=password
    -e MYSQL_DATABASE=gsd /
    -d mysql:5.7.20
```

thus will create a docker instance called `gsd-db`, running MySql v5.7.20, whi the root password being `password`. It also creates a database called `gsd`, create a user called `gsd-dev` (with password `password`), and assigns that user full permissions onto the `gsd` database.
